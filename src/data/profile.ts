// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Md. Mahmudul Hasan',
  shortName: 'Mahmudul',
  role: 'AI Engineer & Independent Researcher',
  headline: 'I build production multi-agent AI systems, and I research how they can be broken.',
  intro:
    'AI Engineer at Ainvio, shipping LangGraph and RAG systems on Azure. Independent researcher working on honest evaluation of ML claims and, now, the security of LLM agents: prompt injection, tool and MCP abuse, and poisoned retrieval.',
  location: 'Dhaka, Bangladesh',
  email: 'mahmudulmadu@gmail.com',
  photo: 'profile.jpg',
  cv: 'Md-Mahmudul-Hasan-CV.pdf',
  availability: 'Open to PhD positions in AI security',
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
  { value: '2', label: 'production multi-agent apps shipped' },
  { value: '1st', label: 'in batch, BSc IT (CGPA 3.79)' },
  { value: 'Expert', label: 'Kaggle tier' },
  { value: '700+', label: 'algorithm problems solved' },
];

/* ---------- Through-line ---------- */

export const throughLine = [
  {
    key: 'build',
    title: 'Build',
    text: 'Two production multi-agent applications with LangGraph, LangChain, FastAPI and React. RAG on Azure AI Search, fine-tuned models deployed through Azure AI Foundry, NL-to-SQL over relational data.',
  },
  {
    key: 'measure',
    title: 'Measure',
    text: 'A methods paper showing how small ML benchmarks let chance pass for skill, with exact permutation nulls, degenerate baselines and a registry that checks all 31 claims against their comparators.',
  },
  {
    key: 'secure',
    title: 'Secure',
    text: 'The agents I build read untrusted text and call real tools. I now study how they fail under attack, and how to evaluate defenses so an adaptive attacker cannot quietly undo the result.',
  },
];

/* ---------- AI security ---------- */

export const securityInterests = [
  {
    title: 'Prompt injection in tool-using agents',
    text: 'Indirect instructions hidden in web pages, documents and tool outputs that redirect what an agent does. Measuring attack success and utility together, not one without the other.',
    tags: ['indirect injection', 'AgentDojo', 'spotlighting'],
  },
  {
    title: 'MCP and tool security',
    text: 'Poisoned tool descriptions, tool hijacking and over-broad permissions. Least-privilege policy layers that allow only the tools and arguments a task needs.',
    tags: ['MCP', 'least privilege', 'Progent / CaMeL'],
  },
  {
    title: 'Poisoned retrieval and agent memory',
    text: 'RAG corpora and long-term memory as an attack surface. Provenance tracking as a defense, and what it costs in normal-task quality.',
    tags: ['RAG poisoning', 'memory injection', 'provenance'],
  },
  {
    title: 'Evaluating defenses honestly',
    text: 'Defenses that hold against fixed attacks often fall to adaptive ones. Pre-registered comparators, nulls and negative controls, carried over from my methods paper.',
    tags: ['adaptive attacks', 'baselines', 'reporting rules'],
  },
];

export type StudyStatus = 'In progress' | 'Planned';

export const securityStudies: { title: string; status: StudyStatus; text: string }[] = [
  {
    title: 'Comparing prompt-injection defenses on AgentDojo',
    status: 'Planned',
    text: 'One open model, three defenses (spotlighting, a detector, plan-then-execute), then an adaptive attack designed against the strongest one. Reports attack success and utility per setting.',
  },
  {
    title: 'A least-privilege guard for an MCP agent',
    status: 'Planned',
    text: 'An agent over two or three MCP servers with a policy layer in the spirit of Progent and CaMeL, attacked with poisoned tool descriptions. Measures what the policy blocks and which normal tasks it breaks.',
  },
  {
    title: 'Poisoning a RAG app and agent memory, then defending',
    status: 'Planned',
    text: 'A small PoisonedRAG reproduction and a MINJA-style memory attack, followed by a provenance-based defense and an honest account of its cost.',
  },
];

export const readingNow = [
  'CaMeL',
  'AgentDojo',
  'Progent',
  'The Attacker Moves Second',
  'Adaptive Attacks Break Defenses',
  'MINJA',
  'ToolHijacker',
  'InjecAgent',
  'StruQ',
  'The Instruction Hierarchy',
  'LlamaFirewall',
  'AgentPoison',
];

/* ---------- Publication ---------- */

