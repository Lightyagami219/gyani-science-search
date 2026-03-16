const SCIENCE_BASE_DATA = [
  {
    title: "Newton's Laws of Motion",
    subject: "Physics",
    branch: "Mechanics",
    level: "Foundational",
    summary: "Three laws describing inertia, force, acceleration, and action-reaction in classical mechanics.",
    keywords: ["force", "motion", "mechanics", "inertia", "acceleration"]
  },
  {
    title: "Thermodynamics",
    subject: "Physics",
    branch: "Thermal Physics",
    level: "Core",
    summary: "Study of heat, work, energy transfer, entropy, and the laws governing physical systems.",
    keywords: ["heat", "entropy", "energy", "temperature", "work"]
  },
  {
    title: "Electromagnetism",
    subject: "Physics",
    branch: "Fields",
    level: "Core",
    summary: "Explains electric charges, magnetic fields, light, and Maxwell's unifying equations.",
    keywords: ["electricity", "magnetism", "fields", "maxwell", "light"]
  },
  {
    title: "Quantum Mechanics",
    subject: "Physics",
    branch: "Modern Physics",
    level: "Advanced",
    summary: "Describes matter and energy at atomic and subatomic scales using probabilities and wave functions.",
    keywords: ["atoms", "particles", "wave function", "uncertainty", "quantum"]
  },
  {
    title: "Relativity",
    subject: "Physics",
    branch: "Modern Physics",
    level: "Advanced",
    summary: "Einstein's theories connecting space, time, gravity, mass, and the speed of light.",
    keywords: ["einstein", "spacetime", "gravity", "light speed", "mass"]
  },
  {
    title: "Acids and Bases",
    subject: "Chemistry",
    branch: "Physical Chemistry",
    level: "Foundational",
    summary: "Describes proton donors, proton acceptors, pH, neutralization, and aqueous behavior.",
    keywords: ["ph", "neutralization", "arrhenius", "bronsted", "solution"]
  },
  {
    title: "Periodic Table",
    subject: "Chemistry",
    branch: "Atomic Structure",
    level: "Foundational",
    summary: "Organizes chemical elements by atomic number, groups, periods, and repeating properties.",
    keywords: ["elements", "atoms", "groups", "periods", "metals"]
  },
  {
    title: "Organic Chemistry",
    subject: "Chemistry",
    branch: "Organic",
    level: "Core",
    summary: "Studies carbon compounds including hydrocarbons, functional groups, reactions, and synthesis.",
    keywords: ["carbon", "hydrocarbons", "functional groups", "reactions", "synthesis"]
  },
  {
    title: "Cell Biology",
    subject: "Biology",
    branch: "Cell and Molecular Biology",
    level: "Foundational",
    summary: "Examines cell structure, membranes, organelles, transport, and cellular functions.",
    keywords: ["cells", "membrane", "organelles", "transport", "life"]
  },
  {
    title: "Genetics",
    subject: "Biology",
    branch: "Genetics",
    level: "Core",
    summary: "Studies genes, heredity, DNA, RNA, chromosomes, and patterns of inheritance.",
    keywords: ["dna", "rna", "genes", "inheritance", "chromosomes"]
  },
  {
    title: "Evolution",
    subject: "Biology",
    branch: "Evolutionary Biology",
    level: "Core",
    summary: "Explains how populations change over time through variation, selection, and adaptation.",
    keywords: ["natural selection", "adaptation", "species", "variation", "darwin"]
  },
  {
    title: "Photosynthesis",
    subject: "Biology",
    branch: "Plant Biology",
    level: "Foundational",
    summary: "Process by which plants convert light energy, carbon dioxide, and water into glucose and oxygen.",
    keywords: ["plants", "chlorophyll", "glucose", "sunlight", "oxygen"]
  },
  {
    title: "Solar System",
    subject: "Astronomy",
    branch: "Planetary Science",
    level: "Foundational",
    summary: "Includes the Sun, planets, moons, asteroids, comets, and other nearby celestial bodies.",
    keywords: ["planets", "sun", "moons", "asteroids", "comets"]
  },
  {
    title: "Black Holes",
    subject: "Astronomy",
    branch: "Astrophysics",
    level: "Advanced",
    summary: "Regions of spacetime with gravity so intense that not even light can escape.",
    keywords: ["gravity", "event horizon", "singularity", "relativity", "space"]
  },
  {
    title: "Cosmology",
    subject: "Astronomy",
    branch: "Cosmology",
    level: "Advanced",
    summary: "Scientific study of the origin, structure, evolution, and fate of the universe.",
    keywords: ["big bang", "expansion", "dark energy", "universe", "cosmos"]
  },
  {
    title: "Calculus",
    subject: "Mathematics",
    branch: "Analysis",
    level: "Core",
    summary: "Studies change and accumulation using limits, derivatives, integrals, and differential equations.",
    keywords: ["derivative", "integral", "limits", "rate of change", "math"]
  },
  {
    title: "Linear Algebra",
    subject: "Mathematics",
    branch: "Algebra",
    level: "Advanced",
    summary: "Deals with vectors, matrices, transformations, eigenvalues, and systems of equations.",
    keywords: ["vectors", "matrices", "eigenvalues", "transformations", "systems"]
  },
  {
    title: "Climate Science",
    subject: "Earth Science",
    branch: "Atmospheric Science",
    level: "Core",
    summary: "Studies atmosphere, greenhouse gases, weather patterns, and long-term climate change.",
    keywords: ["climate", "weather", "greenhouse gases", "atmosphere", "warming"]
  },
  {
    title: "Plate Tectonics",
    subject: "Earth Science",
    branch: "Geology",
    level: "Core",
    summary: "Explains movement of Earth's lithospheric plates and resulting earthquakes, mountains, and volcanoes.",
    keywords: ["earthquakes", "volcanoes", "plates", "crust", "mantle"]
  },
  {
    title: "Artificial Intelligence",
    subject: "Technology",
    branch: "Computer Science",
    level: "Advanced",
    summary: "Builds systems that learn, reason, perceive, and make decisions from data.",
    keywords: ["machine learning", "neural networks", "reasoning", "data", "ai"]
  }
];

