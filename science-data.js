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
  },
  {
    title: "NASA",
    subject: "Astronomy",
    branch: "Space Exploration",
    level: "Foundational",
    summary: "The National Aeronautics and Space Administration leads U.S. civilian space exploration, space science, aeronautics research, and major missions across Earth and deep space.",
    keywords: ["nasa", "space agency", "usa", "missions", "space exploration", "astronomy"]
  },
  {
    title: "ESA",
    subject: "Astronomy",
    branch: "Space Exploration",
    level: "Core",
    summary: "The European Space Agency coordinates European missions in astronomy, Earth observation, planetary science, launch systems, and international collaboration.",
    keywords: ["esa", "european space agency", "space agency", "europe", "missions", "satellites"]
  },
  {
    title: "ISRO",
    subject: "Astronomy",
    branch: "Space Exploration",
    level: "Core",
    summary: "The Indian Space Research Organisation develops launch vehicles, satellites, lunar and Mars missions, and practical space systems for communication and Earth observation.",
    keywords: ["isro", "india", "space agency", "chandrayaan", "mangalyaan", "satellites"]
  },
  {
    title: "SpaceX",
    subject: "Technology",
    branch: "Space Technology",
    level: "Core",
    summary: "SpaceX develops reusable rockets, spacecraft, satellite internet systems, and human spaceflight capabilities that influence modern space transportation.",
    keywords: ["spacex", "falcon", "starship", "rockets", "spaceflight", "satellites"]
  },
  {
    title: "James Webb Space Telescope",
    subject: "Astronomy",
    branch: "Astrophysics",
    level: "Advanced",
    summary: "JWST observes the early universe, galaxies, stars, and exoplanet atmospheres using infrared astronomy from space.",
    keywords: ["jwst", "james webb", "space telescope", "infrared", "nasa", "esa"]
  },
  {
    title: "Hubble Space Telescope",
    subject: "Astronomy",
    branch: "Astrophysics",
    level: "Core",
    summary: "Hubble transformed astronomy with high-resolution observations of galaxies, nebulae, planets, and the expanding universe.",
    keywords: ["hubble", "space telescope", "nasa", "astronomy", "galaxies", "universe"]
  },
  {
    title: "Chandrayaan Missions",
    subject: "Astronomy",
    branch: "Planetary Science",
    level: "Core",
    summary: "India's Chandrayaan lunar missions advanced Moon science through orbiters, landers, and rover exploration.",
    keywords: ["chandrayaan", "moon", "isro", "india", "lunar mission", "rover"]
  },
  {
    title: "Mars Exploration",
    subject: "Astronomy",
    branch: "Planetary Science",
    level: "Core",
    summary: "Mars exploration includes orbiters, landers, and rovers studying geology, climate, water history, and possible habitability.",
    keywords: ["mars", "rovers", "nasa", "perseverance", "curiosity", "planetary science"]
  },
  {
    title: "DNA Replication",
    subject: "Biology",
    branch: "Genetics",
    level: "Core",
    summary: "DNA replication copies genetic material before cell division using enzymes, complementary base pairing, and proofreading mechanisms.",
    keywords: ["dna", "replication", "genetics", "cell division", "enzymes", "biology"]
  },
  {
    title: "Human Genome Project",
    subject: "Biology",
    branch: "Genetics",
    level: "Advanced",
    summary: "The Human Genome Project mapped and sequenced human DNA, transforming genetics, medicine, biotechnology, and biological research.",
    keywords: ["genome", "dna", "genes", "human genome project", "sequencing", "biology"]
  },
  {
    title: "CRISPR Gene Editing",
    subject: "Biology",
    branch: "Genetics",
    level: "Advanced",
    summary: "CRISPR enables targeted gene editing and is central to modern genetics, biotechnology, and medical research.",
    keywords: ["crispr", "gene editing", "dna", "genetics", "biotechnology", "cas9"]
  },
  {
    title: "Periodic Trends",
    subject: "Chemistry",
    branch: "Atomic Structure",
    level: "Core",
    summary: "Periodic trends describe how atomic radius, ionization energy, electronegativity, and electron affinity change across the periodic table.",
    keywords: ["periodic trends", "ionization energy", "electronegativity", "atomic radius", "chemistry"]
  },
  {
    title: "Chemical Equilibrium",
    subject: "Chemistry",
    branch: "Physical Chemistry",
    level: "Core",
    summary: "Chemical equilibrium explains reversible reactions, equilibrium constants, and how systems respond to stress through Le Chatelier's principle.",
    keywords: ["equilibrium", "reversible reactions", "le chatelier", "chemistry", "constants"]
  },
  {
    title: "Machine Learning",
    subject: "Technology",
    branch: "Computer Science",
    level: "Core",
    summary: "Machine learning trains models from data for prediction, classification, pattern recognition, and decision making.",
    keywords: ["machine learning", "ai", "models", "data science", "algorithms", "prediction"]
  },
  {
    title: "Rocket Propulsion",
    subject: "Physics",
    branch: "Mechanics",
    level: "Advanced",
    summary: "Rocket propulsion uses Newton's laws, momentum conservation, fuel combustion, and thrust generation to move spacecraft.",
    keywords: ["rocket", "propulsion", "thrust", "nasa", "spacex", "spaceflight"]
  }
];

