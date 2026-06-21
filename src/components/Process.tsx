"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive into your domain, data, and goals. We map constraints, define success metrics, and scope the architecture before writing a single line of code.",
    focus: "Research · Scoping · Architecture",
  },
  {
    number: "02",
    title: "Design",
    description:
      "System architecture, data modelling, and UX flows engineered for scale. We make hard decisions early so you don't pay for them in production.",
    focus: "System Design · UX · Data Modelling",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Rapid, iterative development with daily deliverables. Clean, tested, production-grade code — no prototypes dressed up as products.",
    focus: "Engineering · Testing · Integration",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "CI/CD pipelines, infrastructure provisioning, monitoring dashboards, and a smooth go-live. We stay on call during launch, not just during development.",
    focus: "CI/CD · Infrastructure · Observability",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Performance tuning, model retraining, feature expansion, and ongoing optimisation. We build long-term partnerships, not one-off deliverables.",
    focus: "Optimisation · Growth · Support",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            From zero to production
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A battle-tested engineering workflow that ships complex systems
            on time and without surprises.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-[2.4rem] left-[10%] right-[10%] h-px bg-slate-200" />
          {/* Green progress fill (first 3 steps = 60%) */}
          <div className="absolute top-[2.4rem] left-[10%] w-[50%] h-px bg-green-400" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative flex flex-col"
              >
                {/* Step dot */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold relative z-10 transition-all duration-200
                      ${i < 3 ? "bg-green-600 border-green-600 text-white" : "bg-white border-slate-200 text-slate-400"}`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="card rounded-xl p-5 flex-1">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{step.description}</p>
                  <div className="text-[10px] uppercase tracking-wider text-green-600 font-semibold border-t border-slate-100 pt-3">
                    {step.focus}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative flex gap-5"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5
                    ${i < 3 ? "bg-green-600 border-green-600 text-white" : "bg-white border-slate-200 text-slate-400"}`}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-0.5 flex-1 my-2 ${i < 2 ? "bg-green-300" : "bg-slate-100"}`} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">{step.description}</p>
                <div className="text-[10px] uppercase tracking-wider text-green-600 font-semibold">
                  {step.focus}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
