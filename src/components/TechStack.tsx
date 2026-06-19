"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
}

interface TechGroup {
  category: string;
  items: TechItem[];
  color: string;
}

const techGroups: TechGroup[] = [
  {
    category: "AI / ML",
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "🧮" },
      { name: "scikit-learn", icon: "📊" },
      { name: "CUDA", icon: "⚡" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "MLflow", icon: "📈" },
      { name: "LangChain", icon: "🔗" },
    ],
  },
  {
    category: "Web & API",
    color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
    items: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "FastAPI", icon: "🚀" },
      { name: "GraphQL", icon: "◈" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "TypeScript", icon: "🔷" },
    ],
  },
  {
    category: "Mobile",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    items: [
      { name: "Flutter", icon: "💙" },
      { name: "React Native", icon: "📱" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🎯" },
      { name: "Core ML", icon: "🧠" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    category: "Infrastructure",
    color: "text-orange-400 border-orange-500/20 bg-orange-500/5",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS", icon: "☁️" },
      { name: "Terraform", icon: "🏗️" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Nginx", icon: "🌐" },
    ],
  },
  {
    category: "Robotics",
    color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    items: [
      { name: "ROS 2", icon: "🤖" },
      { name: "C++", icon: "⚙️" },
      { name: "OpenCV", icon: "👁️" },
      { name: "SLAM", icon: "🗺️" },
      { name: "Arduino", icon: "🔌" },
      { name: "LIDAR", icon: "📡" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-32 bg-[#020204]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-forge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">Technology</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built with the best tools
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We pick the right technology for each problem — not the trendy
            one.
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
              transition={{
                delay: gi * 0.08,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`glass-card rounded-2xl p-6 ${gi === 4 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : ""}`}
            >
              {/* Category label */}
              <div
                className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border mb-5 ${group.color}`}
              >
                {group.category}
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] hover:border-white/15 transition-all duration-200 cursor-default"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm text-slate-300 font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
