"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive into your domain, data, and goals. We map out constraints, technical requirements, and success criteria before writing a single line of code.",
    focus: "Research · Architecture · Scoping",
    color: "cyan",
  },
  {
    number: "02",
    title: "Design",
    description:
      "System architecture, data modeling, and UX flows designed for scale. We make hard decisions early so you don't pay for them later.",
    focus: "System Design · UX Flows · Data Modeling",
    color: "violet",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Rapid, iterative development with daily deliverables. We write clean, tested, production-grade code — no prototypes masquerading as products.",
    focus: "Engineering · Testing · Integration",
    color: "blue",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "CI/CD pipelines, infrastructure provisioning, monitoring, and a smooth go-live. We stay live during launch — not just during development.",
    focus: "CI/CD · Infrastructure · Observability",
    color: "emerald",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Performance tuning, model retraining, feature expansion, and ongoing optimization. We build relationships, not just deliverables.",
    focus: "Optimization · Growth · Support",
    color: "orange",
  },
];

const colorMap: Record<string, { num: string; line: string; dot: string }> = {
  cyan: { num: "text-cyan-400", line: "bg-cyan-500", dot: "bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]" },
  violet: { num: "text-violet-400", line: "bg-violet-500", dot: "bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]" },
  blue: { num: "text-blue-400", line: "bg-blue-500", dot: "bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]" },
  emerald: { num: "text-emerald-400", line: "bg-emerald-500", dot: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" },
  orange: { num: "text-orange-400", line: "bg-orange-500", dot: "bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.6)]" },
};

export function Process() {
  return (
    <section id="process" className="relative py-32 bg-[#020204]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-badge mb-5">How We Work</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            From zero to production
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A battle-tested engineering workflow that gets complex systems
            shipped — on time and without surprises.
          </p>
        </motion.div>

        {/* Steps — desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-[2.15rem] left-[calc(10%+1rem)] right-[calc(10%+1rem)] h-px bg-white/[0.06]" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="relative flex flex-col"
                >
                  {/* Dot on timeline */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-[#020204] relative z-10`} />
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-xl p-5 flex-1 hover:border-white/12 transition-all duration-300">
                    <div className={`font-mono text-xs font-bold mb-3 ${c.num}`}>
                      {step.number}
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="text-[10px] uppercase tracking-wider text-slate-600 border-t border-white/[0.05] pt-3">
                      {step.focus}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps — mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const c = colorMap[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative flex gap-5"
              >
                {/* Left: dot + line */}
                <div className="flex flex-col items-center gap-0">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${c.dot} ring-4 ring-[#020204] relative z-10`} />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 my-2 bg-white/[0.06] min-h-[2rem]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className={`font-mono text-xs font-bold mb-1 ${c.num}`}>
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <div className="text-[10px] uppercase tracking-wider text-slate-600">
                    {step.focus}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
