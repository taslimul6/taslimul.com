// Central profile and project data — edit this file to update content site-wide

export const profile = {
  name: 'Taslimul Hasan',
  designation: 'AI-Native Full-Stack Web Developer',
  location: 'Dhaka, Bangladesh',
  tagline: 'Building Modern Web Applications That Solve Real Problems.',
  summary:
    'I am an AI-native full-stack developer focused on building modern web applications, scalable digital products, and useful technology solutions. I enjoy turning ideas into working products, solving practical engineering challenges, and continuously improving my skills across frontend, backend, APIs, databases, and AI integration. My goal is to build reliable, user-focused software that creates real value.',
  intro:
    'I build full-stack web applications and independent digital products — combining solid engineering fundamentals with a growing interest in AI-powered development.',
  email: 'hasantaslimul@gmail.com',
  phone: '+8801787836963',
  whatsapp: '+8801787836963',
  whatsappUrl: 'https://wa.me/8801787836963',
  github: 'https://github.com/taslimul6',
  youtube: 'https://www.youtube.com/@Taslimul6',
  website: 'https://taslimul.com',
  photo: '/images/taslimul.jpg',
  resumePdf: null as string | null, // set to '/resume/taslimul-hasan-resume.pdf' when available
};

export const competencies = [
  'Full-stack web application development',
  'Component-based UI development with React & Next.js',
  'REST API design and integration',
  'Database-driven application architecture',
  'Responsive UI/UX implementation',
  'Git-based development workflow and deployment',
  'AI integration and workflow automation (actively learning)',
];

export type Skill = {
  name: string;
  icon?: string; // skillicons.dev ID
  customIcon?: 'openai' | 'n8n' | 'webhook';
  level?: string;
};

export type SkillCategory = {
  category: string;
  description: string;
  isLearning?: boolean;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend & UI',
    description: 'Modern, responsive, component-driven web interfaces and styling systems',
    items: [
      { name: 'React', icon: 'react', level: 'Advanced' },
      { name: 'Next.js', icon: 'nextjs', level: 'Advanced' },
      { name: 'TypeScript', icon: 'ts', level: 'Proficient' },
      { name: 'JavaScript', icon: 'js', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 'Advanced' },
      { name: 'HTML5', icon: 'html', level: 'Advanced' },
      { name: 'CSS3', icon: 'css', level: 'Advanced' },
      { name: 'Vite', icon: 'vite', level: 'Proficient' },
    ],
  },
  {
    category: 'Backend & Databases',
    description: 'Scalable server-side architecture, RESTful APIs, and database modeling',
    items: [
      { name: 'Node.js', icon: 'nodejs', level: 'Proficient' },
      { name: 'Express.js', icon: 'express', level: 'Proficient' },
      { name: 'MongoDB', icon: 'mongodb', level: 'Proficient' },
      { name: 'PostgreSQL', icon: 'postgres', level: 'Working Knowledge' },
      { name: 'Supabase', icon: 'supabase', level: 'Proficient' },
      { name: 'Python', icon: 'py', level: 'Working Knowledge' },
      { name: 'REST APIs', icon: 'postman', level: 'Advanced' },
    ],
  },
  {
    category: 'DevOps & Tooling',
    description: 'Version control, cloud deployment, containerization, and developer environments',
    items: [
      { name: 'Git', icon: 'git', level: 'Advanced' },
      { name: 'GitHub', icon: 'github', level: 'Advanced' },
      { name: 'Docker', icon: 'docker', level: 'Working Knowledge' },
      { name: 'Vercel', icon: 'vercel', level: 'Advanced' },
      { name: 'Postman', icon: 'postman', level: 'Proficient' },
      { name: 'VS Code', icon: 'vscode', level: 'Advanced' },
      { name: 'Linux', icon: 'linux', level: 'Working Knowledge' },
      { name: 'Figma', icon: 'figma', level: 'Proficient' },
    ],
  },
  {
    category: 'AI & Automation',
    description: 'Applied AI model integration, workflow automation, and webhook pipelines',
    isLearning: true,
    items: [
      { name: 'OpenAI API', customIcon: 'openai', level: 'Active Learning' },
      { name: 'n8n Workflows', customIcon: 'n8n', level: 'Active Learning' },
      { name: 'Webhooks', customIcon: 'webhook', level: 'Proficient' },
      { name: 'Python AI Tools', icon: 'py', level: 'Active Learning' },
    ],
  },
];

export const skills = {
  'Frontend & UI': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  'Backend & Databases': ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Supabase', 'Python', 'REST APIs'],
  'DevOps & Tooling': ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'VS Code', 'Linux', 'Figma'],
  'AI & Automation': ['OpenAI API', 'n8n', 'Webhooks', 'Python AI Tools'],
};

