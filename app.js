const homeView = document.getElementById("homeView");
const resultsView = document.getElementById("resultsView");
const homeSearchInput = document.getElementById("homeSearchInput");
const resultsSearchInput = document.getElementById("resultsSearchInput");
const homeSearchButton = document.getElementById("homeSearchButton");
const resultsSearchButton = document.getElementById("resultsSearchButton");
const clearButton = document.getElementById("clearButton");
const backToHomeButton = document.getElementById("backToHomeButton");
const curiousButton = document.getElementById("curiousButton");
const homeButton = document.getElementById("homeButton");
const tagFilters = document.getElementById("tagFilters");
const resultsFilters = document.getElementById("resultsFilters");
const aiAnswerBox = document.getElementById("aiAnswerBox");
const aiAnswerTitle = document.getElementById("aiAnswerTitle");
const aiAnswerSource = document.getElementById("aiAnswerSource");
const aiAnswerSummary = document.getElementById("aiAnswerSummary");
const aiAnswerBullets = document.getElementById("aiAnswerBullets");
const liveKnowledgeLinks = document.getElementById("liveKnowledgeLinks");
const searchTabs = document.getElementById("searchTabs");
const searchInsights = document.getElementById("searchInsights");
const didYouMeanEl = document.getElementById("didYouMean");
const categoryChipsEl = document.getElementById("categoryChips");
const imageSection = document.getElementById("imageSection");
const imageResults = document.getElementById("imageResults");
const imageHint = document.getElementById("imageHint");
const videoSection = document.getElementById("videoSection");
const videoResults = document.getElementById("videoResults");
const videoHint = document.getElementById("videoHint");
const researchSection = document.getElementById("researchSection");
const researchResults = document.getElementById("researchResults");
const researchHint = document.getElementById("researchHint");
const newsSection = document.getElementById("newsSection");
const newsResults = document.getElementById("newsResults");
const newsHint = document.getElementById("newsHint");
const allResultsHead = document.getElementById("allResultsHead");
const resultsEl = document.getElementById("results");
const resultsCountEl = document.getElementById("resultsCount");
const resultsTitleEl = document.getElementById("resultsTitle");
const resultsHintEl = document.getElementById("resultsHint");
const statsEl = document.getElementById("stats");
const resultsStatsEl = document.getElementById("resultsStats");
const featuredTopicsEl = document.getElementById("featuredTopics");

const subjects = ["All", ...new Set(SCIENCE_DATA.map((item) => item.subject))];
let activeSubject = "All";
let query = "";
let liveKnowledgeRequest = 0;
let liveImageRequest = 0;
let activeTab = "all";

function levenshtein(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) {
    dp[i][0] = i;
  }
  for (let j = 0; j < cols; j += 1) {
    dp[0][j] = j;
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

function titleCase(text) {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

function classifyItem(item) {
  const title = item.title.toLowerCase();
  const text = [item.title, item.summary, ...(item.keywords || [])].join(" ").toLowerCase();

  if (/(nasa|esa|isro|organization|administration|agency|spacex)/.test(text)) {
    return "Agency";
  }
  if (/(mission|telescope|station|chandrayaan|hubble|jwst|mars exploration)/.test(text)) {
    return "Mission";
  }
  if (/(law|effect|equilibrium|replication|photosynthesis|thermodynamics|calculus|algorithm)/.test(text)) {
    return "Core Topic";
  }
  if (/(darwin|einstein|newton)/.test(title)) {
    return "Scientist";
  }
  return "Topic";
}

function suggestQuery(normalizedQuery) {
  const candidates = SCIENCE_DATA.flatMap((item) => [item.title, ...item.keywords]);
  let best = null;

  candidates.forEach((candidate) => {
    const current = candidate.toLowerCase();
    const distance = levenshtein(normalizedQuery, current);
    const lengthGap = Math.abs(current.length - normalizedQuery.length);
    if (lengthGap > 6) {
      return;
    }
    if (!best || distance < best.distance) {
      best = { value: candidate, distance };
    }
  });

  if (!best) {
    return "";
  }

  const threshold = Math.max(2, Math.floor(normalizedQuery.length * 0.3));
  return best.distance <= threshold ? best.value : "";
}

function renderFilters() {
  tagFilters.innerHTML = "";

  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = subject;
    button.className = `tag-button${activeSubject === subject ? " active" : ""}`;
    button.addEventListener("click", () => {
      activeSubject = subject;
      renderFilters();
      renderResults();
    });
    tagFilters.appendChild(button);
  });
}

