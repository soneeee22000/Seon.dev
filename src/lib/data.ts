import type {
  Experience,
  Project,
  Skill,
  Education,
  Certification,
  JourneyItem,
  CategoryColors,
} from "@/types/portfolio";

export const GREETINGS: string[] = [
  "\u1019\u1004\u103A\u1039\u1002\u101C\u102C\u1015\u102B",
  "Bonjour",
  "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35",
  "Hello",
  "Hej",
];

export const EXP: Experience[] = [
  {
    job: "Founding AI Engineer",
    company: "Siloett.AI",
    badge: "Station F \u00B7 Paris",
    url: "https://siloett.ai/lander",
    date: "Dec 2025 \u2014 Present",
    color: "#C9A96E",
    pts: [
      "Architecting AI-powered CreativeAI solutions for Narrative OS \u2014 RAG pipelines, agentic systems, and LLM orchestration",
      "Building production-grade end-to-end AI systems from research to deployment in fast-paced startup environment",
      "Operating at Station F, the world's largest startup campus \u2014 collaborating directly with the founder",
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
    featured: false,
    emoji: "\uD83E\uDDE0",
    title: "PsychHealth AI",
    desc: "Mental health NLP app using Retrieval-Augmented Generation \u2014 combining pre-trained LLMs with external knowledge for contextual, personalized support.",
    tags: ["NLP", "PyTorch", "HuggingFace"],
    color: "#9C7BCC",
    demo: "https://psych-ai-rag-mvp.streamlit.app/",
    gh: "https://github.com/soneeee22000/Psych_ai_with_RAG",
  },
  {
    id: 3,
    featured: false,
    emoji: "\u26A1",
    title: "Ecoforecaster",
    desc: "Interactive energy consumption dashboard for France with AI-powered recommendations to reduce household energy costs and build a sustainable smart home.",
    tags: ["Next.js", "Python", "JavaScript"],
    color: "#7BCC9C",
    demo: "https://ai-energy-theta.vercel.app/",
    gh: "https://github.com/soneeee22000/AI_Energy_Main_App",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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

export const SKILLS: Skill[] = [
  {
    name: "PyTorch",
    cat: "AI / ML",
    logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
  },
  {
    name: "Python",
    cat: "Language",
    logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    name: "React",
    cat: "Frontend",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "Azure",
    cat: "Cloud",
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  },
  {
    name: "Docker",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    name: "PostgreSQL",
    cat: "Database",
    logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Neo4j",
    cat: "Database",
    logo: "https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg",
  },
  {
    name: "GitLab",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
  },
  {
    name: "Node.js",
    cat: "Backend",
    logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    name: "GitHub",
    cat: "DevOps",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
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
  "FastAPI \u00B7 Streamlit \u00B7 LangChain \u00B7 Hugging Face \u00B7 OpenAI API \u00B7 Next.js \u00B7 TypeScript \u00B7 Supabase \u00B7 Pandas \u00B7 NumPy \u00B7 Jupyter \u00B7 scikit-learn";

export const NAV_LINKS: [string, string][] = [
  ["ABOUT", "about"],
  ["EXPERIENCE", "experience"],
  ["PROJECTS", "projects"],
  ["SKILLS", "skills"],
  ["EDUCATION", "education"],
  ["CONTACT", "contact"],
];

export const SOCIAL_LINKS: [string, string][] = [
  ["GITHUB", "https://github.com/soneeee22000"],
  ["LINKEDIN", "https://www.linkedin.com/in/pyae-sone-kyaw-80386721b/"],
];

export const ABOUT_PARAGRAPHS: string[] = [
  "Currently a Founding AI Engineer at Siloett.AI (Station F, Paris), where I architect AI-powered solutions for Narrative OS \u2014 the creative industry's intelligence layer.",
  "My expertise spans deep learning, NLP, computer vision, and agentic AI systems, with a strong focus on CreativeAI and AI for Social Good domains.",
  "I bring an unusual combination: technical depth in Python (PyTorch, FastAPI) + cloud infrastructure (Azure, Docker) + multilingual communication skills across Burmese, English, French, and Thai.",
  "This multicultural background uniquely positions me to build AI systems that work across diverse human contexts and communities.",
];

export const ABOUT_QUOTE =
  "A Data Scientist and AI Researcher with dual Master's degrees spanning Asia and Europe \u2014 building impactful tools at the frontier of CreativeAI.";

export const STATS: [string, string][] = [
  ["2+", "Yrs in AI / ML"],
  ["6+", "Projects Shipped"],
  ["2", "Master's Degrees"],
  ["3", "Countries Lived"],
];
