"use client";

import { motion } from "framer-motion";
import { Target, Brain, Zap, Microscope, type LucideIcon } from "lucide-react";

const metrics = [
  { value: "50+", label: "Projects shipped" },
  { value: "4+", label: "Years of expertise" },
  { value: "98%", label: "Client satisfaction" },
  { value: "10×", label: "Avg. delivery speed" },
];

interface Reason {
  icon: LucideIcon;
  title: string;
  body: string;
  badge: string;
}

const reasons: Reason[] = [
  {
    icon: Target,
    title: "Engineering-First Mindset",
    body: "We start from first principles — understanding systems at every layer, from model weights to database indexes. No hand-wavy abstractions; only deliberate, well-reasoned solutions.",
    badge: "Zero shortcuts",
  },
  {
    icon: Brain,
    title: "AI-Native Development",
    body: "Intelligence isn't bolted on as an afterthought. We design AI capabilities into the architecture of every product from day one — in every API, data model, and UX decision.",
    badge: "AI from the ground up",
  },
  {
    icon: Zap,
    title: "Prototype Speed, Production Quality",
    body: "We move at startup velocity without sacrificing engineering rigour. Working prototypes in days, production-grade systems in weeks — not the months it takes elsewhere.",
    badge: "10× faster shipping",
  },
  {
    icon: Microscope,
    title: "Deep Technical Expertise",
    body: "From CUDA kernels to frontier model fine-tuning, from SLAM algorithms to distributed systems — our team carries rare depth across the full AI/ML and software engineering stack.",
    badge: "Research-grade depth",
  },
];

export function WhyForgelab() {
  return (
    <section id="why" className="py-24 bg-slate-50">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="section-badge mb-5">Why ForgeLab</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            The ForgeLab difference
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We&apos;re not a typical agency. We&apos;re engineers who think
            deeply, ship decisively, and own the outcome.
          </p>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-12 border border-slate-200"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-white px-8 py-8 text-center hover:bg-green-50 transition-colors duration-200 group">
              <div className="text-4xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">{m.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="card p-8 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-green-700" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-green-700 transition-colors duration-200">
                  {r.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-5 text-sm">{r.body}</p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {r.badge}
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
          transition={{ duration: 0.55 }}
          className="mt-12 bg-slate-900 rounded-2xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1a2e1a 100%)",
          }}
        >
          <div className="section-badge mb-5 border-green-500/40 bg-green-500/10 text-green-400">
            Ready to build something exceptional?
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Let&apos;s make it happen.
          </h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
            Share your idea and we&apos;ll respond within 24 hours with honest
            technical feedback and a clear path forward.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-500 hover:shadow-lg transition-all duration-200"
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
