"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "4+", label: "Years of excellence" },
  { value: "98%", label: "Client satisfaction" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-28">
      {/* Subtle green radial in top-right */}
      <div
        className="absolute top-0 right-0 w-175 h-175 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(34,197,94,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="container-forge relative z-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            {/* Logo */}
            <motion.div variants={fadeUp} className="mb-8">
              <Image
                src="/logo/logo.png"
                alt="ForgeLab"
                width={800}
                height={186}
                className="h-48 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                Digital Solutions · AI-Native Engineering
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              We Build Digital
              <br />
              Solutions That
              <br />
              <span className="gradient-text">Drive Growth.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg"
            >
              ForgeLab is an elite engineering studio that turns complex
              technical challenges into AI-powered products, scalable
              platforms, and intelligent systems — shipped fast, built to last.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-green-700 hover:shadow-md transition-all duration-200"
              >
                See Our Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:border-green-400 hover:text-green-700 transition-all duration-200"
              >
                Start a Project
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex gap-8 pt-8 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-slate-900 tabular-nums">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: hero visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200/60">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
                alt="ForgeLab analytics dashboard"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge — top left */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100"
            >
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">AI-Powered</div>
                <div className="text-xs text-slate-400">100% AI-native builds</div>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100"
            >
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">2M+ msgs / mo</div>
                <div className="text-xs text-slate-400">Production scale</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
