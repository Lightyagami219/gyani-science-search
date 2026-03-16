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
const aiAnswerSummary = document.getElementById("aiAnswerSummary");
const aiAnswerBullets = document.getElementById("aiAnswerBullets");
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

function titleCase(text) {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
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
  aiAnswerSummary.textContent = `${titleCase(query.trim())} appears most strongly in ${subjectsFound}. Based on the top indexed results, it is connected with ${branchNames || "multiple scientific areas"} and is commonly explained through core principles, definitions, and real-world applications.`;
  aiAnswerBullets.innerHTML = [
    topItems[0] ? `Best match: ${topItems[0].title}. ${topItems[0].summary}` : "",
    topItems[1] ? `Related angle: ${topItems[1].title}. ${topItems[1].summary}` : "",
    keyTerms.length ? `Key terms to explore next: ${keyTerms.join(", ")}.` : ""
  ].filter(Boolean).map((line) => `<div class="ai-bullet">${line}</div>`).join("");

  aiAnswerBox.classList.remove("hidden");
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
  const fallbackMatches = exactMatches.length
    ? exactMatches
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
  resultsHintEl.textContent = exactMatches.length === 0 && filtered.length > 0
      ? "Showing broader matches because no exact topic matched every word."
      : filtered.length > 120
      ? "Showing the top 120 ranked matches."
      : "Ranked by topic relevance.";

  if (!filtered.length) {
    aiAnswerBox.classList.add("hidden");
    const links = fallbackSearchLinks(query.trim() || "science");
    resultsEl.innerHTML = `
      <div class="empty-state">
        <p>No internal topic matched exactly, but you can continue with these live searches.</p>
        <div class="links-list">
          ${links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </div>
    `;
    return;
  }

  buildAiAnswer(normalizedQuery, filtered);

  const visibleItems = filtered.slice(0, 120);

  resultsEl.innerHTML = visibleItems.map((item) => `
    ${(() => {
      const mainLink = primaryLink(item);
      return `
    <article class="result-card">
      <div class="result-url">${mainLink.url}</div>
      <a class="result-link" href="${mainLink.url}" target="_blank" rel="noreferrer">
        <div class="result-top">
          <h3>${item.title}</h3>
          <span class="subject-pill">${item.subject}</span>
        </div>
      </a>
      <p class="summary">${item.summary}</p>
      <div class="meta-list">
        <span class="meta-chip">${item.level}</span>
        <span class="meta-chip">${item.branch || item.subject}</span>
        ${item.keywords.map((keyword) => `<span class="meta-chip">${keyword}</span>`).join("")}
      </div>
      <div class="links-list">
        ${item.sourceLinks.slice(0, 7).map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
      </div>
    </article>
  `;
    })()}
  `).join("");
}

function syncInputs(value) {
  homeSearchInput.value = value;
  resultsSearchInput.value = value;
}

function showHome() {
  homeView.classList.remove("hidden");
  resultsView.classList.add("hidden");
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
