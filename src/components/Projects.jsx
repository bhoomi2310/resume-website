// src/components/Projects.jsx
import { motion } from "framer-motion";
import naksha from "../assets/naksha.png";
import financeTracker from "../assets/finance-tracker.png";
import workmark from "../assets/workmark.png";
import DecryptedText from "./DecryptedText";

const projects = [
  {
    name: "WorkMark - Verified by work, not words",
    tagline: "AI-Powered Micro-Internship Platform",
    desc: "Transform how skills are verified in the modern workforce. WorkMark bridges the gap between education and industry by enabling students to prove their capabilities through real work, evaluated by cutting-edge AI. Companies get verified talent, students get recognized skills, and recruiters get powerful search tools—all in one intelligent platform.",
    img: workmark,
    github: "https://github.com/bhoomi2310/SkillGaurd-AI",
    deployed: "",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Azure OpenAI", "JWT", "Tailwind CSS"],
  },
  {
    name: "Naksha",
    tagline: "Navigate India smarter, safer",
    desc: "Navigate India like never before. Naksha understands the unique challenges of Indian roads—from traffic patterns to road quality—and provides routes that are not just shortest, but also safest, cheapest, and culturally richer. ML-powered predictions ensure you always get the best route for your journey.",
    img: naksha,
    github: "https://github.com/bhoomi2310/Naksha-Smart-India-Navigation",
    deployed: "https://naksha-smart-india-navigation.vercel.app/",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "OpenRouteService", "Tailwind CSS"],
  },
  {
    name: "Finance Tracker",
    tagline: "Take Control of Your Financial Future",
    desc: "Master your finances with intelligent tracking and beautiful visualizations. Finance Tracker helps you understand where your money goes, plan for the future, and make informed financial decisions. Real-time updates, comprehensive analytics, and a user-friendly interface make financial management effortless.",
    img: financeTracker,
    github: "https://github.com/bhoomi2310/finance-tracker",
    deployed: "https://finance-tracker-i9yb.vercel.app/",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "SQLite", "TanStack Query", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <DecryptedText
        text="Projects()"
        className="text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent mb-12"
      />

      <div className="flex flex-col items-center gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="w-full md:w-[700px] bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-700/50 shadow-lg shadow-purple-700/50 hover:shadow-pink-500/50 hover:border-pink-500/80 transition-all duration-300 rounded-xl overflow-hidden group relative backdrop-blur-sm"
          >
            <div className="relative">
              <img src={proj.img} alt={proj.name} className="w-full h-60 object-cover" />
              {/* Hover overlay with description only */}
              <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-20">
                <p className="text-white text-sm sm:text-base leading-relaxed text-center">{proj.desc}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-300">{proj.name}</h3>
              {proj.tagline && (
                <p className="text-lg text-pink-400 mt-1 mb-4">{proj.tagline}</p>
              )}
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-900/50 border border-purple-600 rounded-full text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-purple-300 font-semibold transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repo
                </a>
                {proj.deployed && (
                  <a
                    href={proj.deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-purple-300 font-semibold transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

