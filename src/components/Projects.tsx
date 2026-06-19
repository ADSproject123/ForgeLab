"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  category: string;
  client: string;
  description: string;
  image: string;
  results: { metric: string; label: string }[];
  stack: string[];
  accentColor: string;
  accentText: string;
}

const projects: Project[] = [
  {
    name: "NeuralCore",
    category: "Enterprise AI Platform",
    client: "FinFlow Technologies",
    description:
      "Enterprise-grade AI chatbot platform with multi-modal reasoning, document grounding, streaming responses, and CRM integration. Handles 2M+ messages per month across three Fortune 500 deployments.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80",
    results: [
      { metric: "2M+", label: "Messages / month" },
      { metric: "99.9%", label: "Uptime SLA" },
      { metric: "3×", label: "Fortune 500 clients" },
    ],
    stack: ["Python", "FastAPI", "GPT-4", "Pinecone", "React", "Redis"],
    accentColor: "bg-green-50",
    accentText: "text-green-700",
  },
  {
    name: "DataForge",
    category: "Real-Time Analytics",
    client: "DataSync Corp",
    description:
      "Event-streaming analytics platform ingesting 500K+ events per second with ML anomaly detection, predictive dashboards, and sub-100ms query response times for real-time business intelligence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    results: [
      { metric: "500K", label: "Events / second" },
      { metric: "<100ms", label: "Query response" },
      { metric: "98%", label: "Anomaly accuracy" },
    ],
    stack: ["Apache Kafka", "ClickHouse", "Python", "Next.js", "Grafana"],
    accentColor: "bg-violet-50",
    accentText: "text-violet-700",
  },
  {
    name: "HealthMind",
    category: "Mobile AI App",
    client: "HealthBridge",
    description:
      "HIPAA-compliant on-device AI health assistant for iOS and Android. Runs LLM inference locally with no data leaving the device, full voice command support, and persistent contextual memory.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    results: [
      { metric: "4.9★", label: "App Store rating" },
      { metric: "100K+", label: "Active users" },
      { metric: "0", label: "HIPAA violations" },
    ],
    stack: ["Flutter", "TensorFlow Lite", "Core ML", "Swift", "Firebase"],
    accentColor: "bg-emerald-50",
    accentText: "text-emerald-700",
  },
  {
    name: "RoboCore",
    category: "Robotics & Automation",
    client: "LogiCorp",
    description:
      "Autonomous warehouse robotics system with stereo vision, real-time SLAM, and dynamic obstacle avoidance at sub-10ms latency. Reduced operational error rates by 94% in the first year.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    results: [
      { metric: "99.7%", label: "Task success rate" },
      { metric: "94%", label: "Error reduction" },
      { metric: "40%", label: "Cost savings" },
    ],
    stack: ["ROS 2", "C++", "OpenCV", "Python", "CUDA", "LIDAR"],
    accentColor: "bg-orange-50",
    accentText: "text-orange-700",
  },
  {
    name: "APIForge",
    category: "Cloud Infrastructure",
    client: "NovaTech",
    description:
      "Intelligent API gateway with semantic request caching, adaptive rate limiting, zero-downtime blue-green deploys, and automatic failover. Handles 10M+ requests per day with 99.99% availability.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    results: [
      { metric: "10M+", label: "Requests / day" },
      { metric: "99.99%", label: "Availability" },
      { metric: "60%", label: "Latency reduction" },
    ],
    stack: ["Node.js", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Nginx"],
    accentColor: "bg-sky-50",
    accentText: "text-sky-700",
  },
  {
    name: "VisionLab",
    category: "Computer Vision",
    client: "MedScan AI",
    description:
      "HIPAA-compliant medical imaging pipeline with real-time lesion detection, automated classification, structured radiology reporting, and seamless EHR integration for hospital networks.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    results: [
      { metric: "98.3%", label: "Detection accuracy" },
      { metric: "4×", label: "Faster reporting" },
      { metric: "12", label: "Hospital networks" },
    ],
    stack: ["PyTorch", "YOLO v9", "FastAPI", "DICOM", "React", "AWS"],
    accentColor: "bg-rose-50",
    accentText: "text-rose-700",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-badge mb-5">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Case studies & results
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed md:text-right">
            Real projects with measurable outcomes across AI, infrastructure,
            mobile, and robotics.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group card rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                {/* Category pill */}
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${project.accentColor} ${project.accentText}`}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Client */}
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                  {project.client}
                </p>

                {/* Name */}
                <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-green-700 transition-colors duration-200 flex items-center gap-2">
                  {project.name}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-600" />
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-5 p-4 bg-slate-50 rounded-xl">
                  {project.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-lg font-bold text-slate-900 leading-none">{r.metric}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide mt-1 leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-medium"
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
