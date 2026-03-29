"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface CtaSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

const trustBadges = [
  { icon: Shield, label: "Certificado SII" },
  { icon: Clock, label: "14 dias gratis" },
  { icon: HeadphonesIcon, label: "Soporte humano" },
];

export function CtaSection({
  headline = "Simplifica la contabilidad de tu PYME hoy",
  subheadline = "Unete a cientos de empresas chilenas que ya gestionan su contabilidad, remuneraciones y facturacion electronica desde un solo lugar.",
  ctaText = "Comenzar gratis",
  ctaHref = "#",
  className,
}: CtaSectionProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] py-20 sm:py-28",
        className
      )}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/8 blur-[100px]" />
        <div className="absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-blue-400/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/60"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
          >
            {ctaText}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm text-blue-200/50"
            >
              <badge.icon className="h-4 w-4" />
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