const SCIENCE_EXPANDED_TOPICS = [
  ["Physics", "Mechanics", "Kinematics", "Foundational", "Describes motion using displacement, velocity, acceleration, and time without focusing on the causes of motion.", ["kinematics", "motion", "velocity", "acceleration", "physics"]],
  ["Physics", "Mechanics", "Dynamics", "Core", "Studies the forces that produce or change motion in physical systems.", ["dynamics", "forces", "motion", "newton", "mechanics"]],
  ["Physics", "Mechanics", "Momentum", "Core", "Momentum connects mass and velocity and is central to collisions, impulses, and conservation laws.", ["momentum", "impulse", "collisions", "conservation", "physics"]],
  ["Physics", "Mechanics", "Gravitation", "Core", "Gravitation explains attraction between masses from falling objects to planetary motion.", ["gravitation", "gravity", "orbits", "mass", "newton"]],
  ["Physics", "Thermal Physics", "Heat Transfer", "Foundational", "Heat transfer occurs by conduction, convection, and radiation between systems of different temperature.", ["heat transfer", "conduction", "convection", "radiation", "temperature"]],
  ["Physics", "Thermal Physics", "Entropy", "Advanced", "Entropy measures disorder, multiplicity, and the direction of spontaneous processes in thermodynamics.", ["entropy", "thermodynamics", "disorder", "energy", "physics"]],
  ["Physics", "Fields", "Electric Field", "Core", "An electric field describes the force experienced by charges in space.", ["electric field", "charge", "force", "electrostatics", "physics"]],
  ["Physics", "Fields", "Magnetic Field", "Core", "Magnetic fields arise from moving charges and magnets and influence currents and particles.", ["magnetic field", "magnetism", "current", "lorentz force", "physics"]],
  ["Physics", "Optics", "Wave Optics", "Core", "Wave optics explains interference, diffraction, and polarization of light.", ["wave optics", "interference", "diffraction", "polarization", "light"]],
  ["Physics", "Optics", "Geometrical Optics", "Foundational", "Geometrical optics models reflection, refraction, mirrors, and lenses using rays.", ["geometrical optics", "reflection", "refraction", "lenses", "mirrors"]],
  ["Physics", "Modern Physics", "Photoelectric Effect", "Core", "The photoelectric effect showed that light can behave as quantized packets called photons.", ["photoelectric effect", "photons", "quantum", "einstein", "light"]],
  ["Physics", "Modern Physics", "Atomic Structure", "Foundational", "Atomic structure covers protons, neutrons, electrons, energy levels, and atomic models.", ["atomic structure", "atom", "electrons", "nucleus", "physics"]],
  ["Physics", "Nuclear Physics", "Radioactivity", "Core", "Radioactivity involves unstable nuclei emitting alpha, beta, or gamma radiation.", ["radioactivity", "nuclear physics", "alpha", "beta", "gamma"]],
  ["Physics", "Nuclear Physics", "Nuclear Fission", "Advanced", "Nuclear fission splits heavy nuclei and releases large amounts of energy.", ["nuclear fission", "reactor", "uranium", "energy", "nuclear"]],
  ["Physics", "Nuclear Physics", "Nuclear Fusion", "Advanced", "Nuclear fusion joins light nuclei and powers stars while motivating next-generation energy research.", ["nuclear fusion", "stars", "plasma", "energy", "physics"]],

  ["Chemistry", "Atomic Structure", "Atomic Orbitals", "Core", "Atomic orbitals describe probability distributions for electrons around atomic nuclei.", ["atomic orbitals", "electrons", "quantum chemistry", "atoms", "chemistry"]],
  ["Chemistry", "Physical Chemistry", "Stoichiometry", "Foundational", "Stoichiometry uses balanced equations to calculate reactants, products, and mole relationships.", ["stoichiometry", "moles", "equations", "reactions", "chemistry"]],
  ["Chemistry", "Physical Chemistry", "Redox Reactions", "Core", "Redox reactions involve electron transfer and changes in oxidation state.", ["redox", "oxidation", "reduction", "electrons", "chemistry"]],
  ["Chemistry", "Physical Chemistry", "Chemical Thermodynamics", "Advanced", "Chemical thermodynamics studies enthalpy, entropy, Gibbs free energy, and spontaneity.", ["chemical thermodynamics", "enthalpy", "gibbs free energy", "entropy", "chemistry"]],
  ["Chemistry", "Analytical Chemistry", "Titration", "Core", "Titration determines concentration by reacting measured volumes of known and unknown solutions.", ["titration", "concentration", "acid base", "analysis", "chemistry"]],
  ["Chemistry", "Analytical Chemistry", "Chromatography", "Core", "Chromatography separates components using differences in movement through stationary and mobile phases.", ["chromatography", "separation", "analytical chemistry", "mixtures", "chemistry"]],
  ["Chemistry", "Organic", "Hydrocarbons", "Foundational", "Hydrocarbons are organic compounds made only of carbon and hydrogen, including alkanes, alkenes, and alkynes.", ["hydrocarbons", "organic chemistry", "alkanes", "alkenes", "carbon"]],
  ["Chemistry", "Organic", "Functional Groups", "Foundational", "Functional groups determine the characteristic reactions and properties of organic molecules.", ["functional groups", "organic", "alcohol", "amine", "carboxylic acid"]],
  ["Chemistry", "Organic", "Polymers", "Core", "Polymers are long-chain molecules used in plastics, fibers, biomaterials, and advanced manufacturing.", ["polymers", "plastics", "macromolecules", "materials", "chemistry"]],
  ["Chemistry", "Biochemistry", "Proteins", "Core", "Proteins are biological macromolecules built from amino acids and responsible for structure and function in cells.", ["proteins", "amino acids", "enzymes", "biochemistry", "biology"]],
  ["Chemistry", "Biochemistry", "Enzymes", "Core", "Enzymes catalyze biochemical reactions and control metabolic pathways in living systems.", ["enzymes", "catalysis", "metabolism", "biochemistry", "proteins"]],
  ["Chemistry", "Materials Chemistry", "Nanomaterials", "Advanced", "Nanomaterials have size-dependent properties used in electronics, medicine, and coatings.", ["nanomaterials", "materials chemistry", "nanotechnology", "particles", "chemistry"]],

  ["Biology", "Cell and Molecular Biology", "Cell Membrane", "Foundational", "The cell membrane regulates transport, signaling, and compartment boundaries in living cells.", ["cell membrane", "transport", "phospholipid bilayer", "cell", "biology"]],
  ["Biology", "Cell and Molecular Biology", "Mitosis", "Foundational", "Mitosis is the process by which one cell divides to produce two genetically similar daughter cells.", ["mitosis", "cell division", "chromosomes", "biology", "cells"]],
  ["Biology", "Cell and Molecular Biology", "Meiosis", "Core", "Meiosis produces gametes and creates genetic variation through recombination and chromosome separation.", ["meiosis", "gametes", "genetics", "cell division", "biology"]],
  ["Biology", "Genetics", "Gene Expression", "Core", "Gene expression includes transcription and translation, turning genetic information into functional molecules.", ["gene expression", "transcription", "translation", "dna", "rna"]],
  ["Biology", "Genetics", "Mutation", "Core", "Mutations are changes in DNA sequence that may alter genes, traits, and disease risk.", ["mutation", "dna", "genes", "genetics", "variation"]],
  ["Biology", "Ecology", "Ecosystems", "Foundational", "Ecosystems include organisms and their physical environment interacting through energy flow and nutrient cycles.", ["ecosystems", "ecology", "food webs", "environment", "biology"]],
  ["Biology", "Ecology", "Biodiversity", "Core", "Biodiversity measures the variety of life and supports resilience, stability, and ecosystem services.", ["biodiversity", "species", "ecology", "conservation", "biology"]],
  ["Biology", "Human Biology", "Immune System", "Core", "The immune system protects the body using innate and adaptive defenses against pathogens.", ["immune system", "antibodies", "pathogens", "biology", "health"]],
  ["Biology", "Human Biology", "Nervous System", "Core", "The nervous system coordinates sensation, processing, and response through neurons and signaling pathways.", ["nervous system", "neurons", "brain", "biology", "human body"]],
  ["Biology", "Plant Biology", "Plant Hormones", "Core", "Plant hormones regulate growth, development, tropisms, flowering, and stress responses.", ["plant hormones", "auxin", "gibberellin", "plants", "biology"]],
  ["Biology", "Microbiology", "Viruses", "Foundational", "Viruses are acellular infectious agents that replicate only within host organisms.", ["viruses", "microbiology", "infection", "pathogens", "biology"]],
  ["Biology", "Microbiology", "Bacteria", "Foundational", "Bacteria are single-celled prokaryotes important in health, disease, ecosystems, and biotechnology.", ["bacteria", "microbiology", "prokaryotes", "cells", "biology"]],

  ["Astronomy", "Planetary Science", "Planets", "Foundational", "Planets are large bodies orbiting stars and vary widely in composition, atmospheres, and geology.", ["planets", "astronomy", "solar system", "orbit", "space"]],
  ["Astronomy", "Planetary Science", "Exoplanet Detection", "Advanced", "Exoplanet detection uses transits, radial velocity, imaging, and microlensing to find worlds beyond the solar system.", ["exoplanets", "transit", "radial velocity", "astronomy", "space"]],
  ["Astronomy", "Astrophysics", "Nebulae", "Core", "Nebulae are clouds of gas and dust associated with star birth, stellar death, and galactic structure.", ["nebulae", "gas clouds", "stars", "astronomy", "space"]],
  ["Astronomy", "Astrophysics", "Supernovae", "Advanced", "Supernovae are powerful stellar explosions that create heavy elements and leave neutron stars or black holes.", ["supernovae", "stars", "black holes", "neutron stars", "astronomy"]],
  ["Astronomy", "Cosmology", "Big Bang", "Core", "The Big Bang model describes the early expansion and evolution of the universe.", ["big bang", "cosmology", "universe", "expansion", "astronomy"]],
  ["Astronomy", "Cosmology", "Dark Matter", "Advanced", "Dark matter is unseen matter inferred from gravity and large-scale structure in the universe.", ["dark matter", "gravity", "cosmology", "galaxies", "astronomy"]],
  ["Astronomy", "Cosmology", "Dark Energy", "Advanced", "Dark energy is a proposed cause of the accelerating expansion of the universe.", ["dark energy", "cosmology", "expansion", "universe", "astronomy"]],
  ["Astronomy", "Stellar Astronomy", "Star Formation", "Core", "Star formation begins in collapsing clouds of gas and dust that ignite nuclear fusion.", ["star formation", "nebula", "fusion", "stars", "astronomy"]],
  ["Astronomy", "Galactic Astronomy", "Milky Way", "Foundational", "The Milky Way is the galaxy containing our solar system and billions of stars, gas, dust, and dark matter.", ["milky way", "galaxy", "astronomy", "stars", "space"]],
  ["Astronomy", "Space Exploration", "International Space Station", "Core", "The ISS is a permanently inhabited orbital laboratory supporting science, engineering, and international cooperation.", ["iss", "international space station", "space", "orbit", "nasa"]],
  ["Astronomy", "Space Exploration", "Satellite Technology", "Core", "Satellites enable communication, navigation, Earth observation, weather forecasting, and space science.", ["satellites", "space technology", "orbit", "communication", "astronomy"]],
  ["Astronomy", "Space Exploration", "Rocket Launch Systems", "Core", "Rocket launch systems place payloads into space using staging, propulsion, guidance, and structural engineering.", ["rockets", "launch systems", "spaceflight", "nasa", "spacex"]],

  ["Mathematics", "Algebra", "Quadratic Equations", "Foundational", "Quadratic equations are second-degree equations solved by factoring, completing the square, or the quadratic formula.", ["quadratic equations", "algebra", "polynomials", "math", "roots"]],
  ["Mathematics", "Algebra", "Functions", "Foundational", "Functions map inputs to outputs and are central to algebra, calculus, and applied mathematics.", ["functions", "algebra", "graphs", "relations", "math"]],
  ["Mathematics", "Analysis", "Limits", "Core", "Limits describe the behavior of functions near values and underpin continuity and calculus.", ["limits", "calculus", "analysis", "continuity", "math"]],
  ["Mathematics", "Analysis", "Derivatives", "Core", "Derivatives measure instantaneous rate of change and slope of functions.", ["derivatives", "calculus", "rate of change", "math", "analysis"]],
  ["Mathematics", "Analysis", "Integrals", "Core", "Integrals measure accumulation, area, and inverse relationships to derivatives.", ["integrals", "calculus", "area", "accumulation", "math"]],
  ["Mathematics", "Geometry", "Triangles", "Foundational", "Triangle geometry studies side-angle relationships, congruence, similarity, and trigonometric ideas.", ["triangles", "geometry", "angles", "trigonometry", "math"]],
  ["Mathematics", "Geometry", "Circles", "Foundational", "Circle geometry includes radius, diameter, circumference, arcs, sectors, and related theorems.", ["circles", "geometry", "radius", "circumference", "math"]],
  ["Mathematics", "Statistics", "Probability", "Core", "Probability quantifies uncertainty and outcomes in random processes.", ["probability", "statistics", "randomness", "math", "outcomes"]],
  ["Mathematics", "Statistics", "Distributions", "Advanced", "Statistical distributions model data, variation, and likelihood across different scenarios.", ["distributions", "statistics", "normal distribution", "probability", "math"]],
  ["Mathematics", "Number Theory", "Prime Numbers", "Core", "Prime numbers are foundational integers in divisibility, cryptography, and number theory.", ["prime numbers", "number theory", "integers", "math", "divisibility"]],
  ["Mathematics", "Applied Mathematics", "Differential Equations", "Advanced", "Differential equations model change in physics, biology, engineering, and economics.", ["differential equations", "math", "modeling", "calculus", "applied mathematics"]],
  ["Mathematics", "Applied Mathematics", "Optimization", "Advanced", "Optimization searches for best solutions under constraints in science, engineering, and data science.", ["optimization", "applied mathematics", "constraints", "algorithms", "math"]],

  ["Earth Science", "Geology", "Minerals", "Foundational", "Minerals are naturally occurring inorganic solids with characteristic composition and structure.", ["minerals", "geology", "earth science", "rocks", "crystals"]],
  ["Earth Science", "Geology", "Rocks", "Foundational", "Rocks are igneous, sedimentary, or metamorphic materials that record Earth processes.", ["rocks", "geology", "igneous", "sedimentary", "metamorphic"]],
  ["Earth Science", "Geology", "Earthquakes", "Core", "Earthquakes result from sudden energy release along faults and plate boundaries.", ["earthquakes", "faults", "tectonics", "geology", "earth science"]],
  ["Earth Science", "Atmospheric Science", "Atmosphere", "Foundational", "Earth's atmosphere consists of layered gases governing climate, weather, and radiation balance.", ["atmosphere", "earth science", "weather", "climate", "air"]],
  ["Earth Science", "Atmospheric Science", "Greenhouse Effect", "Core", "The greenhouse effect warms Earth when atmospheric gases absorb and re-radiate heat.", ["greenhouse effect", "climate", "carbon dioxide", "earth science", "warming"]],
  ["Earth Science", "Oceanography", "Ocean Currents", "Core", "Ocean currents transport heat, nutrients, and influence weather and climate systems.", ["ocean currents", "oceanography", "climate", "seas", "earth science"]],
  ["Earth Science", "Hydrology", "Water Cycle", "Foundational", "The water cycle describes evaporation, condensation, precipitation, runoff, and groundwater movement.", ["water cycle", "hydrology", "evaporation", "precipitation", "earth science"]],
  ["Earth Science", "Environmental Science", "Pollution", "Core", "Pollution introduces harmful substances or energy into air, water, and land systems.", ["pollution", "environmental science", "air quality", "water quality", "earth science"]],
  ["Earth Science", "Environmental Science", "Sustainability", "Core", "Sustainability seeks long-term balance between environmental protection, human needs, and economic systems.", ["sustainability", "environment", "resources", "climate", "earth science"]],
  ["Earth Science", "Geophysics", "Seismology", "Advanced", "Seismology studies seismic waves to understand earthquakes and Earth's internal structure.", ["seismology", "earthquakes", "waves", "geophysics", "earth science"]],

  ["Technology", "Computer Science", "Algorithms", "Foundational", "Algorithms are step-by-step procedures for solving problems and processing information.", ["algorithms", "computer science", "logic", "programming", "technology"]],
  ["Technology", "Computer Science", "Data Structures", "Core", "Data structures organize information efficiently for storage, access, and computation.", ["data structures", "computer science", "arrays", "trees", "technology"]],
  ["Technology", "Computer Science", "Databases", "Core", "Databases store, manage, and query structured information for applications and research.", ["databases", "sql", "data", "technology", "computer science"]],
  ["Technology", "Computer Science", "Cybersecurity", "Core", "Cybersecurity protects systems, networks, and information from digital threats and unauthorized access.", ["cybersecurity", "security", "networks", "technology", "computer science"]],
  ["Technology", "Computer Science", "Cloud Computing", "Core", "Cloud computing delivers computing services like storage, servers, and analytics over the internet.", ["cloud computing", "servers", "internet", "technology", "software"]],
  ["Technology", "Robotics", "Sensors", "Core", "Sensors let robotic systems detect motion, position, light, sound, and environmental conditions.", ["sensors", "robotics", "automation", "electronics", "technology"]],
  ["Technology", "Robotics", "Control Systems", "Advanced", "Control systems regulate machine behavior using feedback, stability, and response analysis.", ["control systems", "robotics", "feedback", "automation", "technology"]],
  ["Technology", "Biotechnology", "Synthetic Biology", "Advanced", "Synthetic biology engineers biological systems for medicine, manufacturing, and research.", ["synthetic biology", "biotechnology", "genetics", "engineering", "technology"]],
  ["Technology", "Materials Science", "Semiconductors", "Core", "Semiconductors underpin electronics through controlled electrical conductivity in devices and circuits.", ["semiconductors", "electronics", "materials science", "technology", "chips"]],
  ["Technology", "Materials Science", "Graphene", "Advanced", "Graphene is a two-dimensional carbon material with remarkable electrical, thermal, and mechanical properties.", ["graphene", "materials science", "carbon", "nanotechnology", "technology"]],
  ["Technology", "Nanotechnology", "Nanoparticles", "Advanced", "Nanoparticles are nanoscale materials with applications in medicine, catalysis, imaging, and materials engineering.", ["nanoparticles", "nanotechnology", "materials", "technology", "chemistry"]],
  ["Technology", "Data Science", "Data Visualization", "Core", "Data visualization communicates patterns, trends, and insights through charts, maps, and interactive graphics.", ["data visualization", "data science", "charts", "analytics", "technology"]]
];

