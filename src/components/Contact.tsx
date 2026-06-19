"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle, type LucideIcon } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  type: string;
  message: string;
};

const projectTypes = [
  "AI / Machine Learning",
  "LLM / AI Agents",
  "Web Application",
  "Mobile App",
  "Robotics / Automation",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="relative py-32 bg-[#020204] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* BG glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-forge relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-badge mb-6">Contact</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Start a project
              <br />
              <span className="text-cyan-gradient">with ForgeLab.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Tell us what you&apos;re building. We&apos;ll respond within
              24 hours with technical feedback and honest next steps.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {(
                [
                  { label: "Email", value: "hello@forgelab.cam", icon: Mail },
                  { label: "Location", value: "Remote — Worldwide", icon: MapPin },
                  { label: "Response time", value: "Within 24 hours", icon: Clock },
                ] as { label: string; value: string; icon: LucideIcon }[]
              ).map((item) => {
                const Icon = item.icon;
                return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 text-slate-400">
                    <Icon size={17} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-slate-300 text-sm font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-7 md:p-8">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <CheckCircle size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white text-xl font-bold">Message sent!</h3>
                  <p className="text-slate-400 text-sm">
                    We&apos;ll review your project and get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", type: "", message: "" });
                    }}
                    className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mt-2"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#111]">
                        Select a category
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#111]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you building? What's the goal? What have you tried so far?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 bg-cyan-500 text-black text-sm font-semibold rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    No commitment. We respond with honest feedback, always.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
