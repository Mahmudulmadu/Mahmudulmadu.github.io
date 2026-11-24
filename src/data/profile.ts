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
  availability: 'Open to AI research & PhD opportunities',
  typewriter: [
    'multi-agent AI systems',
    'RAG pipelines on Azure',
    'fine-tuned transformer models',
    'secure LLM applications',
    'ML research that holds up',
    'full-stack .NET & React apps',
  ],
  intro:
    'AI Engineer at Ainvio with 2.5 years of production software behind me. I build LangGraph agents, RAG systems and fine-tuned models on Azure, keep them secure and cost-efficient, and do independent ML research on top.',
  summary:
    'AI Engineer with 2.5 years of experience delivering production-grade software across AI engineering, .NET backend, and full-stack development. I built and shipped two production multi-agent AI applications with LangGraph, LangChain and Azure OpenAI, and I specialise in agentic AI, RAG pipelines, transformer fine-tuning, NLP-to-SQL generation, and LLM cost and token optimisation. Strong cloud background on Azure and AWS serverless, with hands-on CI/CD, Docker and Kubernetes. Kaggle Expert.',
  languages: ['English (professional)', 'Bengali (native)'],
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
  { value: 2.5, decimals: 1, suffix: '+', label: 'years shipping production software' },
  { value: 2, decimals: 0, suffix: '', label: 'production multi-agent AI apps' },
  { value: 700, decimals: 0, suffix: '+', label: 'algorithm problems solved' },
  { value: 3.79, decimals: 2, suffix: '', label: 'CGPA, 1st position in batch' },
];

export const heroBadges = [
  { icon: 'award' as IconName, label: 'Kaggle Expert' },
  { icon: 'file' as IconName, label: 'arXiv preprint · 2026' },
  { icon: 'workflow' as IconName, label: 'Agentic AI' },
  { icon: 'graduation' as IconName, label: '1st in batch' },
];

/* ---------- What I do ---------- */

export const expertise: { icon: IconName; title: string; text: string; tags: string[]; hue: number }[] = [
  {
    icon: 'workflow',
    title: 'Agentic AI & multi-agent systems',
    text: 'Production LangGraph agents that plan multi-step work, call tools, keep memory and act only after human approval.',
    tags: ['LangGraph', 'LangChain', 'MCP', 'Tool calling'],
    hue: 190,
  },
  {
    icon: 'database',
    title: 'RAG & LLM applications',
    text: 'Retrieval pipelines on Azure OpenAI, AI Search and Cosmos DB vector search; NLP-to-SQL; token and cost optimisation.',
    tags: ['Azure OpenAI', 'AI Search', 'Vector DBs', 'NLP-to-SQL'],
    hue: 230,
  },
  {
    icon: 'brain',
    title: 'Machine learning & fine-tuning',
    text: 'Transformer fine-tuning, sentence-transformer training, computer vision, speaker recognition and classical ML, from NumPy up.',
    tags: ['PyTorch', 'Hugging Face', 'scikit-learn', 'Kaggle Expert'],
    hue: 270,
  },
  {
    icon: 'flask',
    title: 'Research & evaluation',
    text: 'A first-author methods paper on permutation nulls and degenerate baselines; digital-twin and RAG-LLM research for predictive maintenance.',
    tags: ['arXiv 2026', 'Permutation tests', 'Digital twin'],
    hue: 160,
  },
  {
    icon: 'shield',
    title: 'AI & application security',
    text: 'Prompt-injection defence gated in code, red-team evals in CI, and the auth, RBAC and tenant isolation around a production agent.',
    tags: ['Prompt injection', 'Guardrails', 'RBAC'],
    hue: 320,
  },
  {
    icon: 'layers',
    title: 'Full-stack & cloud engineering',
    text: 'ASP.NET Core and FastAPI backends, React frontends, AWS serverless and Azure, shipped with Docker, Kubernetes and CI/CD.',
    tags: ['ASP.NET Core', 'FastAPI', 'React', 'AWS', 'Azure'],
    hue: 30,
  },
];

