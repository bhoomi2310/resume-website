// src/components/Footer.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-12 px-4 sm:px-6 border-t border-purple-700"
      id="contact"
    >
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-purple-400 mb-6 hover:text-pink-500 transition">
        Contact Me
      </h2>

      <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl flex-wrap">
        <a
          href="https://www.linkedin.com/in/bhoomi23"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-pink-400 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/bhoomi2310"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-purple-400 transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:imbhoomigupta@gmail.com"
          className="text-red-400 hover:text-yellow-300 transition-transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-center text-gray-500 mt-8 text-xs sm:text-sm px-2">
        © {new Date().getFullYear()} Bhoomi Gupta. All rights reserved.
      </p>
    </footer>
  );
}
