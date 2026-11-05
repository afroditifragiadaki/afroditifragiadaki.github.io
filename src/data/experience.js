// Work history and education. Each highlight is one short story: what the
// problem was, what was done about it, and what came of it.
export const experience = [
  {
    org: 'Tesla',
    role: 'Data Science & Analytics Intern, Residential Energy Operations',
    dates: 'May 2026 – Dec 2026',
    place: 'Palo Alto, CA',
    intro:
      'I build reports for stakeholders, run analyses as questions come up, and present the findings to technical and non-technical audiences.',
    highlights: [
      {
        title: 'Launch analytics',
        text: 'Lead analyst for Install with Tesla, a new option on Wall Connectors. I defined the program’s metrics from scratch, built the reporting funnel, and worked with program leads, finance and operations on what success means and whether to scale.',
      },
      {
        title: 'Model health monitoring',
        text: 'Diagnosing a production model used to mean ad hoc troubleshooting. I built a consolidated report that shows ML engineers what went wrong with a model in a given week, with alerts when performance drifts past set thresholds, and wrote the SLA and SOP for onboarding new models.',
      },
      {
        title: 'Price elasticity',
        text: 'I built a causal model of price elasticity of demand. A single average hid big differences between segments, so I moved to segment-level estimates. With the demand planning team it became a pricing tool for inventory issues, and the team has rolled out live price changes based on it.',
      },
      {
        title: 'HTML reporting',
        text: 'First on my team to host reports as HTML pages on a platform from our internal tools team. I wrote the team’s SLA and SOP for the process and gave the tools team feedback as an early user.',
      },
    ],
    stack: ['SQL', 'Python', 'Tableau', 'Airflow', 'Trino'],
  },
  {
    org: 'DSS Lab, Energy Policy Unit, NTUA',
    role: 'Data Analyst',
    dates: 'Feb 2025 – Aug 2025',
    place: 'Athens, Greece',
    intro:
      'I worked with PPC S.A., Greece’s national power utility, on forecasting and analytics for its generation assets.',
    highlights: [
      {
        title: 'Hydropower forecasting',
        text: 'Built a short-term generation forecasting algorithm with Prophet that conditions on weather forecasts and the plant’s maintenance schedule, giving planners a more reliable view of upcoming output.',
      },
      {
        title: 'Dashboards for dispatch',
        text: 'Delivered operational dashboards and time-series analytics to support dispatch decisions, and presented scoped analyses and recommendations directly to utility stakeholders.',
      },
      {
        title: 'Conference talk',
        text: 'Presented the forecasting work at the 5th International Workshop on AI & Data Analytics in the Energy Sector at IISA 2025.',
      },
    ],
    stack: ['Python', 'Prophet', 'Time series'],
  },
  {
    org: 'Greenwood Sustainable Infrastructure',
    role: 'Energy Analyst Intern',
    dates: 'Jun 2024 – Dec 2024',
    place: 'New York, NY',
    intro:
      'Greenwood owns a multi-site, utility-scale solar fleet. I was a day-to-day operational contact on the owner’s side, working directly with O&M teams and utilities.',
    highlights: [
      {
        title: 'Fleet operations',
        text: 'Investigated performance anomalies surfaced by SCADA and turned root-cause findings into corrective actions for O&M contractors.',
      },
      {
        title: 'Performance reporting',
        text: 'Delivered monthly and annual reports to management and external counterparties, covering asset KPIs, contractual obligations and cost variance against commitments.',
      },
      {
        title: 'Budget tools',
        text: 'Built Excel/VBA tools covering 12 sites that replaced a manual process for the yearly budget, budget-versus-actuals tracking and comparing renewal agreement terms.',
      },
    ],
    stack: ['SCADA', 'Excel/VBA', 'NetSuite'],
  },
  {
    org: 'DSS Lab, Energy Policy Unit, NTUA',
    role: 'Junior Researcher & Data Analyst',
    dates: 'Sep 2023 – May 2024',
    place: 'Athens, Greece',
    intro:
      'I worked on how utilities can use smart-meter data to find the right customers for demand-response programs.',
    highlights: [
      {
        title: 'Consumer segmentation',
        text: 'Applied unsupervised machine learning to large-scale smart-meter data to group consumers into load profiles. Partnering with another university, I paired these with survey-based demographic data for a more accurate targeting framework.',
      },
      {
        title: 'Publication',
        text: 'The research became a peer-reviewed paper in Energies, where I was co-first author.',
      },
      {
        title: 'Teaching',
        text: 'Taught 60+ students as a Teaching Assistant in Electric Measurements, running lab sessions on data acquisition, instrumentation and electrical system characterization.',
      },
    ],
    stack: ['Python', 'Clustering', 'Explainable AI'],
  },
];

export const education = [
  {
    org: 'Columbia University',
    role: 'MS in Business Analytics',
    dates: '2025 – Dec 2026 (expected)',
    place: 'New York, NY',
    intro:
      'Taught across the Business School and the Engineering School. GPA 4.165/4.0.',
    highlights: [
      {
        title: 'Coursework',
        text: 'Grid Modernization & Clean Technology, Optimization Models & Methods, Business Experiments: Causal Insights, AI Engineering, Generative AI.',
      },
      {
        title: 'Capstone with Ardian',
        text: 'Delivered a daily-refreshing forecast of Ontario system demand using Chronos-2, targeting the five annual peak hours that set Global Adjustment charges, so the client could time dispatch and curtailment to cut those charges.',
      },
      {
        title: 'Honors',
        text: 'Business Analytics Graduate Fellowship, Paul Nichoplas Fellowship, and scholarships from the Bodossaki, A.G. Leventis and Gerondelis Foundations.',
      },
    ],
  },
  {
    org: 'National Technical University of Athens',
    role: 'BEng & MEng in Electrical and Computer Engineering',
    dates: '2018 – Feb 2024',
    place: 'Athens, Greece',
    intro:
      'An integrated master’s degree in electrical and computer engineering.',
    highlights: [
      {
        title: 'Thesis',
        text: 'Analyzed consumption patterns across 5,567 London households. The work grew into my paper in Energies.',
      },
    ],
  },
];