function renderResultsFilters() {
  resultsFilters.innerHTML = "";

  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = subject;
    button.className = `filter-button${activeSubject === subject ? " active" : ""}`;
    button.addEventListener("click", () => {
      activeSubject = subject;
      renderFilters();
      renderResultsFilters();
      renderResults();
    });
    resultsFilters.appendChild(button);
  });
}

function renderStats() {
  const totalSubjects = subjects.length - 1;
  const advancedTopics = SCIENCE_DATA.filter((item) => item.level === "Advanced").length;
  const foundationalTopics = SCIENCE_DATA.filter((item) => item.level === "Foundational").length;

  statsEl.innerHTML = `
    <div class="stat-row">
      <strong>${SCIENCE_DATA.length} Topics</strong>
      <span>Large searchable science index with generated topic coverage and fast matching.</span>
    </div>
    <div class="stat-row">
      <strong>${totalSubjects} Subjects</strong>
      <span>Physics, chemistry, biology, astronomy, math, earth science, and technology.</span>
    </div>
    <div class="stat-row">
      <strong>${foundationalTopics} Foundational</strong>
      <span>Core concepts for quick revision and beginner discovery.</span>
    </div>
    <div class="stat-row">
      <strong>${advancedTopics} Advanced</strong>
      <span>Higher-level topics for deeper learning pathways.</span>
    </div>
  `;

  resultsStatsEl.innerHTML = statsEl.innerHTML;
}

function renderFeaturedTopics() {
  const featured = [
    "Quantum Mechanics",
    "Genetics",
    "Black Holes",
    "Climate Science",
    "Artificial Intelligence"
  ];

  featuredTopicsEl.innerHTML = "";
  featured.forEach((name) => {
    const item = SCIENCE_DATA.find((entry) => entry.title === name);
    if (!item) {
      return;
    }

    const card = document.createElement("article");
    card.className = "featured-card";
    card.innerHTML = `
      <strong>${item.title}</strong>
      <span>${item.summary}</span>
    `;
    card.addEventListener("click", () => {
      startSearch(item.title);
    });
    featuredTopicsEl.appendChild(card);
  });
}

function matchesQuery(item, normalizedQuery) {
  if (!normalizedQuery) {
    return true;
  }

  const haystack = [
    item.title,
    item.subject,
    item.branch || "",
    item.level,
    item.summary,
    ...item.keywords,
    ...(item.sourceLinks || []).map((link) => `${link.label} ${link.url}`)
  ].join(" ").toLowerCase();

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  return tokens.every((token) => haystack.includes(token));
}

function partialMatchesQuery(item, normalizedQuery) {
  if (!normalizedQuery) {
    return true;
  }

  const haystack = [
    item.title,
    item.subject,
    item.branch || "",
    item.level,
    item.summary,
    ...item.keywords,
    ...(item.sourceLinks || []).map((link) => `${link.label} ${link.url}`)
  ].join(" ").toLowerCase();

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  return tokens.some((token) => haystack.includes(token));
}

function relatedMatchesQuery(item, normalizedQuery, tokens) {
  if (!normalizedQuery) {
    return false;
  }

  const haystack = [
    item.title,
    item.subject,
    item.branch || "",
    item.level,
    item.summary,
    ...item.keywords
  ].join(" ").toLowerCase();

  const hitCount = tokens.filter((token) => haystack.includes(token)).length;
  return hitCount >= Math.max(1, Math.ceil(tokens.length / 2));
}

function neighboringTopicMatches(item, exactMatches) {
  if (!exactMatches.length) {
    return false;
  }

  return exactMatches.some((match) => {
    const sameSubject = item.subject === match.subject;
    const sameBranch = (item.branch || "") === (match.branch || "");
    const keywordOverlap = item.keywords.some((keyword) => match.keywords.includes(keyword));
    return sameSubject && (sameBranch || keywordOverlap);
  });
}

