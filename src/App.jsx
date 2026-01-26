// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Splash Cursor */}
      <SplashCursor />

      {/* 🟣 Full-website square grid background with pointer-events disabled */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-line-grid opacity-30" />

      {/* ✅ Main Scrollable Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Background />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
