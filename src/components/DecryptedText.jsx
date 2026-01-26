// Decrypted Text Animation Component
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function DecryptedText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join(""));
  const [isDecrypting, setIsDecrypting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    setIsDecrypting(true);
    let iterations = 0;
    const maxIterations = text.length * 3; // More iterations for smoother effect

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations / 3) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setIsDecrypting(false);
        setDisplayText(text); // Ensure final text is correct
      }

      iterations += 1;
    }, 50); // Slower interval for more visible effect

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.h2>
  );
}
