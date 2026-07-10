export const profile = {
  name: 'Rajasekar',
  role: 'AI-Integrated Full Stack Developer',
  location: 'Tiruppur / Coimbatore, Tamil Nadu, IN',
  email: 'rajasekar.codes@gmail.com',
  phone: '+91 9677978876',
  github: 'https://github.com/RAJASEKAR-01',
  linkedin: 'https://linkedin.com/in/rajasekar-developer',
  portfolio: 'https://rajasekar-modern-portfolio.vercel.app',
}

export const bootLines = [
  { cmd: 'whoami', out: 'rajasekar — full stack developer, cyber security graduate' },
  { cmd: 'cat role.txt', out: 'Building MERN products with LLMs wired in, not bolted on' },
  { cmd: 'cat status.txt', out: 'Open to entry-level software development roles' },
]


export const projects = [
  {
    id: 'gencareerup',
    name: 'GenCareerUp',
    tag: 'Flagship',
    status: 'live',
    description: 'A career development platform spanning 7 integrated modules — resume tooling, mock interviews, skill gap mapping — with Google Gemini API woven through every module rather than sitting as a bolt-on chat widget.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    live: 'https://gen-career-up.vercel.app',
    repo: 'https://github.com/RAJASEKAR-01/GenCareerUp',
    image: '/projects/gencareerup.webp',
    caseStudy: {
      problem: 'Job seekers juggle resume writing, interview prep, and skill gaps across disconnected tools, with no single place that adapts advice to their actual background.',
      approach: 'Iterated from an earlier prototype — JobFit AI, a simpler resume-to-job-description matcher — into a full 7-module platform, with Gemini API embedded at the data layer rather than as a chat sidebar, so AI-generated feedback is contextual to the user\'s actual resume and target role.',
      decisions: [
        'Chose MongoDB for flexible per-module schemas since resume, interview, and skill-gap data all have different shapes',
        'Structured Gemini API calls server-side to keep prompts and API keys out of the client bundle',
        'Used Express middleware to handle rate-limiting on AI calls, since Gemini usage scales with user activity',
      ],
      outcome: 'Shipped and deployed live on Vercel with all 7 modules functional end-to-end — used as the primary proof point in job applications for AI-integrated developer roles.',
    },
  },
  {
    id: 'documind',
    name: 'DocuMind AI',
    tag: 'Flagship',
    status: 'live',
    description: 'An AI-powered document intelligence SaaS: upload a document, query it in plain language, get grounded answers back. Built on an MVC backend with async state handled properly at scale.',
    stack: ['React 19', 'Express (MVC)', 'Redux Toolkit', 'TanStack Query', 'Gemini API'],
    live: 'https://docu-mind-ai-ecru.vercel.app',
    repo: 'https://github.com/RAJASEKAR-01/DocuMindAi',
    image: '/projects/documind.webp',
    caseStudy: {
      problem: 'Reading and querying long documents is slow — people need grounded, specific answers from a document\'s actual content, not a generic summary.',
      approach: 'Structured the backend with a proper MVC pattern so document parsing, embedding, and query logic stay separated and testable, with TanStack Query managing async server state on the frontend instead of ad-hoc loading flags.',
      decisions: [
        'Used Redux Toolkit for global UI state (auth, active document) and TanStack Query specifically for server state — kept the two concerns from bleeding into each other',
        'Built on React 19 to use the latest concurrent rendering features for a responsive UI while documents process',
        'Designed the MVC backend so the Gemini integration lives in its own service layer, swappable without touching controllers',
      ],
      outcome: 'Live SaaS-style product handling real document upload and query flows end-to-end, deployed and demoable at any time.',
    },
  },
  {
    id: 'jobfit-ai',
    name: 'JobFit AI',
    tag: 'Early build',
    status: 'live',
    description: 'An earlier, simpler resume-to-job-description matcher — the prototype whose core idea later grew into GenCareerUp\'s full 7-module platform.',
    stack: ['React', 'Gemini API'],
    live: 'https://jobfit-ai-dev.vercel.app',
    repo: 'https://github.com/RAJASEKAR-01/jobfit_ai',
    image: '/projects/jobfit-ai.webp',
    caseStudy: {
      problem: 'Job seekers need a fast way to see how well their resume matches a specific job description before applying.',
      approach: 'Built a focused, single-purpose matcher: paste a resume and a job description, get back a match score and gap analysis powered by Gemini API.',
      decisions: [
        'Kept scope deliberately narrow — one clear job, done well — as a fast prototype before investing in a larger platform',
        'Used the learnings from this build (prompt structure, API handling) directly in GenCareerUp\'s architecture',
      ],
      outcome: 'Working prototype that validated the core concept and became the foundation for GenCareerUp\'s more complete version.',
    },
  },
]
export const skillTree = [
  {
    dir: 'languages/',
    items: [
      { name: 'JavaScript', evidence: 'Primary language across GenCareerUp, DocuMind AI, and this portfolio — frontend and backend' },
      { name: 'TypeScript (basics)', evidence: 'Comfortable reading and writing basic typed code; still building depth here — being upfront about this' },
      { name: 'Java', evidence: 'Scored 81.93% in the TCS NQT assessment, built on core coursework from the Cyber Security degree' },
      { name: 'Python', evidence: 'Used for scripting and coursework; not yet part of a shipped production project' },
      { name: 'C / C++', evidence: 'Foundational languages from the CS degree — data structures, algorithms, systems-level thinking' },
    ],
  },
  {
    dir: 'frontend/',
    items: [
      { name: 'React.js', evidence: 'Core frontend framework for GenCareerUp, DocuMind AI (React 19), and this portfolio' },
      { name: 'Tailwind CSS', evidence: 'Used for rapid, consistent UI styling in GenCareerUp' },
      { name: 'Bootstrap', evidence: 'Used during the PS Technology internship for early frontend feature work' },
      { name: 'Figma', evidence: 'Used for design handoff and UI planning during the PS Technology internship' },
    ],
  },
  {
    dir: 'backend/',
    items: [
      { name: 'Node.js', evidence: 'Runtime for both GenCareerUp and DocuMind AI backends' },
      { name: 'Express.js', evidence: 'REST APIs in GenCareerUp; structured as a proper MVC pattern in DocuMind AI' },
      { name: 'REST APIs', evidence: 'Designed and consumed across both flagship projects, including Gemini API integration' },
    ],
  },
  {
    dir: 'ai-and-llm/',
    items: [
      { name: 'Google Gemini API', evidence: 'Embedded at the data layer in both GenCareerUp and DocuMind AI — not a chat widget bolted on top' },
      { name: 'LLM Integration', evidence: 'Wired AI output directly into product logic — resume feedback, document Q&A — rather than a standalone chatbot' },
      { name: 'RAG', evidence: 'Implemented in DocuMind AI to ground document Q&A in the actual uploaded content, not generic model knowledge' },
      { name: 'Prompt Engineering', evidence: 'Structured server-side prompts across both projects to keep AI output consistent and on-context' },
    ],
  },
  {
    dir: 'data/',
    items: [
      { name: 'MongoDB', evidence: 'Primary database for GenCareerUp — chosen for flexible schemas across 7 different modules' },
      { name: 'MySQL', evidence: 'Relational database coursework and practice — not yet in a shipped production project' },
      { name: 'PostgreSQL', evidence: 'Relational database coursework and practice — not yet in a shipped production project' },
    ],
  },
  {
    dir: 'tooling/',
    items: [
      { name: 'Git', evidence: 'Version control across every project — GenCareerUp, DocuMind AI, and freelance client work' },
      { name: 'Docker', evidence: 'Used for containerized local development environments' },
      { name: 'Vercel', evidence: 'Deployment platform for both GenCareerUp and DocuMind AI, live in production' },
      { name: 'Postman', evidence: 'API testing and documentation during backend development on both flagship projects' },
      { name: 'Agile / Scrum', evidence: 'Practiced during the PS Technology internship in a real team sprint cycle' },
    ],
  },
]

