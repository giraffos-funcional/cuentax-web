"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeatureHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function FeatureHero({
  title,
  subtitle,
  badge,
  ctaText = "Prueba gratis por 14 dias",
  ctaHref = "#",
  className,
}: FeatureHeroProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] py-24 sm:py-32 lg:py-40",
        className
      )}
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/8 blur-[80px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {badge}
            </motion.div>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            {title}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/funcionalidades"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25"
            >
              Ver todas las funcionalidades
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
