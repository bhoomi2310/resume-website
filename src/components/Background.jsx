import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nsut from "../assets/nsut.jpg";
import amityPushp from "../assets/amity_pushp.jpg";
import amityGurgaon from "../assets/amity_gurgaon.jpg";

export default function Background() {
  const certifications = [
    {
      title: "Surreal World Assets Buildathon Workshops",
      source: "BlockseBlock",
      issued: "June 2025",
      credentialId: "",
      image: "https://drive.google.com/uc?export=view&id=1M44gfnxttggCQ2-zZqIabjgB-iZP-cJP",
      link: "https://drive.google.com/file/d/1M44gfnxttggCQ2-zZqIabjgB-iZP-cJP/view?usp=sharing",
    },
    {
      title: "Generative AI Fundamentals",
      source: "Google Cloud Skills Boost",
      issued: "February 2025",
      credentialId: "13780577",
      image:
        "https://www.cloudskillsboost.google/public_profiles/3ab55022-784a-4efb-9eaf-d2dc9a9cacb9/badges/13780577/image",
      link:
        "https://www.cloudskillsboost.google/public_profiles/3ab55022-784a-4efb-9eaf-d2dc9a9cacb9/badges/13780577?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "BrAInwave Hackathon",
      source: "AIMS-DTU",
      issued: "October 2024",
      credentialId: "",
      image: "https://drive.google.com/uc?export=view&id=1Pw-rce3uTPIBna89o05PJ2VwRSxObXmP",
      link: "https://drive.google.com/file/d/1Pw-rce3uTPIBna89o05PJ2VwRSxObXmP/view?usp=sharing",
    },
  ];

  const [certIndex, setCertIndex] = useState(0);
  const nextCert = () => setCertIndex((prev) => (prev + 1) % certifications.length);

  const education = [
    {
      img: nsut,
      title: "Netaji Subhas University of Technology, Delhi",
      desc: "B.Tech in Instrumentation and Control Engineering | Second Year | 2024–2028 (Expected)",
    },
    {
      img: amityPushp,
      title: "Amity International School, Pushp Vihar",
      desc: "2022–2024 | Class 12 (CBSE) - 94.4%\nPrefect, Student Council (2022–23)",
    },
    {
      img: amityGurgaon,
      title: "Amity International School, Gurugram",
      desc: "2011–2022 | Class 10 (CBSE) - 99.4%\nAIR 4 in Class 10 CBSE Board",
    },
  ];

  return (
    <section id="background" className="py-16 px-4 sm:px-6 text-white relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-pink-500 mb-12 hover:text-purple-400 transition">
        Background();
      </h2>

      {/* Education */}
      <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-violet-300 hover:text-pink-300 transition">
        Education
      </h3>

      <div className="relative overflow-x-auto flex gap-6 justify-start sm:justify-center px-2 py-5">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="min-w-[280px] sm:min-w-[300px] max-w-sm bg-gray-900 border border-purple-600 rounded-xl p-4 
                       
                       hover:shadow-[0_0_30px_15px_rgba(236,72,153,0.6)] 
                       transition duration-300 z-10 my-6"
          >
            <img src={edu.img} alt={edu.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-bold text-purple-400">{edu.title}</h4>
            <p className="text-gray-300 whitespace-pre-line">{edu.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ↓ Scroll Cue Animation */}
      <motion.div
        className="text-center text-3xl sm:text-4xl mt-6 mb-10 text-pink-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        ↓
      </motion.div>

      {/* Certifications */}
      <h3 className="text-3xl sm:text-4xl font-semibold mt-8 mb-6 text-center text-violet-300 hover:text-pink-300 transition">
        Certifications
      </h3>

      <div className="relative flex justify-center items-center py-12 px-2 sm:px-0">
        {/* Glowing stacked deck behind the card */}
        {[2, 1].map((offset) => {
          const index = (certIndex + offset) % certifications.length;
          return (
            <motion.div
              key={index}
              className={`absolute w-[90%] sm:w-[400px] min-h-[260px] border-[4px] rounded-xl 
                          ${offset === 2 ? "border-pink-500" : "border-purple-500"}
                          opacity-60 backdrop-blur-lg z-0`}
              style={{
                transform: `translateX(-50%) rotate(${offset === 1 ? "4deg" : "-5deg"})`,
                top: `${offset * 14}px`,
                left: "50%",
              }}
            />
          );
        })}

        {/* Main Certification Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={certIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={nextCert}
            className="cursor-pointer bg-black border-2 border-white p-6 rounded-xl w-[90%] sm:w-[400px] text-center z-10"
          >
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {certifications[certIndex].title}
            </h4>
            <p className="text-gray-300 mb-2">
              Issued by <span className="font-semibold">{certifications[certIndex].source}</span>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <span className="font-semibold text-white">Issued:</span> {certifications[certIndex].issued}
            </p>
            {certifications[certIndex].credentialId && (
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-white">Credential ID:</span>{" "}
                {certifications[certIndex].credentialId}
              </p>
            )}
            {certifications[certIndex].link && (
              <a
                href={certifications[certIndex].link}
                target="_blank"
                rel="noreferrer"
                className="text-pink-400 font-medium underline hover:text-purple-300"
              >
                View Certificate →
              </a>
            )}
            <p className="text-sm mt-3 text-pink-400 italic">Click to view next</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