function scoreItem(item, tokens) {
  if (!tokens.length) {
    return 1;
  }

  const title = item.title.toLowerCase();
  const subject = item.subject.toLowerCase();
  const branch = (item.branch || "").toLowerCase();
  const summary = item.summary.toLowerCase();
  const keywords = item.keywords.join(" ").toLowerCase();
  const links = (item.sourceLinks || []).map((link) => `${link.label} ${link.url}`).join(" ").toLowerCase();

  let score = 0;

  tokens.forEach((token) => {
    if (title === token) {
      score += 200;
    }
    if (title.includes(token)) {
      score += 80;
    }
    if (subject.includes(token)) {
      score += 60;
    }
    if (branch.includes(token)) {
      score += 45;
    }
    if (keywords.includes(token)) {
      score += 30;
    }
    if (links.includes(token)) {
      score += 35;
    }
    if (summary.includes(token)) {
      score += 15;
    }
  });

  if (activeSubject !== "All" && item.subject === activeSubject) {
    score += 20;
  }

  if (item.level === "Foundational") {
    score += 3;
  }

  return score;
}

function primaryLink(item) {
  const preferred = item.sourceLinks.find((link) => !/wikipedia/i.test(link.label));
  return preferred || item.sourceLinks[0] || { label: "Search Result", url: "#" };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderResultCard(item) {
  const mainLink = primaryLink(item);
  const safeTitle = escapeHtml(item.title);
  const safeSummary = escapeHtml(item.summary);
  const safeUrl = escapeHtml(mainLink.url);
  const safeSubject = escapeHtml(item.subject);
  const safeBranch = escapeHtml(item.branch || item.subject);
  const safeLevel = escapeHtml(item.level);
  const safeCategory = escapeHtml(classifyItem(item));
  const keywordChips = item.keywords
    .slice(0, 8)
    .map((keyword) => `<span class="meta-chip">${escapeHtml(keyword)}</span>`)
    .join("");
  const sourceLinks = item.sourceLinks
    .slice(0, 7)
    .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
    .join("");

  return `
    <article class="result-card">
      <div class="result-url">${safeUrl}</div>
      <a class="result-link" href="${safeUrl}" target="_blank" rel="noreferrer">
        <div class="result-top">
          <h3>${safeTitle}</h3>
          <span class="subject-pill">${safeSubject}</span>
        </div>
      </a>
      <p class="summary">${safeSummary}</p>
      <div class="meta-list">
        <span class="meta-chip category">${safeCategory}</span>
        <span class="meta-chip">${safeLevel}</span>
        <span class="meta-chip">${safeBranch}</span>
        ${keywordChips}
      </div>
      <div class="links-list">
        ${sourceLinks}
      </div>
    </article>
  `;
}

function buildAiAnswer(normalizedQuery, filtered) {
  if (!normalizedQuery || !filtered.length) {
    aiAnswerBox.classList.add("hidden");
    return;
  }

  const topItems = filtered.slice(0, 3);
  const subjectsFound = [...new Set(topItems.map((item) => item.subject))].join(", ");
  const branchNames = [...new Set(topItems.map((item) => item.branch).filter(Boolean))].slice(0, 3).join(", ");
  const keyTerms = [...new Set(topItems.flatMap((item) => item.keywords))].slice(0, 6);

  aiAnswerTitle.textContent = `AI Overview: ${titleCase(query.trim())}`;
  aiAnswerSource.textContent = "Source: GYANI indexed knowledge";
  aiAnswerSummary.textContent = `${titleCase(query.trim())} appears most strongly in ${subjectsFound}. Based on the top indexed results, it is connected with ${branchNames || "multiple scientific areas"} and is commonly explained through core principles, definitions, and real-world applications.`;
  aiAnswerBullets.innerHTML = [
    topItems[0] ? `Best match: ${topItems[0].title}. ${topItems[0].summary}` : "",
    topItems[1] ? `Related angle: ${topItems[1].title}. ${topItems[1].summary}` : "",
    keyTerms.length ? `Key terms to explore next: ${keyTerms.join(", ")}.` : ""
  ].filter(Boolean).map((line) => `<div class="ai-bullet">${line}</div>`).join("");
  liveKnowledgeLinks.innerHTML = "";

  aiAnswerBox.classList.remove("hidden");
}

function setLiveKnowledgeLoading(searchTerm) {
  aiAnswerTitle.textContent = `AI Overview: ${titleCase(searchTerm)}`;
  aiAnswerSource.textContent = "Source: Live knowledge lookup in progress";
  aiAnswerSummary.textContent = "Checking live science sources for fresher information related to your search.";
  aiAnswerBullets.innerHTML = '<div class="ai-bullet">Fetching updated explanations and research links.</div>';
  liveKnowledgeLinks.innerHTML = "";
  aiAnswerBox.classList.remove("hidden");
}

async function fetchWikipediaKnowledge(searchTerm) {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&utf8=&format=json&origin=*`;
  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error("Wikipedia search failed");
  }

  const payload = await response.json();
  const first = payload?.query?.search?.[0];
  if (!first?.title) {
    return null;
  }

  const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(first.title)}`;
  const summaryResponse = await fetch(summaryUrl);
  if (!summaryResponse.ok) {
    throw new Error("Wikipedia summary failed");
  }

  const summaryPayload = await summaryResponse.json();
  return {
    title: summaryPayload.title || first.title,
    summary: summaryPayload.extract || first.snippet || "",
    url: summaryPayload.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(first.title.replace(/\s+/g, "_"))}`
  };
}

async function fetchCrossrefKnowledge(searchTerm) {
  const url = `https://api.crossref.org/works?rows=3&query.title=${encodeURIComponent(searchTerm)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Crossref failed");
  }

  const payload = await response.json();
  const items = payload?.message?.items || [];
  return items.slice(0, 3).map((item) => ({
    label: item.title?.[0] || "Research paper",
    url: item.URL || "#"
  })).filter((item) => item.url && item.url !== "#");
}

