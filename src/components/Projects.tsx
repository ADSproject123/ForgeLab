"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Loader2 } from "lucide-react";
import { getPublishedProjects } from "@/lib/projects";
import { isFirebaseConfigured } from "@/lib/firebase";
import type { Project } from "@/lib/types/project";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setLoading(false);
      return;
    }

    getPublishedProjects()
      .then(setProjects)
      .catch(() => setError("Unable to load projects right now."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="bg-white">
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

      {loading && (
        <div className="flex justify-center py-24">
          <Loader2 className="animate-spin text-green-600" size={32} />
        </div>
      )}

      {!loading && error && (
        <div className="py-20 text-center text-slate-500">{error}</div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="py-20 text-center text-slate-500">
          Projects coming soon.
        </div>
      )}

      {!loading &&
        !error &&
        projects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          const linkHref = project.projectUrl || "#contact";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid md:grid-cols-2 border-t border-slate-100"
            >
              <div
                className={`relative h-72 md:h-105 overflow-hidden ${imageLeft ? "md:order-1" : "md:order-2"}`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>

              <div
                className={`flex flex-col justify-center px-10 md:px-16 py-14 bg-white ${imageLeft ? "md:order-2" : "md:order-1"}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-2">
                  {project.name}
                </h3>
                {project.client && (
                  <p className="text-sm text-slate-400 mb-4">{project.client}</p>
                )}
                <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-end">
                  <a
                    href={linkHref}
                    target={project.projectUrl ? "_blank" : undefined}
                    rel={project.projectUrl ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors group"
                  >
                    View project
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
    </section>
  );
}