export const techMarquee = [
  'LangGraph', 'LangChain', 'Azure OpenAI', 'Azure AI Foundry', 'MCP', 'RAG', 'FastAPI', 'PyTorch',
  'Hugging Face', 'React', 'TypeScript', 'ASP.NET Core', 'C#', 'Python', 'Docker', 'Kubernetes',
  'AWS Lambda', 'Cosmos DB', 'Azure AI Search', 'GitHub Actions', 'scikit-learn', 'Ollama',
];

export const interests = [
  { label: 'AI security', note: 'current focus' },
  { label: 'Digital twin', note: 'ongoing research' },
  { label: 'Industry automation', note: 'ongoing research' },
  { label: 'Quantum computing', note: '' },
  { label: 'Robotics', note: '' },
];

/* ---------- AI security ---------- */

export const productionSecurity = [
  {
    icon: 'lock' as IconName,
    title: 'Prompt-injection gate',
    text: 'CVs, careers-form notes and pasted job ads are untrusted text the agent reads. Actions are gated in code: every write argument must trace to a record the agent read and the user named, untrusted text is fenced as data, and a separate reader fails closed.',
    metric: '122 end-to-end tests fail if the gate is disabled',
  },
  {
    icon: 'bug' as IconName,
    title: 'Multilingual injection scanner',
    text: 'Flags injection attempts at ingestion in English, Bangla, Hindi, Spanish, French and base64, before any text reaches the agent.',
    metric: '5 languages + base64',
  },
  {
    icon: 'checkCircle' as IconName,
    title: 'Human-in-the-loop by design',
    text: 'The agent never writes on its own. Each action is a dry-run preview card that runs only on confirmation; risky steps need a typed confirmation checked on the server, and stale proposals are refused.',
    metric: 'dry-run preview before every write',
  },
  {
    icon: 'target' as IconName,
    title: 'Red-team and evals in CI',
    text: 'A 150-case golden set fails CI when a prompt, tool or model changes without a passing run; a red-team suite is gated at zero violations; new agent actions roll out in shadow mode.',
    metric: '≥95 % tool selection to merge',
  },
  {
    icon: 'shield' as IconName,
    title: 'Platform security',
    text: 'JWT in HttpOnly cookies with instant revocation, server-side RBAC with no self-escalation, tenant isolation on every query, CSRF Origin checks, PBKDF2-HMAC-SHA256, and rate limits by IP and by account.',
    metric: 'multi-tenant isolation',
  },
  {
    icon: 'search' as IconName,
    title: 'Production security review',
    text: 'Reviewed the full production platform (API routes, React app, deploy scripts, Azure settings) for cost abuse and data exposure, and delivered ranked fixes with a remediation plan.',
    metric: 'end-to-end review',
  },
];

export const securityInterests = [
  {
    title: 'Prompt injection in tool-using agents',
    text: 'Indirect instructions hidden in pages, documents and tool outputs. Measuring attack success and utility together, not one without the other.',
    tags: ['indirect injection', 'AgentDojo', 'spotlighting'],
  },
  {
    title: 'MCP and tool security',
    text: 'Poisoned tool descriptions, tool hijacking and over-broad permissions; least-privilege layers that allow only what a task needs.',
    tags: ['MCP', 'least privilege', 'Progent / CaMeL'],
  },
  {
    title: 'Poisoned retrieval and memory',
    text: 'RAG corpora and long-term agent memory as an attack surface, with provenance tracking as a defense and an honest account of its cost.',
    tags: ['RAG poisoning', 'memory injection', 'provenance'],
  },
  {
    title: 'Evaluating defenses honestly',
    text: 'Defenses that hold against fixed attacks often fall to adaptive ones. Nulls, negative controls and adaptive attackers, carried over from my methods paper.',
    tags: ['adaptive attacks', 'baselines', 'reporting rules'],
  },
];

export type StudyStatus = 'In progress' | 'Planned';

export const securityStudies: { title: string; status: StudyStatus; text: string }[] = [
  {
    title: 'Comparing prompt-injection defenses on AgentDojo',
    status: 'Planned',
    text: 'One open model, three defenses (spotlighting, a detector, plan-then-execute), then an adaptive attack designed against the strongest one.',
  },
  {
    title: 'A least-privilege guard for an MCP agent',
    status: 'Planned',
    text: 'A policy layer in the spirit of Progent and CaMeL, attacked with poisoned tool descriptions; measures what it blocks and which normal tasks it breaks.',
  },
  {
    title: 'Poisoning a RAG app and agent memory, then defending',
    status: 'Planned',
    text: 'A PoisonedRAG reproduction and a MINJA-style memory attack, followed by a provenance-based defense.',
  },
];

