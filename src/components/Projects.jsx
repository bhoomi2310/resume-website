// src/components/Projects.jsx
import { motion } from "framer-motion";
import pharmacy from "../assets/pharmacy.png";
import weather from "../assets/weather.png";
import hospital from "../assets/hospital.png";
import tictactoe from "../assets/tictactoe.png";

const projects = [
  {
    name: "All-in-One Pharmacy App",
    desc: "Designed the frontend of an all-in-one pharmacy app – doorstep delivery, e-consultations, lab tests, chatbot help.",
    img: pharmacy,
    link: "https://drive.google.com/file/d/1P0KpV59Lj4Qgp5md8yl7eaQ0jXqeuqKc/view?usp=drive_link",
  },
  {
    name: "Weather App",
    desc: "Real-time weather forecast with AQI, rain alerts and auto-location detection.",
    img: weather,
    link: "https://weathernowwebsite.netlify.app/",
  },
  {
    name: "Hospital Management System",
    desc: "Manage patients, appointments, billing with Flask + SQL.",
    img: hospital,
    link: "https://hospital-management-system-1-etht.onrender.com/",
  },
  {
    name: "Tic Tac Toe Game",
    desc: "Customizable theme, smart AI, sound, animations, confetti on win.",
    img: tictactoe,
    link: "https://tictactoeeeeeeee.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <h2 className="text-5xl font-bold text-center text-pink-500 mb-12 hover:text-purple-400 transition">
         Projects();
      </h2>

      <div className="flex flex-col items-center gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="w-full md:w-[700px] bg-gray-900 border border-purple-700 shadow-lg shadow-purple-700 hover:shadow-pink-500 transition rounded-xl overflow-hidden"
          >
            <img src={proj.img} alt={proj.name} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-300">{proj.name}</h3>
              <p className="text-gray-300 mt-2">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-pink-400 hover:text-purple-300 font-semibold"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
