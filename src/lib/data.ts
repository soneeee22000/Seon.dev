import type {
  Experience,
  Project,
  Hackathon,
  Skill,
  Education,
  Certification,
  JourneyItem,
  CategoryColors,
} from "@/types/portfolio";

export const GREETINGS: string[] = [
  "Hello",
  "\u1019\u1004\u103A\u1039\u1002\u101C\u102C\u1015\u102B",
  "Bonjour",
  "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35",
  "Hej",
  "\u3053\u3093\u306B\u3061\u306F",
  "\uC548\uB155\uD558\uC138\uC694",
  "\u4F60\u597D",
  "Hola",
  "Ciao",
  "Hallo",
  "Ol\u00E1",
  "Привет",
  "Merhaba",
  "Xin ch\u00E0o",
];

export const EXP: Experience[] = [
  {
    job: "Founding AI Engineer & Architect",
    company: "Siloett.AI",
    badge: "AI Safety & Compliance \u00B7 Station F \u00B7 Paris",
    url: "https://siloett.ai/lander",
    date: "Jan 2025 \u2014 Present",
    color: "#C9A96E",
    pts: [
      "Architected and built an end-to-end Generative AI platform from zero \u2014 LLM orchestration, RAG pipelines, and a production React/TypeScript frontend with Python (FastAPI) and Azure Functions serverless backend",
      "Designed and implemented responsible-AI validation layers including content-safety filters, bias-detection checks, and compliance guardrails ensuring all AI-generated outputs meet regulatory and ethical standards",
      "Built AI safety and IP compliance systems including audit logging, provenance tracking, and output attribution pipelines \u2014 ensuring traceable and accountable AI output lifecycles",
      "Developed prompt-engineering and LLM evaluation frameworks using Azure OpenAI GPT-4o and LangChain, with systematic fine-tuning to optimise domain accuracy across compliance use cases",
    ],
  },
  {
    job: "Data Scientist / Cloud Engineer",
    company: "Floware SAS",
    badge: "\u00C9cole Polytechnique Incubator",
    url: "https://floware.fr",
    date: "Jul 2024 \u2014 Jun 2025",
    color: "#7B9CCC",
    pts: [
      "Designed a cloud-based batch data processing pipeline using Microsoft Azure Batch and Docker for urban mobility analytics",
      "Automated Computer Vision and Bluetooth sensor workflows enabling scalable, real-time smart city insights",
      "Delivered production analytics dashboards adopted by city government and transport stakeholders",
    ],
  },
  {
    job: "Research Assistant",
    company: "DICE Lab \u2014 Telecom SudParis",
    badge: "NLP \u00B7 Machine Translation",
    url: "https://dice.wp.telecom-sudparis.eu/",
    date: "Aug 2023 \u2014 Jul 2024",
    color: "#9C7BCC",
    pts: [
      "Developed a complete English\u2013Myanmar machine translation pipeline built on a 10K gold-labeled WikiHow parallel corpus manually created and curated",
      "Covered full research lifecycle: dataset construction, model training, evaluation design, and deployment with multilingual MT backbones",
      "Building a public translation API and Chrome extension for real-time English\u2013Myanmar translation on WikiHow pages",
    ],
  },
  {
    job: "Research Assistant",
    company: "AIT BrainLab",
    badge: "Bangkok \u00B7 Thailand",
    url: "https://www.ait.ac.th/",
    date: "Jan 2023 \u2014 Aug 2023",
    color: "#7BCC9C",
    pts: [
      "Collaborated with a team to develop an innovative NLP paraphrasing tool, enhancing user experience",
      "Cleaned and organized datasets, optimizing training processes and improving model accuracy by 15%",
      "Gained hands-on experience in backend operations, strengthening technical skills in data management and R&D methodology",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    featured: true,
    emoji: "\uD83D\uDC89",
    title: "VaxEvidence",
    desc: "Real-World Evidence platform for vaccine research. Full-stack application for ingesting, analyzing, and visualizing vaccine safety and efficacy data from real-world sources at scale.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    color: "#C9A96E",
    demo: "https://vaxevidence-dev.vercel.app/",
    gh: "https://github.com/soneeee22000/VaxEvidence-Dev",
  },
  {
    id: 2,
    featured: true,
    emoji: "\uD83D\uDEE1\uFE0F",
    title: "SafeGen.dev",
    desc: "Serverless middleware platform for enforcing responsible AI compliance on LLM applications. Acts as an intermediary between client apps and Azure OpenAI, validating responses against configurable safety rules \u2014 PII detection, bias screening, hate speech filtering, and RAG-powered custom policy enforcement via uploaded compliance documents.",
    tags: ["React", "TypeScript", "Azure Functions", "FAISS", "GPT-4o"],
    color: "#7BCC9C",
    demo: "https://safe-gen-dev.vercel.app/",
    gh: "https://github.com/soneeee22000/SafeGen.dev",
  },
  {
    id: 3,
    featured: true,
    emoji: "\uD83D\uDD0D",
    title: "DocuQuery",
    desc: "AI-powered resume-job match analysis platform. Upload your resume and a job description to get a detailed compatibility score with category breakdowns (skills, experience, education, keywords), missing keyword identification, and prioritized improvement recommendations \u2014 all in under 30 seconds.",
    tags: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL", "OpenAI"],
    color: "#9C7BCC",
    demo: "https://docu-query-dev.vercel.app/dashboard",
    gh: "https://github.com/soneeee22000/DocuQuery-dev",
  },
  {
    id: 4,
    featured: true,
    emoji: "\uD83C\uDF3F",
    title: "GreenLens",
    desc: "Cloud Carbon Intelligence platform that estimates CO2e emissions from Azure infrastructure and generates AI-powered reduction recommendations. Built for EU CSRD Scope 3 compliance with Clean Architecture, semantic emission factor search, and 88 automated tests.",
    tags: [
      "ASP.NET Core",
      "Angular",
      "Azure AI Search",
      "Azure OpenAI",
      "Docker",
    ],
    color: "#7BCC9C",
    demo: "https://greenlens-api.azurewebsites.net",
    gh: "https://github.com/soneeee22000/GreenLens.dev",
  },
  {
    id: 5,
    featured: false,
    emoji: "\uD83D\uDD2C",
    title: "Diabetes Detection",
    desc: "ML classification of diabetic patients from Raman spectroscopy signal data using ensemble scikit-learn methods. AIT collaborative research.",
    tags: ["Python", "scikit-learn", "ML"],
    color: "#CC7B7B",
    demo: "#",
    gh: "https://github.com/AtiChetsurakul/DataScienceAndMLProjects",
  },
  {
    id: 6,
    featured: false,
    emoji: "\uD83D\uDC0D",
    title: "Snake ID Myanmar",
    desc: "Venomous snake identification app for Myanmar using CNN image classification, helping rural communities identify dangerous species quickly.",
    tags: ["Python", "Streamlit", "CNN"],
    color: "#CCB87B",
    demo: "https://mysnakensafety.streamlit.app/",
    gh: "https://github.com/soneeee22000/my_snake_id",
  },
  {
    id: 7,
    featured: false,
    emoji: "\uD83D\uDCCB",
    title: "ZenHub PM System",
    desc: "Agile project management system integrating GitHub and ZenHub for streamlined team workflow, sprint planning, and developer collaboration.",
    tags: ["GitHub", "Scrum", "Agile"],
    color: "#7B9CCC",
    demo: "#",
    gh: "https://github.com/users/soneeee22000/projects/1",
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    id: 3,
    emoji: "\uD83D\uDCD6",
    title: "StoryBridge",
    desc: "AI-powered bilingual storytelling companion that preserves heritage languages among immigrant families. Multi-agent system generates culturally-authentic interactive stories with watercolor illustrations, bilingual narration, and child-driven choices that genuinely shape the narrative — using three Gemini modalities (text, image, TTS) coordinated through Google ADK.",
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "Google ADK",
      "Gemini 2.5 Flash",
      "Cloud Run",
    ],
    color: "#CCB87B",
    gh: "https://github.com/soneeee22000/storybridge",
    demo: "https://storybridge-469521173814.us-central1.run.app/",
    organizer: "Google Cloud",
    event: "Gemini Live Agent Challenge 2026",
    date: "Mar 2026",
    status: "in_progress",
  },
  {
    id: 1,
    emoji: "\uD83C\uDF3E",
    title: "CropFolio",
    desc: "Data-driven agricultural decision-support system applying Modern Portfolio Theory to help Myanmar's smallholder farmers optimize crop diversification and reduce climate risk. Uses Markowitz optimization on 12 years of FAOSTAT yield data and Monte Carlo simulation across 1,000 climate scenarios with Gemini AI-powered analysis.",
    tags: ["FastAPI", "React", "TypeScript", "D3.js", "SciPy", "Gemini AI"],
    color: "#7BCC9C",
    gh: "https://github.com/soneeee22000/CropFolio",
    demo: "https://crop-folio.vercel.app/",
    organizer: "Impact Hub Yangon \u00D7 UNDP Myanmar",
    event: "AI for Climate Resilient Agriculture Hackathon 2026",
    date: "Mar 2026",
    status: "in_progress",
  },
  {
    id: 2,
    emoji: "\uD83C\uDF21\uFE0F",
    title: "HeatDebt",
    desc: "Urban thermal intelligence platform for Montgomery, Alabama. Features 9 interactive map layers, AI-powered neighborhood risk scoring via Google Gemini, 14-page grant-ready due diligence reports, and a database of 7 real federal grant programs (EPA, HUD, FEMA, LIHEAP).",
    tags: ["Next.js", "Google Gemini", "Mapbox", "Census API", "NASA"],
    color: "#CC7B7B",
    gh: "https://github.com/soneeee22000/Heatdebt-dev",
    demo: "https://heat-debt-dev.vercel.app/",
    organizer: "GenAI Academy",
    event: "GenAI Academy Hackathon 2026",
    date: "Feb 2026",
    status: "completed",
  },
];

