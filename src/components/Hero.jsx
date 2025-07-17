// src/components/Hero.jsx
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const [clicked, setClicked] = useState(false);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 gap-10 pt-24 text-white overflow-hidden bg-black" // Ensure solid background
    >
      {/* ✅ Custom Glowing Grid Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))]">
        {Array.from({ length: 900 }).map((_, i) => (
          <div
            key={i}
            className="border border-purple-700 bg-transparent opacity-30 rounded-md transition-all duration-300 ease-out 
             hover:bg-pink-500 hover:opacity-80 hover:scale-110"
          ></div>
        ))}
      </div>

      {/* ✅ Profile Image with Glow and Background Ring */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-purple-800 opacity-80 -right-2 top-2 blur-xl"></div>
        <img
          src={profileImg}
          alt="Profile"
          onClick={() => setClicked(!clicked)}
          className={`relative z-10 rounded-full w-52 h-52 sm:w-60 sm:h-60 border-4 border-pink-500 cursor-pointer transition-all duration-500 ${
            clicked ? "shadow-[0_0_40px_10px_rgba(192,132,252,0.8)]" : ""
          } hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.6)]`}
        />
      </div>

      {/* ✅ Text and Resume Button */}
      <div className="z-10 max-w-xl text-center md:text-left px-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-purple-400 transition duration-300 hover:text-pink-400">
          <Typewriter
            words={["BHOOMI GUPTA"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-300 bg-purple-900 font-semibold hover:text-pink-400 py-1 px-2 mt-3 mb-6">
          B.Tech Undergrad
        </h2>

        <blockquote className="italic text-white text-base sm:text-lg md:text-xl leading-relaxed">
          "I am an inquisitive and critical thinker with a strong passion for
          coding. Over the years, I have honed my logical thinking skills and
          enjoy creating innovative solutions to real-world problems, using
          technology as a key tool. I enjoy learning new things, collaborating
          on projects and connecting with people."
        </blockquote>

        {/* ✅ Resume Download Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-purple-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 text-sm sm:text-base font-medium"
        >
          Download Resume ⬇️
        </a>
      </div>
    </section>
  );
}
