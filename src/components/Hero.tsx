"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "AI-Native" },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020204]">
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-100 pointer-events-none" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float-delayed 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-forge text-center pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="section-badge mb-8">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AI Engineering Lab · forgelab.cam
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3rem,8vw,7rem)] font-bold text-white leading-[0.92] tracking-tight mb-6 max-w-4xl"
          >
            We Build Systems
            <br />
            <span className="gradient-text">That Think.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            ForgeLab is an elite engineering collective crafting AI systems,
            intelligent applications, and high-performance software for teams
            that refuse to settle for ordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 bg-cyan-500 text-black text-sm font-semibold rounded-xl overflow-hidden transition-all duration-200 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
            >
              View Work
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/10 text-white text-sm font-medium rounded-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mt-16 mb-8"
          />

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-12 md:gap-16"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020204] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