export const additionalExperience = [
  {
    area: 'Shopify & WordPress Development',
    companyUrl: 'https://estorefy.net',
    description:
      'Built and customised Shopify storefronts and WordPress websites across a range of ecommerce and business projects. Gained practical experience with theme development, page layout, and client-side optimisation. This work is secondary to my current full-stack development focus.',
    highlights: [
      'Shopify theme development and storefront customisation',
      'WordPress site building and configuration',
      'Ecommerce layout and conversion-focused page design',
    ],
  },
];

export const education = [
  {
    degree: 'B.Sc. in Electrical and Electronic Engineering',
    institution: 'Gono University',
    period: null as string | null,
    description:
      'Studied electrical engineering fundamentals including circuits, electronics, and systems. Developed analytical and problem-solving skills transferable to software engineering.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Joypurhat Government College',
    period: null as string | null,
    description: null as string | null,
  },
];

export const interests = [
  'Exploring AI and emerging web technologies',
  'Creating educational content on YouTube',
  'Gardening',
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  projectType: string;
  liveUrl: string;
  repoUrl: string | null;
  coverColor: string;
  overview: string;
  role: string;
  stack: string[];
  features: string[];
  challenges: string[];
  futureWork: string[];
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: 'doclist-bd',
    title: 'DocList-BD',
    tagline: 'A live healthcare directory for Bangladesh with Bangla-first navigation.',
    category: 'Healthcare Directory / Web Application',
    projectType: 'Independent practice project — now live',
    liveUrl: 'https://doclist-bd.com',
    repoUrl: 'https://github.com/taslimul6/doclist-bd',
    coverColor: '#1a5c3a',
    overview:
      'DocList-BD started as a self-initiated project to build something practical while learning modern web development. It evolved into a live healthcare directory for Bangladesh — giving patients a Bangla-first way to discover and filter doctors by division, district, and specialty. The project is publicly available, open-source, and continues to attract daily traffic.',
    role:
      'Sole developer. Responsible for project conception, architecture, data modelling, frontend implementation, SEO setup, and deployment.',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel', 'JSON-LD / Structured Data'],
    features: [
      'Bangla-first navigation with an English-language parallel route',
      'Doctor directory with division and district filtering',
      'Doctor profile pages with sharing via the Web Share API',
      'Save-for-later functionality using client-side storage',
      'Structured schema markup on directory pages for search discoverability',
      'Responsive layout designed for low-bandwidth mobile users',
      'SEO-conscious static page generation',
    ],
    challenges: [
      'Designing a bilingual routing architecture (Bangla + English) without creating duplicate URL penalties for search engines',
      'Aggregating and normalising doctor data across administrative divisions while keeping the data accurate and maintainable',
      'Balancing static generation for SEO performance with client-side filtering interactions that update without full page reloads',
      'Creating an interface that works clearly for users with varying levels of digital experience',
    ],
    futureWork: [
      'Doctor-managed profile pages with authentication',
      'Appointment request or booking integration',
      'Server-side full-text search with Bangla script support',
      'Progressive Web App (PWA) for offline access in low-connectivity areas',
    ],
    stats: [
      { label: 'Daily visitors', value: '60+' },
      { label: 'Daily growth (reported)', value: '40–60%' },
    ],
  },
  {
    slug: 'estorefy',
    title: 'eStorefy',
    tagline: 'An independently built agency directory and Shopify resource platform.',
    category: 'Agency Directory / Independent Web Project',
    projectType: 'Independent practice project — now live',
    liveUrl: 'https://estorefy.net',
    repoUrl: null,
    coverColor: '#1a3a5c',
    overview:
      'eStorefy is an independently developed directory web application. The project was built to practise scalable directory architecture and SEO-focused page generation. It helps users discover Shopify development agencies, browse Shopify app categories, and find location-based agency listings. Although the project domain relates to Shopify, the engineering focus is directory product design and structured content architecture.',
    role:
      'Sole developer. Responsible for product concept, information architecture, frontend development, directory page structure, and deployment.',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
    features: [
      'Agency directory with location-based filtering and agency detail pages',
      'Shopify app category listings organised by use case',
      'Reusable, parameterised page layouts supporting hundreds of directory entries',
      'SEO-focused URL and metadata structure across all directory pages',
      'Structured content architecture designed for long-term maintainability',
    ],
    challenges: [
      'Designing a scalable directory architecture where hundreds of category and location pages share layouts but have independent SEO metadata',
      'Keeping directory content structured and maintainable without a full CMS or database',
      'Balancing a dual purpose — agency showcase and public directory — without confusing the user experience',
      'Ensuring good Core Web Vitals scores across a large number of statically generated pages',
    ],
    futureWork: [
      'Agency submission and review system',
      'Filtered search across all directory categories',
      'Shopify app comparison tooling',
      'Editorial blog content targeting merchant and developer queries',
    ],
    stats: [
      { label: 'Daily visits', value: '25+' },
      { label: 'Growth (reported)', value: '~20%' },
    ],
  },
];