export const readingNow = [
  'CaMeL', 'AgentDojo', 'Progent', 'The Attacker Moves Second', 'Adaptive Attacks Break Defenses', 'MINJA',
  'ToolHijacker', 'InjecAgent', 'StruQ', 'The Instruction Hierarchy', 'LlamaFirewall', 'AgentPoison',
];

/* ---------- Publication ---------- */

export const paper = {
  title:
    'When chance is hard to beat: exact permutation nulls and degenerate baselines for bearing fault diagnosis and remaining useful life',
  authors: 'Md. Mahmudul Hasan',
  affiliation: 'Independent Researcher',
  status: 'arXiv preprint · Oct 2026',
  venueNote: 'First-author · journal version prepared for Mechanical Systems and Signal Processing',
  areas: ['cs.LG', 'eess.SP', 'stat.ME'],
  summary:
    'Bearing fault diagnosis and remaining-useful-life prediction are judged on public datasets of a few dozen bearings. The paper measures what chance looks like at that size. Enumerating every class-preserving labelling of the bearings shows that meaningless labels already reach 69 to 76 % accuracy at the 95th percentile. A standard deep baseline stays inside its null yet tells individual bearings apart at 99.5 %: it learns the bearings, not the faults. For remaining life, a constant "no life left" prediction beats every trained estimator after the alarm, so what can be defended is a lower bound.',
  links: {
    pdf: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat/blob/main/paper/when-chance-is-hard-to-beat.pdf',
    code: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat',
    registry: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat/blob/main/results/registry.csv',
  },
  findings: [
    { value: '165 / 462', label: 'labellings enumerated exactly, XJTU-SY / Paderborn' },
    { value: '69–76 %', label: 'accuracy reached by meaningless labels (95th pct)' },
    { value: '6 of 11', label: 'of our own attribution results fall inside their null' },
    { value: '31', label: 'claims rechecked against their comparators in a public registry' },
  ],
  rules: [
    'Report the exact permutation null at the real number of units.',
    'Score a deliberately incapable control next to every positive result.',
    'Report the study size needed to detect the effect, not only the effect.',
    'On run-to-failure data, compare remaining-life error with a constant baseline.',
    'Publish a registry that pairs every claim with its comparator.',
  ],
};

/** Stats from results/registry.csv, used next to the interactive null chart. */
export const nullMeta: Record<string, { p: number; pct95: number; verdict: string; units: number; labellings: number }> = {
  'Paderborn|geometry': { p: 0.0043, pct95: 0.6955, verdict: 'clears its null', units: 11, labellings: 462 },
  'Paderborn|load-zone': { p: 0.1472, pct95: 0.7136, verdict: 'inside its null', units: 11, labellings: 462 },
  'XJTU-SY|geometry': { p: 0.0061, pct95: 0.7188, verdict: 'clears its null', units: 11, labellings: 165 },
  'XJTU-SY|load-zone': { p: 0.0061, pct95: 0.7387, verdict: 'clears its null', units: 11, labellings: 165 },
};

/* ---------- Ongoing research ---------- */

