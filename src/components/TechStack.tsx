"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart, Smartphone, Monitor, BarChart3, Bot,
  CreditCard, Package, Calendar, Users, Globe, Warehouse, Megaphone,
  type LucideIcon,
} from "lucide-react";

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    description: "Full-featured online stores with product management, payments, and order tracking.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Native and cross-platform iOS & Android apps built for performance and scale.",
  },
  {
    icon: CreditCard,
    title: "POS System",
    description: "Point-of-sale systems for retail and restaurants with inventory and reporting.",
  },
  {
    icon: Monitor,
    title: "Web Application",
    description: "Custom web platforms, dashboards, and internal tools tailored to your business.",
  },
  {
    icon: Bot,
    title: "AI & Chatbot Solution",
    description: "Intelligent chatbots and AI assistants that automate customer support and sales.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time data dashboards that turn your business data into actionable insights.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Smart inventory systems with real-time stock tracking and automated reordering.",
  },
  {
    icon: Users,
    title: "CRM System",
    description: "Customer relationship management tools to grow and retain your client base.",
  },
  {
    icon: Calendar,
    title: "Booking & Reservation",
    description: "Online booking platforms for appointments, events, and service scheduling.",
  },
  {
    icon: Globe,
    title: "Company Website",
    description: "Professional, fast-loading websites that represent your brand and convert visitors.",
  },
  {
    icon: Warehouse,
    title: "ERP System",
    description: "Integrated enterprise resource planning to streamline operations across departments.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Tools",
    description: "Campaign management, email automation, and analytics to grow your audience.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Digital solutions we deliver
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From POS systems to AI-powered apps — we build the right solution
            for your business, whatever the industry.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="card p-6 rounded-2xl group cursor-default flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors duration-200">
                  <Icon size={22} className="text-green-600" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-green-700 transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
