"use client";


const clients = [
  { name: "FinFlow", subtitle: "FinTech" },
  { name: "HealthBridge", subtitle: "Healthcare" },
  { name: "LogiCorp", subtitle: "Logistics" },
  { name: "DataSync", subtitle: "Analytics" },
  { name: "NovaTech", subtitle: "SaaS" },
  { name: "CloudBase", subtitle: "Infrastructure" },
  { name: "PulseAI", subtitle: "AI Research" },
  { name: "ScaleForge", subtitle: "E-Commerce" },
];

/* Duplicate for seamless infinite scroll */
const track = [...clients, ...clients];

export function Clients() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100 overflow-hidden">

      {/* Marquee */}
      <div className="relative">
        {/* Left/right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-2 mx-10 shrink-0 select-none"
            >
              {/* Dot separator */}
              <span className="w-2 h-2 rounded-full bg-green-300 shrink-0" />
              <div className="flex flex-col items-start">
                <span className="text-lg font-bold text-slate-400 tracking-tight leading-none">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider">
                  {client.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
