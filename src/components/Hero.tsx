"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const LINES = [
  "ForgeLab Provides You",
  "The Best Digital Solution",
  "For Your Business.",
];
const SPEED = 55; // ms per character

export function Hero() {
  const [typed, setTyped] = useState(["", "", ""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [cursor, setCursor] = useState(true);

  /* Typing engine */
  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const target = LINES[lineIdx];

    if (charIdx < target.length) {
      const t = setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIdx] = target.slice(0, charIdx + 1);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);

  /* Blinking cursor */
  useEffect(() => {
    const id = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  const done = lineIdx >= LINES.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background video */}
      <video
        src="/backgroundvid/backgroundhero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 container-forge text-center py-24 flex flex-col items-center"
      >
        {/* Typewriter headline */}
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.2] tracking-tight mb-6 max-w-4xl min-h-[4.5em]">
          <span className="block">{typed[0]}</span>
          <span className="block">{typed[1]}</span>
          <span className="block gradient-text">
            {typed[2]}
            {/* Cursor blinks on the active line, stays solid when done */}
            {!done && (
              <span
                className="inline-block w-0.75 h-[0.9em] bg-green-400 ml-1 align-middle"
                style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
              />
            )}
          </span>
        </h1>

        {/* Subtext — fades in after typing starts */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
        >
          ForgeLab is an elite engineering studio that turns complex technical
          challenges into AI-powered products, scalable platforms, and
          intelligent systems — shipped fast, built to last.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:bg-green-400 hover:shadow-green-500/30 hover:shadow-xl transition-all duration-200"
          >
            See Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white text-sm font-semibold rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-200"
          >
            Start a Project
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