export const paper = {
  title:
    'When chance is hard to beat: exact permutation nulls and degenerate baselines for bearing fault diagnosis and remaining useful life',
  authors: 'Md. Mahmudul Hasan',
  affiliation: 'Independent Researcher',
  status: 'Preprint, 2026',
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
    { value: '69.1–76.4 %', label: 'accuracy reached by meaningless labels (95th pct)' },
    { value: '6 of 11', label: 'of our own attribution results fall inside their null' },
    { value: '31', label: 'claims checked against their comparators in a public registry' },
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
  title: 'A digital-twin-driven, retrieval-augmented LLM framework for explainable predictive maintenance',
  status: 'Ongoing · 30 measurement notebooks',
  question: 'What can a predictive-maintenance system honestly tell an engineer, and how much evidence does each sentence need?',
  pipeline: [
    { name: 'Sensors', detail: 'vibration, phase currents, torque, speed, temperature' },
    { name: 'Digital twin', detail: 'degradation rate, healthy population, operating point' },
    { name: 'Prediction', detail: 'detection, race attribution, remaining-life floor' },
    { name: 'Output contract', detail: 'which race, how often wrong, not before n minutes' },
    { name: 'RAG + LLM', detail: 'explanations grounded in the unit’s own documents' },
    { name: 'Contract checker', detail: 'no sentence claims more than the evidence licenses' },
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
    'The contract checker is an LLM-output verification problem: the same question, “is the model saying more than it can support?”, sits at the center of LLM security.',
};

/* ---------- Experience ---------- */

export const experience = [
  {
    company: 'Ainvio Pte. Ltd.',
    role: 'AI Engineer',
    period: 'Jan 2026 – Present',
    place: 'Singapore · Hybrid',
    summary: 'Production multi-agent AI systems end to end, from agent design and RAG pipelines to fine-tuned model deployment on Azure.',
    points: [
      'Designed and deployed two production multi-agent applications with LangGraph, LangChain, FastAPI and React.',
      'Built RAG on Azure OpenAI, Azure AI Search, Azure Functions, Container Apps and Cosmos DB.',
      'Fine-tuned transformer models for domain tasks and deployed them to production through Azure AI Foundry.',
      'Built an NL-to-SQL generator for natural-language querying over relational databases.',
      'Cut LLM operating cost through token optimization, better retrieval, and routing to cheaper models without losing quality.',
      'Deployed on-premises models for data-sensitive workloads.',
    ],
    tags: ['LangGraph', 'RAG', 'Azure AI Foundry', 'FastAPI', 'Fine-tuning'],
  },
  {
    company: 'Ainvio Pte. Ltd.',
    role: 'Software Engineer',
    period: 'Jul 2025 – Dec 2025',
    place: 'Singapore · Hybrid',
    summary: 'Backend and cloud engineering across .NET and Python, focused on AWS serverless and CRM / contact-center integration.',
    points: [
      'Built backend services with ASP.NET Core Web API, C#, FastAPI and React, using clean architecture.',
      'Integrated Amazon Connect with Microsoft Dynamics 365 for AI-driven automation: sentiment analysis and automatic case creation.',
      'Deployed FastAPI services on AWS Lambda with S3 and DynamoDB.',
    ],
    tags: ['ASP.NET Core', 'AWS Lambda', 'DynamoDB', 'Dynamics 365'],
  },
  {
    company: 'ScITech Consulting & Solutions',
    role: 'Application Developer',
    period: 'Jun 2024 – Apr 2025',
    place: 'Banani, Dhaka',
    summary: 'Full-stack .NET development alongside enterprise platform work on ServiceNow.',
    points: [
      'Delivered full-stack applications with ASP.NET Core (MVC / Web API), C#, SQL Server and React.',
      'Designed RESTful APIs applying OOP, SOLID and clean-code practices.',
      'Implemented ServiceNow ITSM, CSM, Service Portal, Virtual Agent, ITAM and ITBM modules.',
    ],
    tags: ['ASP.NET Core', 'React', 'SQL Server', 'ServiceNow'],
  },
  {
    company: 'ScITech Consulting & Solutions',
    role: 'Associate Application Developer (Intern)',
    period: 'Apr 2024 – Jun 2024',
    place: 'Dhaka',
    summary: 'Hands-on project work in an Agile team: cloud computing, JavaScript and full-stack development.',
    points: [],
    tags: ['JavaScript', 'Agile'],
  },
];

/* ---------- Projects ---------- */

export type ProjectCategory = 'AI / ML' | 'Full-stack' | 'Research';

export interface Project {
  name: string;
  year: string;
  category: ProjectCategory;
  description: string;
  highlights?: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'NeuroHire',
    year: '2026',
    category: 'AI / ML',
    featured: true,
    description: 'Resume intelligence platform that scores resumes the way an ATS does, then explains exactly what to fix.',
    highlights: [
      'Fine-tuned a BERT-based sentence transformer on ~6,000 curated resume / job-description pairs; it outperforms the all-MiniLM-L6-v2 baseline.',
      'ATS scoring, job matching with keyword-gap analysis, evidence-based skill validation and PDF reports.',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'Sentence Transformers', 'PyTorch', 'Groq', 'Supabase'],
    repo: 'https://github.com/Mahmudulmadu/NeuroHire',
    demo: 'https://drive.google.com/file/d/12lHCBAp8ORzbJ8iI_250QC9kNpREZRE1/view?usp=sharing',
  },
  {
    name: 'AURA Class',
    year: '2026',
    category: 'AI / ML',
    featured: true,
    description: 'Attendance system that marks a whole class present in seconds from one classroom photo or a short audio clip.',
    highlights: [
      'dlib 128-D face embeddings with SVM classification; Resemblyzer 256-D speaker embeddings.',
      'Passwordless student login by face, subject enrollment by share code or QR, teacher dashboards.',
    ],
    tech: ['Python', 'dlib', 'OpenCV', 'Resemblyzer', 'scikit-learn', 'Streamlit', 'Supabase'],
    repo: 'https://github.com/Mahmudulmadu/AURA',
    demo: 'https://drive.google.com/file/d/1jNbDTwWHfuIJBeNshnFGAEx8qiqLIxWn/view?usp=sharing',
  },
  {
    name: 'Bank AI SQL Chatbot',
    year: '2026',
    category: 'AI / ML',
    featured: true,
    description: 'Ask a banking database questions in plain English. A local LLM writes the SQL, so customer data never leaves the machine.',
    highlights: [
      'NL-to-SQL with Ollama (llama3:8b) against SQL Server, answered as a plain-English summary.',
      'Parameterized, scope-limited query execution for a regulated setting.',
    ],
    tech: ['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Ollama'],
    repo: 'https://github.com/Mahmudulmadu/Bank-AI-SQL-Chatbot',
  },
  {
    name: 'When chance is hard to beat',
    year: '2026',
    category: 'Research',
    description: 'Code, notebooks and the 31-claim registry behind the methods paper on permutation nulls and degenerate baselines.',
    tech: ['Python', 'scikit-learn', 'PyTorch', 'Jupyter'],
    repo: 'https://github.com/Mahmudulmadu/when-chance-is-hard-to-beat',
  },
  {
    name: 'ATS resume matching: fine-tuning notebook',
    year: '2026',
    category: 'AI / ML',
    description: 'The training notebook for NeuroHire’s domain-adapted sentence-transformer model.',
    tech: ['Hugging Face', 'Sentence Transformers', 'PyTorch'],
    repo: 'https://github.com/Mahmudulmadu/ATS-Resume-Matching-Fine-Tuning-Notebook',
  },
  {
    name: 'Customer segmentation API',
    year: '2025',
    category: 'AI / ML',
    description: 'A KMeans customer-segmentation model served through FastAPI.',
    tech: ['Python', 'scikit-learn', 'FastAPI'],
    repo: 'https://github.com/Mahmudulmadu/customer-segementaion-predict--ML-FastApi',
  },
  {
    name: 'Image classification',
    year: '2024',
    category: 'AI / ML',
    description: 'Face image classifier trained on personal and peer datasets, reaching 92 % accuracy.',
    tech: ['Python', 'SVM', 'ANN / DNN', 'OpenCV', 'Wavelet transform'],
    repo: 'https://github.com/Mahmudulmadu/Image-Classification',
    demo: 'https://colab.research.google.com/drive/1LUBgnYzo2VqM2F2wrbfsG-8G36tSskqk',
  },
  {
    name: 'Todo API on DynamoDB',
    year: '2025',
    category: 'Full-stack',
    description: 'Serverless-ready Todo backend with FastAPI and AWS DynamoDB for user and task data.',
    tech: ['FastAPI', 'AWS DynamoDB', 'Python'],
    repo: 'https://github.com/Mahmudulmadu/Todo-FastAPI-Dynamodb',
  },
  {
    name: 'OTP authentication',
    year: '2025',
    category: 'Full-stack',
    description: 'Full-stack OTP-based authentication with an ASP.NET Core Web API and a React client.',
    tech: ['ASP.NET Core', 'React', 'C#'],
    repo: 'https://github.com/Mahmudulmadu/otpProvider',
  },
  {
    name: 'Book Store',
    year: '2025',
    category: 'Full-stack',
    description: 'Book-selling web app with authentication, role-based access, image uploads and REST APIs, using Repository and Unit of Work patterns.',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap'],
    repo: 'https://github.com/Mahmudulmadu/BookStore_ASP.NET_Core',
  },
  {
    name: 'RESTful Web API',
    year: '2025',
    category: 'Full-stack',
    description: 'Clean Web API with the repository pattern, dependency injection, AutoMapper DTOs, validation, pagination and search.',
    tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'AutoMapper'],
    repo: 'https://github.com/Mahmudulmadu/Rest_API',
  },
  {
    name: 'SmartStock',
    year: '2025',
    category: 'Full-stack',
    description: 'Lightweight inventory management for small businesses: listing, search, filtering and CRUD.',
    tech: ['ASP.NET Core MVC', 'C#', 'SQL Server'],
    repo: 'https://github.com/Mahmudulmadu/SmartStock',
  },
  {
    name: 'Manobotay Amra',
    year: '2024',
    category: 'Full-stack',
    description: 'Donation platform with volunteer management, fund tracking and an SQL-based chatbot.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML / CSS'],
    repo: 'https://github.com/Mahmudulmadu/Manobotay-Amra',
    demo: 'https://drive.google.com/file/d/15snAidsw4CeNjYk8Tnn-qF3DO6Uq1kRo',
  },
];