export const SKILLS: Skill[] = [
  // AI / ML
  {
    name: "PyTorch",
    cat: "AI / ML",
    logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
  },
  {
    name: "TensorFlow",
    cat: "AI / ML",
    logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
  },
  {
    name: "scikit-learn",
    cat: "AI / ML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "Hugging Face",
    cat: "AI / ML",
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  {
    name: "LangChain",
    cat: "AI / ML",
    logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  },
  {
    name: "OpenAI",
    cat: "AI / ML",
    logo: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg",
  },
  {
    name: "FAISS",
    cat: "AI / ML",
    logo: "https://avatars.githubusercontent.com/u/69631?s=200&v=4",
  },
  // Languages
  {
    name: "Python",
    cat: "Language",
    logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    name: "TypeScript",
    cat: "Language",
    logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "JavaScript",
    cat: "Language",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  // Frontend
  {
    name: "React",
    cat: "Frontend",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "Next.js",
    cat: "Frontend",
    logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },
  {
    name: "Tailwind CSS",
    cat: "Frontend",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  // Backend
  {
    name: "Node.js",
    cat: "Backend",
    logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    name: "FastAPI",
    cat: "Backend",
    logo: "https://avatars.githubusercontent.com/u/156354296?s=200&v=4",
  },
  {
    name: "Django",
    cat: "Backend",
    logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
  },
  // Cloud
  {
    name: "Azure",
    cat: "Cloud",
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  },
  {
    name: "AWS",
    cat: "Cloud",
    logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    name: "GCP",
    cat: "Cloud",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
  {
    name: "Vercel",
    cat: "Cloud",
    logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  // Database
  {
    name: "PostgreSQL",
    cat: "Database",
    logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "MongoDB",
    cat: "Database",
    logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "Redis",
    cat: "Database",
    logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  },
  {
    name: "Supabase",
    cat: "Database",
    logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
  },
  {
    name: "Neo4j",
    cat: "Database",
    logo: "https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg",
  },
  {
    name: "Pinecone",
    cat: "Database",
    logo: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4",
  },
  {
    name: "ChromaDB",
    cat: "Database",
    logo: "https://avatars.githubusercontent.com/u/124071024?s=200&v=4",
  },
  // DevOps
  {
    name: "Docker",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    name: "Kubernetes",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  },
  {
    name: "GitHub Actions",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  },
  {
    name: "GitLab CI",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
  },
  {
    name: "Terraform",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
  },
  // Data
  {
    name: "Pandas",
    cat: "Data",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
  },
  {
    name: "NumPy",
    cat: "Data",
    logo: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg",
  },
  {
    name: "Jupyter",
    cat: "Data",
    logo: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
  },
  {
    name: "Apache Spark",
    cat: "Data",
    logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
  },
];

export const CAT_COLORS: CategoryColors = {
  "AI / ML": "#C9A96E",
  Language: "#7B9CCC",
  Frontend: "#9C7BCC",
  Cloud: "#7BCC9C",
  DevOps: "#CCB87B",
  Database: "#CC7B7B",
  Backend: "#7BAACC",
  Data: "#CC9C7B",
};

export const EDUCATION: Education[] = [
  {
    degree: "MSc Data Science & Network Intelligence",
    school: "Telecom SudParis",
    loc: "Paris, France",
    date: "2023 \u2014 2024",
    gpa: "15.15/20",
    note: "QS Rank #46 Worldwide",
    color: "#C9A96E",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
  },
  {
    degree: "MSc Data Science & Artificial Intelligence",
    school: "Asian Institute of Technology",
    loc: "Bangkok, Thailand",
    date: "2022 \u2014 2024",
    gpa: "3.17/4.0",
    note: "Dual Degree Program",
    color: "#7B9CCC",
    flag: "\uD83C\uDDF9\uD83C\uDDED",
  },
  {
    degree: "BA Social Science Studies",
    school: "Myanmar Institute of Theology",
    loc: "Yangon, Myanmar",
    date: "2016 \u2014 2020",
    gpa: "3.67/4.0",
    note: "Graduated Top of Class",
    color: "#7BCC9C",
    flag: "\uD83C\uDDF2\uD83C\uDDF2",
  },
  {
    degree: "BA English Literature & Linguistics",
    school: "University of Yangon",
    loc: "Yangon, Myanmar",
    date: "2016 \u2014 2020*",
    gpa: "4.09/5.0",
    note: "Myanmar's Oldest University",
    color: "#9C7BCC",
    flag: "\uD83C\uDDF2\uD83C\uDDF2",
    asterisk: "*Interrupted due to COVID-19 & Military Coup",
  },
];

export const CERTS: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford / DeepLearning.AI",
    by: "Andrew Ng \u00B7 Coursera",
    color: "#C9A96E",
    emoji: "\uD83E\uDD16",
    url: "https://coursera.org/share/946625f9bdea354d2f8da22c15c66ee4",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan",
    by: "Dr. Charles Severance",
    color: "#7B9CCC",
    emoji: "\uD83D\uDC0D",
    url: "https://www.coursera.org/account/accomplishments/specialization/5UN5XA31T3XY",
  },
  {
    title: "Agile Development & Scrum",
    issuer: "IBM",
    by: "DevOps Specialization \u00B7 Coursera",
    color: "#9C7BCC",
    emoji: "\u26A1",
    url: "https://coursera.org/share/8358fd39d8b8896c54f93d33f5372843",
  },
  {
    title: "Meta Full Stack Developer",
    issuer: "Meta",
    by: "React \u00B7 Django \u00B7 API Design",
    color: "#7BCC9C",
    emoji: "\uD83D\uDCBB",
    url: "https://coursera.org/share/8358fd39d8b8896c54f93d33f5372843",
  },
];

export const JOURNEY: JourneyItem[] = [
  {
    flag: "\uD83C\uDDF2\uD83C\uDDF2",
    city: "Yangon",
    label: "Origins",
    date: "2016\u20142020",
    color: "#7BCC9C",
  },
  {
    flag: "\u2192",
    city: "",
    label: "",
    date: "",
    color: "var(--color-muted)",
    arrow: true,
  },
  {
    flag: "\uD83C\uDDF9\uD83C\uDDED",
    city: "Bangkok",
    label: "Asian Institute of Technology",
    date: "2022\u20142024",
    color: "#7B9CCC",
  },
  {
    flag: "\u2708",
    city: "",
    label: "Dual Degree",
    date: "",
    color: "var(--color-accent)",
    arrow: true,
  },
  {
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    city: "Paris",
    label: "Telecom SudParis",
    date: "2023\u20142024",
    color: "#C9A96E",
  },
  {
    flag: "\u2192",
    city: "",
    label: "",
    date: "",
    color: "var(--color-muted)",
    arrow: true,
  },
  {
    flag: "\uD83C\uDFD9",
    city: "Station F",
    label: "Siloett.AI",
    date: "2025\u2014Now",
    color: "#C9A96E",
  },
];

export const ALSO_FLUENT_IN =
  "Streamlit \u00B7 LangGraph \u00B7 Ollama \u00B7 vLLM \u00B7 MLflow \u00B7 Weights & Biases \u00B7 DVC \u00B7 Ray \u00B7 Celery \u00B7 RabbitMQ \u00B7 Kafka \u00B7 GraphQL \u00B7 Prisma \u00B7 Drizzle \u00B7 SQLAlchemy \u00B7 Playwright \u00B7 Vitest \u00B7 pytest";

export const NAV_LINKS: [string, string][] = [
  ["ABOUT", "about"],
  ["EXPERIENCE", "experience"],
  ["PROJECTS", "projects"],
  ["HACKATHONS", "hackathons"],
  ["SKILLS", "skills"],
  ["EDUCATION", "education"],
  ["CONTACT", "contact"],
];

export const SOCIAL_LINKS: [string, string][] = [
  ["GITHUB", "https://github.com/soneeee22000"],
  ["LINKEDIN", "https://www.linkedin.com/in/pyae-sone-kyaw-80386721b/"],
];

export const ABOUT_PARAGRAPHS: string[] = [
  "Currently a Founding/Full-Stack AI Engineer at Siloett.AI (Station F, Paris), where I architect AI-powered solutions for Narrative OS \u2014 the creative industry's intelligence layer.",
  "My expertise spans deep learning, NLP, computer vision, and agentic AI systems, with a strong focus on CreativeAI and AI for Social Good domains.",
  "I bring an unusual combination: technical depth in Python (PyTorch, FastAPI) + cloud infrastructure (Azure, Docker) + multilingual communication skills across Burmese, English, French, and Thai.",
  "This multicultural background uniquely positions me to build AI systems that work across diverse human contexts and communities.",
];

export const ABOUT_QUOTE =
  "A Data Scientist and Full-Stack AI Engineer with dual Master's degrees spanning Asia and Europe \u2014 building impactful tools at the frontier of CreativeAI, RegTech, B2B Solutions and beyond.";

export const STATS: [string, string][] = [
  ["4+", "Yrs in AI / ML"],
  ["6+", "Projects Shipped"],
  ["2", "Master's Degrees"],
  ["3", "Countries Lived"],
];
