import type { Skill, CategoryColors } from "@/types/portfolio";

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
  "\u041F\u0440\u0438\u0432\u0435\u0442",
  "Merhaba",
  "Xin ch\u00E0o",
];

/** Experience metadata (non-translatable fields only) */
export const EXP_META = [
  {
    company: "Siloett.AI",
    url: "https://siloett.ai/lander",
    color: "#C9A96E",
    ptCount: 4,
  },
  {
    company: "Floware SAS",
    url: "https://floware.fr",
    color: "#7B9CCC",
    ptCount: 3,
  },
  {
    company: "DICE Lab \u2014 Telecom SudParis",
    url: "https://dice.wp.telecom-sudparis.eu/",
    color: "#9C7BCC",
    ptCount: 3,
  },
  {
    company: "AIT BrainLab",
    url: "https://www.ait.ac.th/",
    color: "#7BCC9C",
    ptCount: 3,
  },
];

/** Project metadata (non-translatable fields only) */
export const PROJECTS_META = [
  {
    id: 1,
    featured: true,
    emoji: "\uD83D\uDC89",
    title: "VaxEvidence",
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
    tags: ["GitHub", "Scrum", "Agile"],
    color: "#7B9CCC",
    demo: "#",
    gh: "https://github.com/users/soneeee22000/projects/1",
  },
];

/** Hackathon metadata (non-translatable fields only) */
export const HACKATHONS_META = [
  {
    id: 3,
    emoji: "\uD83D\uDCD6",
    title: "StoryBridge",
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
    status: "in_progress" as const,
  },
  {
    id: 1,
    emoji: "\uD83C\uDF3E",
    title: "CropFolio",
    tags: ["FastAPI", "React", "TypeScript", "D3.js", "SciPy", "Gemini AI"],
    color: "#7BCC9C",
    gh: "https://github.com/soneeee22000/CropFolio",
    demo: "https://crop-folio.vercel.app/",
    organizer: "Impact Hub Yangon \u00D7 UNDP Myanmar",
    event: "AI for Climate Resilient Agriculture Hackathon 2026",
    date: "Mar 2026",
    status: "in_progress" as const,
  },
  {
    id: 2,
    emoji: "\uD83C\uDF21\uFE0F",
    title: "HeatDebt",
    tags: ["Next.js", "Google Gemini", "Mapbox", "Census API", "NASA"],
    color: "#CC7B7B",
    gh: "https://github.com/soneeee22000/Heatdebt-dev",
    demo: "https://heat-debt-dev.vercel.app/",
    organizer: "GenAI Academy",
    event: "GenAI Academy Hackathon 2026",
    date: "Feb 2026",
    status: "completed" as const,
  },
];

export const SKILLS: Skill[] = [
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

export const ALSO_FLUENT_IN =
  "Streamlit \u00B7 LangGraph \u00B7 Ollama \u00B7 vLLM \u00B7 MLflow \u00B7 Weights & Biases \u00B7 DVC \u00B7 Ray \u00B7 Celery \u00B7 RabbitMQ \u00B7 Kafka \u00B7 GraphQL \u00B7 Prisma \u00B7 Drizzle \u00B7 SQLAlchemy \u00B7 Playwright \u00B7 Vitest \u00B7 pytest";

export const NAV_IDS = [
  "about",
  "experience",
  "projects",
  "hackathons",
  "skills",
  "education",
  "contact",
];

export const SOCIAL_LINKS: [string, string][] = [
  ["GITHUB", "https://github.com/soneeee22000"],
  ["LINKEDIN", "https://www.linkedin.com/in/pyae-sone-kyaw-80386721b/"],
];

export const STATS_NUMS = ["4+", "6+", "2", "3"];

export const EDUCATION_META = [
  {
    school: "Telecom SudParis",
    date: "2023 \u2014 2024",
    gpa: "15.15/20",
    color: "#C9A96E",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
  },
  {
    school: "Asian Institute of Technology",
    date: "2022 \u2014 2024",
    gpa: "3.17/4.0",
    color: "#7B9CCC",
    flag: "\uD83C\uDDF9\uD83C\uDDED",
  },
  {
    school: "Myanmar Institute of Theology",
    date: "2016 \u2014 2020",
    gpa: "3.67/4.0",
    color: "#7BCC9C",
    flag: "\uD83C\uDDF2\uD83C\uDDF2",
  },
  {
    school: "University of Yangon",
    date: "2016 \u2014 2020*",
    gpa: "4.09/5.0",
    color: "#9C7BCC",
    flag: "\uD83C\uDDF2\uD83C\uDDF2",
  },
];

export const JOURNEY_META = [
  {
    flag: "\uD83C\uDDF2\uD83C\uDDF2",
    city: "Yangon",
    date: "2016\u20142020",
    color: "#7BCC9C",
  },
  {
    flag: "\u2192",
    city: "",
    date: "",
    color: "var(--color-muted)",
    arrow: true,
  },
  {
    flag: "\uD83C\uDDF9\uD83C\uDDED",
    city: "Bangkok",
    date: "2022\u20142024",
    color: "#7B9CCC",
  },
  {
    flag: "\u2708",
    city: "",
    date: "",
    color: "var(--color-accent)",
    arrow: true,
  },
  {
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    city: "Paris",
    date: "2023\u20142024",
    color: "#C9A96E",
  },
  {
    flag: "\u2192",
    city: "",
    date: "",
    color: "var(--color-muted)",
    arrow: true,
  },
  {
    flag: "\uD83C\uDFD9",
    city: "Station F",
    date: "2025\u2014Now",
    color: "#C9A96E",
  },
];

export const CERTS_META = [
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
