"use client";

import { motion } from "framer-motion";
import {
  Code2, Flame, Layers, BarChart3, Cpu, Smile, Activity, Link,
  Triangle, Atom, Server, Zap, Share2, Database, Layers2, FileCode,
  Smartphone, MonitorSmartphone, Brain,
  Package, Settings2, Cloud, Building2, GitBranch, Globe,
  Bot, Terminal, Eye, Map, CircuitBoard, Scan,
  type LucideIcon,
} from "lucide-react";

interface TechItem {
  name: string;
  icon: LucideIcon;
}

interface TechGroup {
  category: string;
  items: TechItem[];
  accent: string;
  lightBg: string;
}

const techGroups: TechGroup[] = [
  {
    category: "AI / ML",
    accent: "text-green-700",
    lightBg: "bg-green-50 border-green-200",
    items: [
      { name: "Python",       icon: Code2 },
      { name: "PyTorch",      icon: Flame },
      { name: "TensorFlow",   icon: Layers },
      { name: "scikit-learn", icon: BarChart3 },
      { name: "CUDA",         icon: Cpu },
      { name: "Hugging Face", icon: Smile },
      { name: "MLflow",       icon: Activity },
      { name: "LangChain",    icon: Link },
    ],
  },
  {
    category: "Web & API",
    accent: "text-violet-700",
    lightBg: "bg-violet-50 border-violet-200",
    items: [
      { name: "Next.js",    icon: Triangle },
      { name: "React",      icon: Atom },
      { name: "Node.js",    icon: Server },
      { name: "FastAPI",    icon: Zap },
      { name: "GraphQL",    icon: Share2 },
      { name: "PostgreSQL", icon: Database },
      { name: "Redis",      icon: Layers2 },
      { name: "TypeScript", icon: FileCode },
    ],
  },
  {
    category: "Mobile",
    accent: "text-emerald-700",
    lightBg: "bg-emerald-50 border-emerald-200",
    items: [
      { name: "Flutter",      icon: Smartphone },
      { name: "React Native", icon: MonitorSmartphone },
      { name: "Swift",        icon: Zap },
      { name: "Kotlin",       icon: Code2 },
      { name: "Core ML",      icon: Brain },
      { name: "Firebase",     icon: Flame },
    ],
  },
  {
    category: "Infrastructure",
    accent: "text-orange-700",
    lightBg: "bg-orange-50 border-orange-200",
    items: [
      { name: "Docker",         icon: Package },
      { name: "Kubernetes",     icon: Settings2 },
      { name: "AWS",            icon: Cloud },
      { name: "Terraform",      icon: Building2 },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Nginx",          icon: Globe },
    ],
  },
  {
    category: "Robotics",
    accent: "text-rose-700",
    lightBg: "bg-rose-50 border-rose-200",
    items: [
      { name: "ROS 2",   icon: Bot },
      { name: "C++",     icon: Terminal },
      { name: "OpenCV",  icon: Eye },
      { name: "SLAM",    icon: Map },
      { name: "Arduino", icon: CircuitBoard },
      { name: "LIDAR",   icon: Scan },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 bg-slate-50">
      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">Technology</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Built with the right tools
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We choose technology based on the problem, not trends — proven
            tools used by the best engineering teams in the world.
          </p>
        </motion.div>

        {/* Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: gi * 0.08, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`card rounded-2xl p-6 ${gi === 4 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : ""}`}
            >
              {/* Category label */}
              <div className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border mb-5 ${group.lightBg} ${group.accent}`}>
                {group.category}
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + ii * 0.04, duration: 0.35 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 cursor-default"
                    >
                      <Icon size={14} strokeWidth={1.75} className="text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-600 font-medium">{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
