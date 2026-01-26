import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nsut from "../assets/nsut.jpg";
import amityPushp from "../assets/amity_pushp.jpg";
import amityGurgaon from "../assets/amity_gurgaon.jpg";
import DecryptedText from "./DecryptedText";

export default function Background() {
  const [certIndex, setCertIndex] = useState(0);

  const certifications = [
    {
      title: "Microsoft Azure AI Essentials",
      source: "LinkedIn Learning Community",
      issued: "Dec 2025",
      credentialId: "",
      image: "",
      link: "https://www.linkedin.com/in/bhoomi23/overlay/1766355798928/single-media-viewer?type=DOCUMENT&profileId=ACoAAEWUE5kBbI3nZQ0stC2226wh_HgEwBx6h_4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOlsv6ICVT16jEaIadboD%2FA%3D%3D",
      logo: "https://content.linkedin.com/content/dam/me/learning/blog/2016/september/LinkedIn_Learning_logo.svg",
    },
    {
      title: "Introduction to Microsoft Azure: Describe Cloud Concepts",
      source: "Microsoft",
      issued: "Jul 2025",
      credentialId: "",
      image: "",
      link: "https://learn.microsoft.com/en-us/users/bhoomigupta-3668/achievements/cxbb66k9?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      title: "Surreal World Assets Buildathon Workshops",
      source: "BlocksBlock",
      issued: "Jun 2025",
      credentialId: "",
      image: "https://drive.google.com/uc?export=view&id=1M44gfnxttggCQ2-zZqIabjgB-iZP-cJP",
      link: "https://drive.google.com/file/d/1M44gfnxttggCQ2-zZqIabjgB-iZP-cJP/view?usp=sharing",
      logo: "",
    },
    {
      title: "Generative AI Fundamentals",
      source: "Google Cloud Skills Boost",
      issued: "Feb 2025",
      credentialId: "13780577",
      image:
        "https://www.cloudskillsboost.google/public_profiles/3ab55022-784a-4efb-9eaf-d2dc9a9cacb9/badges/13780577/image",
      link:
        "https://www.cloudskillsboost.google/public_profiles/3ab55022-784a-4efb-9eaf-d2dc9a9cacb9/badges/13780577?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      logo: "https://www.gstatic.com/devrel-devsite/prod/v45f61267e228069a04b6e73865b8b5c3c62a0c0c5c4d8c4b8c4b8c4b8c4b8c/google-cloud.svg",
    },
    {
      title: "BrAInwave hackathon",
      source: "AIMS-DTU",
      issued: "Oct 2024",
      credentialId: "",
      image: "https://drive.google.com/uc?export=view&id=1Pw-rce3uTPIBna89o05PJ2VwRSxObXmP",
      link: "https://drive.google.com/file/d/1Pw-rce3uTPIBna89o05PJ2VwRSxObXmP/view?usp=sharing",
      logo: "",
    },
  ];

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % certifications.length);
  };


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
      <DecryptedText
        text="Background()"
        className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent mb-12"
      />

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
        Licenses & certifications
      </h3>

      <div className="relative flex justify-center items-center py-12 px-2 sm:px-0 min-h-[450px]">
        {/* Stacked cards behind with enhanced shadows and colors */}
        {[3, 2, 1].map((offset) => {
          const index = (certIndex + offset) % certifications.length;
          const cert = certifications[index];
          const colors = [
            { bg: "from-purple-900/40 to-pink-900/40", border: "border-purple-500", shadow: "shadow-purple-700/30" },
            { bg: "from-pink-900/40 to-purple-900/40", border: "border-pink-500", shadow: "shadow-pink-700/30" },
            { bg: "from-violet-900/40 to-purple-900/40", border: "border-violet-500", shadow: "shadow-violet-700/30" },
          ];
          const colorScheme = colors[offset % colors.length];
          return (
            <motion.div
              key={`stack-${index}`}
              className={`absolute w-[90%] sm:w-[550px] bg-gradient-to-br ${colorScheme.bg} border-2 ${colorScheme.border} rounded-xl p-6 cursor-pointer z-0 backdrop-blur-sm`}
              style={{
                transform: `translateX(-50%) translateY(${offset * 25}px) rotate(${offset === 1 ? "4deg" : offset === 2 ? "-4deg" : "2deg"}) scale(${1 - offset * 0.08})`,
                left: "50%",
                opacity: 0.5 - offset * 0.15,
                boxShadow: `0 ${offset * 15}px ${offset * 30}px -${offset * 10}px rgba(168, 85, 247, ${0.4 - offset * 0.1}), 0 ${offset * 8}px ${offset * 16}px -${offset * 4}px rgba(236, 72, 153, ${0.3 - offset * 0.1})`,
              }}
              onClick={nextCert}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-violet-600/10 rounded-xl"></div>
              
              {/* Transparent logo background */}
              {cert.logo && (
                <div className="absolute inset-0 flex items-center justify-center opacity-8 pointer-events-none">
                  <img src={cert.logo} alt={cert.source} className="w-40 h-40 object-contain blur-sm" />
                </div>
              )}
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-br-xl"></div>
              
              <h4 className="text-lg font-bold text-purple-300 relative z-10 line-clamp-2">{cert.title}</h4>
            </motion.div>
          );
        })}

        {/* Main card with enhanced design */}
        <AnimatePresence mode="wait">
          <motion.div
            key={certIndex}
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            transition={{ duration: 0.4 }}
            onClick={nextCert}
            className="relative w-[90%] sm:w-[550px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-purple-500 rounded-xl p-8 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6),0_10px_30px_-10px_rgba(236,72,153,0.5)] cursor-pointer z-10 hover:border-pink-500 hover:shadow-[0_25px_70px_-15px_rgba(168,85,247,0.7),0_15px_40px_-10px_rgba(236,72,153,0.6)] transition-all duration-300"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-violet-600/10 rounded-xl md:animate-pulse"></div>
            
            {/* Transparent logo background with better styling */}
            {certifications[certIndex].logo && (
              <div className="absolute inset-0 flex items-center justify-center opacity-8 pointer-events-none overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
                <img 
                  src={certifications[certIndex].logo} 
                  alt={certifications[certIndex].source} 
                  className="w-52 h-52 object-contain blur-[2px]"
                />
              </div>
            )}

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500/30 via-purple-500/20 to-transparent rounded-br-xl"></div>
            
            {/* Decorative side accents */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-r-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 rounded-l-full"></div>

            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-3 hover:from-pink-300 hover:to-purple-300 transition-all duration-300">
                {certifications[certIndex].title}
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <p className="text-gray-300 font-medium">{certifications[certIndex].source}</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-400">
                  Issued {certifications[certIndex].issued}
                </p>
              </div>
              
              {certifications[certIndex].credentialId && (
                <div className="mb-4 p-3 bg-purple-900/30 border border-purple-600/50 rounded-lg">
                  <p className="text-xs text-purple-300 mb-1">Credential ID</p>
                  <p className="text-sm text-gray-300 font-mono">
                    {certifications[certIndex].credentialId}
                  </p>
                </div>
              )}
              
              {certifications[certIndex].link && (
                <a
                  href={certifications[certIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-pink-500/50"
                >
                  Show credential
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              
              <p className="text-xs mt-6 text-pink-400 italic text-center flex items-center justify-center gap-2">
                <span className="animate-pulse">●</span>
                Click to view next
                <span className="animate-pulse">●</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