const SCIENCE_MASTER_TOPICS = [
  ["Physics", "Mechanics", "Work and Energy", "Core", "Work and energy connect forces, motion, kinetic energy, potential energy, and conservation principles.", ["work", "energy", "kinetic energy", "potential energy", "physics"]],
  ["Physics", "Mechanics", "Circular Motion", "Core", "Circular motion studies rotation, centripetal force, angular speed, and orbital behavior.", ["circular motion", "centripetal force", "rotation", "orbits", "physics"]],
  ["Physics", "Fields", "Capacitance", "Advanced", "Capacitance describes charge storage and potential difference in electric systems.", ["capacitance", "capacitor", "electric potential", "charge", "physics"]],
  ["Physics", "Fields", "Current Electricity", "Core", "Current electricity studies circuits, resistance, Ohm's law, and electrical power.", ["current electricity", "circuits", "resistance", "ohms law", "physics"]],
  ["Physics", "Optics", "Lasers", "Advanced", "Lasers produce coherent light and are important in communication, medicine, measurement, and industry.", ["lasers", "light", "optics", "photons", "physics"]],
  ["Physics", "Modern Physics", "Schrodinger Equation", "Advanced", "The Schrodinger equation describes how quantum states evolve and underpins wave mechanics.", ["schrodinger equation", "quantum mechanics", "wave function", "physics", "atoms"]],
  ["Physics", "Modern Physics", "Uncertainty Principle", "Advanced", "The uncertainty principle limits how precisely certain pairs of physical quantities can be known together.", ["uncertainty principle", "quantum mechanics", "heisenberg", "physics", "particles"]],
  ["Physics", "Modern Physics", "Quantum Field Theory", "Advanced", "Quantum field theory combines quantum mechanics and relativity to describe particles as excitations of fields.", ["quantum field theory", "quantum mechanics", "relativity", "particles", "physics"]],
  ["Physics", "Modern Physics", "Particle Physics", "Advanced", "Particle physics studies fundamental particles, interactions, accelerators, and the standard model.", ["particle physics", "quarks", "leptons", "standard model", "physics"]],
  ["Physics", "Nuclear Physics", "Standard Model", "Advanced", "The standard model explains elementary particles and three of the four fundamental interactions.", ["standard model", "particle physics", "fundamental forces", "quarks", "physics"]],

  ["Chemistry", "Atomic Structure", "Mole Concept", "Foundational", "The mole concept links microscopic particles to measurable quantities in chemistry.", ["mole concept", "avogadro number", "chemistry", "moles", "atoms"]],
  ["Chemistry", "Inorganic", "Coordination Compounds", "Advanced", "Coordination compounds contain central metal atoms bonded to ligands and are important in catalysis and bioinorganic chemistry.", ["coordination compounds", "ligands", "inorganic chemistry", "metals", "chemistry"]],
  ["Chemistry", "Inorganic", "Transition Elements", "Core", "Transition elements show variable oxidation states, colored compounds, and catalytic behavior.", ["transition elements", "metals", "oxidation states", "chemistry", "periodic table"]],
  ["Chemistry", "Physical Chemistry", "Solutions", "Foundational", "Solutions describe solute-solvent systems, concentration, solubility, and colligative properties.", ["solutions", "solubility", "concentration", "chemistry", "solute"]],
  ["Chemistry", "Physical Chemistry", "Electrolytes", "Core", "Electrolytes conduct electricity in solution and are central to acids, bases, and electrochemistry.", ["electrolytes", "ions", "solutions", "electrochemistry", "chemistry"]],
  ["Chemistry", "Organic", "Aromatic Compounds", "Advanced", "Aromatic compounds have delocalized electron systems and distinctive stability and reaction patterns.", ["aromatic compounds", "benzene", "organic chemistry", "delocalized electrons", "chemistry"]],
  ["Chemistry", "Organic", "Isomerism", "Core", "Isomerism describes compounds with the same formula but different structures or spatial arrangements.", ["isomerism", "organic chemistry", "stereochemistry", "structure", "chemistry"]],
  ["Chemistry", "Biochemistry", "Lipids", "Core", "Lipids store energy, form membranes, and participate in signaling in living systems.", ["lipids", "biochemistry", "fats", "membranes", "biology"]],
  ["Chemistry", "Materials Chemistry", "Corrosion", "Core", "Corrosion is the deterioration of materials, especially metals, by chemical or electrochemical reactions.", ["corrosion", "materials chemistry", "metals", "oxidation", "chemistry"]],
  ["Chemistry", "Analytical Chemistry", "Spectroscopy", "Advanced", "Spectroscopy identifies substances through their interaction with electromagnetic radiation.", ["spectroscopy", "analysis", "light", "molecules", "chemistry"]],

  ["Biology", "Cell and Molecular Biology", "Cell Respiration", "Foundational", "Cell respiration releases usable energy from glucose through glycolysis, Krebs cycle, and electron transport.", ["cell respiration", "atp", "mitochondria", "biology", "glucose"]],
  ["Biology", "Cell and Molecular Biology", "Stem Cells", "Advanced", "Stem cells can self-renew and differentiate into specialized cell types.", ["stem cells", "cell biology", "differentiation", "medicine", "biology"]],
  ["Biology", "Genetics", "Chromosomes", "Foundational", "Chromosomes carry genetic information and organize DNA inside cells.", ["chromosomes", "dna", "genes", "genetics", "biology"]],
  ["Biology", "Genetics", "Epigenetics", "Advanced", "Epigenetics studies changes in gene activity that do not alter the DNA sequence itself.", ["epigenetics", "gene regulation", "dna", "biology", "genetics"]],
  ["Biology", "Ecology", "Food Chains", "Foundational", "Food chains and food webs describe energy transfer among organisms in ecosystems.", ["food chains", "food webs", "ecology", "energy flow", "biology"]],
  ["Biology", "Ecology", "Natural Selection", "Core", "Natural selection favors traits that improve survival and reproduction over generations.", ["natural selection", "evolution", "adaptation", "biology", "darwin"]],
  ["Biology", "Human Biology", "Circulatory System", "Foundational", "The circulatory system transports oxygen, nutrients, hormones, and wastes through the body.", ["circulatory system", "blood", "heart", "biology", "human body"]],
  ["Biology", "Human Biology", "Respiratory System", "Foundational", "The respiratory system exchanges gases and supports oxygen delivery and carbon dioxide removal.", ["respiratory system", "lungs", "gas exchange", "biology", "human body"]],
  ["Biology", "Plant Biology", "Transpiration", "Core", "Transpiration is the movement of water through plants and its evaporation from leaves.", ["transpiration", "plants", "xylem", "water transport", "biology"]],
  ["Biology", "Microbiology", "Vaccines", "Core", "Vaccines prepare the immune system to recognize and fight infectious agents.", ["vaccines", "immunity", "viruses", "biology", "health"]],

  ["Astronomy", "Planetary Science", "Moon", "Foundational", "The Moon affects tides, night illumination, and planetary science through its geology and origin history.", ["moon", "lunar science", "astronomy", "space", "orbit"]],
  ["Astronomy", "Planetary Science", "Asteroids", "Core", "Asteroids are rocky bodies that reveal early solar system history and impact processes.", ["asteroids", "solar system", "space", "astronomy", "planets"]],
  ["Astronomy", "Planetary Science", "Comets", "Core", "Comets are icy bodies that develop tails near the Sun and preserve primitive solar system material.", ["comets", "solar system", "space", "astronomy", "ice"]],
  ["Astronomy", "Astrophysics", "Neutron Stars", "Advanced", "Neutron stars are ultra-dense remnants of massive stars after supernova explosions.", ["neutron stars", "supernova", "astrophysics", "space", "astronomy"]],
  ["Astronomy", "Astrophysics", "Pulsars", "Advanced", "Pulsars are rapidly rotating neutron stars emitting beams of radiation.", ["pulsars", "neutron stars", "space", "astronomy", "radiation"]],
  ["Astronomy", "Cosmology", "Cosmic Microwave Background", "Advanced", "The cosmic microwave background is relic radiation from the early universe and a pillar of modern cosmology.", ["cosmic microwave background", "cmb", "cosmology", "big bang", "astronomy"]],
  ["Astronomy", "Galactic Astronomy", "Galaxies", "Core", "Galaxies are large systems of stars, gas, dust, and dark matter.", ["galaxies", "milky way", "astronomy", "space", "cosmos"]],
  ["Astronomy", "Space Exploration", "Apollo Missions", "Core", "The Apollo missions achieved human Moon landings and transformed lunar exploration.", ["apollo missions", "moon", "nasa", "space exploration", "astronomy"]],
  ["Astronomy", "Space Exploration", "Mangalyaan", "Core", "Mangalyaan was India's Mars Orbiter Mission and a milestone in planetary exploration.", ["mangalyaan", "isro", "mars", "india", "space mission"]],
  ["Astronomy", "Space Exploration", "Voyager Missions", "Advanced", "The Voyager spacecraft explored outer planets and continue to send data from interstellar space.", ["voyager", "nasa", "space exploration", "planets", "astronomy"]],

  ["Mathematics", "Algebra", "Polynomials", "Foundational", "Polynomials are algebraic expressions used in equations, graphs, and mathematical modeling.", ["polynomials", "algebra", "equations", "math", "functions"]],
  ["Mathematics", "Algebra", "Matrices", "Core", "Matrices organize numbers for solving systems, transformations, and computations in linear algebra.", ["matrices", "linear algebra", "math", "systems", "vectors"]],
  ["Mathematics", "Analysis", "Continuity", "Core", "Continuity describes functions without breaks and connects limits to calculus.", ["continuity", "limits", "calculus", "analysis", "math"]],
  ["Mathematics", "Analysis", "Series", "Advanced", "Series sum infinite or finite sequences and are central to approximation and analysis.", ["series", "analysis", "calculus", "math", "infinite sums"]],
  ["Mathematics", "Geometry", "Coordinate Geometry", "Core", "Coordinate geometry uses algebraic methods to study points, lines, circles, and conics.", ["coordinate geometry", "graphs", "geometry", "math", "conics"]],
  ["Mathematics", "Geometry", "Trigonometry", "Core", "Trigonometry studies angle relationships and periodic functions with applications in science and engineering.", ["trigonometry", "sine", "cosine", "angles", "math"]],
  ["Mathematics", "Statistics", "Regression", "Advanced", "Regression models relationships between variables and supports prediction and analysis.", ["regression", "statistics", "data", "math", "prediction"]],
  ["Mathematics", "Statistics", "Sampling", "Core", "Sampling methods help estimate properties of populations from selected data.", ["sampling", "statistics", "data", "math", "probability"]],
  ["Mathematics", "Number Theory", "Modular Arithmetic", "Advanced", "Modular arithmetic studies remainders and cyclic behavior in integers.", ["modular arithmetic", "number theory", "integers", "math", "remainders"]],
  ["Mathematics", "Applied Mathematics", "Numerical Methods", "Advanced", "Numerical methods approximate solutions to equations, integrals, and differential systems.", ["numerical methods", "applied mathematics", "approximation", "math", "computation"]],

  ["Earth Science", "Geology", "Volcanoes", "Core", "Volcanoes form when magma reaches the surface and shape landscapes, hazards, and crustal processes.", ["volcanoes", "geology", "magma", "earth science", "tectonics"]],
  ["Earth Science", "Geology", "Fossils", "Core", "Fossils preserve evidence of past life and help reconstruct Earth's biological and geological history.", ["fossils", "geology", "earth history", "paleontology", "earth science"]],
  ["Earth Science", "Atmospheric Science", "Weather Systems", "Core", "Weather systems include fronts, cyclones, pressure zones, and atmospheric circulation.", ["weather systems", "meteorology", "atmosphere", "earth science", "storms"]],
  ["Earth Science", "Atmospheric Science", "Monsoon", "Core", "Monsoon systems are seasonal wind and rainfall patterns that strongly affect climate and agriculture.", ["monsoon", "climate", "rainfall", "earth science", "weather"]],
  ["Earth Science", "Oceanography", "Marine Ecosystems", "Core", "Marine ecosystems include oceans, reefs, coasts, and life processes shaped by salinity, light, and currents.", ["marine ecosystems", "oceanography", "oceans", "biology", "earth science"]],
  ["Earth Science", "Hydrology", "Groundwater", "Core", "Groundwater moves through aquifers and supports ecosystems, agriculture, and drinking supplies.", ["groundwater", "hydrology", "aquifers", "water", "earth science"]],
  ["Earth Science", "Environmental Science", "Renewable Energy", "Core", "Renewable energy includes solar, wind, hydro, and other low-carbon energy systems.", ["renewable energy", "environment", "solar", "wind", "earth science"]],
  ["Earth Science", "Environmental Science", "Conservation", "Core", "Conservation protects ecosystems, species, resources, and environmental quality.", ["conservation", "environment", "biodiversity", "earth science", "sustainability"]],
  ["Earth Science", "Geophysics", "Plate Boundaries", "Core", "Plate boundaries explain earthquakes, mountain building, volcanic arcs, and crustal change.", ["plate boundaries", "tectonics", "earthquakes", "geophysics", "earth science"]],
  ["Earth Science", "Geophysics", "Geomagnetism", "Advanced", "Geomagnetism studies Earth's magnetic field, its origin, and its behavior through time.", ["geomagnetism", "magnetic field", "geophysics", "earth science", "earth"]],

  ["Technology", "Computer Science", "Programming", "Foundational", "Programming uses languages and logic to build software, tools, and digital systems.", ["programming", "software", "coding", "computer science", "technology"]],
  ["Technology", "Computer Science", "Operating Systems", "Core", "Operating systems manage hardware, memory, files, and processes for computing devices.", ["operating systems", "software", "computer science", "technology", "processes"]],
  ["Technology", "Computer Science", "Computer Networks", "Core", "Computer networks connect systems for communication, data transfer, and internet services.", ["computer networks", "internet", "data transfer", "technology", "computer science"]],
  ["Technology", "Computer Science", "Artificial Neural Networks", "Advanced", "Artificial neural networks are layered computational models inspired by brain-like connections.", ["neural networks", "ai", "machine learning", "technology", "computer science"]],
  ["Technology", "Robotics", "Autonomous Systems", "Advanced", "Autonomous systems sense, decide, and act with reduced human intervention.", ["autonomous systems", "robotics", "automation", "ai", "technology"]],
  ["Technology", "Biotechnology", "Bioinformatics", "Advanced", "Bioinformatics uses computation to analyze biological data such as genomes and proteins.", ["bioinformatics", "genomics", "data", "biology", "technology"]],
  ["Technology", "Materials Science", "Composite Materials", "Core", "Composite materials combine components to achieve improved strength, weight, or durability.", ["composite materials", "materials science", "engineering", "technology", "materials"]],
  ["Technology", "Materials Science", "Battery Technology", "Core", "Battery technology stores electrical energy for portable devices, vehicles, and grids.", ["battery technology", "electrochemistry", "energy storage", "technology", "materials"]],
  ["Technology", "Nanotechnology", "Quantum Dots", "Advanced", "Quantum dots are nanoscale semiconductor particles with unique optical and electronic properties.", ["quantum dots", "nanotechnology", "semiconductors", "technology", "materials"]],
  ["Technology", "Data Science", "Big Data", "Core", "Big data refers to very large, complex datasets requiring scalable storage and analysis tools.", ["big data", "data science", "analytics", "technology", "computing"]]
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

function createExpandedTopic([subject, branch, title, level, summary, keywords]) {
  return {
    title,
    subject,
    branch,
    level,
    summary,
    keywords,
    sourceLinks: buildSourceLinks(subject, title)
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

  return [
    ...SCIENCE_BASE_DATA.map(enrichBaseEntry),
    ...SCIENCE_EXPANDED_TOPICS.map(createExpandedTopic),
    ...SCIENCE_MASTER_TOPICS.map(createExpandedTopic),
    ...generated
  ];
}

const SCIENCE_DATA = generateScienceDataset();