const SUBJECT_CONFIG = {
  Physics: {
    branches: ["Mechanics", "Thermal Physics", "Electromagnetism", "Optics", "Modern Physics", "Nuclear Physics"],
    hubs: ["HyperPhysics", "Khan Academy", "Britannica", "arXiv", "Wikipedia"]
  },
  Chemistry: {
    branches: ["Organic", "Inorganic", "Physical Chemistry", "Analytical Chemistry", "Biochemistry", "Materials Chemistry"],
    hubs: ["LibreTexts", "PubChem", "Khan Academy", "Britannica", "Wikipedia"]
  },
  Biology: {
    branches: ["Cell and Molecular Biology", "Genetics", "Ecology", "Human Biology", "Plant Biology", "Microbiology"],
    hubs: ["NCBI", "PubMed", "Khan Academy", "Britannica", "Wikipedia"]
  },
  Astronomy: {
    branches: ["Planetary Science", "Astrophysics", "Cosmology", "Stellar Astronomy", "Galactic Astronomy", "Space Exploration"],
    hubs: ["NASA", "ESA", "Britannica", "Sky and Telescope", "Wikipedia"]
  },
  Mathematics: {
    branches: ["Algebra", "Analysis", "Geometry", "Statistics", "Number Theory", "Applied Mathematics"],
    hubs: ["Wolfram MathWorld", "Khan Academy", "Brilliant", "Britannica", "Wikipedia"]
  },
  "Earth Science": {
    branches: ["Geology", "Atmospheric Science", "Oceanography", "Hydrology", "Environmental Science", "Geophysics"],
    hubs: ["NOAA", "USGS", "NASA Earth", "Britannica", "Wikipedia"]
  },
  Technology: {
    branches: ["Computer Science", "Robotics", "Biotechnology", "Materials Science", "Nanotechnology", "Data Science"],
    hubs: ["MIT OpenCourseWare", "IBM", "Coursera", "Britannica", "Wikipedia"]
  }
};

const SCIENCE_CONCEPTS = [
  "introduction", "principles", "laws", "equations", "applications", "history", "real world examples", "experiments",
  "measurements", "models", "analysis", "problem solving", "advanced theory", "research methods", "key discoveries",
  "important scientists", "common misconceptions", "modern developments", "practical uses", "study guide"
];

const SCIENCE_FOCUS = [
  "beginner", "intermediate", "advanced", "revision", "exam prep", "lab work", "engineering", "medical relevance",
  "space relevance", "environmental relevance", "industry relevance", "data interpretation"
];

const LEVELS = ["Foundational", "Core", "Advanced"];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function wikiLink(topic) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(topic.replace(/\s+/g, "_"))}`;
}

function wikiSearchLink(topic) {
  return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(topic)}`;
}

