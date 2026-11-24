// All portfolio content lives here. Edit this file to update the site.
// Source: Mahmudul-Hasan-Resume.pdf, plus the Ainvio security work and research status from the Nov 2026 resume.

import type { IconName } from '../components/Icon';

export const profile = {
  name: 'Md. Mahmudul Hasan',
  firstName: 'Mahmudul',
  title: 'AI Engineer | Software Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'mahmudulmadu@gmail.com',
  photo: 'profile.jpg',
  cv: 'Md-Mahmudul-Hasan-CV.pdf',
  availability: 'Open to AI roles, research & PhD opportunities',
  typewriter: [
    'multi-agent AI systems',
    'RAG pipelines on Azure',
    'fine-tuned transformer models',
    'secure LLM applications',
    'full-stack .NET & React apps',
  ],
  intro:
    'AI Engineer at Ainvio with 2.5 years of production experience across AI engineering, .NET backend and full-stack development, and an independent ML researcher.',
  links: {
    github: 'https://github.com/Mahmudulmadu',
    linkedin: 'https://www.linkedin.com/in/mahmudulhasanmadu/',
    kaggle: 'https://www.kaggle.com/mahmudulmadu',
    orcid: 'https://orcid.org/0009-0001-0778-064X',
    leetcode: 'https://leetcode.com/u/mahmudulmadu',
    codeforces: 'https://codeforces.com/profile/Madu',
  },
};

export const heroStats = [
  { value: 2.5, decimals: 1, suffix: '+', label: 'years of experience' },
  { value: 2, decimals: 0, suffix: '', label: 'production multi-agent AI apps' },
  { value: 700, decimals: 0, suffix: '+', label: 'coding problems solved' },
  { value: 3.79, decimals: 2, suffix: '', label: 'CGPA · 1st in batch' },
];

export const heroBadges = [
  { icon: 'award' as IconName, label: 'Kaggle Expert' },
  { icon: 'file' as IconName, label: 'arXiv preprint 2026' },
  { icon: 'workflow' as IconName, label: 'Agentic AI' },
];

export const techMarquee = [
  'LangGraph', 'LangChain', 'Azure OpenAI', 'Azure AI Foundry', 'MCP', 'RAG', 'FastAPI', 'PyTorch',
  'Hugging Face', 'React', 'TypeScript', 'ASP.NET Core', 'C#', 'Python', 'Docker', 'Kubernetes',
  'AWS Lambda', 'Cosmos DB', 'Azure AI Search', 'GitHub Actions', 'scikit-learn', 'Ollama',
];

/* ---------- About ---------- */

export const about = {
  paragraphs: [
    'I am an AI Engineer with 2.5 years of experience delivering production-grade software across AI engineering, .NET backend and full-stack development. At Ainvio I built and shipped two production multi-agent AI applications with LangGraph, LangChain and Azure OpenAI, and I specialise in agentic AI, RAG pipelines, transformer fine-tuning, NLP-to-SQL and LLM cost optimisation.',
    'Alongside my job I do independent research: a first-author arXiv paper on how small ML benchmarks let chance pass for skill, a digital-twin and RAG-LLM framework for predictive maintenance, and the security of tool-using AI agents. Before industry, I graduated first in my batch and taught competitive programming at my university.',
  ],
  facts: [
    { icon: 'briefcase' as IconName, label: 'Current role', value: 'AI Engineer, Ainvio Pte Ltd' },
    { icon: 'mapPin' as IconName, label: 'Location', value: 'Dhaka, Bangladesh' },
    { icon: 'graduation' as IconName, label: 'Education', value: 'BSc in IT, UITS · CGPA 3.79 (1st)' },
    { icon: 'award' as IconName, label: 'Recognition', value: 'Kaggle Expert · arXiv author' },
    { icon: 'globe' as IconName, label: 'Languages', value: 'English, Bengali' },
  ],
  interests: ['AI security', 'Digital twin', 'Industry automation', 'Quantum computing', 'Robotics'],
};

/* ---------- Skills ---------- */

