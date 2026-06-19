"use client";

import { motion } from "framer-motion";

interface Service {
  icon: string;
  title: string;
  description: string;
  stack: string[];
  accent: string;
}

const services: Service[] = [
  {
    icon: "🧠",
    title: "AI & Machine Learning Systems",
    description:
      "End-to-end ML pipelines — from data ingestion and model training to production deployment and monitoring. We build systems that learn and improve over time.",
    stack: ["Python", "PyTorch", "TensorFlow", "FastAPI", "MLflow", "CUDA"],
    accent: "cyan",
  },
  {
    icon: "⚡",
    title: "LLM Fine-tuning & AI Agents",
    description:
      "Custom large language model fine-tuning using PEFT, LoRA, and QLoRA. Autonomous AI agents with memory, tool use, and long-horizon reasoning.",
    stack: ["OpenAI", "LangChain", "LoRA", "PEFT", "Pinecone", "RAG"],
    accent: "violet",
  },
  {
    icon: "🌐",
    title: "Full Stack Web Applications",
    description:
      "High-performance web products from API design to pixel-perfect UI. We ship fast, scale effortlessly, and never compromise on quality.",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    accent: "blue",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform and native iOS/Android apps with AI capabilities built in from day one. Performance-optimized, delightful to use.",
    stack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    accent: "emerald",
  },
  {
    icon: "🤖",
    title: "Robotics & Automation Systems",
    description:
      "Intelligent robotics software, sensor fusion, computer vision, and autonomous control systems for physical-world automation.",
    stack: ["ROS 2", "C++", "Python", "OpenCV", "SLAM", "CUDA"],
    accent: "orange",
  },
];

const accentMap: Record<string, { border: string; bg: string; icon: string; badge: string }> = {
  cyan: {
    border: "hover:border-cyan-500/30",
    bg: "group-hover:bg-cyan-500/5",
    icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/15",
  },
  violet: {
    border: "hover:border-violet-500/30",
    bg: "group-hover:bg-violet-500/5",
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/15",
  },
  blue: {
    border: "hover:border-blue-500/30",
    bg: "group-hover:bg-blue-500/5",
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/15",
  },
  emerald: {
    border: "hover:border-emerald-500/30",
    bg: "group-hover:bg-emerald-500/5",
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/15",
  },
  orange: {
    border: "hover:border-orange-500/30",
    bg: "group-hover:bg-orange-500/5",
    icon: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/15",
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#020204]">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">What We Build</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Full-spectrum engineering
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From model training to production systems — we cover every layer
            of the modern tech stack with deep expertise.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const colors = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group relative glass-card rounded-2xl p-6 transition-all duration-300 cursor-default ${colors.border}`}
                style={
                  i === 4
                    ? { gridColumn: "1 / -1", maxWidth: "calc(66.666% - 8px)", margin: "0 auto" }
                    : {}
                }
              >
                {/* Hover bg tint */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.bg}`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-11 h-11 rounded-xl border items-center justify-center text-xl mb-5 ${colors.icon}`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white text-lg mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2.5 py-1 rounded-full border ${colors.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
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
