import {
  ProfileType,
  JobType,
  ProjectType,
  PostType,
  HeroeType,
  SkillCategoryType,
  EducationType,
  CertificationType,
  SpecializationType,
} from "@/types";

export const fallbackProfile: ProfileType = {
  _id: "bilal-profile-01",
  fullName: "Muhammad Bilal Farid",
  headline: "Machine Learning Engineer & Backend Software Engineer",
  profileImage: {
    image: "/pictures/bilal-photo.jpg",
    lqip: "",
    alt: "Muhammad Bilal Farid",
  },
  shortBio:
    "Machine Learning Engineer & Backend Software Engineer with a Bachelor's in Computer Software Engineering (3.69 GPA) from Riphah International University. Proven track record in atmospheric AQI forecasting (10Pearls), satellite deforestation AI pipelines (AXI Technologies), edge ADAS systems (Mechaline), and high-performance FastAPI backends.",
  email: "bilaldrosh1@gmail.com",
  location: "Islāmābād, Pakistan (Remote & On-site)",
  resumeURL: "https://github.com/bilalfarid-1",
  og: "",
  fullBio: [
    {
      _key: "bio1",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "c1",
          _type: "span",
          text: "I am Muhammad Bilal Farid, a Machine Learning Engineer and Backend Developer specializing in multi-horizon time-series forecasting, deep learning computer vision, and high-throughput asynchronous backend systems. I hold a Bachelor's degree in Computer Software Engineering from Riphah International University with a 3.69 / 4.00 CGPA.",
        },
      ],
    },
    {
      _key: "bio2",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "c2",
          _type: "span",
          text: "My engineering experience includes designing serverless MLOps platforms at 10Pearls, developing satellite remote sensing AI pipelines at AXI Technologies, architecting real-time multithreaded edge ADAS pipelines at Mechaline, and mentoring over 45 students as a Teaching Assistant in Software Construction.",
        },
      ],
    },
    {
      _key: "bio3",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "c3",
          _type: "span",
          text: "My core technical stack centers around Python, FastAPI, PyTorch, Scikit-Learn, XGBoost, Node.js/TypeScript, PostgreSQL, Redis, Docker, Playwright, and Streamlit.",
        },
      ],
    },
  ],
  usage: [
    {
      _key: "u1",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "u_c1",
          _type: "span",
          text: "Hardware & Tools: Windows 11 PC, VS Code, PowerShell & WSL, Git, Docker, Postman, Google Chrome, and Playwright Chromium.",
        },
      ],
    },
  ],
};