export const skillGroups: { icon: IconName; title: string; text: string; hue: number; items: string[] }[] = [
  {
    icon: 'workflow',
    title: 'AI & LLM engineering',
    text: 'Agents, retrieval and LLM apps in production.',
    hue: 190,
    items: ['LangGraph', 'LangChain', 'Multi-agent systems', 'RAG', 'MCP', 'Azure OpenAI', 'Azure AI Foundry', 'Vector databases', 'NLP-to-SQL', 'Prompt engineering', 'OpenAI / Groq / Ollama', 'Token & cost optimisation'],
  },
  {
    icon: 'brain',
    title: 'Machine learning',
    text: 'Training, fine-tuning and evaluating models.',
    hue: 270,
    items: ['PyTorch', 'scikit-learn', 'Hugging Face', 'Sentence Transformers', 'Transformer fine-tuning', 'CNN / RNN / LSTM', 'Reinforcement learning', 'spaCy & NLP', 'Permutation testing', 'Power analysis'],
  },
  {
    icon: 'shield',
    title: 'AI & application security',
    text: 'Keeping agents and platforms safe.',
    hue: 320,
    items: ['Prompt-injection defence', 'Agentic AI guardrails', 'Red-teaming & evals in CI', 'JWT / session auth', 'RBAC & tenant isolation', 'CSRF & rate limiting', 'Burp Suite', 'Acunetix', 'Fortify (SAST)', 'ISO/IEC 27001'],
  },
  {
    icon: 'code',
    title: 'Languages & frameworks',
    text: 'Backend, frontend and APIs.',
    hue: 230,
    items: ['Python', 'C#', 'C / C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'FastAPI', 'ASP.NET Core', 'EF Core', 'React', 'Streamlit'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    text: 'Shipping and running it.',
    hue: 30,
    items: ['Azure Functions', 'Container Apps', 'Cosmos DB', 'AI Search', 'Blob Storage', 'AWS Lambda', 'S3', 'DynamoDB', 'Amazon Connect', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    icon: 'database',
    title: 'Data & tools',
    text: 'Databases and the everyday toolkit.',
    hue: 160,
    items: ['SQL Server', 'PostgreSQL', 'Supabase', 'Git & GitHub', 'Jira', 'Postman', 'ServiceNow', 'Dynamics 365', 'Docling', 'Jupyter'],
  },
];

export const concepts = [
  'DSA', 'OOP', 'SOLID', 'Clean architecture', 'Microservices', 'Serverless', 'REST APIs', 'Agile / Scrum',
  'Generative AI', 'Calculus', 'Linear algebra', 'Probability & statistics',
];

/* ---------- Experience ---------- */

export interface Job {
  company: string;
  role: string;
  period: string;
  place: string;
  kind: 'work' | 'teaching';
  points: string[];
  tags: string[];
}

export const experience: Job[] = [
  {
    company: 'Ainvio Pte Ltd',
    role: 'AI Engineer',
    period: 'Dec 2025 – Present',
    place: 'Singapore · Hybrid',
    kind: 'work',
    points: [
      'Designed and deployed two production multi-agent AI applications with LangGraph, LangChain, FastAPI and React.',
      'Built the platform’s AI co-worker: a LangGraph agent that plans multi-step work, calls tools, keeps memory and acts only after human approval.',
      'Developed RAG on Azure OpenAI, AI Search, Functions, Container Apps and Cosmos DB; fine-tuned transformer models and deployed them through Azure AI Foundry.',
      'Secured the agent against prompt injection with code-level gates and a multilingual injection scanner; red-team and golden-set evals gate CI.',
      'Built the platform’s security layer: JWT with instant revocation, RBAC, tenant isolation, CSRF protection and rate limiting.',
      'Cut LLM costs through token optimisation, better retrieval and model routing; built an NLP-to-SQL generator and deployed on-prem models for sensitive data.',
    ],
    tags: ['LangGraph', 'Azure OpenAI', 'RAG', 'FastAPI', 'React', 'AI security'],
  },
  {
    company: 'Ainvio Pte Ltd',
    role: 'Software Engineer (.NET Developer)',
    period: 'Jun 2025 – Nov 2025',
    place: 'Singapore · Hybrid',
    kind: 'work',
    points: [
      'Developed scalable backend services with ASP.NET Core Web API, C#, FastAPI and React using clean architecture.',
      'Integrated Amazon Connect with Microsoft Dynamics 365 CRM for AI-driven automation: sentiment analysis and automated case creation.',
      'Deployed serverless FastAPI services on AWS Lambda with S3 and DynamoDB.',
      'Built secure, high-performance integrations between FastAPI and ASP.NET Web API services.',
    ],
    tags: ['ASP.NET Core', 'C#', 'AWS Lambda', 'DynamoDB', 'Dynamics 365'],
  },
  {
    company: 'SciTech Consulting and Solutions Ltd.',
    role: 'Application Developer',
    period: 'Apr 2024 – Apr 2025',
    place: 'Banani, Dhaka',
    kind: 'work',
    points: [
      'Delivered full-stack applications with ASP.NET Core (MVC / Web API), C#, SQL Server and React.js.',
      'Designed and integrated RESTful APIs applying OOP, SOLID and clean-code practices.',
      'Developed on the ServiceNow SaaS platform: ITSM, CSM, Service Portal, Virtual Agent, ITAM and ITBM.',
      'Worked in Agile sprints with Jira for task tracking and GitHub for version control.',
    ],
    tags: ['ASP.NET Core', 'React', 'SQL Server', 'ServiceNow'],
  },
  {
    company: 'IT Department, UITS',
    role: 'Competitive Programming Instructor',
    period: '2022',
    place: 'Dhaka',
    kind: 'teaching',
    points: [
      'Selected by the IT Department to run weekly training sessions for fellow students on C, C++ and Data Structures & Algorithms.',
      'Chosen on the strength of contest results and academic standing: a departmental teaching appointment, not a club role.',
    ],
    tags: ['C', 'C++', 'DSA', 'Teaching'],
  },
];

/* ---------- Projects ---------- */

export type ProjectCategory = 'AI / ML' | 'Full-stack' | 'Research';

export interface Project {
  name: string;
  tagline: string;
  year: string;
  category: ProjectCategory;
  icon: IconName;
  hue: number;
  description: string;
  highlights?: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  demoLabel?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'NeuroHire',
    tagline: 'AI resume analysis & ATS scoring',
    year: '2026',
    category: 'AI / ML',
    icon: 'file',
    hue: 190,
    featured: true,
    description: 'Resume intelligence platform that scores resumes the way an ATS does, then explains exactly what to fix.',
    highlights: [
      'Fine-tuned a BERT sentence transformer on ~6,000 resume / job pairs, beating the all-MiniLM-L6-v2 baseline.',
      'ATS scoring, job matching with keyword-gap analysis, skill validation and PDF reports.',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'PyTorch', 'Groq', 'Supabase'],
    repo: 'https://github.com/Mahmudulmadu/NeuroHire',
    demo: 'https://drive.google.com/file/d/12lHCBAp8ORzbJ8iI_250QC9kNpREZRE1/view?usp=sharing',
    demoLabel: 'Demo',
  },
  {
    name: 'AURA Class',
    tagline: 'Face & voice recognition attendance',
    year: '2026',
    category: 'AI / ML',
    icon: 'target',
    hue: 265,
    featured: true,
    description: 'Marks an entire class present in seconds from one classroom photo or a short audio clip.',
    highlights: [
      'dlib 128-D face embeddings with SVM and Resemblyzer 256-D speaker embeddings.',
      'Passwordless login by face, QR enrollment and teacher dashboards.',
    ],
    tech: ['Python', 'dlib', 'OpenCV', 'scikit-learn', 'Streamlit', 'Supabase'],
    repo: 'https://github.com/Mahmudulmadu/AURA',
    demo: 'https://drive.google.com/file/d/1jNbDTwWHfuIJBeNshnFGAEx8qiqLIxWn/view?usp=sharing',
    demoLabel: 'Demo',
  },
  {
    name: 'Bank AI SQL Chatbot',
    tagline: 'Local-LLM natural-language SQL',
    year: '2026',
    category: 'AI / ML',
    icon: 'database',
    hue: 320,
    featured: true,
    description: 'Ask a banking database questions in plain English. A local LLM writes the SQL, so data never leaves the machine.',
    highlights: [
      'ASP.NET Core MVC app connecting Ollama (llama3:8b) to SQL Server.',
      'Plain-English answers with parameterized, scope-limited queries.',
    ],
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Ollama'],
    repo: 'https://github.com/Mahmudulmadu/Bank-AI-SQL-Chatbot',
  },
  {
    name: 'When chance is hard to beat',
    tagline: 'Research code',
    year: '2026',
    category: 'Research',
    icon: 'flask',
    hue: 160,
    description: 'Code, notebooks and the 31-claim registry behind my methods paper.',
    tech: ['Python', 'scikit-learn', 'PyTorch'],
    repo: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat',
  },
  {
    name: 'ML foundations from scratch',
    tagline: 'Self-study',
    year: '2026',
    category: 'AI / ML',
    icon: 'book',
    hue: 40,
    description: 'Regression, KNN, Q-learning, SARSA, CNN, LSTM and GAN implemented from first principles.',
    tech: ['NumPy', 'PyTorch', 'RL'],
    repo: 'https://github.com/Mahmudulmadu/AI-ML-Data-Science_learning-Journey',
  },
  {
    name: 'ATS resume matching notebook',
    tagline: 'Fine-tuning',
    year: '2026',
    category: 'AI / ML',
    icon: 'code',
    hue: 210,
    description: 'Training notebook for NeuroHire’s domain-adapted sentence-transformer.',
    tech: ['Hugging Face', 'Sentence Transformers'],
    repo: 'https://github.com/Mahmudulmadu/ATS-Resume-Matching-Fine-Tuning-Notebook',
  },
  {
    name: 'Image Classification with ML',
    tagline: 'Computer vision',
    year: '2024',
    category: 'AI / ML',
    icon: 'cpu',
    hue: 280,
    description: 'Face image classifier reaching 92 % accuracy with SVM, ANN / DNN, OpenCV and wavelets.',
    tech: ['Python', 'SVM', 'OpenCV'],
    repo: 'https://github.com/Mahmudulmadu/Image-Classification',
    demo: 'https://colab.research.google.com/drive/1LUBgnYzo2VqM2F2wrbfsG-8G36tSskqk',
    demoLabel: 'Colab',
  },
  {
    name: 'Customer segmentation API',
    tagline: 'ML API',
    year: '2025',
    category: 'AI / ML',
    icon: 'chart',
    hue: 175,
    description: 'A KMeans customer-segmentation model served through FastAPI.',
    tech: ['scikit-learn', 'FastAPI'],
    repo: 'https://github.com/Mahmudulmadu/customer-segementaion-predict--ML-FastApi',
  },
  {
    name: 'Todo API on DynamoDB',
    tagline: 'Serverless backend',
    year: '2025',
    category: 'Full-stack',
    icon: 'layers',
    hue: 30,
    description: 'Todo backend with FastAPI and AWS DynamoDB.',
    tech: ['FastAPI', 'DynamoDB'],
    repo: 'https://github.com/Mahmudulmadu/Todo-FastAPI-Dynamodb',
  },
  {
    name: 'OTP authentication',
    tagline: 'Auth system',
    year: '2025',
    category: 'Full-stack',
    icon: 'lock',
    hue: 345,
    description: 'OTP-based authentication with an ASP.NET Core Web API and a React client.',
    tech: ['ASP.NET Core', 'React'],
    repo: 'https://github.com/Mahmudulmadu/otpProvider',
  },
  {
    name: 'Book Store',
    tagline: 'E-commerce',
    year: '2025',
    category: 'Full-stack',
    icon: 'book',
    hue: 220,
    description: 'Book shop with auth, roles, image uploads and REST APIs (Repository + Unit of Work).',
    tech: ['ASP.NET Core MVC', 'EF Core'],
    repo: 'https://github.com/Mahmudulmadu/BookStore_ASP.NET_Core',
  },
  {
    name: 'RESTful Web API',
    tagline: 'Clean API',
    year: '2025',
    category: 'Full-stack',
    icon: 'code',
    hue: 250,
    description: 'Repository pattern, DI, AutoMapper, validation, pagination and search.',
    tech: ['ASP.NET Core', 'SQL Server'],
    repo: 'https://github.com/Mahmudulmadu/Rest_API',
  },
  {
    name: 'Manobotay Amra',
    tagline: 'Donation platform',
    year: '2024',
    category: 'Full-stack',
    icon: 'heart',
    hue: 0,
    description: 'Donation platform with volunteer management, fund tracking and an SQL chatbot.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    repo: 'https://github.com/Mahmudulmadu/Manobotay-Amra',
    demo: 'https://drive.google.com/file/d/15snAidsw4CeNjYk8Tnn-qF3DO6Uq1kRo',
    demoLabel: 'Demo',
  },
];

/* ---------- Research: publication ---------- */

export const paper = {
  title:
    'When chance is hard to beat: exact permutation nulls and degenerate baselines for bearing fault diagnosis and remaining useful life',
  authors: 'Md. Mahmudul Hasan',
  status: 'arXiv preprint · Oct 2026',
  venueNote: 'First author · journal version prepared for Mechanical Systems and Signal Processing',
  areas: ['cs.LG', 'eess.SP', 'stat.ME'],
  summary:
    'Fault-diagnosis models are judged on public datasets of only a few dozen bearings. By enumerating every possible labelling of the bearings, the paper shows that meaningless labels already reach 69–76 % accuracy, that a standard deep model learns the bearings rather than the faults, and that for remaining life a constant “no life left” guess beats every trained model after the alarm.',
  links: {
    pdf: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat/blob/main/paper/when-chance-is-hard-to-beat.pdf',
    code: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat',
    registry: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat/blob/main/results/registry.csv',
  },
  findings: [
    { value: '165 / 462', label: 'labellings enumerated exactly' },
    { value: '69–76 %', label: 'accuracy reached by chance' },
    { value: '99.5 %', label: 'deep model identifying bearings, not faults' },
    { value: '31', label: 'claims rechecked in a public registry' },
  ],
};

/** Stats from results/registry.csv, used next to the interactive null chart. */
export const nullMeta: Record<string, { p: number; pct95: number; verdict: string; units: number; labellings: number }> = {
  'Paderborn|geometry': { p: 0.0043, pct95: 0.6955, verdict: 'clears its null', units: 11, labellings: 462 },
  'Paderborn|load-zone': { p: 0.1472, pct95: 0.7136, verdict: 'inside its null', units: 11, labellings: 462 },
  'XJTU-SY|geometry': { p: 0.0061, pct95: 0.7188, verdict: 'clears its null', units: 11, labellings: 165 },
  'XJTU-SY|load-zone': { p: 0.0061, pct95: 0.7387, verdict: 'clears its null', units: 11, labellings: 165 },
};

/* ---------- Research: digital twin ---------- */

export const dtResearch = {
  period: 'Jul 2026 – Present',
  title: 'Digital-twin-driven, retrieval-augmented LLM framework for explainable predictive maintenance of industrial electric motors',
  status: 'Ongoing · 30 notebooks',
  question: 'What can a predictive-maintenance system honestly tell an engineer, and how much evidence does each sentence need?',
  pipeline: [
    { name: 'Sensors', detail: 'vibration, current, torque', icon: 'cpu' as IconName },
    { name: 'Digital twin', detail: 'degradation & healthy population', icon: 'layers' as IconName },
    { name: 'Prediction', detail: 'detection & remaining-life floor', icon: 'chart' as IconName },
    { name: 'Output contract', detail: 'what is known, how often wrong', icon: 'file' as IconName },
    { name: 'RAG + LLM', detail: 'grounded explanations', icon: 'book' as IconName },
    { name: 'Contract checker', detail: 'no claim beyond the evidence', icon: 'shield' as IconName },
  ],
  questions: [
    'Detection, fault attribution and remaining-life bounds for motor bearings.',
    'Do RAG-grounded, contract-checked explanations beat raw numbers and an ungrounded LLM?',
    'Does a trajectory, rather than a snapshot, tighten remaining-life bounds?',
    'Which of the digital twin’s jobs survive measurement on real units?',
  ],
  datasets: ['XJTU-SY', 'Paderborn', 'CWRU', 'MaFaulDa (planned)'],
};

/* ---------- Research: AI security ---------- */

export const productionSecurity = [
  {
    icon: 'lock' as IconName,
    title: 'Prompt-injection gate',
    text: 'Actions are gated in code, not by prompt: every write must trace to a record the user named, and untrusted text is fenced as data.',
    metric: '122 e2e tests guard it',
  },
  {
    icon: 'bug' as IconName,
    title: 'Injection scanner',
    text: 'Flags injection at ingestion in English, Bangla, Hindi, Spanish, French and base64.',
    metric: '5 languages + base64',
  },
  {
    icon: 'checkCircle' as IconName,
    title: 'Human-in-the-loop',
    text: 'Every agent action is a dry-run preview that runs only after the user confirms it.',
    metric: 'preview before every write',
  },
  {
    icon: 'target' as IconName,
    title: 'Red-team & evals in CI',
    text: 'A 150-case golden set and a red-team suite must pass before a prompt, tool or model change ships.',
    metric: '≥95 % tool selection',
  },
];

export const securityStudies = [
  { title: 'Comparing prompt-injection defenses on AgentDojo', text: 'Spotlighting, a detector and plan-then-execute, then an adaptive attack on the strongest.' },
  { title: 'A least-privilege guard for an MCP agent', text: 'A policy layer in the spirit of Progent and CaMeL, attacked with poisoned tool descriptions.' },
  { title: 'Poisoning RAG and agent memory, then defending', text: 'PoisonedRAG and MINJA-style attacks against a provenance-based defense.' },
];

export const readingNow = ['CaMeL', 'AgentDojo', 'Progent', 'The Attacker Moves Second', 'MINJA', 'InjecAgent', 'StruQ', 'LlamaFirewall'];

/* ---------- Education ---------- */

export const education = [
  {
    school: 'University of Information Technology & Sciences (UITS)',
    degree: 'BSc in Information Technology',
    period: '2020 – 2024',
    grade: 'CGPA 3.79 / 4.00 · 1st position',
  },
  {
    school: 'Dhaka City College',
    degree: 'Higher Secondary Certificate (HSC), Science',
    period: '2018',
    grade: 'GPA 5.00 / 5.00',
  },
  {
    school: 'Jatrabari Ideal School and College',
    degree: 'Secondary School Certificate (SSC), Science',
    period: '2016',
    grade: 'GPA 5.00 / 5.00',
  },
];

/* ---------- Achievements & certifications ---------- */

export const honors = [
  { title: 'Kaggle Expert', by: 'Kaggle', date: '2026', link: 'https://www.kaggle.com/mahmudulmadu', icon: 'award' as IconName },
  { title: '1st position, BSc in IT', by: 'UITS · CGPA 3.79 / 4.00', date: '2024', icon: 'graduation' as IconName },
  { title: '700+ coding problems solved', by: 'LeetCode, Codeforces, HackerRank', date: '', link: 'https://leetcode.com/u/mahmudulmadu', icon: 'code' as IconName },
  { title: 'LeetCode 100 Days Badge, top 4.2 %', by: 'LeetCode', date: '2024', link: 'https://leetcode.com/u/mahmudulmadu', icon: 'trophy' as IconName },
  { title: '6th place, Victory Day Programming Contest', by: 'UITS · team relativity_47', date: '2021', link: 'https://www.hackerrank.com/contests/uits2021/leaderboard/3', icon: 'trophy' as IconName },
  { title: '22nd place, Collaboration Programming Contest', by: 'UITS · team identityimbalan1', date: '2022', link: 'https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard/3', icon: 'trophy' as IconName },
];

export const certifications = [
  { title: 'Hugging Face Agents Course', by: 'Hugging Face', date: 'May 2026' },
  { title: 'Fundamentals of MCP', by: 'Hugging Face', date: 'Apr 2026' },
  { title: 'AI Agents Fundamentals', by: 'Hugging Face', date: 'Apr 2026' },
  { title: 'Complete AI/ML Course', by: 'Apna College', date: 'Mar 2026' },
  { title: 'GenAI for .NET: LLM Apps with OpenAI & Ollama', by: 'Udemy', date: 'Jan 2026', link: 'https://www.udemy.com/certificate/UC-6f799ce5-8fe4-4e6d-8217-17e14668f474/' },
  { title: 'Full Stack Web Development with ASP.NET Core', by: 'Ostad · 96.3 % live tests', date: 'Oct 2025', link: 'https://ostad.app/share/certificate/c39614-md-mahmudul-hasan' },
  { title: 'Foundational C# with Microsoft', by: 'freeCodeCamp', date: 'Feb 2025', link: 'https://www.freecodecamp.org/certification/mahmudulmadu/foundational-c-sharp-with-microsoft' },
  { title: 'ISO 9001 & ISO 27001 Internal Auditor', by: 'B-ADVANCY Certification UK', date: 'Aug 2024' },
];
