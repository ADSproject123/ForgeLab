"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Project {
  name: string;
  category: string;
  client: string;
  description: string;
  image: string;
  stack: string[];
}

const projects: Project[] = [
  {
    name: "NeuralCore — Enterprise AI Platform",
    category: "AI & Machine Learning",
    client: "FinFlow Technologies",
    description:
      "Enterprise-grade AI chatbot platform with multi-modal reasoning, document grounding, streaming responses, and CRM integration. Handling 2M+ messages monthly across three Fortune 500 deployments.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80",
    stack: ["Python", "FastAPI", "GPT-4", "Pinecone", "React", "Redis"],
  },
  {
    name: "DataForge — Real-Time Analytics",
    category: "Analytics Platform",
    client: "DataSync Corp",
    description:
      "Event-streaming analytics platform ingesting 500K+ events per second with ML anomaly detection, predictive dashboards, and sub-100ms query response times for real-time business intelligence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    stack: ["Apache Kafka", "ClickHouse", "Python", "Next.js", "Grafana"],
  },
  {
    name: "HealthMind — Mobile AI App",
    category: "Mobile AI",
    client: "HealthBridge",
    description:
      "HIPAA-compliant on-device AI health assistant for iOS and Android. Runs LLM inference locally with no data leaving the device, full voice command support, and persistent contextual memory.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    stack: ["Flutter", "TensorFlow Lite", "Core ML", "Swift", "Firebase"],
  },
  {
    name: "RoboCore — Warehouse Automation",
    category: "Robotics & Automation",
    client: "LogiCorp",
    description:
      "Autonomous warehouse robotics system with stereo vision, real-time SLAM, and dynamic obstacle avoidance at sub-10ms latency. Reduced operational error rates by 94% in the first year.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    stack: ["ROS 2", "C++", "OpenCV", "Python", "CUDA", "LIDAR"],
  },
  {
    name: "APIForge — Intelligent Gateway",
    category: "Cloud Infrastructure",
    client: "NovaTech",
    description:
      "Intelligent API gateway with semantic request caching, adaptive rate limiting, zero-downtime blue-green deploys, and automatic failover. Handles 10M+ requests per day with 99.99% availability.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    stack: ["Node.js", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    name: "VisionLab — Medical Imaging AI",
    category: "Computer Vision",
    client: "MedScan AI",
    description:
      "HIPAA-compliant medical imaging pipeline with real-time lesion detection, automated classification, structured radiology reporting, and seamless EHR integration across 12 hospital networks.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    stack: ["PyTorch", "YOLO v9", "FastAPI", "DICOM", "React", "AWS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-white">
      {/* Full-width green header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="w-full bg-green-600 py-24 px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Case studies &amp; results
        </h2>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Real projects with measurable outcomes across AI, infrastructure,
          mobile, and robotics.
        </p>
      </motion.div>

      {/* Alternating rows — full width */}
      {projects.map((project, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid md:grid-cols-2 border-t border-slate-100"
          >
            {/* Image */}
            <div className={`relative h-72 md:h-105 overflow-hidden ${imageLeft ? "md:order-1" : "md:order-2"}`}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className={`flex flex-col justify-center px-10 md:px-16 py-14 bg-white ${imageLeft ? "md:order-2" : "md:order-1"}`}>
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-4">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors group"
                >
                  View project
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
