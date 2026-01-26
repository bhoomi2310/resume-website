// Dark Veil Background Component - MAXIMUM VISIBILITY
import { motion } from "framer-motion";

export default function DarkVeil() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Base gradient layer - MAXIMUM VISIBILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/95 to-black"></div>
      
      {/* Animated radial gradients - MAXIMUM VISIBILITY */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.8),transparent_55%)]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.7),transparent_55%)]"
        animate={{
          scale: [1.4, 1, 1.4],
          opacity: [0.7, 0.95, 0.7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.7),transparent_55%)]"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Dark veil overlay - THE KEY VISIBLE EFFECT - MAXIMUM */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/85"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      
      {/* Grid overlay - MAXIMUM VISIBILITY */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      
      {/* Additional veil layers - MAXIMUM VISIBILITY */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      
      {/* Visible noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
}
