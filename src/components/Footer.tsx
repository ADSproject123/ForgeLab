"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function ForgeLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#06b6d4" />
      <path d="M8 8h12v3H11.5v3H19v3h-7.5v6H8V8z" fill="#020204" />
    </svg>
  );
}

const footerLinks = {
  Services: [
    "AI & Machine Learning",
    "LLM Fine-tuning",
    "Web Applications",
    "Mobile Apps",
    "Robotics",
  ],
  Company: ["About", "Projects", "Process", "Stack"],
  Contact: ["hello@forgelab.cam", "Start a Project", "Partnerships"],
};

const socialLinks = [
  { label: "GitHub", href: "#", icon: "⌥" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "X / Twitter", href: "#", icon: "𝕏" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#020204] border-t border-white/[0.06]">
      {/* Top gradient rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="container-forge py-16">
        {/* Main footer grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <ForgeLogo />
              <span className="font-semibold text-white tracking-tight">
                ForgeLab
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Elite engineering lab building AI systems, intelligent
              applications, and high-performance software.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/15 hover:bg-white/[0.07] transition-all duration-200 text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={link === "hello@forgelab.cam" ? "mailto:hello@forgelab.cam" : "#"}
                      className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} ForgeLab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://forgelab.cam"
              className="text-sm text-slate-600 hover:text-slate-400 transition-colors font-mono"
            >
              forgelab.cam
            </a>
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Systems operational
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
