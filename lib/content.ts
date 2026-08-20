export type Project = {
  title: string;
  desc: string;
  outcome: string;
  tags: string[];
  href: string;
  demoHref: string;
  imgLight: string;
  imgDark: string;
};

export type Social = {
  label: string;
  href: string;
  path: string;
};

export const projects: Project[] = [
  {
    title: 'JobGuard — Fake Job Posting Detector',
    desc: 'Shipped an ONNX-optimized fake-job detector that combines text classification, URL risk signals, and token-level explanations into one screening flow.',
    outcome: '87.57% F1 on 17,880 EMSCAD listings; runtime model switching and INT8 quantization.',
    tags: ['Python', 'DistilBERT', 'ONNX', 'Flask', 'NLP'],
    href: 'https://github.com/sugumaran-nix/fake-job-posting-ml',
    demoHref: 'https://jobguard-8vur.onrender.com',
    imgLight: '/projects/jobguard-light.webp',
    imgDark: '/projects/jobguard-dark.webp',
  },
  {
    title: 'Sketchline — Real-Time Collaborative Whiteboard',
    desc: 'Built a collaborative canvas with resilient WebSocket sync, reconnect-safe replay, and shared undo/redo for teams drawing together.',
    outcome: 'Sub-100ms sync, late-join replay, nine brush types, and 64-step shared undo/redo.',
    tags: ['FastAPI', 'WebSockets', 'Next.js', 'TypeScript', 'Canvas'],
    href: 'https://github.com/sugumaran-nix/whiteboard-frontend',
    demoHref: 'https://whiteboard-frontend-nine-smoky.vercel.app',
    imgLight: '/projects/sketchline-light.webp',
    imgDark: '/projects/sketchline-dark.webp',
  },
  {
    title: 'AI Shopping Agent — Multi-Source Product Search',
    desc: 'Built a fault-tolerant product search pipeline that aggregates sources, deduplicates listings, and ranks candidates with Gemini recommendations.',
    outcome: 'Retries, deduplication, and 30-minute caching keep results reliable on constrained hosting.',
    tags: ['Next.js', 'FastAPI', 'Gemini', 'Python', 'ScraperAPI'],
    href: 'https://github.com/sugumaran-nix/ai-shopping-agent',
    demoHref: 'https://ai-shopping-agent-theta.vercel.app',
    imgLight: '/projects/shopping-agent-light.webp',
    imgDark: '/projects/shopping-agent-dark.webp',
  },
  {
    title: 'AI Content Detector',
    desc: 'Moved AI-text detection into the browser with ONNX inference, confidence scoring, and span highlighting—useful feedback without sending writing to a server.',
    outcome: '94.15% accuracy, 0.991 AUC, and sub-second client-side results.',
    tags: ['DistilBERT', 'ONNX', 'Transformers.js', 'FastAPI', 'NLP'],
    href: 'https://github.com/sugumaran-nix/ai-content-detector',
    demoHref: 'https://ai-content-detector-nine.vercel.app',
    imgLight: '/projects/content-detector-light.webp',
    imgDark: '/projects/content-detector-dark.webp',
  },
];

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/sugumaran-nix', path: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sugumaran-nix', path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' },
  { label: 'Email', href: 'mailto:sugumarankugan@gmail.com', path: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
];

export const skillCategories = [
  { title: 'Languages', icon: 'M4 5h16M4 12h16M4 19h16M8 2l-4 10 4 10M16 2l4 10-4 10', span: 'sm:col-span-2 md:col-span-2', skills: ['Python (Primary)', 'TypeScript', 'JavaScript (ES6+)', 'SQL'] },
  { title: 'Frontend', icon: 'M3 4h18v16H3zM3 9h18M7 14h3M7 17h6', span: 'sm:col-span-1 md:col-span-1', skills: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { title: 'Backend', icon: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 7h5M12 17h5', span: 'sm:col-span-1 md:col-span-1', skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets'] },
  { title: 'Databases', icon: 'M5 5a7 3 0 1014 0a7 3 0 10-14 0M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7', span: 'sm:col-span-1 md:col-span-1', skills: ['MySQL', 'MongoDB'] },
  { title: 'Tools & OS', icon: 'M14.7 6.3a4 4 0 00-5.2 5.2L4 17a2.12 2.12 0 003 3l5.5-5.5a4 4 0 005.2-5.2l-2.3 2.3-2.8-.2-.2-2.8 2.3-2.3z', span: 'sm:col-span-1 md:col-span-1', skills: ['Git', 'Docker', 'Linux'] },
  { title: 'AI / ML & NLP', icon: 'M12 3a3 3 0 013 3v1h1a3 3 0 013 3v1a3 3 0 013 3 3 3 0 01-3 3h-1v1a3 3 0 01-3 3 3 3 0 01-3-3v-1H9a3 3 0 01-3-3v-1a3 3 0 013-3h1V6a3 3 0 013-3zM9 12h6M12 9v6', span: 'sm:col-span-2 md:col-span-3', skills: ['Scikit-learn', 'Hugging Face', 'DistilBERT', 'ONNX', 'Prompt Engineering', 'NLP'], featured: true },
];
