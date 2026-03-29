"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: FeatureItem[];
  icon: LucideIcon;
  imagePosition?: "left" | "right";
  accentColor?: string;
  className?: string;
}

export function FeatureSection({
  title,
  description,
  features,
  icon: Icon,
  imagePosition = "right",
  accentColor = "blue",
  className,
}: FeatureSectionProps) {
  const colorMap: Record<string, { bg: string; text: string; ring: string; dot: string; mockBg: string }> = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      ring: "ring-blue-100",
      dot: "bg-blue-500",
      mockBg: "from-blue-50 to-indigo-50",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      ring: "ring-emerald-100",
      dot: "bg-emerald-500",
      mockBg: "from-emerald-50 to-teal-50",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      ring: "ring-violet-100",
      dot: "bg-violet-500",
      mockBg: "from-violet-50 to-purple-50",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      ring: "ring-amber-100",
      dot: "bg-amber-500",
      mockBg: "from-amber-50 to-yellow-50",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      ring: "ring-rose-100",
      dot: "bg-rose-500",
      mockBg: "from-rose-50 to-pink-50",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      ring: "ring-cyan-100",
      dot: "bg-cyan-500",
      mockBg: "from-cyan-50 to-sky-50",
    },
  };

  const colors = colorMap[accentColor] ?? colorMap.blue;

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "right" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-center"
    >
      <div
        className={clsx(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1",
          colors.bg,
          colors.text,
          colors.ring
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-gray-600">{description}</p>

      <ul className="mt-8 space-y-4">
        {features.map((feature, i) => (
          <motion.li
            key={feature.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="flex gap-3"
          >
            <span
              className={clsx(
                "mt-2 h-2 w-2 shrink-0 rounded-full",
                colors.dot
              )}
            />
            <div>
              <span className="font-semibold text-gray-900">
                {feature.title}
              </span>
              <span className="text-gray-600"> - {feature.description}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  const mockupContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-center"
    >
      <div
        className={clsx(
          "relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200/60 bg-gradient-to-br shadow-xl shadow-gray-900/5",
          colors.mockBg
        )}
      >
        {/* Fake app chrome */}
        <div className="flex items-center gap-1.5 border-b border-gray-200/50 bg-white/60 px-4 py-3 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-gray-200/50" />
        </div>
        {/* Placeholder content lines */}
        <div className="space-y-3 p-6">
          <div className="h-5 w-3/4 rounded bg-gray-300/40" />
          <div className="h-4 w-1/2 rounded bg-gray-300/30" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-20 rounded-lg bg-white/50 shadow-sm" />
            <div className="h-20 rounded-lg bg-white/50 shadow-sm" />
            <div className="h-20 rounded-lg bg-white/50 shadow-sm" />
          </div>
          <div className="mt-2 h-32 rounded-lg bg-white/50 shadow-sm" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-lg bg-white/50 shadow-sm" />
            <div className="h-16 rounded-lg bg-white/50 shadow-sm" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={clsx("py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {imagePosition === "right" ? (
            <>
              {textContent}
              {mockupContent}
            </>
          ) : (
            <>
              {mockupContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
