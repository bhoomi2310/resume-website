import { motion } from "framer-motion";
import debugging from "../assets/debugging.png";
import intaglios from "../assets/intaglios.png";
import ieee from "../assets/ieee.png";
import tedx from "../assets/tedx.png";
import spacecon from "../assets/spacecon.png";

const work = [
  {
    image: debugging,
    org: "The Debugging Society NSUT",
    totalDuration: "1 yr 4 mos",
    roles: [
      {
        role: "Development Lead",
        duration: "Dec 2025 - Present",
        roleDuration: "2 mos",
      },
      {
        role: "Web Developer",
        duration: "Oct 2024 - Dec 2025",
        roleDuration: "1 yr 3 mos",
      },
    ],
  },
  {
    image: ieee,
    org: "IEEE NSUT",
    totalDuration: "1 yr 4 mos",
    roles: [
      {
        role: "Joint Secretary",
        duration: "Dec 2025 - Present",
        roleDuration: "2 mos",
      },
      {
        role: "Executive Committee Member",
        duration: "Apr 2025 - Dec 2025",
        roleDuration: "9 mos",
      },
      {
        role: "Member",
        duration: "Oct 2024 - Apr 2025",
        roleDuration: "7 mos",
      },
    ],
  },
  {
    image: tedx,
    org: "TEDxNSUT",
    totalDuration: "1 yr",
    roles: [
      {
        role: "Member",
        duration: "Feb 2025 - Present",
        roleDuration: "1 yr",
      },
    ],
  },
  {
    image: intaglios,
    org: "Intaglios",
    totalDuration: "1 yr 1 mo",
    roles: [
      {
        role: "Graphic Designer",
        duration: "Jan 2025 - Present",
        roleDuration: "1 yr 1 mo",
      },
    ],
  },
];

const volunteer = [
  {
    image: spacecon,
    org: "SpaceCon, NSUT",
    totalDuration: "3 mos",
    roles: [
      {
        role: "Event management",
        duration: "Dec 2024 - Feb 2025",
        roleDuration: "3 mos",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 text-white">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-pink-500 mb-12 hover:text-purple-400 transition">
         Experience()
      </h2>

      {/* Work Experience */}
      <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-violet-300 hover:text-pink-300 transition">
        Work Experience
      </h3>

      <div className="flex flex-col items-center gap-6">
        {work.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative bg-gray-900 p-4 sm:p-6 rounded-xl border border-purple-700 w-full max-w-2xl mx-auto shadow-lg group hover:shadow-pink-500 transition"
          >
            {/* Chroma glow background */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-700 to-pink-500 opacity-20 blur-md scale-105 group-hover:opacity-40 transition-all duration-500 z-0" />

            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 z-10">
              <img
                src={exp.image}
                alt={exp.org}
                className="w-20 h-20 object-contain rounded-xl bg-white p-1 flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-bold text-purple-300">{exp.org}</h4>
                <p className="text-sm text-gray-400 mb-3">{exp.totalDuration}</p>
                {exp.roles.map((role, idx) => (
                  <div key={idx} className="mb-2 flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <div className="flex-1">
                      <p className="text-gray-300 font-medium">{role.role}</p>
                      <p className="text-sm text-gray-400">
                        {role.duration} ({role.roleDuration})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Volunteer Experience */}
      <h3 className="text-3xl sm:text-4xl font-semibold mt-12 mb-6 text-center text-violet-300 hover:text-pink-300 transition">
        Volunteer Experience
      </h3>

      <div className="flex flex-col items-center gap-6">
        {volunteer.map((vol, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative bg-gray-900 p-4 sm:p-6 rounded-xl border border-purple-700 w-full max-w-2xl mx-auto shadow-lg group hover:shadow-pink-500 transition"
          >
            {/* Chroma glow background */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-700 to-pink-500 opacity-20 blur-md scale-105 group-hover:opacity-40 transition-all duration-500 z-0" />

            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 z-10">
              <img
                src={vol.image}
                alt={vol.org}
                className="w-20 h-20 object-contain rounded-xl bg-white p-1 flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-bold text-purple-300">{vol.org}</h4>
                <p className="text-sm text-gray-400 mb-3">{vol.totalDuration}</p>
                {vol.roles.map((role, idx) => (
                  <div key={idx} className="mb-2 flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <div className="flex-1">
                      <p className="text-gray-300 font-medium">{role.role}</p>
                      <p className="text-sm text-gray-400">
                        {role.duration} ({role.roleDuration})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