async function refreshLiveKnowledge(searchTerm) {
  const requestId = ++liveKnowledgeRequest;
  const trimmed = searchTerm.trim();
  if (!trimmed) {
    return;
  }

  setLiveKnowledgeLoading(trimmed);

  try {
    const [wiki, papers] = await Promise.allSettled([
      fetchWikipediaKnowledge(trimmed),
      fetchCrossrefKnowledge(trimmed)
    ]);

    if (requestId !== liveKnowledgeRequest) {
      return;
    }

    const wikiValue = wiki.status === "fulfilled" ? wiki.value : null;
    const paperLinks = papers.status === "fulfilled" ? papers.value : [];

    if (wikiValue) {
      aiAnswerTitle.textContent = `Live Answer: ${wikiValue.title}`;
      aiAnswerSource.textContent = "Source: Live Wikipedia summary + research links";
      aiAnswerSummary.textContent = wikiValue.summary;
      aiAnswerBullets.innerHTML = `
        <div class="ai-bullet">Fresh topic page found for your query. This answer updates from external sources at search time.</div>
        <div class="ai-bullet">Use the links below to continue into reference pages and research materials.</div>
      `;

      const links = [
        { label: "Wikipedia Page", url: wikiValue.url },
        ...paperLinks
      ];

      liveKnowledgeLinks.innerHTML = links
        .slice(0, 5)
        .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("");
      return;
    }

    if (paperLinks.length) {
      aiAnswerSource.textContent = "Source: Live research link lookup";
      aiAnswerSummary.textContent = "No live encyclopedia summary was found, but research links were found for this query.";
      aiAnswerBullets.innerHTML = '<div class="ai-bullet">These research results were fetched live when you searched.</div>';
      liveKnowledgeLinks.innerHTML = paperLinks
        .slice(0, 5)
        .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("");
    }
  } catch (error) {
    if (requestId !== liveKnowledgeRequest) {
      return;
    }
    if (!liveKnowledgeLinks.innerHTML) {
      aiAnswerSource.textContent = "Source: GYANI indexed knowledge";
    }
  }
}

