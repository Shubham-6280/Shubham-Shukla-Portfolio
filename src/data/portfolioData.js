export const personalInfo = {
  name: "Shubham Shukla",
  title: "Aspiring Data Analyst",
  label: "ASPIRING DATA ANALYST | OPEN TO OPPORTUNITIES",
  headline: "Turning Data Into Decisions.",
  subheadline: "I'm Shubham Shukla, a Computer Science student exploring the power of SQL, Excel, Power BI, and Python to transform raw information into actionable insights.",
  email: "ss6280415068@gmail.com",
  phone: "+91-6280415468",
  github: "https://github.com/Shubham-6280",
  linkedin: "https://linkedin.com/in/shubham-shukla-60b8b4375",
  location: "Punjab, India",
  educationShort: "B.Tech CSE, RIMT University (2023–2027)",
  photo: "/assets/shubham-photo.jpg",
  resumePath: "/resume.pdf",
  bio: "I am a Computer Science and Engineering student passionate about transforming raw data into meaningful insights. I work with SQL, Microsoft Excel, Power BI, and Python fundamentals to explore datasets, identify patterns, and build insightful reports and dashboards. Through hands-on projects, I am developing my skills in data cleaning, exploratory analysis, querying, and data visualization."
};

export const aboutData = {
  heading: "Curious About Data. Focused on Insights.",
  paragraphs: [
    "My journey began with Computer Science foundations, where I developed a strong interest in understanding how real-world systems produce and rely on data. That curiosity quickly led me to Data Analytics, where raw numbers turn into structured stories.",
    "I enjoy working directly with structured datasets — writing MySQL queries to clean and interrogate records, building structured workbooks in Microsoft Excel, and designing interactive Power BI dashboards that communicate business performance at a glance.",
    "As an aspiring Data Analyst, I believe in honest, practical learning through project building. I focus on understanding the business question first, ensuring data cleanliness next, and choosing the right visual or query technique to make the findings clear and actionable."
  ],
  qualities: [
    {
      title: "Analytical Thinking",
      desc: "Breaking down high-level business questions into structured queries, clean aggregations, and measurable KPIs.",
      icon: "Binary"
    },
    {
      title: "Problem Solving",
      desc: "Investigating dataset inconsistencies, handling missing values, and deriving structured answers from messy raw data.",
      icon: "Cpu"
    },
    {
      title: "Attention to Detail",
      desc: "Ensuring accurate data cleaning, proper metric labeling, formula precision, and visually clean reporting.",
      icon: "CheckCircle2"
    },
    {
      title: "Continuous Learning",
      desc: "Actively expanding practical proficiency in Power Query, intermediate SQL techniques, and data workflows.",
      icon: "Sparkles"
    },
    {
      title: "Business Intelligence & Visualization",
      desc: "Translating rows of data into intuitive executive dashboards that highlight trends, segments, and operational drivers.",
      icon: "BarChart3"
    }
  ]
};

export const skillsCategories = [
  {
    category: "SQL & Databases",
    theme: "cyan",
    tagline: "Relational Querying & Data Exploration",
    skills: [
      { name: "MySQL", note: "Primary relational database engine used in projects" },
      { name: "SQL Queries", note: "SELECT, WHERE filtering, ORDER BY sorting" },
      { name: "Filtering & Sorting", note: "Precise record slicing and boundary conditions" },
      { name: "JOINs", note: "Combining related tables across foreign keys" },
      { name: "Aggregations & GROUP BY", note: "COUNT, SUM, AVG, MIN, MAX calculations" },
      { name: "HAVING & Subqueries", note: "Aggregated condition filtering and nested queries" },
      { name: "CASE Statements", note: "Conditional categorical bucketing and labeling" }
    ]
  },
  {
    category: "Data Visualization & BI",
    theme: "emerald",
    tagline: "Interactive Dashboards & Business Reporting",
    skills: [
      { name: "Microsoft Power BI", note: "End-to-end report building and layout composition" },
      { name: "Power Query Fundamentals", note: "Data ingestion, cleaning, and preliminary transformations" },
      { name: "KPI Cards", note: "Executive metric summaries and high-level totals" },
      { name: "Charts & Slicers", note: "Bar, column, line visuals with multi-field slicers" },
      { name: "Interactive Report Creation", note: "Cross-filtering, user-friendly layouts, and drill-through" }
    ]
  },
  {
    category: "Spreadsheets",
    theme: "indigo",
    tagline: "Structured Data Organization & Operational Analysis",
    skills: [
      { name: "Microsoft Excel", note: "Core tool for tabular analysis and data organization" },
      { name: "Data Organization", note: "Structuring records, headers, and consistent data types" },
      { name: "Pivot Tables & Pivot Charts", note: "Dynamic multi-dimensional summarization" },
      { name: "Slicers & Timeline Filters", note: "Interactive spreadsheet filtering for dashboards" },
      { name: "Conditional Formatting", note: "Visual heatmaps, alert indicators, and benchmarks" }
    ]
  },
  {
    category: "Programming & Foundations",
    theme: "amber",
    tagline: "Core Programming & Algorithmic Problem Solving",
    skills: [
      { name: "Python Fundamentals", note: "Variables, loops, functions, lists, and basic problem solving" },
      { name: "Basic Problem Solving", note: "Algorithmic thinking and structured logical workflows" },
      { name: "Computer Science Foundations", note: "DBMS, computer architecture, data structures basics" },
      { name: "Git & GitHub", note: "Version control, repository management, and code documentation" }
    ]
  }
];

