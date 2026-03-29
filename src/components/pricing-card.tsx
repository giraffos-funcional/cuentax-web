"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  priceAnnual?: string;
  priceCLP: string;
  priceCLPAnnual?: string;
  unit?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
  isAnnual?: boolean;
  badge?: string;
  delay?: number;
}

export function PricingCard({
  name,
  price,
  priceAnnual,
  priceCLP,
  priceCLPAnnual,
  unit = "/mes",
  features,
  highlighted = false,
  ctaText = "Empezar gratis",
  ctaHref = "/registro",
  isAnnual = false,
  badge,
  delay = 0,
}: PricingCardProps) {
  const displayPrice = isAnnual && priceAnnual ? priceAnnual : price;
  const displayCLP = isAnnual && priceCLPAnnual ? priceCLPAnnual : priceCLP;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
        highlighted
          ? "border-primary-500/30 bg-white shadow-xl shadow-primary-500/10 ring-2 ring-primary-500/20 scale-[1.02] lg:scale-105"
          : "border-surface-200 bg-white shadow-lg shadow-surface-900/5 hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-200"
      )}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary-600/30">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-surface-900">{name}</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={clsx(
            "text-4xl font-bold tracking-tight",
            highlighted ? "gradient-text" : "text-surface-900"
          )}>
            {displayPrice}
          </span>
          <span className="text-sm font-medium text-surface-500"> UF{unit}</span>
        </div>
        <p className="mt-1 text-sm text-surface-400">~{displayCLP} CLP{unit}</p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={clsx(
              "mt-0.5 h-4 w-4 shrink-0",
              highlighted ? "text-primary-500" : "text-accent-500"
            )} />
            <span className="text-sm text-surface-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={clsx(
          "magnetic block w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition-all duration-300",
          highlighted
            ? "bg-accent-600 text-white shadow-lg shadow-accent-600/25 hover:bg-accent-500 hover:shadow-accent-500/30"
            : "bg-surface-900 text-white hover:bg-surface-800"
        )}
      >
        {ctaText}
      </Link>
    </motion.div>
  );
}
