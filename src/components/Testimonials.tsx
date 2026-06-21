"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "ForgeLab delivered our real-time analytics platform in under eight weeks. It handles 500K+ events per second without breaking a sweat. The engineering depth here is genuinely rare.",
    name: "Sarah Chen",
    title: "CTO",
    company: "FinFlow Technologies",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
  {
    quote:
      "Their AI-native approach transformed our mobile health platform. On-device LLM inference with HIPAA compliance — something we didn't think was possible. ForgeLab made it production-ready in weeks.",
    name: "Marcus Rodriguez",
    title: "VP of Engineering",
    company: "HealthBridge",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  },
  {
    quote:
      "The autonomous warehouse system reduced our error rate by 94% and cut operational costs by 40% in the first year. ForgeLab didn't just write code — they understood our business deeply before writing a line.",
    name: "James Park",
    title: "Director of Operations",
    company: "LogiCorp",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            What our clients say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We measure success by the outcomes we create for the teams
            we work with.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="card p-7 flex flex-col gap-6 rounded-2xl"
            >
              {/* Quote mark */}
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
                <path
                  d="M0 24V14.4C0 6.4 5.04 1.36 15.12 0l1.44 2.64C11.28 4.08 8.64 6.8 8.16 11.2H14.4V24H0Zm17.6 0V14.4C17.6 6.4 22.64 1.36 32.72 0l1.44 2.64c-5.28 1.44-7.92 4.16-8.4 8.56H31.2V24H17.6Z"
                  fill="#16a34a"
                  opacity="0.2"
                />
              </svg>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed text-sm flex-1">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-green-100 shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
