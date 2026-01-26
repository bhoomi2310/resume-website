// Ripple Grid Background Component
import { useEffect, useRef } from "react";

export default function RippleGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;
    const gridSize = 50;
    const ripples = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create initial ripples
    const createRipple = (x, y) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.max(canvas.width, canvas.height) * 0.8,
        speed: 2,
        opacity: 0.6,
      });
    };

    // Create ripples periodically
    const rippleInterval = setInterval(() => {
      if (canvas.width && canvas.height) {
        createRipple(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
    }, 2000);

    // Initial ripples
    setTimeout(() => {
      createRipple(canvas.width * 0.3, canvas.height * 0.3);
      createRipple(canvas.width * 0.7, canvas.height * 0.7);
    }, 500);

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = `rgba(168, 85, 247, 0.3)`;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += ripple.speed;
        ripple.opacity = 0.6 * (1 - ripple.radius / ripple.maxRadius);

        if (ripple.radius > ripple.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw ripple circle
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          ripple.radius * 0.3,
          ripple.x,
          ripple.y,
          ripple.radius
        );

        gradient.addColorStop(0, `rgba(236, 72, 153, ${ripple.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${ripple.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, ${ripple.opacity * 0.2})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw multiple rings for each ripple
        for (let ring = 1; ring <= 3; ring++) {
          const ringRadius = ripple.radius - ring * 20;
          if (ringRadius > 0) {
            const ringOpacity = ripple.opacity * (1 - ring * 0.2);
            ctx.strokeStyle = `rgba(168, 85, 247, ${ringOpacity * 0.4})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearInterval(rippleInterval);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Ripple Grid canvas - highly visible */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
    </div>
  );
}
