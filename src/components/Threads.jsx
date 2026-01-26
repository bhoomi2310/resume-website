// Threads Background Animation Component
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Threads() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let threads = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create threads
    const createThreads = () => {
      threads = [];
      const threadCount = 80; // More threads for better visibility
      
      for (let i = 0; i < threadCount; i++) {
        threads.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          length: Math.random() * 300 + 150,
          segments: Math.floor(Math.random() * 15 + 8),
          hue: Math.random() * 60 + 270, // Purple-pink range
        });
      }
    };

    createThreads();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      threads.forEach((thread) => {
        // Update position
        thread.x += thread.vx;
        thread.y += thread.vy;

        // Wrap around edges
        if (thread.x < 0) thread.x = canvas.width;
        if (thread.x > canvas.width) thread.x = 0;
        if (thread.y < 0) thread.y = canvas.height;
        if (thread.y > canvas.height) thread.y = 0;

        // Draw thread
        ctx.beginPath();
        ctx.moveTo(thread.x, thread.y);
        
        let currentX = thread.x;
        let currentY = thread.y;
        
        for (let i = 0; i < thread.segments; i++) {
          const angle = Math.sin(Date.now() * 0.001 + i) * 0.5;
          const segmentLength = thread.length / thread.segments;
          
          currentX += Math.cos(angle) * segmentLength;
          currentY += Math.sin(angle) * segmentLength;
          
          ctx.lineTo(currentX, currentY);
        }

        // Gradient stroke - more visible
        const gradient = ctx.createLinearGradient(
          thread.x,
          thread.y,
          currentX,
          currentY
        );
        gradient.addColorStop(0, `hsla(${thread.hue}, 80%, 65%, 0.9)`);
        gradient.addColorStop(0.3, `hsla(${thread.hue + 10}, 80%, 65%, 0.7)`);
        gradient.addColorStop(0.6, `hsla(${thread.hue + 20}, 80%, 65%, 0.5)`);
        gradient.addColorStop(1, `hsla(${thread.hue}, 80%, 65%, 0.3)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      });

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
      
      {/* Threads canvas - high opacity for visibility */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
      />
      
      {/* Subtle overlay gradient for depth - lighter so threads are visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
    </div>
  );
}
