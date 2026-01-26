// Splash Cursor Component
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [splashes, setSplashes] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show cursor on desktop devices
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const handleMouseMove = (e) => {
      if (isDesktop) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleClick = (e) => {
      if (isDesktop) {
        const newSplash = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        setSplashes((prev) => [...prev, newSplash]);
        setTimeout(() => {
          setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
        }, 1000);
      }
    };

    if (isDesktop) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("resize", checkDesktop);
      if (isDesktop) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Splash Effects */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: splash.x,
              top: splash.y,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 blur-xl"></div>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