export const projects = [
  {
    id: "sales-powerbi",
    title: "Sales Analysis Dashboard",
    platform: "Power BI",
    category: "Business Intelligence / Data Visualization",
    badge: "Interactive BI Report",
    theme: "cyan",
    tagline: "Transforming retail sales records into executive KPI cards and segment trends.",
    description: "An interactive sales reporting dashboard designed to organize business data into clear visual summaries. The report uses KPI cards, charts, and slicers to make it easier to explore sales information and compare performance across available categories.",
    tools: ["Microsoft Power BI", "Power Query", "Data Visualization", "Interactive Reporting"],
    githubUrl: "https://github.com/Shubham-6280/Sales-Report_PowerBI",
    image: "/assets/sales-dashboard.png",
    hasLiveImage: true,
    highlights: [
      "Total Sales & Total Profit KPI cards for immediate executive overview",
      "Category and customer segment comparative visualizations",
      "Regional performance tracking and time-based sales trend analysis",
      "Interactive slicers enabling dynamic real-time cross-filtering"
    ],
    caseStudy: {
      objective: "To design a centralized, interactive business intelligence dashboard in Power BI that allows stakeholders to monitor overall revenue and profit, contrast performance across product categories, and isolate regional sales patterns without manually parsing raw spreadsheets.",
      dataset: "Transactional sales dataset encompassing multi-regional sales orders, customer demographic segments, product catalog categories, order dates, quantity, revenue, and profit margins.",
      toolsWorkflow: [
        {
          step: "1. Data Ingestion & Power Query",
          detail: "Loaded source data into Power BI Desktop, inspected schema data types, removed redundant records, and validated numeric consistency for sales and profit."
        },
        {
          step: "2. Metric & KPI Structuring",
          detail: "Configured primary KPI visual cards at the top of the report to give instant visibility into aggregated revenue and net profit."
        },
        {
          step: "3. Multi-Dimensional Visualizations",
          detail: "Built synchronized bar charts, category breakdowns, and time-series line graphs to observe seasonal and monthly movements."
        },
        {
          step: "4. User-Centric Interactivity",
          detail: "Implemented category, region, and segment slicers with cross-filtering behavior, ensuring that clicking any chart element updates the entire view dynamically."
        }
      ],
      keyFeatures: [
        "Executive KPI Cards (Total Sales, Total Profit)",
        "Sales Comparison across Product Categories",
        "Performance by Customer Segments",
        "Geographic & Regional Performance Breakdown",
        "Time-Series Trend Line Visualizations",
        "Interactive Filter Slicers"
      ],
      findings: [
        "Visual summaries made top-performing categories immediately identifiable relative to lower-margin categories.",
        "Regional breakdown highlighted variances in sales concentration across geographic zones.",
        "Customer segment comparisons surfaced variations in order volume versus profitability."
      ],
      learnings: "Developed practical proficiency in Power BI dashboard design principles: visual hierarchy, thoughtful color contrast, avoiding cluttered visuals, and preparing clean datasets in Power Query prior to visualization."
    }
  },
  {
    id: "zepto-sql",
    title: "Zepto SQL Data Analysis",
    platform: "MySQL",
    category: "SQL / Exploratory Data Analysis",
    badge: "Relational Database Project",
    theme: "emerald",
    tagline: "Investigating 10-minute grocery inventory, pricing, and revenue with structured queries.",
    description: "A SQL-based data analysis project focused on exploring Zepto-related product and inventory data. The project uses MySQL queries to investigate the dataset, organize information, and answer analytical questions through structured SQL operations.",
    tools: ["MySQL", "SELECT Queries", "Filtering & Sorting", "Aggregations", "GROUP BY & HAVING", "CASE Statements"],
    githubUrl: "https://github.com/Shubham-6280/Zepto---SQL---Data---Analysis---Project",
    image: null,
    hasLiveImage: false,
    sqlFileUrl: "/assets/zepto-analysis.sql",
    highlights: [
      "Database schema creation and multi-attribute data cleaning",
      "Currency unit conversion (paise to rupees) and zero-price filtering",
      "8 distinct analytical business queries addressing pricing, inventory, and revenue",
      "CASE statements for weight-based SKU categorization (Low, Medium, Bulk)"
    ],
    caseStudy: {
      objective: "To perform exploratory data analysis and answer commercial retail questions for a quick-commerce grocery catalog using MySQL — uncovering high-discount products, premium out-of-stock items, category revenue estimates, and weight-based value metrics.",
      dataset: "zepto_v2.csv dataset containing SKU ID, product name, product category, MRP, discount percentage, available quantity, discounted selling price, weight in grams, and out-of-stock boolean flag.",
      toolsWorkflow: [
        {
          step: "1. Schema Design",
          detail: "Created the `zepto` table with appropriate numeric types (NUMERIC(8,2) for MRP and selling price, INT for weights and quantities, BOOLEAN for stock status)."
        },
        {
          step: "2. Data Cleaning & Normalization",
          detail: "Checked for NULLs across all 10 columns, deleted anomalies where MRP or price was zero, and updated raw currency fields by dividing by 100.0 to convert paise into rupees."
        },
        {
          step: "3. Exploratory Data Analysis (EDA)",
          detail: "Queried distinct categories, in-stock vs out-of-stock counts, and identified duplicate product names with HAVING count(sku_id) > 1."
        },
        {
          step: "4. Business Insights Generation",
          detail: "Engineered 8 SQL queries to answer critical quick-commerce inventory and pricing questions."
        }
      ],
      sampleQueries: [
        {
          title: "Category Estimated Revenue",
          query: `SELECT category,\n  SUM(discountedSellingPrice * availableQuantity) AS total_revenue\nFROM zepto\nGROUP BY category\nORDER BY total_revenue DESC;`,
          explanation: "Calculates total potential revenue per category by multiplying available stock by discounted selling price."
        },
        {
          title: "High MRP Out-of-Stock SKUs",
          query: `SELECT DISTINCT name, mrp\nFROM zepto\nWHERE outOfStock = TRUE AND mrp > 300\nORDER BY mrp DESC;`,
          explanation: "Surfaces high-ticket items that are currently unavailable, pointing directly to potential lost revenue opportunities."
        },
        {
          title: "Best Value (Price Per Gram)",
          query: `SELECT DISTINCT name, weightInGms, discountedSellingPrice,\n  ROUND(discountedSellingPrice / weightInGms, 2) AS price_per_gram\nFROM zepto\nWHERE weightInGms >= 100\nORDER BY price_per_gram ASC;`,
          explanation: "Normalizes pricing across variable product package sizes to reveal true value-for-money items."
        },
        {
          title: "Weight Categorization via CASE",
          query: `SELECT DISTINCT name, weightInGms,\n  CASE\n    WHEN weightInGms < 1000 THEN 'Low'\n    WHEN weightInGms < 5000 THEN 'Medium'\n    ELSE 'Bulk'\n  END AS weight_category\nFROM zepto;`,
          explanation: "Classifies products into logistics-friendly tiers for warehouse storage and delivery packaging."
        }
      ],
      findings: [
        "Identified categories offering the highest average discounts, useful for assessing loss-leader promotional strategies.",
        "Detected high-priced items that were out-of-stock, showing where inventory replenishment directly protects high-margin revenue.",
        "Normalized unit prices (price per gram) to distinguish genuinely discounted goods from packaging-based variations."
      ],
      learnings: "Gained hands-on experience writing structured SQL pipelines, understanding the importance of cleaning data before aggregation, and structuring queries so non-technical team members can interpret the output immediately."
    }
  },
  {
    id: "call-centre-excel",
    title: "Call Centre Performance Analysis",
    platform: "Microsoft Excel",
    category: "Excel / Business Reporting",
    badge: "Operational Dashboard",
    theme: "indigo",
    tagline: "Analyzing 1,000+ customer support calls with Pivot Tables, charts, and slicers.",
    description: "An Excel-based call centre analysis project that organizes call centre data and uses spreadsheet analysis and visual reporting to help explore operational patterns and performance indicators.",
    tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Slicers", "Conditional Formatting", "Spreadsheet Analysis"],
    githubUrl: "https://github.com/Shubham-6280/Excel-Project",
    image: "/assets/call-centre-excel.png",
    hasLiveImage: true,
    highlights: [
      "1,000+ support calls analyzed across multiple operational metrics",
      "Dynamic Pivot Tables summarizing call duration, ratings, and resolution",
      "Representative productivity monitoring and scorecard breakdown",
      "Interactive Slicers for zero-friction filtering by date and agent"
    ],
    caseStudy: {
      objective: "To convert a dense spreadsheet of 1,000+ raw customer support call logs into a responsive management dashboard that tracks operational volume, customer satisfaction ratings, resolution duration, and agent performance.",
      dataset: "Call Centre Project.xlsx workbook containing 1,000+ call records: call timestamps, agent identifiers, customer ratings (1–5 scale), call duration, issue categories, and resolution status.",
      toolsWorkflow: [
        {
          step: "1. Data Validation & Hygiene",
          detail: "Audited raw columns for incomplete logs, standardized duration formats, and created helper columns for duration bands."
        },
        {
          step: "2. Pivot Table Aggregation",
          detail: "Constructed summary pivot tables tracking total calls handled, average call handling time (AHT), and customer satisfaction (CSAT) scores per representative."
        },
        {
          step: "3. Dynamic Visualizations",
          detail: "Generated linked Pivot Charts illustrating call volume distributions, agent rating comparisons, and daily trends."
        },
        {
          step: "4. Dashboard Layout & Slicers",
          detail: "Arranged charts into a clean dashboard interface and added Slicers for interactive filtering without modifying the raw data tab."
        }
      ],
      keyFeatures: [
        "1,000+ Calls Cleaned & Organized",
        "Agent Performance & Productivity Scorecards",
        "Customer Satisfaction Rating Distribution",
        "Call Duration & Operational Volume Analysis",
        "Interactive Slicers & Timeline Controls",
        "Conditional Formatting for Highlighted Metrics"
      ],
      findings: [
        "Spreadsheet summaries clearly distinguished agents maintaining consistently high satisfaction ratings.",
        "Call volume patterns revealed peak hours during the day, highlighting when operational staffing needs are highest.",
        "Identified call duration distributions across different support categories."
      ],
      learnings: "Learned how to harness Excel's native Pivot Tables and Slicers to build an interactive dashboard that behaves like a software application, emphasizing clarity, clean layout, and minimal clutter."
    }
  }
];

