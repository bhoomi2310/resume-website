export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  category: 'internship' | 'leadership' | 'creative';
  tag?: string;
  bullets: string[];
  skills?: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "genpact",
    role: "Agentic AI Intern",
    company: "Genpact",
    location: "Gurugram, India",
    period: "Jun 2026 - Aug 2026",
    category: "internship",
    tag: "Enterprise AI & LLM Systems",
    bullets: [
      "Built full-stack AI apps using Python, React, Azure OpenAI and APIs, with LLM integration, asynchronous workflows, API orchestration and enterprise automation.",
      "Developed a multi-agent Balance Sheet Reconciliation System with specialized autonomous agents, contextual state, task decomposition and orchestrated workflows.",
      "Contributed to a production-grade Agentic Failure Monitoring & Auto-Triage System using Azure OpenAI GPT-5.5, ArcadeDB OKG, SQL Server and enterprise workflow orchestration, integrating knowledge graphs with LLMs for contextual retrieval, root-cause analysis, confidence-aware remediation and autonomous decision-making."
    ],
    skills: ["Python", "React", "Azure OpenAI", "ArcadeDB OKG", "SQL Server", "Multi-Agent Systems", "Knowledge Graphs"]
  },
  {
    id: "rites",
    role: "Information Technology Intern",
    company: "RITES Ltd.",
    location: "Gurugram, India",
    period: "May 2026 - Jul 2026",
    category: "internship",
    tag: "Full-Stack Enterprise Systems",
    bullets: [
      "Built a full-stack Executive Health Checkup (EHC) system with React.js, Node.js and SQL Server, deployed for organizational use with SAP integration.",
      "Designed production-grade RESTful APIs, normalized database schemas and responsive dashboards."
    ],
    skills: ["React.js", "Node.js", "SQL Server", "RESTful APIs", "SAP Integration", "Database Normalization"]
  },
  {
    id: "debugging-society",
    role: "Joint General Secretary",
    company: "The Debugging Society, NSUT",
    location: "NSUT Delhi",
    period: "Oct 2026 - Present",
    category: "leadership",
    tag: "Formerly Dev Lead & Web Developer",
    bullets: [
      "Promoted to Joint General Secretary (Oct 2026 - Present) after serving as Development Lead (Dec 2025 - Present) and Web Developer (Oct 2024 - Dec 2025).",
      "Spearheaded MERN stack project development, driving architecture decisions, code reviews, and high code quality standards across teams.",
      "Managed recruitment cycles and conducted structured technical interviews for student developers.",
      "Planned and executed large-scale hackathons as Event Lead, coordinating cross-functional teams from ideation to delivery."
    ],
    skills: ["MERN Stack", "System Design", "Technical Mentorship", "Hackathon Organization"]
  },
  {
    id: "ieee-nsut",
    role: "Joint Secretary",
    company: "IEEE NSUT",
    location: "NSUT Delhi",
    period: "Dec 2025 - Present",
    category: "leadership",
    tag: "Formerly Executive Committee & Member",
    bullets: [
      "Serving as Joint Secretary (Dec 2025 - Present), previously Executive Committee Member (Apr 2025 - Dec 2025) and Member (Oct 2024 - Apr 2025).",
      "Co-organized flagship hackathons at NSUT Tech Fest and Delhi Municipal Corporation (MCD) HQ.",
      "Led student recruitment, technical event ideation, and end-to-end execution of student chapter initiatives."
    ],
    skills: ["Leadership", "Community Building", "Event Ideation", "Technical Workshops"]
  },
  {
    id: "tedx-nsut",
    role: "Member / Core Member",
    company: "TEDxNSUT",
    location: "NSUT Delhi",
    period: "Feb 2025 - Present",
    category: "leadership",
    bullets: [
      "Coordinated speaker outreach, managed public relations, and supported on-ground event execution for flagship conferences."
    ],
    skills: ["Speaker Relations", "Public Relations", "Event Production"]
  },
  {
    id: "intaglios",
    role: "Graphic Designer",
    company: "Intaglios",
    location: "Delhi, India",
    period: "Jan 2025 - Apr 2026",
    category: "creative",
    bullets: [
      "Designed visual identity, brand graphics, and creative assets for events, promotions, and digital media."
    ],
    skills: ["Graphic Design", "Brand Identity", "Visual Communication"]
  },
  {
    id: "spacecon",
    role: "Event Management",
    company: "SpaceCon NSUT",
    location: "NSUT Delhi",
    period: "Dec 2024 - Feb 2025",
    category: "leadership",
    bullets: [
      "Coordinated logistical planning, venue management, and attendee operations for the annual space technology summit."
    ],
    skills: ["Logistics", "Operations", "Team Coordination"]
  }
];