export const fallbackJobs: JobType[] = [
  {
    _id: "job-1",
    name: "10Pearls Pakistan",
    jobTitle: "Data Science Intern",
    logo: "/company-logos/10pearls.png",
    url: "https://aqi-predictors.streamlit.app",
    location: "Islāmābād, Pakistan · Remote",
    workType: "Internship",
    description:
      "Built an end-to-end Air Quality Index (AQI) forecasting platform (Pearls AQI / AeroSense) predicting 3-day pollution trends across 8 urban centers. Engineered 81 time-series features, benchmarked XGBoost (R² = 0.941, MAE = 6.42), integrated TreeSHAP explainability, and automated daily retraining via GitHub Actions and Hopsworks Feature Store.",
    startDate: "2026-07-01",
    endDate: "2026-09-01",
    skills: ["Machine Learning", "Python", "XGBoost", "TreeSHAP", "Hopsworks", "Streamlit", "MLOps", "GitHub Actions"],
  },
  {
    _id: "job-2",
    name: "AXI Technologies",
    jobTitle: "Backend Engineer",
    logo: "/company-logos/axi.png",
    url: "https://github.com/bilalfarid-1/deforestation-project",
    location: "Islāmābād, Pakistan · On-site",
    workType: "Internship",
    description:
      "Engineered backend architecture and geospatial AI pipeline for GreenGuard 2.0 satellite deforestation detection. Built Node.js/Express REST APIs with JWT & dual PostgreSQL/SQLite persistence, converted multi-spectral Sentinel-1/2 stacks, and optimized Attention U-Net + U-Net++ PyTorch inference on CPU by 50% (38s to 18s).",
    startDate: "2026-06-01",
    endDate: "2026-08-01",
    skills: ["Node.js", "TypeScript", "PyTorch", "Remote Sensing", "PostgreSQL", "GIS", "Express.js", "Leaflet"],
  },
  {
    _id: "job-3",
    name: "Mechaline Pvt Ltd",
    jobTitle: "AI Research Lead",
    logo: "/company-logos/mechaline.png",
    url: "https://github.com/bilalfarid-1",
    location: "Islāmābād, Pakistan · Remote",
    workType: "Internship",
    description:
      "Developed a unified real-time Level-2 ADAS and Predictive Fuel Intelligence pipeline on mobile edge. Architected a 5-thread producer-consumer architecture boosting frame rates from 9 FPS to 30+ FPS, eliminated expensive LiDAR via software monocular approximation, and achieved 91.54% R² fuel prediction with Random Forest.",
    startDate: "2026-05-01",
    endDate: "2026-07-01",
    skills: ["Computer Vision", "YOLOv11", "Multithreading", "Random Forest", "Edge AI", "Telematics"],
  },
  {
    _id: "job-4",
    name: "Riphah International University",
    jobTitle: "Teaching Assistant",
    logo: "/company-logos/riphah.png",
    url: "https://riphah.edu.pk",
    location: "Islāmābād, Pakistan · On-site",
    workType: "Part-time",
    description:
      "Mentored and graded 45–50 undergraduate students in Software Construction & Development. Guided students through real-world software architecture, requirement engineering, UML design modeling (use cases, class diagrams, sequence diagrams), and test-driven development.",
    startDate: "2025-09-01",
    endDate: "2026-01-01",
    skills: ["Software Architecture", "UML Modeling", "Agile Methodologies", "Code Review"],
  },
  {
    _id: "job-5",
    name: "Digital Empowerment Network",
    jobTitle: "Frontend Developer",
    logo: "/company-logos/den.png",
    url: "https://github.com/bilalfarid-1",
    location: "Islāmābād, Pakistan · Remote",
    workType: "Internship",
    description:
      "Designed and implemented responsive, accessible web interfaces and component systems. Collaborated across engineering teams to build modular layouts with HTML5, CSS3, JavaScript, and Bootstrap.",
    startDate: "2024-07-01",
    endDate: "2025-03-01",
    skills: ["JavaScript", "Bootstrap", "CSS3", "Responsive UI", "Web Performance"],
  },
];

