import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Cloud,
  Terminal,
} from 'lucide-react';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiGit,
  SiLinux,
  SiPostman,
  SiVisualstudiocode,
  SiOpenai,
} from 'react-icons/si';
import {
  FaGithub,
  FaAws,
  FaProjectDiagram,
  FaCubes,
  FaServer,
  FaNetworkWired,
  FaRobot,
  FaDatabase,
} from 'react-icons/fa';
import { skillGroupsData } from '../../data/skills';

export const SkillsWindow: React.FC = () => {
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Languages':
        return {
          icon: <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
          badge: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
          card: 'border-sky-100 dark:border-sky-900/40',
        };
      case 'Frontend':
        return {
          icon: <Layout className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          badge: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
          card: 'border-indigo-100 dark:border-indigo-900/40',
        };
      case 'Backend':
        return {
          icon: <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          badge: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          card: 'border-emerald-100 dark:border-emerald-900/40',
        };
      case 'Databases':
        return {
          icon: <Database className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
          badge: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
          card: 'border-teal-100 dark:border-teal-900/40',
        };
      case 'Core CS':
        return {
          icon: <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
          badge: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
          card: 'border-amber-100 dark:border-amber-900/40',
        };
      case 'Tools / Cloud / AI':
        return {
          icon: <Cloud className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
          badge: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
          card: 'border-rose-100 dark:border-rose-900/40',
        };
      default:
        return {
          icon: <Terminal className="w-4 h-4 text-slate-600 dark:text-slate-400" />,
          badge: 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200',
          card: 'border-slate-200 dark:border-slate-800',
        };
    }
  };

  const getTechIcon = (skillName: string) => {
    const s = skillName.toLowerCase();

    // Languages
    if (s === 'c') return <SiC className="w-3.5 h-3.5 text-[#00599C]" />;
    if (s === 'c++') return <SiCplusplus className="w-3.5 h-3.5 text-[#00599C]" />;
    if (s === 'javascript') return <SiJavascript className="w-3.5 h-3.5 text-[#EAB308]" />;
    if (s === 'typescript') return <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />;
    if (s === 'python') return <SiPython className="w-3.5 h-3.5 text-[#3776AB]" />;

    // Frontend
    if (s.includes('react')) return <SiReact className="w-3.5 h-3.5 text-[#087ea4]" />;
    if (s === 'html5') return <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />;
    if (s === 'css3') return <SiCss3 className="w-3.5 h-3.5 text-[#1572B6]" />;
    if (s.includes('tailwind')) return <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />;
    if (s.includes('shadcn')) return <Code2 className="w-3.5 h-3.5 text-slate-700 dark:text-slate-200" />;

    // Backend
    if (s.includes('node')) return <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />;
    if (s.includes('express')) return <SiExpress className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />;
    if (s.includes('jwt')) return <SiJsonwebtokens className="w-3.5 h-3.5 text-pink-600" />;
    if (s.includes('rest')) return <FaNetworkWired className="w-3.5 h-3.5 text-sky-500" />;

    // Databases
    if (s.includes('mongo')) return <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />;
    if (s.includes('postgres')) return <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" />;
    if (s.includes('mysql')) return <SiMysql className="w-3.5 h-3.5 text-[#4479A1]" />;
    if (s.includes('sql server')) return <SiMicrosoftsqlserver className="w-3.5 h-3.5 text-[#CC292B]" />;
    if (s.includes('arcade')) return <FaDatabase className="w-3.5 h-3.5 text-purple-600" />;

    // Core CS
    if (s === 'dsa') return <FaProjectDiagram className="w-3.5 h-3.5 text-amber-500" />;
    if (s === 'oop') return <FaCubes className="w-3.5 h-3.5 text-emerald-500" />;
    if (s === 'dbms') return <Database className="w-3.5 h-3.5 text-blue-500" />;
    if (s === 'os') return <FaServer className="w-3.5 h-3.5 text-indigo-500" />;
    if (s === 'cn') return <FaNetworkWired className="w-3.5 h-3.5 text-cyan-500" />;

    // Tools / Cloud / AI
    if (s === 'git') return <SiGit className="w-3.5 h-3.5 text-[#F05032]" />;
    if (s === 'github') return <FaGithub className="w-3.5 h-3.5 text-slate-900 dark:text-white" />;
    if (s.includes('linux') || s.includes('bash')) return <SiLinux className="w-3.5 h-3.5 text-amber-500" />;
    if (s === 'postman') return <SiPostman className="w-3.5 h-3.5 text-[#FF6C37]" />;
    if (s.includes('vs code')) return <SiVisualstudiocode className="w-3.5 h-3.5 text-[#007ACC]" />;
    if (s.includes('openai')) return <SiOpenai className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
    if (s.includes('automation')) return <FaRobot className="w-3.5 h-3.5 text-purple-500" />;
    if (s === 'aws') return <FaAws className="w-3.5 h-3.5 text-[#FF9900]" />;

    return <Terminal className="w-3.5 h-3.5 text-slate-500" />;
  };

  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Technical Skills Directory</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Categorized technical capabilities and developer toolsets
          </p>
        </div>
      </div>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroupsData.map((group) => {
          const theme = getCategoryTheme(group.category);
          return (
            <div
              key={group.category}
              className={`p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border ${theme.card} shadow-xs hover:shadow-md transition-all space-y-3.5`}
            >
              {/* Group Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {theme.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">
                    {group.category}
                  </h3>
                </div>
              </div>

              {/* Real Tech Icon Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-xs cursor-default flex items-center gap-2"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center">
                      {getTechIcon(skill)}
                    </span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