function uniqueLinks(links) {
  const seen = new Set();
  return links.filter((link) => {
    const key = `${link.label}|${link.url}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function hubLinks(subject, topic) {
  const hubs = SUBJECT_CONFIG[subject].hubs;
  return hubs.map((hub) => {
    if (hub === "Wikipedia") {
      return {
        label: "Wikipedia",
        url: wikiSearchLink(topic)
      };
    }
    if (hub === "NASA") {
      return {
        label: "NASA Search",
        url: `https://www.nasa.gov/search/?q=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "NASA Earth") {
      return {
        label: "NASA Earth Search",
        url: `https://www.earthdata.nasa.gov/search?q=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "ESA") {
      return {
        label: "ESA Search",
        url: `https://www.esa.int/Services/Search?query=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "NOAA") {
      return {
        label: "NOAA Search",
        url: `https://www.noaa.gov/search?key=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "USGS") {
      return {
        label: "USGS Search",
        url: `https://www.usgs.gov/search?keywords=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "MIT OpenCourseWare") {
      return {
        label: "MIT OCW Search",
        url: `https://ocw.mit.edu/search/?q=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "Khan Academy") {
      return {
        label: "Khan Academy Search",
        url: `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "HyperPhysics") {
      return {
        label: "HyperPhysics Search",
        url: `http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html`
      };
    }
    if (hub === "LibreTexts") {
      return {
        label: "LibreTexts Search",
        url: `https://libretexts.org/Special:Search?query=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "Britannica") {
      return {
        label: "Britannica Search",
        url: `https://www.britannica.com/search?query=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "Wolfram MathWorld") {
      return {
        label: "MathWorld Search",
        url: `https://mathworld.wolfram.com/search/?query=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "PubChem") {
      return {
        label: "PubChem Search",
        url: `https://pubchem.ncbi.nlm.nih.gov/search/search.cgi?query=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "PubMed") {
      return {
        label: "PubMed Search",
        url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "NCBI") {
      return {
        label: "NCBI Search",
        url: `https://www.ncbi.nlm.nih.gov/search/all/?term=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "arXiv") {
      return {
        label: "arXiv Search",
        url: `https://arxiv.org/search/?query=${encodeURIComponent(topic)}&searchtype=all`
      };
    }
    if (hub === "Brilliant") {
      return {
        label: "Brilliant Search",
        url: `https://brilliant.org/search/?q=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "Sky and Telescope") {
      return {
        label: "Sky & Telescope Search",
        url: `https://skyandtelescope.org/?s=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "IBM") {
      return {
        label: "IBM Search",
        url: `https://www.ibm.com/search?lang=en&cc=us&q=${encodeURIComponent(topic)}`
      };
    }
    if (hub === "Coursera") {
      return {
        label: "Coursera Search",
        url: `https://www.coursera.org/search?query=${encodeURIComponent(topic)}`
      };
    }
    return {
      label: `${hub} Search`,
      url: `https://www.google.com/search?q=${encodeURIComponent(`${hub} ${topic}`)}`
    };
  });
}

function buildSourceLinks(subject, topic) {
  const links = [
    ...hubLinks(subject, topic),
    {
      label: "Google Scholar",
      url: `https://scholar.google.com/scholar?q=${encodeURIComponent(topic)}`
    },
    {
      label: "YouTube Learning",
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic)}`
    },
    {
      label: "Wikipedia",
      url: wikiSearchLink(topic)
    }
  ];

  return uniqueLinks(links);
}

function enrichBaseEntry(entry) {
  return {
    ...entry,
    sourceLinks: uniqueLinks([
      ...buildSourceLinks(entry.subject, entry.title),
      {
        label: "Topic Overview",
        url: wikiLink(entry.title)
      }
    ])
  };
}

function generateScienceDataset() {
  const generated = [];
  const subjects = Object.keys(SUBJECT_CONFIG);

  subjects.forEach((subject) => {
    const { branches } = SUBJECT_CONFIG[subject];

    branches.forEach((branch, branchIndex) => {
      SCIENCE_CONCEPTS.forEach((concept, conceptIndex) => {
        SCIENCE_FOCUS.forEach((focus, focusIndex) => {
          const level = LEVELS[(branchIndex + conceptIndex + focusIndex) % LEVELS.length];
          const topic = `${subject} ${branch} ${concept} ${focus}`;
          generated.push({
            title: topic.replace(/\b\w/g, (char) => char.toUpperCase()),
            subject,
            branch,
            level,
            summary: `${topic.replace(/\b\w/g, (char) => char.toUpperCase())} explains core ideas, scientific context, methods, and practical relevance inside ${branch.toLowerCase()}.`,
            keywords: [subject.toLowerCase(), branch.toLowerCase(), concept, focus, slugify(topic)],
            sourceLinks: buildSourceLinks(subject, topic)
          });
        });
      });
    });
  });

  return [...SCIENCE_BASE_DATA.map(enrichBaseEntry), ...generated];
}

const SCIENCE_DATA = generateScienceDataset();