/* ---------- Skills ---------- */

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Agents & LLMs',
    items: ['LangGraph', 'LangChain', 'Model Context Protocol', 'RAG', 'Azure OpenAI', 'Azure AI Foundry', 'Hugging Face', 'Ollama', 'Groq', 'Docling', 'Vector databases', 'NL-to-SQL'],
  },
  {
    group: 'ML & research',
    items: ['PyTorch', 'scikit-learn', 'Transformer fine-tuning', 'Sentence Transformers', 'Permutation testing', 'Signal processing', 'NumPy / pandas', 'Jupyter'],
  },
  {
    group: 'Security',
    items: ['ISO/IEC 27001:2022 ISMS (auditor training)', 'On-prem LLMs for sensitive data', 'Scope-limited NL-to-SQL execution', 'Secure API design', 'Negative controls & null baselines'],
  },
  {
    group: 'Backend & cloud',
    items: ['FastAPI', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Azure AI Search', 'Azure Functions', 'Cosmos DB', 'AWS Lambda', 'S3', 'DynamoDB', 'Amazon Connect', 'Docker'],
  },
  {
    group: 'Languages & frontend',
    items: ['Python', 'C#', 'C / C++', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'React', 'Streamlit'],
  },
];

/* ---------- Honors & certifications ---------- */

