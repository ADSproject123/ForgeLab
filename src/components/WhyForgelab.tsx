"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🎯",
    title: "Engineering-First Mindset",
    body: "We don't paper over complexity with abstractions. We understand the system at every layer — from model weights to database indexes — and we build accordingly.",
    stat: "Zero shortcuts",
    color: "cyan",
  },
  {
    icon: "🧠",
    title: "AI-Native Development",
    body: "We don't bolt AI onto existing products as an afterthought. Intelligence is designed into architecture from day one — in every API, data model, and UX decision.",
    stat: "AI from the ground up",
    color: "violet",
  },
  {
    icon: "⚡",
    title: "Prototype Speed, Production Quality",
    body: "We move at startup speed without sacrificing engineering rigor. You get working prototypes in days and production-grade systems in weeks, not months.",
    stat: "10x faster shipping",
    color: "blue",
  },
  {
    icon: "🔬",
    title: "Deep Technical Expertise",
    body: "From low-level CUDA kernels to fine-tuning frontier models — our team has rare depth across the full AI/ML and systems engineering stack.",
    stat: "Research-grade depth",
    color: "emerald",
  },
];

const colorMap: Record<string, { border: string; icon: string; stat: string; glow: string }> = {
  cyan: {
    border: "hover:border-cyan-500/25",
    icon: "text-2xl",
    stat: "text-cyan-400",
    glow: "group-hover:shadow-[inset_0_0_40px_rgba(6,182,212,0.05)]",
  },
  violet: {
    border: "hover:border-violet-500/25",
    icon: "text-2xl",
    stat: "text-violet-400",
    glow: "group-hover:shadow-[inset_0_0_40px_rgba(139,92,246,0.05)]",
  },
  blue: {
    border: "hover:border-blue-500/25",
    icon: "text-2xl",
    stat: "text-blue-400",
    glow: "group-hover:shadow-[inset_0_0_40px_rgba(59,130,246,0.05)]",
  },
  emerald: {
    border: "hover:border-emerald-500/25",
    icon: "text-2xl",
    stat: "text-emerald-400",
    glow: "group-hover:shadow-[inset_0_0_40px_rgba(52,211,153,0.05)]",
  },
};

export function WhyForgelab() {
  return (
    <section id="why" className="relative py-32 bg-[#020204] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-forge relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">Why ForgeLab</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why elite teams choose us
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We&apos;re not a typical agency. We&apos;re engineers who think
            deeply and ship decisively.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {reasons.map((r, i) => {
            const c = colorMap[r.color];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group glass-card rounded-2xl p-8 transition-all duration-300 ${c.border} ${c.glow}`}
              >
                <div className="text-3xl mb-5">{r.icon}</div>
                <h3 className="font-bold text-white text-xl mb-3">{r.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">{r.body}</p>
                <div
                  className={`text-xs font-semibold uppercase tracking-widest ${c.stat} border-t border-white/[0.05] pt-4`}
                >
                  {r.stat}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center border-white/[0.06] hover:border-cyan-500/20 transition-all duration-300"
          style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(99,102,241,0.05) 100%)" }}
        >
          <div className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4">
            Ready to build something exceptional?
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Let&apos;s make it happen.
          </h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
            Share your idea and we&apos;ll respond within 24 hours with
            honest technical feedback and a clear path forward.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 text-black text-sm font-semibold rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-200"
          >
            Start a Project
            <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
