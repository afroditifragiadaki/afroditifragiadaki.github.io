// All site project content lives here. To add or edit a project, change this
// file: the page components read from it and need no changes.
const gh = (repo) => `https://github.com/afroditifragiadaki/${repo}`;

export const featured = [
  {
    title: 'EIA Explorer',
    tag: 'AI agent · Full stack',
    summary:
      'Ask for U.S. energy data in plain English and get a chart. A Claude agent finds the right dataset among hundreds in the EIA API, downloads it, caches it in Turso and plots it.',
    points: [
      'Crawled the EIA route tree into a searchable catalogue of 232 datasets',
      'FastAPI backend streams each agent step to a React frontend',
      'Handles API quirks checked against the live service, like the 5,000-row limit and string-typed values',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Turso', 'Claude API'],
    href: gh('eia-explorer'),
  },
  {
    title: 'Datacenter Microgrid Cost Explorer',
    tag: 'Optimization · Columbia ELEN4510',
    summary:
      'For a behind-the-meter datacenter, is a fully islanded microgrid or a grid connection cheaper? This tool finds the lowest-cost design for both, in each of seven major U.S. electricity markets.',
    points: [
      'Searches Solar + BESS + Gas size combinations under a renewable-share floor',
      'Simulates 8,784 hours of dispatch for every combination',
      'Compares sLCOE across markets in an interactive dashboard',
    ],
    stack: ['Python', 'Streamlit', 'NREL data'],
    href: gh('datacenter_microgrid_sim'),
  },
  {
    title: 'Load Profiling with Explainable AI',
    tag: 'Machine learning · Published research',
    summary:
      'Clustered smart-meter data from 5,567 London households to segment consumers for demand response, using ensemble clustering on novel extracted features.',
    points: [
      'Benchmarked seven clustering algorithms on four validity indexes',
      'Ensemble clustering identified six distinct consumption patterns',
      'Published in Energies (2024), as co-first author',
    ],
    stack: ['Python', 'Clustering', 'Explainable AI'],
    href: gh('Clustering-EnergyConsumers'),
  },
];

export const more = [
  {
    title: 'Asomata Hydropower Forecasting',
    tag: 'Forecasting',
    summary:
      'Forecasts plant production from generation records and weather data, with Prophet and Temporal Fusion Transformer models.',
    stack: ['Python', 'Prophet', 'TFT'],
    href: gh('hydro-modelling-Asomata'),
  },
  {
    title: 'SolarWatch',
    tag: 'Monitoring',
    summary:
      'Performance monitoring for utility-scale solar sites that flags missing production data and days below 30% of rated capacity.',
    stack: ['SQL', 'SQLite', 'Python'],
    href: gh('SolarWatch'),
  },
  {
    title: 'NYC Child Care Deserts',
    tag: 'Optimization · Columbia IEOR',
    summary:
      'Mixed-integer model that eliminates child care deserts across NYC zip codes at minimum cost. Realistic constraints moved the bill from $167M to $231M.',
    stack: ['Python', 'Gurobi', 'MILP'],
    href: gh('nyc-childcare-optimization'),
  },
  {
    title: 'Medical Van Scheduling',
    tag: 'Optimization · Columbia IEOR',
    summary:
      'Rolling-horizon MIP that assigns mobile medical vans to maximize severity-weighted patients served, then builds a day-by-day schedule.',
    stack: ['Python', 'Gurobi', 'MIP'],
    href: gh('Optimization-Notebooks'),
  },
  {
    title: 'Greek Electricity Tariff Scraper',
    tag: 'Data engineering',
    summary:
      "Extracts tariff data from the Greek energy regulator's site into a structured CSV for analysis.",
    stack: ['Python', 'Selenium', 'pandas'],
    href: gh('GreekElectricity'),
  },
];

export const readout = [
  { value: '5,567', label: 'households clustered' },
  { value: '8,784', label: 'hours of dispatch per design' },
  { value: '7', label: 'U.S. power markets compared' },
  { value: '232', label: 'EIA datasets indexed' },
];

export const publications = [
  {
    title: 'Explainable AI-Based Ensemble Clustering for Load Profiling and Demand Response',
    authors: 'Co-first author, with Elissaios Sarmas and Vangelis Marinakis',
    venue: 'Energies, 17(22), 5559, 2024',
    summary:
      'Benchmarked seven clustering algorithms across 5,567 households and applied Explainable AI to make the segmentation interpretable for utilities.',
    href: 'https://doi.org/10.3390/en17225559',
  },
  {
    title: 'Short-Term Forecasting of Hydropower Plant Generation Using the Prophet Model',
    authors: 'With E. Sarmas, A. Anastasiadis, P. Papadimitriou and V. Marinakis',
    venue: 'AI & Data Analytics in the Energy Sector workshop, IISA 2025',
    summary:
      'A forecasting framework for the Asomata Hydropower Plant, evaluating Prophet and the impact of external regressors, in collaboration with PPC S.A.',
  },
];

export const skillGroups = [
  { name: 'Programming & data', items: ['Python', 'SQL', 'R', 'Git', 'Airflow', 'Databricks', 'Excel/VBA'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Vertica', 'Trino'] },
  { name: 'Modeling', items: ['Forecasting', 'Causal inference', 'Optimization', 'Gurobi', 'Clustering'] },
  { name: 'Visualization', items: ['Tableau', 'Power BI', 'Plotly'] },
  { name: 'Energy', items: ['Grid operations', 'SCADA', 'Generation & storage', 'Demand response'] },
  { name: 'Languages', items: ['English', 'Greek', 'French'] },
];

// To add your photo: save it as public/me.jpg, then change null to '/me.jpg'.
export const photo = null;

export const links = {
  github: gh('').replace(/\/$/, ''),
  linkedin: 'https://www.linkedin.com/in/aphroditi-fragkiadaki/',
};
