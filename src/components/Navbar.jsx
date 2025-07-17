export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 bg-black/50 backdrop-blur-md text-white z-50 shadow-md space-y-3 sm:space-y-0">
      {/* 🔗 Left side: Contact Me */}
      <a
        href="#contact"
        className="text-lg sm:text-xl font-semibold hover:text-pink-500 hover:scale-110 transition-all duration-300"
      >
        Contact Me
      </a>

      {/* 🔗 Right side: Nav items */}
      <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-lg sm:text-xl font-semibold">
        {["Home", "Skills", "Background", "Experience", "Projects"].map((s) => (
          <li key={s}>
            <a
              href={`#${s.toLowerCase()}`}
              className="hover:text-pink-500 hover:scale-110 transition-all duration-300 inline-block"
            >
              {s}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
