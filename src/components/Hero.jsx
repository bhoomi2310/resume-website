// src/components/Hero.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import DarkVeil from "./DarkVeil";
import SplitText from "./SplitText";

export default function Hero() {
  const [clicked, setClicked] = useState(false);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 gap-10 pt-24 text-white overflow-hidden"
    >
      {/* Dark Veil Background */}
      <DarkVeil />

      {/* Profile Image with Glow and Background Ring */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-60 -right-2 top-2 blur-2xl animate-pulse"></div>
        <motion.img
          src={profileImg}
          alt="Profile"
          onClick={() => setClicked(!clicked)}
          className={`relative z-10 rounded-full w-52 h-52 sm:w-60 sm:h-60 border-4 border-pink-500 cursor-pointer transition-all duration-500 ${
            clicked ? "shadow-[0_0_40px_10px_rgba(192,132,252,0.8)]" : ""
          } hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.6)]`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      {/* Text and Resume Button */}
      <motion.div
        className="z-10 max-w-xl text-center md:text-left px-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <SplitText
          text="Hey! I'm Bhoomi"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
        />

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-purple-300 font-semibold mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          B.Tech Undergrad
        </motion.h2>

        <motion.blockquote
          className="italic text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          "I am an inquisitive and critical thinker with a strong passion for
          coding. Over the years, I have honed my logical thinking skills and
          enjoy creating innovative solutions to real-world problems, using
          technology as a key tool. I enjoy learning new things, collaborating
          on projects and connecting with people."
        </motion.blockquote>

        {/* Resume Download Button */}
        <motion.a
          href="/resumeweb.pdf"
          download
          className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-pink-500/50 transition-all duration-300 text-sm sm:text-base font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume ⬇️
        </motion.a>
      </motion.div>
    </section>
  );
}