function renderInsights(normalizedQuery, filtered, exactMatches) {
  if (!normalizedQuery) {
    searchInsights.classList.add("hidden");
    return;
  }

  const suggestion = exactMatches.length === 0 ? suggestQuery(normalizedQuery) : "";
  if (suggestion && suggestion.toLowerCase() !== normalizedQuery) {
    didYouMeanEl.innerHTML = `Did you mean <button type="button" id="didYouMeanButton">${suggestion}</button>?`;
    document.getElementById("didYouMeanButton").addEventListener("click", () => {
      startSearch(suggestion);
    });
  } else {
    didYouMeanEl.textContent = "";
  }

  const categories = [...new Set(filtered.slice(0, 12).map((item) => classifyItem(item)))];
  categoryChipsEl.innerHTML = categories.map((category) => `<span class="category-chip">${category}</span>`).join("");
  searchInsights.classList.remove("hidden");
}

function fallbackSearchLinks(searchTerm) {
  const encoded = encodeURIComponent(searchTerm);
  return [
    { label: "Google Scholar", url: `https://scholar.google.com/scholar?q=${encoded}` },
    { label: "NASA", url: `https://www.nasa.gov/search/?q=${encoded}` },
    { label: "Wikipedia", url: `https://en.wikipedia.org/wiki/Special:Search?search=${encoded}` },
    { label: "Britannica", url: `https://www.britannica.com/search?query=${encoded}` },
    { label: "YouTube Learning", url: `https://www.youtube.com/results?search_query=${encoded}` }
  ];
}

function setActiveTab(tabName) {
  activeTab = tabName;
  searchTabs.querySelectorAll(".search-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
  const showAll = tabName === "all";
  const showImages = tabName === "images";
  const showVideos = tabName === "videos";
  const showResearch = tabName === "research";
  const showNews = tabName === "news";

  aiAnswerBox.classList.toggle("hidden", !showAll);
  searchInsights.classList.toggle("hidden", !showAll);
  allResultsHead.classList.toggle("hidden", !showAll);
  resultsEl.classList.toggle("hidden", !showAll);
  imageSection.classList.toggle("hidden", !showImages);
  videoSection.classList.toggle("hidden", !showVideos);
  researchSection.classList.toggle("hidden", !showResearch);
  newsSection.classList.toggle("hidden", !showNews);
}

function hideImages() {
  imageSection.classList.add("hidden");
  imageResults.innerHTML = "";
  imageHint.textContent = "";
}

function hideExtraSections() {
  hideImages();
  videoSection.classList.add("hidden");
  researchSection.classList.add("hidden");
  newsSection.classList.add("hidden");
  videoResults.innerHTML = "";
  researchResults.innerHTML = "";
  newsResults.innerHTML = "";
  videoHint.textContent = "";
  researchHint.textContent = "";
  newsHint.textContent = "";
}

async function fetchWikipediaImages(searchTerm) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchTerm)}&gsrlimit=8&prop=pageimages|info&piprop=thumbnail&pithumbsize=480&inprop=url&format=json&origin=*`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Image lookup failed");
  }

  const payload = await response.json();
  const pages = Object.values(payload?.query?.pages || {});
  return pages
    .filter((page) => page.thumbnail?.source)
    .map((page) => ({
      title: page.title,
      image: page.thumbnail.source,
      url: page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/\s+/g, "_"))}`
    }));
}

async function refreshImages(searchTerm) {
  const requestId = ++liveImageRequest;
  const trimmed = searchTerm.trim();
  if (!trimmed) {
    hideImages();
    return;
  }

  imageSection.classList.remove("hidden");
  imageHint.textContent = "Loading image results...";
  imageResults.innerHTML = "";

  try {
    const images = await fetchWikipediaImages(trimmed);
    if (requestId !== liveImageRequest) {
      return;
    }

    if (!images.length) {
      imageHint.textContent = "No image thumbnails were found for this search.";
      imageResults.innerHTML = "";
      return;
    }

    imageHint.textContent = "Live image thumbnails related to your search.";
    imageResults.innerHTML = images.map((item) => `
      <a class="image-card" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">
        <div class="image-card-body">
          <div class="image-card-title">${escapeHtml(item.title)}</div>
        </div>
      </a>
    `).join("");
  } catch (error) {
    if (requestId !== liveImageRequest) {
      return;
    }
    imageHint.textContent = "Image results are unavailable right now.";
    imageResults.innerHTML = "";
  }
}

