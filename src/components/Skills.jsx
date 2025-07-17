// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCanva,
  SiExpress,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-200" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-400" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-200" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 bg-black text-white">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-pink-500 mb-12 transition hover:text-purple-400">
        Skills();
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-4 sm:p-6 bg-gray-900 rounded-2xl text-center shadow-lg shadow-purple-700 hover:scale-105 transition duration-300 border border-purple-800 hover:border-pink-400"
          >
            <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
            <p className="text-white font-semibold text-sm sm:text-lg tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