export const certifications = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    organization: "Tata (via Forage)",
    issuer: "Tata Group & Forage",
    badge: "Enterprise Data Analytics",
    description: "Completed practical job simulation analyzing enterprise business scenarios, applying generative AI for data insights, exploratory data analysis, and commercial decision support.",
    verified: true,
    skills: ["GenAI in Analytics", "Exploratory Data Analysis", "Business Intelligence", "Enterprise Reporting"]
  },
  {
    title: "Data Analytics Job Simulation",
    organization: "Deloitte Australia (via Forage)",
    issuer: "Deloitte Australia & Forage",
    badge: "Consulting Data Analytics",
    description: "Completed virtual internship simulation examining client operational datasets, structuring data hygiene, evaluating key performance metrics, and creating executive summary visualizations.",
    verified: true,
    skills: ["Data Analysis", "Operational Metrics", "Dashboard Communication", "Data Hygiene"]
  }
];

export const education = {
  degree: "Bachelor of Technology — Computer Science and Engineering",
  institution: "RIMT University, Punjab",
  period: "Aug 2023 – 2027 (Pursuing)",
  location: "Punjab, India",
  cgpa: "7.5",
  description: "Building strong foundational competence in Computer Science, Database Management Systems (DBMS), algorithmic problem solving, structured querying, and data analytics methodologies.",
  highlights: [
    "Database Management Systems (Relational Data Modeling & MySQL)",
    "Object-Oriented Programming & Python Fundamentals",
    "Data Structures & Algorithmic Logic",
    "Continuous practical project implementation in SQL, Excel, and Power BI"
  ]
};

