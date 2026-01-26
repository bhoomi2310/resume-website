import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 bg-black/30 backdrop-blur-xl text-white z-50 border-b border-purple-900/30 space-y-3 sm:space-y-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔗 Left side: Contact Me */}
      <motion.a
        href="#contact"
        className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Contact Me
      </motion.a>

      {/* 🔗 Right side: Nav items */}
      <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-lg sm:text-xl font-semibold">
        {["Home", "Skills", "Background", "Experience", "Projects"].map((s, i) => (
          <li key={s}>
            <motion.a
              href={`#${s.toLowerCase()}`}
              className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {s}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
