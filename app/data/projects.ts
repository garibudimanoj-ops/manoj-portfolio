export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  status: "active development" | "built / experimental" | "concept / prototype";
  technologies: string[];
  category: "web" | "ai" | "automation" | "computer-vision";
  github: string | null;
  demo: string | null;
  image: string;
  features: string[];
  challenges: string[];
  futurePlans: string[];
  architecture: string;
  problem: string;
  solution: string;
  learning: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "TaskTally — AI-Powered Financial Management Platform",
    slug: "tasktally",
    description:
      "An AI-powered financial management platform designed to help small businesses organize financial information, automate repetitive tasks, and access AI-assisted business insights.",
    longDescription:
      "TaskTally is a Next.js web application built to help small businesses manage their finances more efficiently. The platform leverages AI to automate repetitive financial tasks and provide actionable business insights. Currently under active development with a focus on core financial management features.",
    status: "active development",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Prisma", "AI"],
    category: "web",
    github: "https://github.com/garibudimanoj-ops/financial-management-ai",
    demo: null,
    image: "/tasktally.svg",
    features: [
      "Financial information organization",
      "AI-assisted business insights",
      "Automated task management",
      "Responsive web interface",
      "Database-backed storage",
    ],
    challenges: [
      "Balancing feature scope with development speed",
      "Integrating AI APIs reliably",
      "Ensuring data security and privacy",
    ],
    futurePlans: [
      "More advanced AI insights",
      "Multi-user support",
      "Enhanced analytics dashboard",
      "API integrations",
    ],
    architecture: "Next.js with React frontend, Supabase for backend/database, PostgreSQL for data, Prisma for ORM, and AI APIs for insights.",
    problem: "Small businesses often lack efficient tools to organize financial information and automate repetitive tasks.",
    solution: "An AI-powered platform that centralizes financial data and provides actionable insights through automation.",
    learning:
      "Working with Next.js, React, TypeScript, Supabase, PostgreSQL, Prisma, and AI APIs.",
  },
  {
    id: "2",
    title: "AI Social Media Automation Platform",
    slug: "ai-social-media-automation",
    description:
      "An AI-powered workflow automation project that simplifies social media content creation and publishing.",
    longDescription:
      "A workflow automation project that demonstrates how AI can assist in social media content pipelines. The system moves content from source through AI processing and approval to scheduling and analytics. Built as an experimental platform to explore AI-driven automation workflows.",
    status: "built / experimental",
    technologies: ["React", "n8n", "Supabase", "AI APIs", "GitHub", "Vercel"],
    category: "automation",
    github: "https://github.com/garibudimanoj-ops/ai-social-media-automation",
    demo: null,
    image: "/automation.svg",
    features: [
      "Content source ingestion",
      "AI processing and generation",
      "Human approval workflow",
      "Content scheduling",
      "Publishing integration",
      "Analytics dashboard",
    ],
    challenges: [
      "Building reliable AI pipelines",
      "Ensuring human oversight in approval steps",
      "Handling multiple social media platforms",
    ],
    futurePlans: [
      "More platforms",
      "Advanced scheduling",
      "Performance analytics",
    ],
    architecture:
      "React frontend, n8n for workflow automation, Supabase for data, AI APIs for content generation, deployed on Vercel.",
    problem:
      "Creating consistent social media content is time-consuming and requires multiple tools and steps.",
    solution:
      "A workflow automation platform that orchestrates content creation, approval, scheduling, and publishing.",
    learning: "Working with React, n8n, Supabase, AI APIs, and CI/CD with GitHub and Vercel.",
  },
  {
    id: "3",
    title: "SafeSight AI — Industrial Safety Monitoring",
    slug: "safesight-ai",
    description:
      "A computer-vision concept for industrial safety monitoring using CCTV/video analysis to detect PPE compliance and safety incidents.",
    longDescription:
      "SafeSight AI is a concept-stage project exploring how computer vision can improve industrial safety monitoring. The system uses CCTV/video feeds to detect PPE compliance violations and safety incidents, with alert generation and incident logging capabilities. This project is experimental and focuses on exploring the technical feasibility of the concept.",
    status: "concept / prototype",
    technologies: ["Python", "OpenCV", "YOLO", "Computer Vision", "AI/ML", "Video processing"],
    category: "computer-vision",
    github: null,
    demo: null,
    image: "/safesight.svg",
    features: [
      "Helmet detection",
      "Safety vest detection",
      "Gloves detection",
      "Footwear detection",
      "Harness detection",
      "Person detection",
      "Smoke/fire detection",
      "Industry-specific safety rules",
      "Alert generation",
      "Incident logging",
      "Privacy-aware edge AI",
    ],
    challenges: [
      "Real-time video processing",
      "Model accuracy in varied conditions",
      "Privacy considerations",
      "Edge deployment constraints",
    ],
    futurePlans: [
      "Prototype with test datasets",
      "Explore YOLO and OpenCV integration",
      "Build demo pipeline",
    ],
    architecture:
      "Computer vision pipeline using YOLO for object detection, OpenCV for video processing, Python for model integration, and privacy-aware edge AI deployment.",
    problem:
      "Industrial sites need real-time safety monitoring to detect PPE violations and safety incidents, but manual monitoring is unreliable.",
    solution:
      "A computer vision system that automatically monitors CCTV feeds for safety compliance and incidents.",
    learning: "Exploring computer vision, YOLO, OpenCV, Python, AI/ML, and video processing concepts.",
  },
];