// Interactive sample Zepto dataset for live SQL query playground
export const sampleZeptoDataset = [
  { sku_id: 101, name: "Amul Butter 500g", category: "Dairy & Breakfast", mrp: 275.0, discountPercent: 8.0, discountedSellingPrice: 253.0, weightInGms: 500, outOfStock: false, availableQuantity: 42 },
  { sku_id: 102, name: "Mother Dairy Milk 1L", category: "Dairy & Breakfast", mrp: 68.0, discountPercent: 0.0, discountedSellingPrice: 68.0, weightInGms: 1000, outOfStock: false, availableQuantity: 110 },
  { sku_id: 103, name: "Epigamia Greek Yogurt", category: "Dairy & Breakfast", mrp: 60.0, discountPercent: 15.0, discountedSellingPrice: 51.0, weightInGms: 100, outOfStock: false, availableQuantity: 28 },
  { sku_id: 104, name: "Aashirvaad Atta 5kg", category: "Atta, Rice & Dal", mrp: 260.0, discountPercent: 12.0, discountedSellingPrice: 228.8, weightInGms: 5000, outOfStock: false, availableQuantity: 65 },
  { sku_id: 105, name: "Fortune Sunlite Oil 1L", category: "Oils & Masalas", mrp: 165.0, discountPercent: 14.0, discountedSellingPrice: 141.9, weightInGms: 910, outOfStock: false, availableQuantity: 50 },
  { sku_id: 106, name: "Ferrero Rocher 16pcs", category: "Chocolates & Snacks", mrp: 549.0, discountPercent: 18.0, discountedSellingPrice: 450.0, weightInGms: 200, outOfStock: true, availableQuantity: 0 },
  { sku_id: 107, name: "Tata Tea Gold 500g", category: "Tea & Coffee", mrp: 340.0, discountPercent: 10.0, discountedSellingPrice: 306.0, weightInGms: 500, outOfStock: false, availableQuantity: 34 },
  { sku_id: 108, name: "Nescafe Classic Coffee 100g", category: "Tea & Coffee", mrp: 385.0, discountPercent: 5.0, discountedSellingPrice: 365.75, weightInGms: 100, outOfStock: true, availableQuantity: 0 },
  { sku_id: 109, name: "Surf Excel Matic 2kg", category: "Cleaning & Household", mrp: 490.0, discountPercent: 22.0, discountedSellingPrice: 382.2, weightInGms: 2000, outOfStock: false, availableQuantity: 19 },
  { sku_id: 110, name: "Pringles Sour Cream 107g", category: "Chocolates & Snacks", mrp: 120.0, discountPercent: 25.0, discountedSellingPrice: 90.0, weightInGms: 107, outOfStock: false, availableQuantity: 80 }
];

