/**
 * Muhammad Bilal Farid - Portfolio Projects Data
 * Categories: all, fullstack, backend, ml, automation
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "deforestation-project",
    title: "GreenGuard 2.0 (Deforestation Detection)",
    category: "ml",
    categoryLabel: "Machine Learning & CV",
    description: "Remote sensing environmental intelligence pipeline analyzing satellite imagery and vegetative indices (NDVI) to detect and quantify forest loss over time.",
    longDescription: "Utilizes geospatial data processing, satellite multispectral imagery, and computer vision techniques to monitor environmental deforestation. Implements NDVI calculation, spatial clustering, threshold-based forest cover segmentation, and automated GIS mapping.",
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
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
  },
  {
    id: "aqi-predictor",
    title: "Pearls AQI (Air Quality Predictor)",
    category: "ml",
    categoryLabel: "Machine Learning",
    description: "Real-time air quality forecasting engine evaluating atmospheric pollutants (PM2.5, PM10, NO2, SO2) with ensemble machine learning regressors and interactive visualizations.",
    longDescription: "Developed end-to-end predictive models for urban air quality forecasting. Integrates time-series feature engineering, weather parameter correlation, Optuna-tuned XGBoost & Random Forest models, and an interactive Streamlit analytics dashboard.",
    tags: ["Python", "Machine Learning", "XGBoost", "Scikit-Learn", "Pandas", "Streamlit", "Optuna"],
    badge: "ML Forecasting",
    badgeColor: "cyan",
    githubUrl: "https://github.com/bilalfarid-1/aqi-predictor",
    demoUrl: "https://github.com/bilalfarid-1/aqi-predictor#readme",
    stats: {
      accuracy: "94.2% R² Score",
      features: "Pollutants & Weather",
      ui: "Streamlit Dashboard"
    },
    featured: true,
    icon: "fa-wind",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)"
  },
  {
    id: "swiftrip",
    title: "SwifTrip (Travel Intelligence Platform)",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    description: "Full-stack travel intelligence and booking platform with live route optimization, hotel and flight intelligence, and dynamic itinerary planning.",
    longDescription: "Engineered with modern Next.js and Python microservices. Features smart destination recommendations, interactive map integration, real-time pricing comparison, and responsive mobile-first UI.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Tailwind CSS"],
    badge: "Full-Stack Platform",
    badgeColor: "purple",
    githubUrl: "https://github.com/SwifTrip",
    demoUrl: "https://github.com/SwifTrip",
    stats: {
      stack: "Next.js + FastAPI",
      optimization: "Dynamic Routing",
      ui: "Tailwind CSS"
    },
    featured: true,
    icon: "fa-plane-departure",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)"
  },
  {
    id: "vittoriax",
    title: "VittoriaX (Enterprise Platform)",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    description: "High-performance enterprise digital platform delivering modern responsive web experiences, cloud scalability, and interactive customer workflows.",
    longDescription: "Production enterprise website engineered with modern Next.js App Router, TypeScript, and Tailwind CSS. Features optimized web vitals, dynamic content rendering, and responsive glassmorphic design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Cloud Architecture"],
    badge: "Enterprise Web",
    badgeColor: "amber",
    githubUrl: "https://github.com/bilalfarid-1/vittoriax",
    demoUrl: "https://vittoriax.com",
    stats: {
      performance: "100 Lighthouse",
      architecture: "Next.js App Router",
      live: "vittoriax.com"
    },
    featured: true,
    icon: "fa-globe",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
  },
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
    id: "travel-data-scraper",
    title: "Playwright E-Commerce & Web Scraper",
    category: "automation",
    categoryLabel: "Automation",
    description: "Asynchronous high-throughput web scraper extracting live data with dynamic anti-detection mechanisms, headless Chromium, and automated data exports.",
    longDescription: "Engineered using Playwright and BeautifulSoup with async/await concurrency. Incorporates fingerprint rotation, stealth browsing flags to bypass anti-bot challenges, automatic pagination, structured JSON/CSV data pipelines, and error-resilient retry logic.",
    tags: ["Python", "Playwright", "AsyncIO", "BeautifulSoup4", "Pandas", "Automation"],
    badge: "Web Automation",
    badgeColor: "emerald",
    githubUrl: "https://github.com/bilalfarid-1/e-commerce-scrapper-playwright",
    demoUrl: "https://github.com/bilalfarid-1/e-commerce-scrapper-playwright#readme",
    stats: {
      throughput: "1,000+ records/min",
      engine: "Headless Chromium",
      output: "JSON / CSV / SQLite"
    },
    featured: true,
    icon: "fa-spider",
    gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PORTFOLIO_PROJECTS };
}
