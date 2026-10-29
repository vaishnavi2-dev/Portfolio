export const profile = {
  name: "Vaishnavi Kolhe",
  initials: "VK",
  title: "Full Stack .NET Developer",
  tagline: "C# | ASP.NET Core | Web API | Microservices | SQL Server | React.js",
  location: "Pune, Maharashtra, India",
  noticePeriod: "30 days",
  email: "kolhevaishnavi600@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaishnavi-k-aa0892219",
  github: "https://github.com/vaishnavi2-dev",
  photoAlt: "Vaishnavi Kolhe, Full Stack .NET Developer",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const typingWords = ["Web APIs", "Real-time Dashboards", "Microservices"];

export const aboutText =
  "I'm a Full Stack .NET Developer with 3 years of experience building enterprise web applications, REST APIs, microservices and event-driven systems using C#, ASP.NET Core, SQL Server, MongoDB and React.js. I'm currently a Senior Software Developer working on healthcare (blood bank) software. I care about secure API design, performance tuning and real-time dashboards.";

export const stats = [
  { value: "3", label: "Years Experience" },
  { value: "2", label: "Major Projects" },
  { value: "MCA", label: "Graduate" },
];

export const skillGroups = [
  { title: "Languages", items: ["C#", "SQL", "T-SQL", "JavaScript"] },
  {
    title: "Backend",
    items: [
      "ASP.NET Core",
      ".NET Core",
      "ASP.NET MVC",
      "WebForms",
      "Web API",
      "EF Core",
      "ADO.NET",
      "Razor Pages",
      "SignalR",
    ],
  },
  {
    title: "APIs & Security",
    items: ["REST", "SOAP", "JSON", "XML", "Swagger/OpenAPI", "JWT", "OAuth", "RBAC"],
  },
  {
    title: "Databases",
    items: [
      "SQL Server",
      "MongoDB",
      "PostgreSQL",
      "Stored Procedures",
      "Indexing",
      "Query Optimization",
    ],
  },
  { title: "Frontend", items: ["React.js", "JavaScript", "AJAX", "Bootstrap", "ECharts"] },
  {
    title: "DevOps & Tools",
    items: ["CI/CD", "Docker", "Git", "GitHub", "IIS", "Postman", "Visual Studio"],
  },
  {
    title: "Practices",
    items: [
      "Microservices",
      "Event-Driven Architecture",
      "SOLID",
      "OOP",
      "Dependency Injection",
      "Agile",
      "Code Reviews",
    ],
  },
];

export const services = [
  {
    icon: "server",
    title: "REST API Development",
    text: "Secure, documented APIs with ASP.NET Core, JWT and Swagger/OpenAPI.",
  },
  {
    icon: "activity",
    title: "Real-time Dashboards",
    text: "Live data views using SignalR, AJAX, React and ECharts.",
  },
  {
    icon: "database",
    title: "Database & Performance Tuning",
    text: "Stored procedures, indexing and query optimization in SQL Server and PostgreSQL.",
  },
  {
    icon: "layers",
    title: "Legacy Modernization",
    text: "Moving monolith modules toward microservices and event-driven design.",
  },
] as const;

export const experience = [
  {
    role: "Senior Software Developer",
    company: "Strides Software Solutions Pvt. Ltd.",
    period: "July 2026 - Present",
    points: [
      "Develop and enhance the SafeTrans blood bank platform (ASP.NET WebForms, C#, SQL Server) across 3 core modules: donor registration, stock/inventory and live display dashboards.",
      "Design stored procedures, XML-based import flows and date-validated reports for accurate, auditable stock data.",
      "Optimized SQL queries and stored procedures to speed up page loads, and consolidated multiple API calls into a single event-based trigger to cut redundant requests.",
      "Replaced full page reloads on an 8-slide TV dashboard with SignalR and AJAX-driven refresh for real-time updates.",
    ],
  },
  {
    role: "Software Developer",
    company: "ThetaVega Tech Pvt. Ltd., Maharashtra",
    period: "Nov 2023 - June 2026",
    points: [
      "Built enterprise web apps, microservice-style REST APIs and real-time dashboards using ASP.NET Core, C#, React.js, SQL Server and MongoDB.",
      "Built fault-tolerant MQTT and Modbus TCP pipelines for real-time industrial data ingestion, analytics and automated alerting.",
      "Implemented CI/CD, automated builds, testing and Docker-based deployments.",
      "Secured services with JWT authentication and role-based access control; documented APIs with Swagger/OpenAPI.",
      "Optimized queries, stored procedures and indexes in SQL Server and PostgreSQL.",
      "Contributed to monolith-to-microservices modernization and led code reviews, mentoring junior developers.",
    ],
  },
];

export const principles = [
  { icon: "code", text: "Clean, maintainable code (SOLID, OOP, Dependency Injection)" },
  { icon: "shield", text: "Secure by default (JWT, RBAC)" },
  { icon: "users", text: "Collaborative (code reviews, mentoring, Agile)" },
  { icon: "gauge", text: "Performance-minded (profile, optimize, measure)" },
] as const;

export const projects = [
  {
    title: "SafeTrans",
    subtitle: "Blood Bank Management System",
    description:
      "Healthcare platform covering donor registration, stock and inventory, and live display dashboards for blood banks.",
    tech: [
      "ASP.NET WebForms",
      "C#",
      "SQL Server",
      "SignalR",
      "JavaScript",
      "AJAX",
      "Stored Procedures",
      "OCR",
    ],
    highlights: [
      "8-slide full-screen TV dashboard that merged 2 legacy pages into 1 stored-procedure-driven view.",
      "Real-time SignalR push refresh with dynamic theming and responsive paging.",
      "Stock module with two-step opening balance import, XML logging and duplicate guard.",
      "Donor registration extended with ABDM/ABHA fields and ID image upload with OCR.",
    ],
  },
  {
    title: "OperateX",
    subtitle: "Manufacturing Intelligence Platform",
    description:
      "Platform with 5 analytics modules: real-time OEE, production tracking, downtime analysis, quality reporting and predictive maintenance.",
    tech: [
      "ASP.NET Core",
      "C#",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "MQTT",
      "Docker",
      "ECharts",
      "Swagger",
    ],
    highlights: [
      "5 analytics modules: real-time OEE, production tracking, downtime analysis, quality reporting and predictive maintenance.",
      "Services processing data across machine, date, shift and model, secured with RBAC and JWT.",
      "Drill-down dashboards, KPI tiles, Excel export and anomaly detection using React and ECharts.",
    ],
  },
];

export const education = [
  {
    degree: "MCA",
    school: "Govt. College of Engineering, Aurangabad",
    score: "CGPA 7.5",
    period: "2022-2024",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "MGM G.Y. Pathrikar College, Aurangabad",
    score: "CGPA 8.3",
    period: "2019-2022",
  },
];