export const honors = [
  { title: 'Kaggle Expert', by: 'Kaggle', date: 'Jun 2026', link: 'https://www.kaggle.com/mahmudulmadu' },
  { title: '1st position, BSc in Information Technology', by: 'UITS · CGPA 3.79 / 4.00', date: '2024' },
  { title: '100 Days Badge, top 4.2 % globally', by: 'LeetCode', date: 'Dec 2024', link: 'https://leetcode.com/u/mahmudulmadu' },
  { title: 'Competitive Programming Instructor', by: 'UITS IT Department', date: 'Apr 2022' },
  { title: '6th place, Victory Day Programming Contest', by: 'UITS · team relativity_47', date: 'Dec 2021', link: 'https://www.hackerrank.com/contests/uits2021/leaderboard/3' },
  { title: '22nd place, Collaboration Programming Contest', by: 'UITS · team identityimbalan1', date: '2022', link: 'https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard/3' },
];

export const certifications = [
  { title: 'Hugging Face Agents Course', by: 'Hugging Face', date: 'May 2026' },
  { title: 'Fundamentals of MCP', by: 'Hugging Face', date: 'Apr 2026' },
  { title: 'AI Agents Fundamentals', by: 'Hugging Face', date: 'Apr 2026' },
  { title: 'Complete AI/ML Course', by: 'Apna College', date: 'Mar 2026' },
  { title: 'GenAI for .NET: LLM Apps with OpenAI and Ollama', by: 'Udemy', date: 'Jan 2026', link: 'https://www.udemy.com/certificate/UC-6f799ce5-8fe4-4e6d-8217-17e14668f474/' },
  { title: 'Full Stack Web Development with ASP.NET Core', by: 'Ostad', date: 'Oct 2025', link: 'https://ostad.app/share/certificate/c39614-md-mahmudul-hasan' },
  { title: 'Foundational C# with Microsoft', by: 'freeCodeCamp', date: 'Feb 2025', link: 'https://www.freecodecamp.org/certification/mahmudulmadu/foundational-c-sharp-with-microsoft' },
  { title: 'Internal Auditor: ISO 9001:2015 & ISO 27001:2022', by: 'B-ADVANCY Certification UK', date: 'Aug 2024' },
];

export const education = [
  {
    school: 'University of Information Technology & Sciences (UITS)',
    degree: 'BSc in Information Technology',
    period: '2020 – 2024',
    detail: 'CGPA 3.79 / 4.00, 1st position in the batch. 156 credits across DSA, machine learning, deep learning, databases, software engineering and mathematics.',
  },
  {
    school: 'Dhaka City College',
    degree: 'Higher Secondary Certificate, Science',
    period: '2016 – 2018',
    detail: 'GPA 5.00 / 5.00',
  },
  {
    school: 'Jatrabari Ideal School and College',
    degree: 'Secondary School Certificate, Science',
    period: '2016',
    detail: 'GPA 5.00 / 5.00',
  },
];