export const sampleSqlPlaygroundQueries = [
  {
    id: "q1",
    label: "Top Discounted Products",
    sql: "SELECT name, mrp, discountPercent, discountedSellingPrice FROM zepto ORDER BY discountPercent DESC LIMIT 5;",
    description: "Identifies the highest discount offers currently running in the store."
  },
  {
    id: "q2",
    label: "High-MRP Out of Stock Items",
    sql: "SELECT name, mrp, category FROM zepto WHERE outOfStock = true AND mrp > 300 ORDER BY mrp DESC;",
    description: "Detects premium inventory items currently suffering from stockouts."
  },
  {
    id: "q3",
    label: "Category Estimated Revenue",
    sql: "SELECT category, ROUND(SUM(discountedSellingPrice * availableQuantity), 2) AS estimated_revenue FROM zepto GROUP BY category ORDER BY estimated_revenue DESC;",
    description: "Calculates total potential revenue generated by currently available inventory per category."
  },
  {
    id: "q4",
    label: "Value for Money (Price/Gram)",
    sql: "SELECT name, weightInGms, discountedSellingPrice, ROUND(discountedSellingPrice / weightInGms, 3) AS price_per_gram FROM zepto WHERE weightInGms >= 100 ORDER BY price_per_gram ASC LIMIT 5;",
    description: "Evaluates best value for customers based on price per gram."
  },
  {
    id: "q5",
    label: "Weight Logistics Tiers (CASE)",
    sql: "SELECT name, weightInGms, CASE WHEN weightInGms < 1000 THEN 'Low' WHEN weightInGms < 5000 THEN 'Medium' ELSE 'Bulk' END AS weight_tier FROM zepto LIMIT 6;",
    description: "Segments products into logistics fulfillment categories."
  }
];
