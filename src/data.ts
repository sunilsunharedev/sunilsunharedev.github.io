export const PROFILE = {
  name: "Sunil Sunhare",
  email: "sunilsunhare@gmail.com",
  phone: "+91 9619150855",
  phoneHref: "tel:+919619150855",
  mailto: "mailto:sunilsunhare@gmail.com",
  location: "Mumbai, India",
  role: "Technology Architect & Delivery Leader",
  github: "https://github.com/sunilsunharedev",
  linkedin: "https://in.linkedin.com/in/sunil-sunhare-042bb1190",
  githubHandle: "@sunilsunharedev",
};

export const NAV_LINKS = [
  { label: "Profile", href: "#profile", index: "01" },
  { label: "Expertise", href: "#expertise", index: "02" },
  { label: "Experience", href: "#experience", index: "03" },
  { label: "Work", href: "#work", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export const MARQUEE_ITEMS = ["Java 17", "Spring Boot", "Solution Architecture", "Spring AI", "LangChain4j", "Agentic AI", "AWS", "Kafka", "React", "Angular", "Application Modernization", "GenAI", "RAG", "Delivery Leadership", "PostgreSQL"];

export const HERO_STATS = [
  { value: 18, suffix: "+", label: "Years in technology" },
  { value: 20, suffix: "+", label: "Distributed team members" },
  { value: 30, suffix: "%", label: "Shorter review cycles" },
  { value: 35, suffix: "%", label: "Lower incident MTTR" },
];

export const CLIENTS = ["Textellent USA", "UnitedHealthcare", "Liberty Insurance", "BPER Banca", "Disney"];

export const PRINCIPLES = [
  { index: "01", title: "Architecture & modernization", body: "I design scalable enterprise applications, govern technology standards and guide design reviews across banking, insurance, healthcare and media platforms." },
  { index: "02", title: "Delivery & people leadership", body: "I lead distributed teams of 5–20+ members, manage multi-project delivery, mentor engineers and own production risks, quality and stakeholder communication." },
  { index: "03", title: "AI with measurable impact", body: "I integrate RAG, LLM assistants and agentic workflows into enterprise delivery: 30% shorter developer review cycles and 35% lower incident MTTR through AI-driven triage." },
];

export const EDUCATION = [
  { degree: "Master of Engineering · Computer Science", institution: "SGSITS, Indore", year: "2007" },
  { degree: "Bachelor of Engineering · Computer Science", institution: "IET, DAVV, Indore", year: "2005" },
];

export const SKILL_GROUPS = [
  { index: "A", title: "Backend & Integration", blurb: "Enterprise application foundations.", items: ["Java 8 / 11 / 17", "J2EE", "Spring Boot", "Spring Cloud & Batch", "Microservices", "Hibernate", "Struts", "REST / SOAP", "Swagger / OpenAPI"] },
  { index: "B", title: "GenAI & Agentic Systems", blurb: "AI-enabled enterprise delivery.", featured: true, items: ["Agentic AI", "LLM Integration · GPT-4", "Spring AI", "LangChain4j", "RAG Architecture", "Prompt Engineering", "AI Workflow Automation", "GitHub Copilot", "ChatGPT"] },
  { index: "C", title: "Cloud & Delivery Tooling", blurb: "Reliable releases and operations.", items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Jenkins", "Git / GitHub / SVN", "Sonar", "JIRA", "ServiceNow", "VersionOne / Remedy"] },
  { index: "D", title: "Data & Messaging", blurb: "Integration and event-driven data.", items: ["Oracle", "DB2", "PostgreSQL", "Snowflake", "SQL / PL/SQL", "Apache Kafka", "IBM MQ", "Redis Stack"] },
  { index: "E", title: "Frontend & Application Platforms", blurb: "Full-stack delivery.", items: ["Angular", "React JS", "JSP", "JavaScript", "WebSphere", "JBoss", "Tomcat", "Eclipse", "SQL Developer"] },
  { index: "F", title: "Governance & Observability", blurb: "Quality, stability and leadership.", items: ["Architecture Governance", "Agile / Scrum", "Delivery & Risk Management", "Root Cause Analysis", "Splunk", "Kibana", "Datadog", "AWS CloudWatch", "Prometheus / Grafana"] },
];

export const EXPERIENCE = [
  {
    period: "Nov 2025 — Jul 2026",
    org: "TarkaSoft Innovation LLP",
    role: "Java Architect",
    tag: "Freelance",
    location: "Remote",
    summary:
      "Designed and built Textellent’s Agentic Ops Copilot using Java 17, Spring Boot, Spring AI and LangChain4j. Integrated resilient operational tools and human-in-the-loop approvals, reducing incident MTTR by 35%.",
    clients: ["Textellent USA"],
  },
  {
    period: "Apr 2023 — Oct 2025",
    org: "Wipro",
    role: "Technology Architect",
    tag: "Full-time",
    location: "Mumbai, India",
    summary:
      "Architected and modernized Optum Pro for UnitedHealthcare with event-driven data pipelines, RAG-based clinical and claims knowledge retrieval, and GenAI developer assistants. LLM-assisted workflows reduced review cycle time by 30%, with HIPAA-compliant AI integration.",
    clients: ["UnitedHealthcare — Optum"],
  },
  {
    period: "Jul 2017 — Apr 2023",
    org: "Capgemini",
    role: "Associate Architect",
    tag: "Full-time",
    location: "Mumbai, India",
    summary:
      "Led teams of 5–8 across international client engagements: Liberty Insurance Spain (AWS policy platforms), BPER Bank Italy (MQ→Kafka migrations) and Disney North America (publisher–subscriber systems). Daily onshore collaboration, Jenkins CI/CD and full lifecycle ownership.",
    clients: ["Liberty Insurance", "BPER Banca", "Disney"],
  },
  {
    period: "Jun 2016 — Jun 2017",
    org: "Syntel",
    role: "Project Leader",
    tag: "Full-time",
    location: "Mumbai, India",
    summary:
      "Project leadership across planning, estimation, execution and delivery, with stakeholder coordination, technical guidance and production support.",
    clients: [],
  },
  {
    period: "Jan 2015 — May 2016",
    org: "Mastek / Majesco",
    role: "Project Leader",
    tag: "Full-time",
    location: "Mumbai, India",
    summary:
      "Project leadership in the Mastek / Majesco organization, contributing to application delivery, team coordination and software lifecycle oversight.",
    clients: [],
  },
  { period: "Nov 2011 — Jan 2015", org: "Tata Consultancy Services (TCS)", role: "System Engineer / Team Leader", tag: "Career history", location: "India", summary: "Software engineering and team leadership within enterprise application delivery.", clients: [] },
  { period: "Aug 2010 — Nov 2011", org: "3i-Infotech", role: "Software Engineer", tag: "Career history", location: "India", summary: "Software engineering across application development and maintenance.", clients: [] },
  { period: "Jan 2008 — Jul 2010", org: "Adsoft Informatica", role: "Software Developer", tag: "Career history", location: "India", summary: "Started my software development career, building experience in programming, implementation and application maintenance.", clients: [] },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  client: string;
  via: string;
  role: string;
  domain: string;
  year: string;
  description: string;
  outcome?: string[];
  pipeline?: { name: string; step: string }[];
  facts?: { label: string; value: string }[];
  stack: string[];
  image?: string;
  flagship: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "opscopilot",
    index: "01",
    title: "GenAI Agentic Ops Copilot",
    client: "Textellent USA",
    via: "TarkaSoft",
    role: "Senior Developer / Architect",
    domain: "Finance · AIOps",
    year: "Nov 2025 — Jul 2026",
    description:
      "An agentic AI service that observes application signals — logs, metrics, incidents — plans multi-step remediation and executes safe, auditable actions across AWS, Jira, Jenkins and Kubernetes. Java/Spring Boot for reliability, Resilience4j for fault-tolerance, Spring AI / LangChain4j for reasoning, and Micrometer metrics with Prometheus & Grafana dashboards.",
    outcome: [
      "35% reduction in incident MTTR via AI-driven triage",
      "Safe tool execution: circuit breakers, retries, bulkheads",
      "Human-in-the-loop approvals with end-to-end audit",
    ],
    facts: [
      { label: "Reasoning", value: "Provider-pluggable — Claude / GPT / Bedrock" },
      { label: "Memory", value: "PostgreSQL + Redis Stack embeddings" },
      { label: "Testing", value: "JUnit 5 · Testcontainers" },
    ],
    stack: [
      "Java 17",
      "Spring Boot 3.3",
      "Spring AI",
      "LangChain4j",
      "Resilience4j",
      "PostgreSQL",
      "Redis Stack",
      "Kafka",
      "Micrometer",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    image: "images/proj-ops.jpg",
    flagship: true,
  },
  {
    id: "optumpro",
    index: "02",
    title: "Optum Pro Application",
    client: "UnitedHealthcare — Optum",
    via: "Wipro",
    role: "Senior Developer / Architect",
    domain: "Healthcare",
    year: "Apr 2023 — Oct 2025",
    description:
      "End-to-end medical services platform: patient search, document management, reporting and claims processing. Tracks real-time customer information, pulls records from Snowflake over Kafka, and integrates third-party healthcare systems. Modernization included RAG-based clinical and claims retrieval, agentic code reviews, and GenAI assistants for debugging, documentation and refactoring.",
    facts: [
      { label: "Pipelines", value: "Kafka ⇄ Snowflake, real-time records" },
      { label: "AI delivery", value: "RAG retrieval · Developer assistants" },
    ],
    stack: ["Spring Boot", "Kafka", "Snowflake", "RAG", "Agentic AI", "LLM Integration"],
    outcome: ["30% reduction in developer review cycle time", "HIPAA-compliant AI integration and secure data processing", "RAG-based knowledge retrieval for clinical and claims data"],
    flagship: false,
  },
  {
    id: "liberty",
    index: "03",
    title: "Mediadore & Portal Institutional",
    client: "Liberty Insurance, Spain",
    via: "Capgemini",
    role: "Technical Architect / Project Leader",
    domain: "Insurance",
    year: "Oct 2020 — Apr 2023",
    description:
      "Multi-language insurance platform for agents selling car & home policies across Spain — instant online quotes, customer records, payments and partner portals for Kutxabank, Toyota and Lexus. Deployed on AWS, bridging web front-lines to HOST core systems.",
    facts: [
      { label: "Team", value: "7 members, led end-to-end" },
      { label: "Ops", value: "Jenkins CI/CD · Datadog · Kibana" },
    ],
    stack: ["AWS", "API Integration", "Jenkins", "CI/CD", "Role-Based Access"],
    flagship: false,
  },
  {
    id: "bper",
    index: "04",
    title: "Area Finanza — Kafka Migration",
    client: "BPER, Italy",
    via: "Capgemini",
    role: "Technical Architect",
    domain: "Banking",
    year: "Nov 2019 — Sep 2020",
    description:
      "Migrated a banking interface estate from MQ to Kafka — new Kafka-based component plus retrofit of existing bank products for import / export. Built the Sigrade–Kondor project: a web client orchestrating Sigrade SOAP services.",
    facts: [
      { label: "Team", value: "5 members" },
      { label: "Focus", value: "MQ → Kafka, bank product migration" },
    ],
    stack: ["IBM MQ", "Kafka", "SOAP", "Event-Driven Integration"],
    flagship: false,
  },
  {
    id: "disney",
    index: "05",
    title: "RO Subscriber Platform",
    client: "Disney, North America",
    via: "Capgemini",
    role: "Technical Lead",
    domain: "Media",
    year: "Jul 2017 — Oct 2019",
    description:
      "Migrated Disney's publisher–subscriber ecosystem to a modern framework and ran comprehensive end-to-end validation of every subscriber's workflow — leading the team and distributing delivery across 8 engineers.",
    facts: [
      { label: "Team", value: "8 members" },
      { label: "Scope", value: "Framework migration + E2E testing" },
    ],
    stack: ["Publisher–Subscriber Architecture", "Application Modernization", "End-to-End Testing"],
    flagship: false,
  },
];