export const timeline = [
  {
    date: '2024 — Present',
    title: 'Independent Full Stack & AI-Integrated Development',
    detail:
      'Designing and shipping MERN products with LLM integration as a core architectural decision, alongside freelance web development and SEO consulting for client sites.',
  },
  {
    date: 'May — Aug 2024',
    title: 'Frontend Web Development Intern, PS Technology',
    detail:
      'Built and shipped frontend features in a production codebase, working across the full component lifecycle from design handoff to deployment.',
  },
  {
    date: '2024',
    title: '1st Place, Brototype Web Development Competition',
    detail: 'Placed first in a competitive web development challenge judged on build quality and execution speed.',
  },
  {
    date: '2023',
    title: 'IIT Kanpur — AI Student Development Program',
    detail: 'Completed a structured program on applied AI development fundamentals.',
  },
]

export const credentials = [
  { label: 'B.Sc Computer Science (Cyber Security)', detail: 'Dr. SNS Rajalakshmi College of Arts and Science — CGPA 8.1' },
  { label: 'TCS NQT', detail: 'Java score: 81.93%' },
  { label: 'Junior Software Developer Training', detail: 'Naan Mudhalvan Vetri Nichayam, Government of Tamil Nadu — CADD Technologies, Coimbatore' },
  { label: 'LeetCode', detail: '300+ problems solved' },
]
export const clientWork = [
  {
    id: 'jeeva-beauty-saloon',
    name: 'Jeeva Beauty Saloon',
    description: 'A business website for a premium grooming and styling salon in Tiruppur, Tamil Nadu.',
    stack: ['React', 'Vercel'],
    live: 'https://jeevabeautysaloon.vercel.app',
    image: '/projects/jeeva-beauty-saloon.webp',
  },
  {
    id: 'healthndcare',
    name: 'HealthNDCare',
    description: 'A health and wellness content platform covering heart health, mental health, nutrition, and fitness — built and maintained end-to-end including SEO and image optimization.',
    stack: ['WordPress', 'Elementor', 'SEO'],
    live: 'https://healthndcare.com',
    image: '/projects/healthndcare.webp',
  },
]