export const dtResearch = {
  role: 'Independent Researcher',
  period: 'Jul 2026 – Present',
  title: 'A digital-twin-driven, retrieval-augmented LLM framework for explainable predictive maintenance of industrial electric motors',
  status: 'Ongoing · 30 measurement notebooks',
  question: 'What can a predictive-maintenance system honestly tell an engineer, and how much evidence does each sentence need?',
  pipeline: [
    { name: 'Sensors', detail: 'vibration, phase currents, torque, speed, temperature', icon: 'cpu' as IconName },
    { name: 'Digital twin', detail: 'degradation rate, healthy population, operating point', icon: 'layers' as IconName },
    { name: 'Prediction', detail: 'detection, race attribution, remaining-life floor', icon: 'chart' as IconName },
    { name: 'Output contract', detail: 'which race, how often wrong, not before n minutes', icon: 'file' as IconName },
    { name: 'RAG + LLM', detail: 'explanations grounded in the unit’s own documents', icon: 'book' as IconName },
    { name: 'Contract checker', detail: 'no sentence claims more than the evidence licenses', icon: 'shield' as IconName },
  ],
  questions: [
    { id: 'RQ1', text: 'Detection, race attribution and remaining-life bounds for motor drive-train bearings.' },
    { id: 'RQ2', text: 'Does a RAG-grounded, contract-checked explanation beat raw numbers and an ungrounded LLM, without laundering uncertainty into fluent certainty?' },
    { id: 'RQ3', text: 'Does trajectory, rather than a snapshot, tighten remaining-life bounds?' },
    { id: 'RQ4', text: 'Which of the twin’s jobs survive measurement on real units?' },
  ],
  datasets: ['XJTU-SY run-to-failure', 'Paderborn (vibration + motor current)', 'CWRU', 'MaFaulDa (planned)'],
  stack: ['Python', 'scikit-learn', 'PyTorch', 'NumPy / SciPy', 'ChromaDB / FAISS', 'Ollama', 'Streamlit'],
  securityLink:
    'The contract checker is an LLM-output verification problem: “is the model saying more than it can support?” sits at the center of LLM security too.',
};

/* ---------- Experience ---------- */

export interface Job {
  company: string;
  role: string;
  period: string;
  place: string;
  summary: string;
  groups?: { title: string; icon: IconName; points: string[] }[];
  points?: string[];
  tags: string[];
}

export const experience: Job[] = [
  {
    company: 'Ainvio Pte Ltd',
    role: 'AI Engineer',
    period: 'Dec 2025 – Present',
    place: 'Singapore · Hybrid',
    summary:
      'Building the AI co-worker of Ainvio’s multi-tenant agentic hiring platform, end to end: agent design, RAG, fine-tuned models on Azure, and the security layer around it.',
    groups: [
      {
        title: 'Agentic AI',
        icon: 'workflow',
        points: [
          'Designed and deployed two production-grade multi-agent AI applications with LangGraph, LangChain, FastAPI and React.',
          'Built agentic systems with autonomous reasoning, dynamic tool orchestration and multi-agent collaboration, with custom tools for real business problems.',
          'A LangGraph agent that plans multi-step work, calls tools, keeps memory and acts only after human approval; idempotent actions, durable queues with retries, live progress over SSE.',
        ],
      },
      {
        title: 'AI security',
        icon: 'shield',
        points: [
          'Prompt-injection defence gated in code: provenance checks on every write argument, untrusted text fenced as data, a multilingual injection scanner at ingestion.',
          'Platform security: JWT with instant revocation, server-side RBAC, tenant isolation, CSRF protection, PBKDF2 hashing and rate limiting.',
          'Red-team suite and a 150-case golden-set eval that gate CI; a full security review of the production platform with a remediation plan.',
        ],
      },
      {
        title: 'RAG, models and data',
        icon: 'database',
        points: [
          'Developed RAG applications with Azure OpenAI, Azure AI Search, Azure Functions, Azure Container Apps and Azure Cosmos DB (NoSQL).',
          'Fine-tuned transformer models for project domains and deployed agents and fine-tuned models to production through Azure AI Foundry.',
          'Built an NLP-to-SQL generator; worked with vector databases for embedding storage, semantic search and retrieval optimisation.',
        ],
      },
      {
        title: 'Cost and delivery',
        icon: 'chart',
        points: [
          'Reduced LLM operating cost through token optimisation, better retrieval and routing workloads to cheaper models without losing quality.',
          'Deployed on-premises models for data-sensitive workloads; tracked sprints and delivery with Jira in an Agile team.',
        ],
      },
    ],
    tags: ['LangGraph', 'LangChain', 'Azure OpenAI', 'AI Foundry', 'FastAPI', 'React', 'Cosmos DB', 'Prompt-injection defence'],
  },
  {
    company: 'Ainvio Pte Ltd',
    role: 'Software Engineer (.NET Developer)',
    period: 'Jun 2025 – Nov 2025',
    place: 'Singapore · Hybrid',
    summary: 'Backend and cloud engineering across .NET and Python services, focused on AWS serverless and CRM / contact-center integration.',
    points: [
      'Developed scalable backend services with ASP.NET Core Web API, C#, FastAPI and React, using clean architecture and REST best practices.',
      'Integrated Amazon Connect with Microsoft Dynamics 365 CRM for AI-driven automation, including sentiment analysis and automated AI case creation.',
      'Designed and deployed cloud-native serverless solutions on AWS: FastAPI services on AWS Lambda, storage on S3, and DynamoDB.',
      'Built secure, high-performance integrations between FastAPI and ASP.NET Web API services.',
      'Contributed to Agile ceremonies: sprint planning, stand-ups and code reviews with Jira and GitHub.',
    ],
    tags: ['ASP.NET Core', 'C#', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'Dynamics 365'],
  },
  {
    company: 'SciTech Consulting and Solutions Ltd.',
    role: 'Application Developer',
    period: 'Apr 2024 – Apr 2025',
    place: 'Banani, Dhaka',
    summary: 'Full-stack .NET development alongside enterprise platform work on ServiceNow.',
    points: [
      'Delivered full-stack applications with ASP.NET Core (MVC / Web API), C#, SQL Server and React.js.',
      'Designed and integrated RESTful APIs applying OOP, SOLID and clean-code practices.',
      'Developed on the ServiceNow SaaS platform: ITSM, CSM, Service Portal, Virtual Agent, ITAM and ITBM modules.',
      'Participated in Agile sprints with Jira for task tracking and GitHub for version control.',
    ],
    tags: ['ASP.NET Core', 'React', 'SQL Server', 'ServiceNow'],
  },
];

