// Iridescence Background Component
import { useEffect, useRef } from "react";

export default function Iridescence() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      time += 0.005;
      
      // Create iridescent gradient
      const gradient = ctx.createLinearGradient(
        Math.sin(time) * canvas.width * 0.5 + canvas.width * 0.5,
        Math.cos(time * 0.7) * canvas.height * 0.5 + canvas.height * 0.5,
        Math.sin(time + Math.PI) * canvas.width * 0.5 + canvas.width * 0.5,
        Math.cos((time + Math.PI) * 0.7) * canvas.height * 0.5 + canvas.height * 0.5
      );

      // Iridescent color stops - shifting rainbow colors
      const hue1 = (time * 50) % 360;
      const hue2 = (time * 50 + 60) % 360;
      const hue3 = (time * 50 + 120) % 360;
      const hue4 = (time * 50 + 180) % 360;
      const hue5 = (time * 50 + 240) % 360;
      const hue6 = (time * 50 + 300) % 360;

      gradient.addColorStop(0, `hsla(${hue1}, 70%, 50%, 0.15)`);
      gradient.addColorStop(0.2, `hsla(${hue2}, 70%, 50%, 0.2)`);
      gradient.addColorStop(0.4, `hsla(${hue3}, 70%, 50%, 0.15)`);
      gradient.addColorStop(0.6, `hsla(${hue4}, 70%, 50%, 0.2)`);
      gradient.addColorStop(0.8, `hsla(${hue5}, 70%, 50%, 0.15)`);
      gradient.addColorStop(1, `hsla(${hue6}, 70%, 50%, 0.2)`);

      // Clear and draw
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add multiple overlapping gradients for depth
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.3,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.8
      );

      const hue7 = (time * 30 + 90) % 360;
      const hue8 = (time * 30 + 270) % 360;

      gradient2.addColorStop(0, `hsla(${hue7}, 80%, 60%, 0.1)`);
      gradient2.addColorStop(0.5, `hsla(${hue8}, 80%, 60%, 0.15)`);
      gradient2.addColorStop(1, `hsla(${hue7}, 80%, 60%, 0.05)`);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Third gradient layer
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.7,
        0,
        canvas.width * 0.7,
        canvas.height * 0.7,
        canvas.width * 0.6
      );

      const hue9 = (time * 40 + 180) % 360;
      const hue10 = (time * 40 + 360) % 360;

      gradient3.addColorStop(0, `hsla(${hue9}, 75%, 55%, 0.12)`);
      gradient3.addColorStop(1, `hsla(${hue10}, 75%, 55%, 0.08)`);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Iridescence canvas - highly visible */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
    </div>
  );
}
