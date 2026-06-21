"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

type Tab = "email" | "facebook" | "telegram";
type FormState = { name: string; email: string; type: string; message: string };

const projectTypes = [
  "AI / Machine Learning",
  "LLM / AI Agents",
  "Web Application",
  "Mobile App",
  "Robotics / Automation",
  "Cloud Infrastructure",
  "Other",
];

function IconFacebook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "telegram", label: "Telegram", icon: <IconTelegram /> },
  { id: "facebook", label: "Facebook", icon: <IconFacebook /> },
  { id: "email",    label: "Email",    icon: <Mail size={18} /> },
];

const socialCards = {
  facebook: {
    icon: <IconFacebook />,
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#0e65d9]",
    title: "Chat with us on Facebook",
    description: "Send us a message on our Facebook page. We respond to all inquiries within 24 hours.",
    cta: "Open Facebook Messenger",
    href: "https://facebook.com/forgelab",
    detail: "facebook.com/forgelab",
  },
  telegram: {
    icon: <IconTelegram />,
    color: "bg-[#229ED9]",
    hoverColor: "hover:bg-[#1a8fc4]",
    title: "Message us on Telegram",
    description: "Reach us directly on Telegram for quick responses. Usually reply within a few hours.",
    cta: "Open Telegram",
    href: "https://t.me/forgelab",
    detail: "@forgelab",
  },
};

export function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>("telegram");
  const [form, setForm] = useState<FormState>({ name: "", email: "", type: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Choose how you&apos;d like to reach us — we&apos;re available across all platforms.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <span className={activeTab === tab.id ? "text-green-600" : ""}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">

          {/* ── Email tab ── */}
          {activeTab === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left: info */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Send us an email</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Tell us what you&apos;re building. We&apos;ll respond within 24 hours with
                  honest technical feedback and a clear path forward.
                </p>
                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-700 shrink-0">
                    <Mail size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-slate-700 text-sm font-medium">hello@forgelab.cam</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-1.5 mb-2">
                    {[0,1,2,3,4].map((i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#5cb800">
                        <path d="M8 1.07l1.9 3.84 4.24.62-3.07 2.99.72 4.22L8 10.64l-3.79 2.1.72-4.22L1.86 5.53l4.24-.62L8 1.07z" />
                      </svg>
                    ))}
                    <span className="text-sm font-semibold text-slate-700 ml-1">4.9 / 5</span>
                  </div>
                  <p className="text-sm text-slate-500">Rated by 30+ satisfied clients across AI, mobile, web, and robotics projects.</p>
                </div>
              </div>

              {/* Right: form */}
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
                    <p className="text-slate-500 text-sm max-w-xs">We&apos;ll reply within 24 hours with honest feedback and next steps.</p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", type: "", message: "" }); }}
                      className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors mt-2"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Type</label>
                      <select name="type" value={form.type} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                        <option value="" disabled>Select a category</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tell us about your project</label>
                      <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="What are you building? What's the goal?" className={`${inputClass} resize-none`} />
                    </div>
                    <button
                      type="submit" disabled={status === "sending"}
                      className="w-full py-3.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                      ) : "Send Message →"}
                    </button>
                    <p className="text-xs text-slate-400 text-center">No commitment. Honest feedback, always.</p>
                  </form>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Facebook / Telegram tabs ── */}
          {(activeTab === "facebook" || activeTab === "telegram") && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-lg mx-auto"
            >
              {(() => {
                const card = socialCards[activeTab];
                return (
                  <div className="card rounded-2xl p-10 text-center shadow-lg flex flex-col items-center gap-6">
                    {/* Platform icon */}
                    <div className={`w-20 h-20 rounded-2xl ${card.color} flex items-center justify-center text-white shadow-lg`}>
                      <span className="scale-[1.8]">{card.icon}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{card.description}</p>
                    </div>

                    {/* Handle */}
                    <div className="px-5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-mono text-slate-600">
                      {card.detail}
                    </div>

                    {/* CTA */}
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-8 py-3.5 ${card.color} ${card.hoverColor} text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-200 w-full justify-center`}
                    >
                      {card.cta}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    <p className="text-xs text-slate-400">
                      We typically respond within a few hours during business hours.
                    </p>
                  </div>
                );
              })()}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
