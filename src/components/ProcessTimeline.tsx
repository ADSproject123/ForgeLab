"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive into your domain, data, and goals. We map constraints, define success metrics, and scope the architecture before writing a single line of code.",
    focus: "Research · Scoping · Architecture",
  },
  {
    number: "02",
    title: "Design",
    description:
      "System architecture, data modelling, and UX flows engineered for scale. We make hard decisions early so you don't pay for them in production.",
    focus: "System Design · UX · Data Modelling",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Rapid, iterative development with daily deliverables. Clean, tested, production-grade code — no prototypes dressed up as products.",
    focus: "Engineering · Testing · Integration",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "CI/CD pipelines, infrastructure provisioning, monitoring dashboards, and a smooth go-live. We stay on call during launch, not just during development.",
    focus: "CI/CD · Infrastructure · Observability",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Performance tuning, model retraining, feature expansion, and ongoing optimisation. We build long-term partnerships, not one-off deliverables.",
    focus: "Optimisation · Growth · Support",
  },
];

const EXP_K = 2.4;

function getPoint(i: number, total: number) {
  const t = i / (total - 1);
  const growth = (Math.exp(EXP_K * t) - 1) / (Math.exp(EXP_K) - 1);
  return {
    x: 10 + t * 80,
    y: 86 - growth * 72,
  };
}

function buildCurvePath(total: number) {
  return Array.from({ length: total }, (_, i) => getPoint(i, total)).reduce(
    (path, p, i) => `${path}${i === 0 ? "M" : " L"} ${p.x} ${p.y}`,
    "",
  );
}

function getRocketAngle(i: number, total: number) {
  const curr = getPoint(i, total);
  const next = getPoint(Math.min(i + 1, total - 1), total);
  const dx = next.x - curr.x;
  const dy = next.y - curr.y;
  return Math.atan2(dy, dx) * (180 / Math.PI) + 45;
}

function FlyingRocket({ isMoving, rotate }: { isMoving: boolean; rotate: number }) {
  return (
    <div className="relative">
      <motion.div
        animate={isMoving ? { y: [0, -3, 0] } : { y: 0 }}
        transition={{ duration: 0.3, repeat: isMoving ? Infinity : 0 }}
      >
        <motion.div
          animate={isMoving ? { rotate: [rotate - 4, rotate + 4, rotate - 4] } : { rotate }}
          transition={{ duration: 0.7, repeat: isMoving ? Infinity : 0 }}
        >
          <Rocket
            size={48}
            strokeWidth={2.25}
            className="text-green-600 drop-shadow-[0_6px_20px_rgba(92,184,0,0.55)]"
          />
        </motion.div>
      </motion.div>
      <motion.span
        className="absolute top-full left-1/2 mt-1 h-5 w-2 -translate-x-1/2 rounded-full bg-linear-to-b from-orange-500 to-yellow-300/80"
        animate={{ scaleY: [0.5, 1.3, 0.5], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.25, repeat: Infinity }}
      />
    </div>
  );
}

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-40px", amount: 0.15 });
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isRocketMoving, setIsRocketMoving] = useState(false);
  const prevStepRef = useRef(0);

  const currentStep = hoveredStep ?? activeStep;
  const activeData = steps[currentStep];
  const curvePath = useMemo(() => buildCurvePath(steps.length), []);
  const progressRatio = currentStep / (steps.length - 1);
  const rocketPos = getPoint(currentStep, steps.length);
  const rocketAngle = getRocketAngle(currentStep, steps.length);

  useEffect(() => {
    if (!isInView || hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView, hoveredStep]);

  useEffect(() => {
    if (prevStepRef.current !== currentStep) {
      setIsRocketMoving(true);
      prevStepRef.current = currentStep;
      const timeout = setTimeout(() => setIsRocketMoving(false), 900);
      return () => clearTimeout(timeout);
    }
  }, [currentStep]);

  return (
    <div id="process" ref={sectionRef} className="container-forge py-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          {/* Graph */}
          <div className="relative w-full lg:flex-[1.4] min-w-0 aspect-[5/3] min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] rounded-3xl border border-slate-200 bg-white shadow-md">
            <div
              className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(226 232 240 / 0.8) 1px, transparent 1px), linear-gradient(to top, rgb(226 232 240 / 0.8) 1px, transparent 1px)",
                backgroundSize: "10% 14%",
              }}
            />

            <span className="absolute left-6 bottom-5 text-xs font-semibold uppercase tracking-widest text-slate-400 z-10">
              Time
            </span>
            <span className="absolute left-6 top-5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-700 z-10">
              Exponential Growth
            </span>

            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d={curvePath} fill="none" stroke="rgb(226 232 240)" strokeWidth="0.7" />
              <motion.path
                d={curvePath}
                fill="none"
                stroke="url(#growthGradient)"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progressRatio }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3a7d00" />
                  <stop offset="100%" stopColor="#7ed800" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              className="absolute z-30 pointer-events-none"
              style={{ marginTop: -64 }}
              animate={{
                left: `${rocketPos.x}%`,
                top: `${rocketPos.y}%`,
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <FlyingRocket isMoving={isRocketMoving} rotate={rocketAngle} />
              </div>
            </motion.div>

            {steps.map((step, i) => {
              const pos = getPoint(i, steps.length);
              const isActive = i === currentStep;
              const isComplete = i < currentStep;
              const labelAbove = i >= 3;

              return (
                <button
                  key={step.number}
                  type="button"
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-transparent border-0 p-0"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(i)}
                  aria-label={step.title}
                >
                  <div
                    className={`flex flex-col items-center gap-2 sm:gap-2.5 ${labelAbove ? "flex-col-reverse" : ""}`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[2.5px] flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300
                        ${isActive
                          ? "bg-green-600 border-green-600 text-white scale-110 shadow-[0_0_0_8px_rgba(92,184,0,0.22)]"
                          : isComplete
                            ? "bg-green-600 border-green-600 text-white"
                            : "bg-white border-slate-200 text-slate-500"
                        }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`text-sm sm:text-base font-semibold whitespace-nowrap px-1 ${
                        isActive ? "text-green-700" : "text-slate-600"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step detail — right side */}
          <div className="w-full lg:flex-1 flex flex-col min-w-0">
            <div className="flex flex-col gap-2 mb-5">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`text-left px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                    i === currentStep
                      ? "border-green-300 bg-green-50"
                      : "border-transparent bg-transparent hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      i === currentStep ? "text-green-700" : "text-slate-500"
                    }`}
                  >
                    {step.number} — {step.title}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.number}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex-1 rounded-2xl border border-green-200 bg-linear-to-br from-green-50/80 to-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {activeData.number}
                  </span>
                  <h3 className="font-bold text-xl sm:text-2xl text-slate-900">
                    {activeData.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {activeData.description}
                </p>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-green-700 border-t border-green-100 pt-4">
                  {activeData.focus}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