/* ---------- Teaching ---------- */

export const teaching = {
  role: 'Instructor, Competitive Programming',
  org: 'IT Department, University of Information Technology & Sciences (UITS)',
  since: 'Selected Apr 2022',
  text: 'Selected by the UITS IT Department, on the strength of contest results and academic standing, to run weekly training sessions for fellow students. A departmental teaching appointment, not a club role.',
  topics: ['C', 'C++', 'Data Structures', 'Algorithms', 'Problem solving', 'Contest strategy'],
  record: [
    { value: '700+', label: 'problems solved on LeetCode, Codeforces and HackerRank' },
    { value: '6th', label: 'UITS Victory Day Programming Contest 2021 · team relativity_47', link: 'https://www.hackerrank.com/contests/uits2021/leaderboard/3' },
    { value: '22nd', label: 'UITS Collaboration Programming Contest 2022 · team identityimbalan1', link: 'https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard/3' },
    { value: 'Top 4.2 %', label: 'LeetCode 100 Days Badge 2024, globally', link: 'https://leetcode.com/u/mahmudulmadu' },
  ],
};

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
    description: 'Full-stack resume intelligence platform that scores resumes the way an ATS does, then explains exactly what to fix.',
    highlights: [
      'Fine-tuned a BERT-based sentence transformer from scratch on ~6,000 curated resume / job-description pairs, outperforming the all-MiniLM-L6-v2 baseline.',
      'ATS scoring (formatting, keywords, content, compatibility), job matching with keyword-gap analysis, evidence-based skill validation, PDF reports.',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'Sentence Transformers', 'PyTorch', 'Groq', 'Supabase'],
    repo: 'https://github.com/Mahmudulmadu/NeuroHire',
    demo: 'https://drive.google.com/file/d/12lHCBAp8ORzbJ8iI_250QC9kNpREZRE1/view?usp=sharing',
    demoLabel: 'Demo video',
  },
  {
    name: 'AURA Class',
    tagline: 'Face & voice recognition attendance',
    year: '2026',
    category: 'AI / ML',
    icon: 'target',
    hue: 265,
    featured: true,
    description: 'Marks an entire class present in seconds from a single classroom photo or a short audio clip, replacing manual roll-calls.',
    highlights: [
      'dlib 128-D face embeddings with SVM classification and Resemblyzer 256-D speaker embeddings; passwordless student login by face.',
      'Streamlit + Supabase (PostgreSQL): enrollment by share code or QR, teacher dashboards, per-subject records.',
    ],
    tech: ['Python', 'dlib', 'OpenCV', 'Resemblyzer', 'scikit-learn', 'Streamlit', 'Supabase'],
    repo: 'https://github.com/Mahmudulmadu/AURA',
    demo: 'https://drive.google.com/file/d/1jNbDTwWHfuIJBeNshnFGAEx8qiqLIxWn/view?usp=sharing',
    demoLabel: 'Demo video',
  },
  {
    name: 'Bank AI SQL Chatbot',
    tagline: 'Local-LLM natural-language SQL',
    year: '2026',
    category: 'AI / ML',
    icon: 'database',
    hue: 320,
    featured: true,
    description: 'Ask a banking database questions in plain English. A locally deployed LLM writes the SQL, so customer data never leaves the machine.',
    highlights: [
      'ASP.NET Core MVC app connecting Ollama (llama3:8b) to a SQL Server banking database.',
      'Plain-English summaries of results; parameterized, scope-limited query execution.',
    ],
    tech: ['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Ollama'],
    repo: 'https://github.com/Mahmudulmadu/Bank-AI-SQL-Chatbot',
  },
  {
    name: 'When chance is hard to beat',
    tagline: 'Paper code, notebooks & claim registry',
    year: '2026',
    category: 'Research',
    icon: 'flask',
    hue: 160,
    description: 'Code, notebooks and the 31-claim registry behind the methods paper on permutation nulls and degenerate baselines.',
    tech: ['Python', 'scikit-learn', 'PyTorch', 'Jupyter'],
    repo: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat',
  },
  {
    name: 'ML foundations from scratch',
    tagline: 'Logged self-study programme',
    year: '2026',
    category: 'AI / ML',
    icon: 'book',
    hue: 40,
    description: 'Linear and logistic regression and KNN from first principles in NumPy; Q-learning and SARSA agents; ANN, CNN, RNN / LSTM and GAN models in PyTorch. Logged daily, Jan–Jun 2026.',
    tech: ['NumPy', 'PyTorch', 'Reinforcement learning', 'Jupyter'],
    repo: 'https://github.com/Mahmudulmadu/AI-ML-Data-Science_learning-Journey',
  },
  {
    name: 'ATS resume matching notebook',
    tagline: 'Fine-tuning a sentence transformer',
    year: '2026',
    category: 'AI / ML',
    icon: 'code',
    hue: 210,
    description: 'The training notebook behind NeuroHire’s domain-adapted sentence-transformer model.',
    tech: ['Hugging Face', 'Sentence Transformers', 'PyTorch'],
    repo: 'https://github.com/Mahmudulmadu/ATS-Resume-Matching-Fine-Tuning-Notebook',
  },
  {
    name: 'Image Classification with ML',
    tagline: '92 % accuracy face classifier',
    year: '2024',
    category: 'AI / ML',
    icon: 'cpu',
    hue: 280,
    description: 'Image classifier trained on personal and peer datasets, reaching 92 % accuracy.',
    tech: ['Python', 'SVM', 'ANN / DNN', 'OpenCV', 'Haar cascade', 'Wavelet transform'],
    repo: 'https://github.com/Mahmudulmadu/Image-Classification',
    demo: 'https://colab.research.google.com/drive/1LUBgnYzo2VqM2F2wrbfsG-8G36tSskqk',
    demoLabel: 'Colab',
  },
  {
    name: 'Customer segmentation API',
    tagline: 'KMeans served with FastAPI',
    year: '2025',
    category: 'AI / ML',
    icon: 'chart',
    hue: 175,
    description: 'A KMeans customer-segmentation model served through a FastAPI endpoint.',
    tech: ['Python', 'scikit-learn', 'FastAPI'],
    repo: 'https://github.com/Mahmudulmadu/customer-segementaion-predict--ML-FastApi',
  },
  {
    name: 'Todo API on DynamoDB',
    tagline: 'Serverless-ready backend',
    year: '2025',
    category: 'Full-stack',
    icon: 'layers',
    hue: 30,
    description: 'Todo backend with FastAPI and AWS DynamoDB for user and task data.',
    tech: ['FastAPI', 'AWS DynamoDB', 'Python'],
    repo: 'https://github.com/Mahmudulmadu/Todo-FastAPI-Dynamodb',
  },
  {
    name: 'OTP authentication',
    tagline: 'ASP.NET Core + React',
    year: '2025',
    category: 'Full-stack',
    icon: 'lock',
    hue: 345,
    description: 'Full-stack OTP-based authentication with an ASP.NET Core Web API and a React client.',
    tech: ['ASP.NET Core', 'React', 'C#'],
    repo: 'https://github.com/Mahmudulmadu/otpProvider',
  },
  {
    name: 'Book Store',
    tagline: 'ASP.NET Core MVC commerce',
    year: '2025',
    category: 'Full-stack',
    icon: 'book',
    hue: 220,
    description: 'Book-selling web app with authentication, role-based access, image uploads and REST APIs, using Repository and Unit of Work patterns.',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap'],
    repo: 'https://github.com/Mahmudulmadu/BookStore_ASP.NET_Core',
  },
  {
    name: 'RESTful Web API',
    tagline: 'Clean ASP.NET Core API',
    year: '2025',
    category: 'Full-stack',
    icon: 'code',
    hue: 250,
    description: 'Repository pattern, dependency injection, AutoMapper DTOs, validation, pagination and search over SQL Server.',
    tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'AutoMapper'],
    repo: 'https://github.com/Mahmudulmadu/Rest_API',
  },
  {
    name: 'Manobotay Amra',
    tagline: 'Donation platform',
    year: '2024',
    category: 'Full-stack',
    icon: 'heart',
    hue: 0,
    description: 'Donation platform with volunteer management, fund tracking and an SQL-based chatbot.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML / CSS'],
    repo: 'https://github.com/Mahmudulmadu/Manobotay-Amra',
    demo: 'https://drive.google.com/file/d/15snAidsw4CeNjYk8Tnn-qF3DO6Uq1kRo',
    demoLabel: 'Demo video',
  },
];

