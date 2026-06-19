"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const principles = [
  {
    title: "Engineering-First",
    body: "We start from first principles. Every system we build is designed for correctness, performance, and longevity — not shortcuts.",
  },
  {
    title: "AI-Native",
    body: "Intelligence isn't an add-on. We architect AI capabilities directly into the foundation of every product we ship.",
  },
  {
    title: "Relentlessly Precise",
    body: "Small team. No bloat. Every decision is deliberate. We obsess over the details most teams overlook.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-[#020204] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      <div className="container-forge relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp}>
                <div className="section-badge mb-6">About ForgeLab</div>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
              >
                Small team.
                <br />
                <span className="text-green-gradient">Elite engineering.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-slate-400 text-lg leading-relaxed mb-6"
              >
                ForgeLab was founded on a simple conviction: that a small,
                deeply skilled team can outbuild and outthink any large
                corporation — if they move with precision and purpose.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-slate-500 leading-relaxed"
              >
                We are engineers, researchers, and builders. We take on
                complex problems across AI, systems software, and product
                engineering — and we solve them at the root. Not just for
                today, but for the systems you&apos;ll still be running in
                five years.
              </motion.p>
            </motion.div>
          </div>

          {/* Right: principles */}
          <div className="flex flex-col gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="glass-card rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-green-400 font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6"
        >
          {[
            { value: "50+", label: "Projects Built" },
            { value: "4+", label: "Years Deep Tech" },
            { value: "6", label: "Core Domains" },
            { value: "∞", label: "Curiosity" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#020204] px-8 py-6 text-center hover:bg-white/2 transition-colors"
            >
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
