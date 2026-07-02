"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProcessTimeline } from "@/components/ProcessTimeline";

interface Solution {
  title: string;
  description: string;
  image: string;
}

const solutions: Solution[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online stores with product management, payments, and order tracking.",
    image: "/solutions/ecommerce.jpg",
  },
  {
    title: "Mobile Application",
    description:
      "Native and cross-platform iOS & Android apps built for performance and scale.",
    image: "/solutions/mobile-app.jpg",
  },
  {
    title: "POS System",
    description:
      "Point-of-sale systems for retail and restaurants with inventory and reporting.",
    image: "/solutions/pos-system.jpg",
  },
  {
    title: "Web Application",
    description:
      "Custom web platforms, dashboards, and internal tools tailored to your business.",
    image: "/solutions/web-application.jpg",
  },
  {
    title: "AI & Chatbot Solution",
    description:
      "Intelligent chatbots and AI assistants that automate customer support and sales.",
    image: "/solutions/ai-chatbot.jpg",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data dashboards that turn your business data into actionable insights.",
    image: "/solutions/analytics-dashboard.jpg",
  },
  {
    title: "Inventory Management",
    description:
      "Smart inventory systems with real-time stock tracking and automated reordering.",
    image: "/solutions/inventory-management.jpg",
  },
  {
    title: "CRM System",
    description:
      "Customer relationship management tools to grow and retain your client base.",
    image: "/solutions/crm-system.jpg",
  },
  {
    title: "Booking & Reservation",
    description:
      "Online booking platforms for appointments, events, and service scheduling.",
    image: "/solutions/booking-reservation.jpg",
  },
  {
    title: "Company Website",
    description:
      "Professional, fast-loading websites that represent your brand and convert visitors.",
    image: "/solutions/company-website.jpg",
  },
  {
    title: "ERP System",
    description:
      "Integrated enterprise resource planning to streamline operations across departments.",
    image: "/solutions/erp-system.jpg",
  },
  {
    title: "Digital Marketing Tools",
    description:
      "Campaign management, email automation, and analytics to grow your audience.",
    image: "/solutions/digital-marketing.jpg",
  },
];

const track = [...solutions, ...solutions];

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="group card w-[300px] sm:w-[340px] shrink-0 rounded-2xl overflow-hidden cursor-default flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="340px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 font-semibold text-white text-base leading-snug drop-shadow-sm">
          {solution.title}
        </h3>
      </div>

      <div className="p-4">
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {solution.description}
        </p>
      </div>
    </article>
  );
}

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative w-full bg-slate-50 overflow-x-hidden py-16 lg:py-20"
    >
      <div className="flex flex-col gap-14 lg:gap-16">
        {/* Solutions */}
        <div>
          <div className="container-forge">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-3">
                Digital solutions we deliver
              </h2>
              <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
                From POS systems to AI-powered apps — we build the right solution
                for your business, whatever the industry.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            <div className="solutions-marquee-track pl-6">
              {track.map((solution, i) => (
                <SolutionCard key={`${solution.title}-${i}`} solution={solution} />
              ))}
            </div>
          </div>
        </div>

        <div className="container-forge">
          <div className="h-px bg-slate-200" />
        </div>

        <ProcessTimeline />
      </div>
    </section>
  );
}
