/**
 * Muhammad Bilal Farid - Portfolio Projects Data
 * Categories: all, fullstack, backend, ml, automation
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "url-shortener-api",
    title: "URL Shortener & Analytics API",
    category: "backend",
    categoryLabel: "Backend & APIs",
    description: "High-performance REST microservice with Base62 shortcode generation, Redis in-memory caching, SQLite/PostgreSQL persistence, and real-time click telemetry & analytics.",
    longDescription: "A scalable, production-grade URL shortening service engineered with FastAPI. Features sub-millisecond redirect lookups using Redis caching, rate limiting with token bucket algorithms, comprehensive click telemetry (geolocation, referrers, device types), and automated Pytest test coverage.",
    tags: ["FastAPI", "Python", "Redis", "SQLite / PostgreSQL", "Docker", "Pytest", "REST API"],
    badge: "Microservice",
    badgeColor: "cyan",
    githubUrl: "https://github.com/bilalfarid-1/url-shortener-api",
    demoUrl: "https://github.com/bilalfarid-1/url-shortener-api#readme",
    stats: {
      latency: "< 5ms redirect",
      architecture: "REST Microservice",
      tests: "98% Coverage"
    },
    featured: true,
    icon: "fa-link",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)"
  },
  {
    id: "travel-data-scraper",
    title: "Travel Intelligence & Flight Scraper",
    category: "automation",
    categoryLabel: "Automation",
    description: "Asynchronous high-throughput web scraper extracting live flights, hotel pricing, and route intelligence with dynamic anti-detection mechanisms and automated data exports.",
    longDescription: "Engineered using Playwright and BeautifulSoup with async/await concurrency. Incorporates fingerprint rotation, stealth browsing flags to bypass anti-bot challenges, automatic pagination, structured JSON/CSV data pipelines, and error-resilient retry logic.",
    tags: ["Python", "Playwright", "AsyncIO", "BeautifulSoup4", "Pandas", "Automation"],
    badge: "Web Automation",
    badgeColor: "emerald",
    githubUrl: "https://github.com/bilalfarid-1/travel-data-scraper",
    demoUrl: "https://github.com/bilalfarid-1/travel-data-scraper#readme",
    stats: {
      throughput: "1,000+ records/min",
      engine: "Headless Chromium",
      output: "JSON / CSV / SQLite"
    },
    featured: true,
    icon: "fa-plane-departure",
    gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)"
  },
  {
    id: "job-application-tracker-api",
    title: "Job Application Tracker API",
    category: "backend",
    categoryLabel: "Backend & APIs",
    description: "Full-featured recruitment management API with JWT authentication, interview stage tracking, metric dashboards, and automated status notifications.",
    longDescription: "Designed with FastAPI and SQLAlchemy ORM, this API empowers job seekers and hiring teams to manage applicant pipelines. Supports secure JWT authentication, password hashing with bcrypt, relational data filtering, pagination, and OpenAPI interactive documentation.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "Pydantic", "Pytest"],
    badge: "Enterprise API",
    badgeColor: "purple",
    githubUrl: "https://github.com/bilalfarid-1/job-application-tracker-api",
    demoUrl: "https://github.com/bilalfarid-1/job-application-tracker-api#readme",
    stats: {
      auth: "OAuth2 & JWT",
      database: "PostgreSQL / SQLite",
      docs: "Swagger / ReDoc"
    },
    featured: true,
    icon: "fa-briefcase",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #4f46e5 100%)"
  },
  {
    id: "house-prices-regression",
    title: "House Prices Predictive Regression",
    category: "ml",
    categoryLabel: "Machine Learning",
    description: "End-to-end Machine Learning pipeline utilizing advanced feature engineering, outlier detection, and ensemble algorithms (XGBoost, LightGBM) to forecast property market values.",
    longDescription: "A comprehensive ML project featuring exploratory data analysis (EDA), automated imputation, skewness correction with log transforms, hyperparameter tuning via GridSearchCV, and an ensemble stacking regressor achieving top-tier RMSE performance.",
    tags: ["Python", "Scikit-Learn", "XGBoost", "LightGBM", "Pandas", "Seaborn", "ML Pipeline"],
    badge: "ML Regression",
    badgeColor: "amber",
    githubUrl: "https://github.com/bilalfarid-1/house-prices-regression",
    demoUrl: "https://github.com/bilalfarid-1/house-prices-regression#readme",
    stats: {
      metric: "0.112 RMSE",
      model: "Stacking Ensemble",
      features: "79 Evaluated"
    },
    featured: true,
    icon: "fa-chart-line",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
  },
  {
    id: "FoodOrderingApp",
    title: "Food Delivery & Ordering App",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    description: "Interactive full-stack food delivery application with dynamic dish catalog, live cart calculation, order customization, and responsive modern user interface.",
    longDescription: "Built with modular component architecture, this application delivers a smooth e-commerce food ordering journey. Includes instant search, category filtering, cart state management, checkout summary, and mock payment gateway flow.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js / FastAPI", "State Management", "UI/UX"],
    badge: "Full-Stack App",
    badgeColor: "rose",
    githubUrl: "https://github.com/bilalfarid-1/FoodOrderingApp",
    demoUrl: "https://github.com/bilalfarid-1/FoodOrderingApp#readme",
    stats: {
      ui: "Fully Responsive",
      state: "Reactive Store",
      speed: "100 Lighthouse"
    },
    featured: true,
    icon: "fa-utensils",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)"
  },
  {
    id: "deforestation-project",
    title: "Satellite Deforestation Detection",
    category: "ml",
    categoryLabel: "Machine Learning",
    description: "Remote sensing environmental intelligence pipeline analyzing satellite imagery and vegetative indices (NDVI) to detect and quantify forest loss over time.",
    longDescription: "Utilizes geospatial data processing and computer vision techniques to monitor environmental deforestation. Implements multi-spectral band processing, spatial clustering, threshold-based forest cover segmentation, and automated GIS mapping.",
    tags: ["Python", "Computer Vision", "GeoPandas", "Scikit-Learn", "OpenCV", "Remote Sensing"],
    badge: "AI & Geospatial",
    badgeColor: "emerald",
    githubUrl: "https://github.com/bilalfarid-1/deforestation-project",
    demoUrl: "https://github.com/bilalfarid-1/deforestation-project#readme",
    stats: {
      resolution: "Multi-Spectral",
      index: "NDVI / EVI",
      output: "Canopy Heatmaps"
    },
    featured: true,
    icon: "fa-tree",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #059669 100%)"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Engine",
    category: "ml",
    categoryLabel: "Machine Learning",
    description: "Predictive analytics engine identifying churn-risk subscribers using classification models, imbalanced dataset handling (SMOTE), and SHAP explainability values.",
    longDescription: "A production-oriented ML classification project analyzing subscriber tenure, billing cycles, and support tickets to forecast churn likelihood. Integrates Random Forest, XGBoost, and SHAP value explainers for transparent risk scoring.",
    tags: ["Python", "XGBoost", "Scikit-Learn", "SHAP", "SMOTE", "Data Science"],
    badge: "ML Classification",
    badgeColor: "indigo",
    githubUrl: "https://github.com/bilalfarid-1/customer-churn-prediction",
    demoUrl: "https://github.com/bilalfarid-1/customer-churn-prediction#readme",
    stats: {
      rocAuc: "0.89 ROC-AUC",
      explainability: "SHAP Values",
      sampling: "SMOTE Balanced"
    },
    featured: true,
    icon: "fa-user-slash",
    gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)"
  },
  {
    id: "shopping-app",
    title: "Modern E-Commerce Store",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    description: "Feature-packed responsive shopping platform with product filtering, search, cart synchronization, toast notifications, and seamless checkout workflow.",
    longDescription: "A responsive client-side shopping application crafted with modern JavaScript, Tailwind CSS, and local persistence. Features real-time price calculations, stock management, promo code validation, and a mobile-first responsive layout.",
    tags: ["JavaScript", "React / HTML5", "Tailwind CSS", "Local Storage", "E-Commerce", "REST API"],
    badge: "Full-Stack Store",
    badgeColor: "blue",
    githubUrl: "https://github.com/bilalfarid-1/shopping-app",
    demoUrl: "https://github.com/bilalfarid-1/shopping-app#readme",
    stats: {
      products: "Multi-category",
      cart: "Persistent Sync",
      styling: "Glassmorphism UI"
    },
    featured: true,
    icon: "fa-shopping-bag",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PORTFOLIO_PROJECTS };
}