function buildSimpleLinkCard(title, url, summary, badge = "") {
  return `
    <article class="result-card">
      <div class="result-url">${escapeHtml(url)}</div>
      <a class="result-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
        <div class="result-top">
          <h3>${escapeHtml(title)}</h3>
          ${badge ? `<span class="subject-pill">${escapeHtml(badge)}</span>` : ""}
        </div>
      </a>
      <p class="summary">${escapeHtml(summary)}</p>
    </article>
  `;
}

function refreshVideos(searchTerm) {
  const trimmed = searchTerm.trim();
  if (!trimmed) {
    videoResults.innerHTML = "";
    return;
  }
  const links = [
    {
      title: `${trimmed} on YouTube`,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(trimmed)}`,
      summary: `Video search results and explainers for ${trimmed}.`,
      badge: "YouTube"
    },
    {
      title: `${trimmed} on Khan Academy`,
      url: `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(trimmed)}`,
      summary: `Educational video and lesson matches for ${trimmed}.`,
      badge: "Learning"
    }
  ];
  videoHint.textContent = "Video-focused learning links.";
  videoResults.innerHTML = links.map((item) => buildSimpleLinkCard(item.title, item.url, item.summary, item.badge)).join("");
}

async function refreshResearch(searchTerm) {
  const trimmed = searchTerm.trim();
  if (!trimmed) {
    researchResults.innerHTML = "";
    return;
  }
  researchHint.textContent = "Live research sources for this topic.";
  researchResults.innerHTML = buildSimpleLinkCard(
    `${trimmed} on Google Scholar`,
    `https://scholar.google.com/scholar?q=${encodeURIComponent(trimmed)}`,
    `Scholarly articles, citations, and academic references for ${trimmed}.`,
    "Scholar"
  );
  try {
    const papers = await fetchCrossrefKnowledge(trimmed);
    if (!papers.length) {
      return;
    }
    researchResults.innerHTML += papers
      .slice(0, 5)
      .map((paper) => buildSimpleLinkCard(paper.label, paper.url, `Research paper result for ${trimmed}.`, "Paper"))
      .join("");
  } catch (error) {
    researchHint.textContent = "Research links are limited right now.";
  }
}

function refreshNews(searchTerm) {
  const trimmed = searchTerm.trim();
  if (!trimmed) {
    newsResults.innerHTML = "";
    return;
  }
  const links = [
    {
      title: `${trimmed} on Google News`,
      url: `https://news.google.com/search?q=${encodeURIComponent(trimmed)}`,
      summary: `Recent news coverage and science reporting for ${trimmed}.`,
      badge: "Google News"
    },
    {
      title: `${trimmed} on Bing News`,
      url: `https://www.bing.com/news/search?q=${encodeURIComponent(trimmed)}`,
      summary: `Alternative live news search for ${trimmed}.`,
      badge: "News"
    }
  ];
  newsHint.textContent = "Live news search links.";
  newsResults.innerHTML = links.map((item) => buildSimpleLinkCard(item.title, item.url, item.summary, item.badge)).join("");
}

