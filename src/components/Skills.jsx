// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiTypescript,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import DecryptedText from "./DecryptedText";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-200" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "REST", icon: <FaCode className="text-purple-400" /> },
  { name: "Data Structures", icon: <FaCode className="text-pink-400" /> },
  { name: "Algorithms", icon: <FaCode className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 bg-black text-white">
      <DecryptedText
        text="Skills()"
        className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent mb-12"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center shadow-lg shadow-purple-700/50 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 border border-purple-800/50 hover:border-pink-400/80 backdrop-blur-sm"
          >
            <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
            <p className="text-white font-semibold text-sm sm:text-lg tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
