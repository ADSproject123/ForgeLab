"use client";

import { motion } from "framer-motion";

interface Project {
  name: string;
  category: string;
  description: string;
  stack: string[];
  metric: string;
  metricLabel: string;
  gradient: string;
  gridClass?: string;
}

const projects: Project[] = [
  {
    name: "NeuralCore",
    category: "AI Platform",
    description:
      "Enterprise-grade AI chatbot platform with multi-modal reasoning, streaming responses, document grounding, and seamless CRM integration. Deployed across 3 Fortune 500 clients.",
    stack: ["Python", "FastAPI", "GPT-4", "Pinecone", "React", "Redis"],
    metric: "2M+",
    metricLabel: "messages / month",
    gradient: "from-cyan-500/25 via-blue-500/10 to-transparent",
  },
  {
    name: "DataForge",
    category: "Analytics",
    description:
      "Real-time analytics platform ingesting 500k+ events/second with ML anomaly detection, predictive dashboards, and sub-100ms query response times.",
    stack: ["Apache Kafka", "ClickHouse", "Python", "Next.js", "Grafana"],
    metric: "500K",
    metricLabel: "events / second",
    gradient: "from-violet-500/25 via-purple-500/10 to-transparent",
  },
  {
    name: "MindMobile",
    category: "Mobile AI",
    description:
      "On-device AI assistant for iOS and Android with offline-capable LLM inference, voice commands, persistent contextual memory, and privacy-first architecture.",
    stack: ["Flutter", "TensorFlow Lite", "Core ML", "Swift", "Kotlin"],
    metric: "4.9★",
    metricLabel: "App Store rating",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
  },
  {
    name: "RoboCore",
    category: "Robotics",
    description:
      "Autonomous robotics control system with stereo vision, real-time SLAM, dynamic path planning, and sub-10ms obstacle avoidance. Deployed in industrial warehouses.",
    stack: ["ROS 2", "C++", "OpenCV", "Python", "CUDA", "LIDAR"],
    metric: "99.7%",
    metricLabel: "task success rate",
    gradient: "from-orange-500/25 via-amber-500/10 to-transparent",
  },
  {
    name: "APIForge",
    category: "Infrastructure",
    description:
      "Intelligent API gateway with adaptive rate limiting, semantic caching, zero-downtime deploys, and automatic failover. Handles 10M+ requests per day.",
    stack: ["Node.js", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Nginx"],
    metric: "10M+",
    metricLabel: "requests / day",
    gradient: "from-sky-500/25 via-cyan-500/10 to-transparent",
  },
  {
    name: "VisionLab",
    category: "Computer Vision",
    description:
      "HIPAA-compliant computer vision pipeline for medical imaging — real-time lesion detection, classification, structured reporting, and EHR integration.",
    stack: ["PyTorch", "YOLO v9", "FastAPI", "DICOM", "React", "AWS"],
    metric: "98.3%",
    metricLabel: "detection accuracy",
    gradient: "from-pink-500/25 via-rose-500/10 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#020204]">
      {/* Section top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="section-badge mb-5">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Systems we&apos;ve shipped
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed md:text-right">
            A selection of high-impact projects across AI, infrastructure,
            mobile, and robotics.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative glass-card rounded-2xl overflow-hidden hover:border-white/12 transition-all duration-300"
            >
              {/* Visual placeholder with gradient */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-end p-5`}
              >
                {/* Grid lines overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                {/* Category pill */}
                <span className="relative z-10 text-xs font-medium px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/80">
                  {project.category}
                </span>

                {/* Metric callout */}
                <div className="absolute top-5 right-5 text-right">
                  <div className="text-2xl font-bold text-white">{project.metric}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wide">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-white text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