function renderResults() {
  const normalizedQuery = query.trim().toLowerCase();
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const exactMatches = SCIENCE_DATA.filter((item) => {
    const subjectMatch = activeSubject === "All" || item.subject === activeSubject;
    return subjectMatch && matchesQuery(item, normalizedQuery);
  }).map((item) => ({
    ...item,
    score: scoreItem(item, tokens)
  })).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  const relatedMatches = exactMatches.length
    ? SCIENCE_DATA.filter((item) => {
      const subjectMatch = activeSubject === "All" || item.subject === activeSubject;
      const alreadyIncluded = exactMatches.some((match) => match.title === item.title);
      return subjectMatch && !alreadyIncluded && (
        relatedMatchesQuery(item, normalizedQuery, tokens) ||
        neighboringTopicMatches(item, exactMatches)
      );
    }).map((item) => ({
      ...item,
      score: scoreItem(item, tokens) + 25
    })).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    : [];
  const fallbackMatches = exactMatches.length
    ? [...exactMatches, ...relatedMatches]
    : SCIENCE_DATA.filter((item) => {
      const subjectMatch = activeSubject === "All" || item.subject === activeSubject;
      return subjectMatch && partialMatchesQuery(item, normalizedQuery);
    }).map((item) => ({
      ...item,
      score: scoreItem(item, tokens)
    })).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  const filtered = fallbackMatches;

  resultsTitleEl.textContent = normalizedQuery
    ? `Search: ${titleCase(query.trim())}`
    : activeSubject === "All"
      ? "All Science Results"
      : `${activeSubject} Topics`;

  resultsCountEl.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
  resultsHintEl.textContent = exactMatches.length > 0 && relatedMatches.length > 0
      ? "Showing exact matches plus closely related topics."
      : exactMatches.length === 0 && filtered.length > 0
      ? "Showing broader matches because no exact topic matched every word."
      : filtered.length > 120
      ? "Showing the top 120 ranked matches."
      : "Ranked by topic relevance.";

  if (!filtered.length) {
    aiAnswerBox.classList.add("hidden");
    searchInsights.classList.remove("hidden");
    const suggestion = suggestQuery(normalizedQuery);
    const links = fallbackSearchLinks(query.trim() || "science");
    refreshImages(query);
    resultsEl.innerHTML = `
      <div class="empty-state">
        <p>No internal topic matched exactly, but you can continue with these live searches.</p>
        <div class="links-list">
          ${links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </div>
    `;
    didYouMeanEl.innerHTML = suggestion && suggestion.toLowerCase() !== normalizedQuery
      ? `Did you mean <button type="button" id="didYouMeanButton">${suggestion}</button>?`
      : "";
    if (didYouMeanEl.querySelector("#didYouMeanButton")) {
      didYouMeanEl.querySelector("#didYouMeanButton").addEventListener("click", () => startSearch(suggestion));
    }
    categoryChipsEl.innerHTML = "";
    return;
  }

  buildAiAnswer(normalizedQuery, filtered);
  renderInsights(normalizedQuery, filtered, exactMatches);
  refreshLiveKnowledge(query);
  refreshImages(query);
  refreshVideos(query);
  refreshResearch(query);
  refreshNews(query);

  const visibleItems = filtered.slice(0, 120);
  resultsEl.innerHTML = visibleItems.map(renderResultCard).join("");
  setActiveTab(activeTab);
}

function syncInputs(value) {
  homeSearchInput.value = value;
  resultsSearchInput.value = value;
}

function showHome() {
  homeView.classList.remove("hidden");
  resultsView.classList.add("hidden");
  searchInsights.classList.add("hidden");
  hideExtraSections();
}

function showResults() {
  homeView.classList.add("hidden");
  resultsView.classList.remove("hidden");
}

function startSearch(nextQuery) {
  query = nextQuery.trim();
  syncInputs(query);
  showResults();
  renderResultsFilters();
  renderResults();
}

searchTabs.querySelectorAll(".search-tab").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tab);
  });
});

homeSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startSearch(homeSearchInput.value);
  }
});

resultsSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startSearch(resultsSearchInput.value);
  }
});

homeSearchButton.addEventListener("click", () => {
  startSearch(homeSearchInput.value);
});

resultsSearchButton.addEventListener("click", () => {
  startSearch(resultsSearchInput.value);
});

clearButton.addEventListener("click", () => {
  query = "";
  activeSubject = "All";
  syncInputs("");
  renderFilters();
  renderResultsFilters();
  aiAnswerBox.classList.add("hidden");
  showHome();
});

curiousButton.addEventListener("click", () => {
  const topic = SCIENCE_DATA[Math.floor(Math.random() * SCIENCE_DATA.length)];
  startSearch(topic.title);
});

homeButton.addEventListener("click", () => {
  aiAnswerBox.classList.add("hidden");
  showHome();
});

backToHomeButton.addEventListener("click", () => {
  aiAnswerBox.classList.add("hidden");
  showHome();
});

renderFilters();
renderResultsFilters();
renderStats();
renderFeaturedTopics();
showHome();
setActiveTab("all");
