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
  "Cloud Infrastructure",
  "Other",
];

const contactInfo: { label: string; value: string; icon: LucideIcon }[] = [
  { label: "Email", value: "hello@forgelab.cam", icon: Mail },
  { label: "Location", value: "Remote — Worldwide", icon: MapPin },
  { label: "Response time", value: "Within 24 hours", icon: Clock },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", type: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputClass =
    "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-all duration-200";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-forge">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-badge mb-6">Get in Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Start your next
              <br />
              <span className="text-green-gradient">project with us.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Tell us what you&apos;re building. We&apos;ll respond within 24 hours
              with honest technical feedback and a clear path forward — no sales
              fluff, no commitment required.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0 text-green-700">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-slate-700 text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social proof blurb */}
            <div className="mt-10 p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#22c55e">
                    <path d="M8 1.07l1.9 3.84 4.24.62-3.07 2.99.72 4.22L8 10.64l-3.79 2.1.72-4.22L1.86 5.53l4.24-.62L8 1.07z" />
                  </svg>
                ))}
                <span className="text-sm font-semibold text-slate-700 ml-1">4.9 / 5</span>
              </div>
              <p className="text-sm text-slate-500">
                Rated by 30+ satisfied clients across AI, mobile, web, and robotics projects.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="card rounded-2xl p-7 md:p-9 shadow-lg">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
                    <CheckCircle size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-slate-900 text-xl font-bold">Message received!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    We&apos;ll review your project and reply within 24 hours with
                    honest feedback and next steps.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", type: "", message: "" }); }}
                    className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors mt-2"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Tell us about your project</h3>
                    <p className="text-sm text-slate-400">We respond to every inquiry within 24 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text" name="name" required value={form.name}
                        onChange={handleChange} placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email" name="email" required value={form.email}
                        onChange={handleChange} placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      name="type" value={form.type} onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a category</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message" required rows={5} value={form.message}
                      onChange={handleChange}
                      placeholder="What are you building? What's the goal? What have you already tried?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit" disabled={status === "sending"}
                    className="w-full py-3.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    No commitment. Honest feedback, always.
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
