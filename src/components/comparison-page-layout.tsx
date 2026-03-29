"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ComparisonTable, type ComparisonRow } from "@/components/comparison-table";
import { ScrollReveal } from "@/components/scroll-reveal";

interface ComparisonPageLayoutProps {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge?: string;
  comparisonRows: ComparisonRow[];
  comparisonHeaders: string[];
  differentiators: { title: string; description: string }[];
  whySwitch: { title: string; points: string[] };
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  ctaButtonHref: string;
  pricingComparison?: {
    cuentax: string;
    competitor: string;
    competitorName: string;
  };
}

export function ComparisonPageLayout({
  heroTitle,
  heroSubtitle,
  heroBadge,
  comparisonRows,
  comparisonHeaders,
  differentiators,
  whySwitch,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaButtonHref,
  pricingComparison,
}: ComparisonPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        </div>
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
            {heroBadge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {heroBadge}
              </motion.div>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {heroTitle}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
            >
              {heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Comparacion funcionalidad por funcionalidad
            </h2>
          </ScrollReveal>
          <div className="mt-12 rounded-2xl border border-surface-200 bg-white p-2 shadow-sm">
            <ComparisonTable
              headers={comparisonHeaders}
              rows={comparisonRows}
              highlightColumn={1}
            />
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      {pricingComparison && (
        <section className="bg-surface-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
                Comparacion de precios
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <ScrollReveal delay={0}>
                <div className="rounded-2xl border-2 border-primary-500/30 bg-white p-8 shadow-lg ring-2 ring-primary-500/10">
                  <div className="mb-4 inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-600">
                    CuentaX
                  </div>
                  <p className="text-4xl font-bold gradient-text">{pricingComparison.cuentax}</p>
                  <p className="mt-2 text-sm text-surface-500">UF/mes desde</p>
                  <ul className="mt-6 space-y-2">
                    {["Todo incluido", "Sin costos ocultos", "Migracion gratis"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-surface-600">
                        <Check className="h-4 w-4 text-accent-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-surface-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex items-center rounded-full bg-surface-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-surface-500">
                    {pricingComparison.competitorName}
                  </div>
                  <p className="text-4xl font-bold text-surface-400">{pricingComparison.competitor}</p>
                  <p className="mt-2 text-sm text-surface-500">UF/mes desde</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Key Differentiators */}
      <section className={pricingComparison ? "py-16 sm:py-24" : "bg-surface-50 py-16 sm:py-24"}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Ventajas clave de CuentaX
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                  <h3 className="text-base font-bold text-surface-900">{diff.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-500">{diff.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="section-dark py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {whySwitch.title}
            </h2>
            <div className="mt-12 space-y-4">
              {whySwitch.points.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                  <span className="text-sm leading-relaxed text-blue-100/80">{point}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
              {ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-surface-500">{ctaSubtitle}</p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={ctaButtonHref}
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:-translate-y-0.5"
              >
                {ctaButtonText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center rounded-full border border-surface-300 px-8 py-4 text-sm font-semibold text-surface-700 transition-all duration-300 hover:bg-surface-50"
              >
                Ver precios
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