/* ---------- Skills (from the resume, plus Security and Research methods) ---------- */

export const skills: { group: string; icon: IconName; items: string[]; wide?: boolean }[] = [
  {
    group: 'AI / ML',
    icon: 'sparkles',
    wide: true,
    items: [
      'LangChain', 'LangGraph', 'Agentic AI & multi-agent systems', 'RAG', 'MCP', 'PyTorch', 'scikit-learn',
      'Hugging Face Transformers', 'Sentence Transformers', 'Transformer fine-tuning', 'spaCy', 'NLP', 'NLP-to-SQL',
      'Vector databases', 'Embeddings & semantic search', 'LLM token & cost optimization', 'Prompt engineering',
      'OpenAI / Groq / Ollama', 'On-premises model deployment',
    ],
  },
  {
    group: 'AI & application security',
    icon: 'shield',
    items: [
      'Prompt-injection defence', 'Provenance gating', 'Untrusted-data fencing', 'Agentic AI guardrails', 'Red-teaming & evals in CI',
      'JWT / session auth', 'RBAC & permissions', 'Multi-tenant isolation', 'CSRF protection', 'PBKDF2 hashing',
      'Rate limiting & abuse prevention', 'Burp Suite', 'Acunetix', 'Fortify (SAST)', 'Azure & AWS IAM', 'ISO/IEC 27001 (auditor training)',
    ],
  },
  {
    group: 'Programming languages',
    icon: 'code',
    items: ['Python', 'C#', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    group: 'Frameworks & platforms',
    icon: 'layers',
    items: ['ASP.NET Core (MVC / Web API)', 'FastAPI', 'Entity Framework Core', 'React', 'Streamlit', 'ServiceNow', 'Microsoft Dynamics 365', 'Docling'],
  },
  {
    group: 'Cloud',
    icon: 'cloud',
    items: [
      'Azure OpenAI', 'Azure AI Search', 'Azure Functions', 'Azure Container Apps', 'Cosmos DB', 'Blob Storage', 'Azure AI Foundry',
      'AWS Lambda', 'S3', 'DynamoDB', 'Amazon Connect',
    ],
  },
  {
    group: 'DevOps & tools',
    icon: 'terminal',
    items: ['CI/CD (GitHub Actions)', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Jira', 'Postman', 'GitHub Copilot', 'VS Code', 'Jupyter'],
  },
  {
    group: 'Databases',
    icon: 'database',
    items: ['SQL Server', 'PostgreSQL', 'Azure Cosmos DB', 'DynamoDB', 'Vector databases'],
  },
  {
    group: 'Research methods',
    icon: 'flask',
    items: ['Exact permutation testing', 'Power analysis & learning curves', 'Negative controls', 'Reject options & open-set evaluation', 'Spectral / envelope features'],
  },
  {
    group: 'Concepts',
    icon: 'brain',
    wide: true,
    items: [
      'DSA', 'REST APIs', 'OOP', 'SOLID principles', 'Clean architecture', 'Microservices', 'Serverless', 'Agile / Scrum',
      'Machine learning', 'Deep learning (ANN, FNN, CNN, RNN, LSTM)', 'Reinforcement learning', 'Generative AI', 'Transformers',
      'Mathematics (calculus, linear algebra, probability, statistics)',
    ],
  },
];

/* ---------- Honors & certifications ---------- */

export const honors = [
  { title: 'Kaggle Expert tier', by: 'Applying ML and data analysis to real-world competition problems', date: 'Jun 2026', link: 'https://www.kaggle.com/mahmudulmadu', icon: 'award' as IconName },
  { title: '1st position, BSc in Information Technology', by: 'UITS · CGPA 3.79 / 4.00', date: '2024', icon: 'graduation' as IconName },
  { title: 'Instructor, Competitive Programming', by: 'Selected by the UITS IT Department', date: 'Apr 2022', icon: 'users' as IconName },
  { title: '700+ coding problems solved', by: 'LeetCode, Codeforces and HackerRank', date: '', link: 'https://leetcode.com/u/mahmudulmadu', icon: 'code' as IconName },
  { title: '100 Days Badge, top 4.2 % globally', by: 'LeetCode', date: 'Dec 2024', link: 'https://leetcode.com/u/mahmudulmadu', icon: 'trophy' as IconName },
  { title: '6th place, Victory Day Programming Contest', by: 'UITS · team relativity_47', date: '2021', link: 'https://www.hackerrank.com/contests/uits2021/leaderboard/3', icon: 'trophy' as IconName },
  { title: '22nd place, Collaboration Programming Contest', by: 'UITS · team identityimbalan1', date: '2022', link: 'https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard/3', icon: 'trophy' as IconName },
];

export const certifications = [
  { title: 'Hugging Face Agents Course', by: 'Hugging Face · LLMs, LangGraph, agentic RAG, function calling', date: 'May 2026' },
  { title: 'Fundamentals of MCP (Model Context Protocol)', by: 'Hugging Face', date: 'Apr 2026' },
  { title: 'AI Agents Fundamentals', by: 'Hugging Face', date: 'Apr 2026' },
  { title: 'Complete AI/ML Course', by: 'Apna College · ML, DL, RL, generative AI, PyTorch, deployment', date: 'Mar 2026' },
  { title: 'GenAI for .NET: Build LLM Apps with OpenAI and Ollama', by: 'Udemy', date: 'Jan 2026', link: 'https://www.udemy.com/certificate/UC-6f799ce5-8fe4-4e6d-8217-17e14668f474/' },
  { title: 'Full Stack Web Development with ASP.NET Core', by: 'Ostad · 96.3 % live tests, 91.4 % assignments', date: 'Oct 2025', link: 'https://ostad.app/share/certificate/c39614-md-mahmudul-hasan' },
  { title: 'Foundational C# with Microsoft', by: 'freeCodeCamp', date: 'Feb 2025', link: 'https://www.freecodecamp.org/certification/mahmudulmadu/foundational-c-sharp-with-microsoft' },
  { title: 'Internal Auditor: ISO 9001:2015 & ISO 27001:2022', by: 'B-ADVANCY Certification UK', date: 'Aug 2024' },
];

export const education = [
  {
    school: 'University of Information Technology & Sciences (UITS)',
    degree: 'BSc in Information Technology',
    period: '2020 – 2024',
    grade: 'CGPA 3.79 / 4.00 · 1st position',
    detail: '156 credits across DSA, machine learning, deep learning, databases, software engineering and mathematics.',
  },
  {
    school: 'Dhaka City College',
    degree: 'Higher Secondary Certificate (HSC), Science',
    period: '2018',
    grade: 'GPA 5.00 / 5.00',
    detail: '',
  },
  {
    school: 'Jatrabari Ideal School and College',
    degree: 'Secondary School Certificate (SSC), Science',
    period: '2016',
    grade: 'GPA 5.00 / 5.00',
    detail: '',
  },
];
