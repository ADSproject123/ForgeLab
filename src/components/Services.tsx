"use client";

import { motion } from "framer-motion";
import { Brain, BotMessageSquare, Globe, Smartphone, Bot, Cpu, type LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  color: string;
  lightBg: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "End-to-end ML pipelines from data ingestion and model training to production deployment and continuous monitoring. We build systems that learn and improve autonomously.",
    highlights: ["Custom model training", "MLOps & monitoring", "Feature engineering"],
    color: "text-green-700",
    lightBg: "bg-green-50",
  },
  {
    icon: BotMessageSquare,
    title: "LLM Agents & Fine-tuning",
    description:
      "Custom LLM fine-tuning with LoRA, PEFT, and QLoRA. Autonomous agents with persistent memory, multi-step reasoning, and tool use — deployed at production scale.",
    highlights: ["RAG pipelines", "LoRA / QLoRA fine-tuning", "Autonomous agents"],
    color: "text-violet-700",
    lightBg: "bg-violet-50",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Applications",
    description:
      "High-performance web products from API architecture to pixel-perfect UI. We ship fast, scale effortlessly, and never compromise on code quality or reliability.",
    highlights: ["Next.js & React", "REST & GraphQL APIs", "Cloud-native deployment"],
    color: "text-blue-700",
    lightBg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform and native iOS/Android apps with AI built into the foundation. Performance-optimised, offline-capable, and delightful to use from day one.",
    highlights: ["Flutter & React Native", "On-device AI (Core ML)", "Offline-first architecture"],
    color: "text-emerald-700",
    lightBg: "bg-emerald-50",
  },
  {
    icon: Bot,
    title: "Robotics & Automation",
    description:
      "Intelligent robotics software, sensor fusion, computer vision pipelines, and autonomous control systems that operate reliably in real-world environments.",
    highlights: ["ROS 2 systems", "SLAM & path planning", "Computer vision"],
    color: "text-orange-700",
    lightBg: "bg-orange-50",
  },
  {
    icon: Cpu,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable cloud architecture, CI/CD pipelines, Kubernetes orchestration, and infrastructure-as-code designed for zero-downtime deployments at any scale.",
    highlights: ["Kubernetes & Docker", "Terraform & AWS", "CI/CD automation"],
    color: "text-sky-700",
    lightBg: "bg-sky-50",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">What We Build</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Full-spectrum digital solutions
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From model training to production infrastructure — we deliver across
            every critical layer of the modern technology stack.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="card p-6 rounded-2xl group cursor-default"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.lightBg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={service.color} strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-slate-900 text-lg mb-2 leading-snug group-hover:text-green-700 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
