export interface ProjectItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
  folderCategory?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "dsabuddy",
    name: "DSABuddy",
    badge: "1000+ Users",
    tagline: "Placement Preparation & DSA Tracking Platform",
    description: "Built a full-stack PERN platform serving 1000+ college users with live leaderboards, company-wise interview prep, interview forums and DSA progress tracking. Developed the Sheets module by scraping and structuring LeetCode + GFG links; engineered Company Mines, onboarding flows, and a Multer + Cloudinary media pipeline using Tailwind CSS and shadcn/ui.",
    techStack: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Tailwind CSS", "shadcn/ui", "Cloudinary"],
    githubUrl: "https://github.com/bhoomi2310",
    liveUrl: "https://dsabuddy.xyz",
    highlight: true,
    folderCategory: "Web Platforms"
  },
  {
    id: "wajah",
    name: "Wajah",
    badge: "AWS Serverless",
    tagline: "Pollution Control Room with Closed-Loop Verification",
    description: "Built a serverless AWS platform (SAM) that monitors 37 Delhi stations hourly with EventBridge + Lambda, diagnoses spike causes using sensor and NASA FIRMS data, and runs each work order through Step Functions, SNS, DynamoDB and S3 to verify the fix with sensor data 3 hours later. Built a Hindi/English AI assistant with the Strands Agents SDK (9 data tools, Bedrock-ready); stress-tested the verification method and published its false-success rate of 1 in 5.",
    techStack: ["AWS SAM", "Lambda", "EventBridge", "Step Functions", "DynamoDB", "S3", "Strands Agents SDK", "Bedrock"],
    githubUrl: "https://github.com/bhoomi2310",
    liveUrl: "https://github.com/bhoomi2310",
    highlight: true,
    folderCategory: "Cloud & AI"
  },
  {
    id: "workmark",
    name: "WorkMark",
    badge: "Azure OpenAI",
    tagline: "AI-Powered Micro-Internship & Skill Verification Platform",
    description: "Architected a MERN platform for companies to post micro-tasks and students to submit work, with JWT-based role access, bcryptjs authentication, and MongoDB schemas. Integrated Azure OpenAI (GPT-4) to evaluate submissions and generate structured skill-verification scores, per-skill breakdowns, resume bullets, and plagiarism risk.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Azure OpenAI GPT-4", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/bhoomi2310/SkillGaurd-AI",
    highlight: true,
    folderCategory: "AI Applications"
  },
  {
    id: "epsilon",
    name: "Epsilon",
    badge: "Grand Finalist",
    tagline: "Adobe Express Brand Compliance & Automated Design AI",
    description: "AI add-on for Adobe Express doing real-time brand compliance scoring and automated design correction. Analyzes visual elements against brand guidelines with automated rule fixing and competitive similarity scoring. Selected as Grand Finalist in the Adobe Express Add-ons Hackathon.",
    techStack: ["React", "TypeScript", "Node.js", "Adobe Express Add-on SDK", "AI/ML", "Tailwind CSS"],
    githubUrl: "https://github.com/bhoomi2310/Epsilon",
    liveUrl: "https://epsilon-iota.vercel.app/",
    highlight: true,
    folderCategory: "AI Applications"
  },
  {
    id: "medeliver",
    name: "Medeliver",
    badge: "Semi-Finalist",
    tagline: "AI-Enabled Pharmacy & Teleconsultation Platform",
    description: "Developed Medeliver, an AI-enabled pharmacy and teleconsultation app with chatbot-driven prescription workflows, medicine discovery, and virtual consultation scheduling. Recognized as DTU brAInwave'24 Semi-Finalist.",
    techStack: ["React.js", "Python", "FastAPI", "NLP", "Tailwind CSS"],
    githubUrl: "https://github.com/bhoomi2310",
    highlight: false,
    folderCategory: "HealthTech"
  },
  {
    id: "naksha",
    name: "Naksha",
    badge: "Smart Navigation",
    tagline: "Intelligent Navigation for Indian Road Networks",
    description: "Smart navigation platform tailored specifically for Indian road conditions. Accounts for real-time road quality, traffic congestion, and safer transit options with ML-driven route predictions.",
    techStack: ["React", "TypeScript", "Node.js", "OpenRouteService", "Tailwind CSS"],
    githubUrl: "https://github.com/bhoomi2310/Naksha-Smart-India-Navigation",
    liveUrl: "https://naksha-smart-india-navigation.vercel.app/",
    highlight: false,
    folderCategory: "Web Platforms"
  },
  {
    id: "finance-tracker",
    name: "Finance Tracker",
    badge: "Analytics",
    tagline: "Personal Financial Analytics & Visualization",
    description: "Intelligent budgeting and expense tracking platform with interactive dashboards, categorised analytics, and real-time transaction updates for seamless personal wealth management.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "SQLite", "TanStack Query", "Tailwind CSS"],
    githubUrl: "https://github.com/bhoomi2310/finance-tracker",
    liveUrl: "https://finance-tracker-i9yb.vercel.app/",
    highlight: false,
    folderCategory: "Web Platforms"
  }
];
