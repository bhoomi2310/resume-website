export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export const skillGroupsData: SkillGroup[] = [
  {
    category: "Languages",
    iconName: "Code2",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Frontend",
    iconName: "Layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui"]
  },
  {
    category: "Backend",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT auth"]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server", "ArcadeDB"]
  },
  {
    category: "Core CS",
    iconName: "Cpu",
    skills: ["DSA", "OOP", "DBMS", "OS", "CN"]
  },
  {
    category: "Tools / Cloud / AI",
    iconName: "Cloud",
    skills: ["Git", "GitHub", "Bash / Linux", "Postman", "VS Code", "Azure OpenAI", "Automation Edge", "AWS"]
  }
];