export const fallbackProjects: ProjectType[] = [
  {
    _id: "proj-1",
    name: "GreenGuard 2.0 — Satellite Deforestation AI",
    slug: "deforestation-project",
    tagline:
      "Bi-temporal satellite deforestation detection & monitoring platform using Attention U-Net & Sentinel-1/2 multi-spectral stacks.",
    projectUrl: "https://github.com/bilalfarid-1/deforestation-project",
    repository: "https://github.com/bilalfarid-1/deforestation-project",
    logo: "",
    coverImage: {
      image: "/pictures/school.jfif",
      alt: "GreenGuard 2.0 Deforestation AI",
      lqip: "",
    },
    description: [
      {
        _key: "p1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc1",
            _type: "span",
            text: "Engineered the end-to-end backend architecture and geospatial AI pipeline for GreenGuard 2.0 satellite deforestation detection. Features Node.js/Express REST APIs with JWT & dual PostgreSQL/SQLite persistence, converted multi-spectral Sentinel-1/2 stacks, and optimized Attention U-Net + U-Net++ PyTorch CPU inference latency by 50% (from 38s down to 18s).",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-2",
    name: "Pearls AQI — Atmospheric Pollution Predictor",
    slug: "aqi-predictor",
    tagline:
      "3-Day multi-horizon air quality forecasting platform & serverless MLOps pipeline built during 10Pearls internship.",
    projectUrl: "https://aqi-predictors.streamlit.app",
    repository: "https://github.com/bilalfarid-1/aqi-predictor",
    logo: "",
    coverImage: {
      image: "/pictures/dietition.jfif",
      alt: "Pearls AQI Predictor",
      lqip: "",
    },
    description: [
      {
        _key: "p2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc2",
            _type: "span",
            text: "Built an end-to-end Air Quality Index (AQI) forecasting platform (Pearls AQI / AeroSense) predicting 3-day pollution trends across 8 urban centers. Engineered 81 time-series features, benchmarked XGBoost (R² = 0.941, MAE = 6.42), integrated TreeSHAP explainability, and automated daily retraining via GitHub Actions and Hopsworks Feature Store with a live Streamlit dashboard.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-3",
    name: "SwifTrip — AI-Powered Travel Booking Platform",
    slug: "swiftrip",
    tagline:
      "Unified intelligent travel planning, agency management & tourist itinerary booking platform.",
    projectUrl: "https://github.com/SwifTrip",
    repository: "https://github.com/SwifTrip",
    logo: "",
    coverImage: {
      image: "/pictures/bus.jfif",
      alt: "SwifTrip Travel Platform",
      lqip: "",
    },
    description: [
      {
        _key: "p3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc3",
            _type: "span",
            text: "Comprehensive travel and agency management platform featuring automated booking workflows, tourist package configuration, dynamic route scheduling, and interactive booking management for tourists and travel agencies.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-4",
    name: "VittoriaX — Enterprise Digital Solutions",
    slug: "vittoriax",
    tagline:
      "Modern enterprise client portal, service automation platform & digital transformation engine.",
    projectUrl: "https://vittoriax.com",
    repository: "https://github.com/m-bilalfarid/VittoriaX_Client",
    logo: "",
    coverImage: {
      image: "/pictures/e-commerse.jfif",
      alt: "VittoriaX Enterprise Platform",
      lqip: "",
    },
    description: [
      {
        _key: "p4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc4",
            _type: "span",
            text: "High-performance enterprise client portal and service automation platform engineered with modular frontend architecture, responsive client interactions, and scalable digital service workflows.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-5",
    name: "URL Shortener Microservice API",
    slug: "url-shortener-api",
    tagline:
      "High-speed Base62 URL shortener with sliding-window rate limiting, instant 307 redirects & click telemetry.",
    projectUrl: "http://localhost:8002/docs",
    repository: "https://github.com/bilalfarid-1/url-shortener-api",
    logo: "",
    coverImage: {
      image: "/pictures/to-do list.jfif",
      alt: "URL Shortener API",
      lqip: "",
    },
    description: [
      {
        _key: "p5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc5",
            _type: "span",
            text: "FastAPI microservice featuring Base62 encoding/decoding, MD5/SHA collision resolution, sliding rate-limiting middleware, non-blocking 307 redirects, and time-series click telemetry.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-6",
    name: "Food Ordering & Live Delivery Platform",
    slug: "food-ordering-app",
    tagline:
      "Full-stack food ordering platform with dynamic dish catalog, cart engine, and 5-stage live order tracking.",
    projectUrl: "http://localhost:8000",
    repository: "https://github.com/bilalfarid-1/FoodOrderingApp",
    logo: "",
    coverImage: {
      image: "/pictures/e-commerse.jfif",
      alt: "Food Ordering App",
      lqip: "",
    },
    description: [
      {
        _key: "p6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc6",
            _type: "span",
            text: "A complete full-stack web application featuring FastAPI backend, SQLite persistence, dynamic cart calculations with promo codes, mock payment simulation, and a responsive Tailwind CSS SPA frontend with live order progression.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-7",
    name: "House Prices Predictive Regression",
    slug: "house-prices-regression",
    tagline:
      "End-to-end ML regression pipeline with 5-fold cross-validation stacking ensemble (RMSLE 0.1080) & Streamlit UI.",
    projectUrl: "http://localhost:8501",
    repository: "https://github.com/bilalfarid-1/house-prices-regression",
    logo: "",
    coverImage: {
      image: "/pictures/dietition.jfif",
      alt: "House Prices Regression",
      lqip: "",
    },
    description: [
      {
        _key: "p7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc7",
            _type: "span",
            text: "Engineered feature transformers with log skewness correction, Optuna hyperparameter tuning, multi-algorithm stacking regressor (XGBoost, LightGBM, RidgeCV), and an interactive Streamlit property valuation dashboard.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-8",
    name: "Job Application Tracker API",
    slug: "job-application-tracker-api",
    tagline:
      "Production-grade FastAPI recruitment API with JWT auth, application status workflow machine & analytics.",
    projectUrl: "http://localhost:8001/docs",
    repository: "https://github.com/bilalfarid-1/job-application-tracker-api",
    logo: "",
    coverImage: {
      image: "/pictures/school.jfif",
      alt: "Job Application Tracker API",
      lqip: "",
    },
    description: [
      {
        _key: "p8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc8",
            _type: "span",
            text: "FastAPI REST microservice with OAuth2 & JWT security (bcrypt 12 rounds), application lifecycle state machine (Applied -> Interviewing -> Offered), multi-field search and pagination, and pipeline analytics.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-9",
    name: "Customer Churn Prediction",
    slug: "customer-churn-prediction",
    tagline:
      "Customer churn machine learning classification pipeline with Optuna hyperparameter optimization & SHAP.",
    projectUrl: "https://github.com/bilalfarid-1/customer-churn-prediction",
    repository: "https://github.com/bilalfarid-1/customer-churn-prediction",
    logo: "",
    coverImage: {
      image: "/pictures/e-commerse.jfif",
      alt: "Customer Churn Prediction",
      lqip: "",
    },
    description: [
      {
        _key: "p9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc9",
            _type: "span",
            text: "Classification system identifying high-risk customer churn patterns using tree ensembles, automated class rebalancing, and SHAP explainability values.",
          },
        ],
      },
    ],
  },
  {
    _id: "proj-10",
    name: "Shopping & E-Commerce Web App",
    slug: "shopping-app",
    tagline:
      "Modern e-commerce shopping web application with product search, category browsing & checkout flow.",
    projectUrl: "https://github.com/bilalfarid-1/shopping-app",
    repository: "https://github.com/bilalfarid-1/shopping-app",
    logo: "",
    coverImage: {
      image: "/pictures/e-commerse.jfif",
      alt: "Shopping App",
      lqip: "",
    },
    description: [
      {
        _key: "p10",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pc10",
            _type: "span",
          },
        ],
      },
    ],
  },
];

export const fallbackHeroes: HeroeType[] = [
  {
    _id: "hero-1",
    _createdAt: "2026-01-01",
    name: "Andrej Karpathy",
    url: "https://twitter.com/karpathy",
    met: false,
  },
  {
    _id: "hero-2",
    _createdAt: "2026-01-01",
    name: "Sebastián Ramírez (tiangolo)",
    url: "https://twitter.com/tiangolo",
    met: false,
  },
  {
    _id: "hero-3",
    _createdAt: "2026-01-01",
    name: "Victor Eke",
    url: "https://victoreke.com",
    met: false,
  },
];

export const fallbackSpecializations: SpecializationType[] = [
  {
    title: "Backend & Scalable APIs",
    icon: "BiServer",
    tagline: "High-throughput asynchronous web services & real-time sockets",
    description:
      "Architecting robust RESTful and WebSocket APIs using Python FastAPI, Pydantic, PostgreSQL, SQLite, and Redis caching with Docker containerization.",
    tags: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "JWT"],
  },
  {
    title: "Machine Learning & Forecasting",
    icon: "BiBrain",
    tagline: "Predictive pipelines, time-series forecasting & model interpretability",
    description:
      "Developing end-to-end regression and classification models using XGBoost, Random Forest, Scikit-Learn, SHAP explainability, and Streamlit interactive dashboards.",
    tags: ["Scikit-Learn", "XGBoost", "Pandas", "SHAP", "Streamlit", "NumPy"],
  },
  {
    title: "Automated Scraping & ETL",
    icon: "BiNetworkChart",
    tagline: "Resilient headless scrapers & multi-source data processing",
    description:
      "Building high-speed distributed scrapers using Playwright and BeautifulSoup with automated pagination, CAPTCHA handling, and structured data pipelines.",
    tags: ["Playwright", "BeautifulSoup", "Asyncio", "Data Pipelines", "JSON/CSV"],
  },
  {
    title: "Full-Stack Web Applications",
    icon: "BiCodeAlt",
    tagline: "Responsive frontends, interactive state & clean component UI",
    description:
      "Engineering modern, accessible web applications with Next.js 14, React, Tailwind CSS, TypeScript, and Framer Motion spring physics.",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export const fallbackSkills: SkillCategoryType[] = [
  {
    title: "Programming Languages",
    iconName: "BiCodeCurly",
    skills: [
      { name: "Python", level: "Advanced", description: "FastAPI, ML, Automation" },
      { name: "TypeScript / JavaScript", level: "Proficient", description: "Next.js, React, Node.js" },
      { name: "SQL", level: "Proficient", description: "PostgreSQL, SQLite queries & schema" },
      { name: "Dart / Flutter", level: "Intermediate", description: "Cross-platform mobile apps" },
      { name: "Java / C++", level: "Intermediate", description: "OOP, Data Structures & Algorithms" },
    ],
  },
  {
    title: "Frameworks & Web Technologies",
    iconName: "BiLayer",
    skills: [
      { name: "FastAPI", level: "Advanced", description: "Asynchronous APIs, Dependency Injection" },
      { name: "Next.js 14 / React", level: "Proficient", description: "App Router, Server Components" },
      { name: "Tailwind CSS", level: "Advanced", description: "Responsive layouts, Dark mode design" },
      { name: "Streamlit", level: "Advanced", description: "Interactive ML dashboards & tools" },
      { name: "Uvicorn & Starlette", level: "Proficient", description: "ASGI web server production deployment" },
    ],
  },
  {
    title: "Machine Learning & AI",
    iconName: "BiBrain",
    skills: [
      { name: "Scikit-Learn", level: "Advanced", description: "Supervised & Unsupervised ML" },
      { name: "XGBoost & LightGBM", level: "Proficient", description: "Gradient boosting & ensemble models" },
      { name: "SHAP", level: "Proficient", description: "Model interpretability & feature importance" },
      { name: "Pandas & NumPy", level: "Advanced", description: "Data wrangling, cleaning & matrix ops" },
      { name: "OpenCV & GDAL", level: "Intermediate", description: "Satellite imagery & computer vision" },
    ],
  },
  {
    title: "Databases, DevOps & Tools",
    iconName: "BiWrench",
    skills: [
      { name: "Docker", level: "Proficient", description: "Containerization & multi-stage builds" },
      { name: "PostgreSQL & SQLite", level: "Advanced", description: "Relational modeling, indexing" },
      { name: "Redis", level: "Proficient", description: "In-memory caching & rate limiting" },
      { name: "Git & GitHub", level: "Advanced", description: "Version control, branching, CI/CD" },
      { name: "Playwright", level: "Advanced", description: "Automated browser orchestration & ETL" },
      { name: "Postman & Pytest", level: "Advanced", description: "Automated API testing & verification" },
    ],
  },
];

export const fallbackEducation: EducationType[] = [
  {
    degree: "Bachelor's Degree in Computer Software Engineering",
    institution: "Riphah International University",
    location: "Islāmābād, Pakistan",
    period: "Oct 2022 — Jun 2026",
    grade: "CGPA: 3.69 / 4.00",
    description:
      "Four-year undergraduate degree in Computer Software Engineering covering distributed systems, machine learning, data structures, software construction, and database architectures.",
    coursework: [
      "Software Construction & Development",
      "Machine Learning & Artificial Intelligence",
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (RDBMS)",
      "Object-Oriented Software Engineering (OOAD)",
      "Computer Vision & Pattern Recognition",
      "Cloud Computing & Distributed Systems",
      "Computer Networks & Security",
    ],
  },
];

export const fallbackCertifications: CertificationType[] = [
  {
    title: "AWS Fundamentals Specialization",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Sep 2024",
    credentialUrl: "https://aws.amazon.com",
    skills: ["Cloud Management", "Data Migration", "AWS Architecture", "Cloud Security"],
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    issueDate: "Sep 2024",
    credentialUrl: "https://www.ibm.com",
    skills: ["Python (Programming Language)", "NumPy", "Pandas", "Data Science", "AI"],
  },
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    issueDate: "Sep 2024",
    credentialUrl: "https://grow.google/certificates/project-management/",
    skills: ["Project Management", "Team Management", "Agile & Scrum", "Documentation"],
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage / Deloitte Australia",
    issueDate: "Jun 2026",
    credentialUrl: "https://www.theforage.com",
    skills: ["Data Analysis", "Data Modeling", "Business Intelligence", "Analytics"],
  },
  {
    title: "QA Fundamental",
    issuer: "10Pearls University",
    issueDate: "Apr 2025",
    credentialUrl: "https://10pearls.com",
    skills: ["Software Quality Assurance", "Software Testing", "Test Strategy", "Verification"],
  },
  {
    title: "Test Case Management With Testworthy",
    issuer: "10Pearls University",
    issueDate: "Feb 2025",
    credentialUrl: "https://10pearls.com",
    skills: ["Test Case Management", "Testworthy (Tool)", "Defect Lifecycle", "QA Automation"],
  },
];


