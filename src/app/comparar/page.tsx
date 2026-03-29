"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calculator, FileSpreadsheet, Users, ShoppingCart, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const COMPARISONS = [
  {
    slug: "cuentax-vs-nubox",
    title: "CuentaX vs Nubox",
    description: "Contabilidad mas moderna, intuitiva y con mejor precio. Descubre por que las PYMEs estan migrando.",
    icon: Calculator,
    color: "blue",
  },
  {
    slug: "cuentax-vs-defontana",
    title: "CuentaX vs Defontana",
    description: "La misma potencia a la mitad del precio. Sin la complejidad que no necesitas.",
    icon: BarChart3,
    color: "violet",
  },
  {
    slug: "cuentax-vs-bsale",
    title: "CuentaX vs Bsale",
    description: "Bsale es bueno para ventas, pero no tiene contabilidad ni remuneraciones. CuentaX lo hace todo.",
    icon: ShoppingCart,
    color: "emerald",
  },
  {
    slug: "cuentax-vs-buk",
    title: "CuentaX vs BUK",
    description: "BUK solo hace RRHH. CuentaX hace remuneraciones Y contabilidad en una sola plataforma.",
    icon: Users,
    color: "amber",
  },
  {
    slug: "cuentax-vs-excel",
    title: "CuentaX vs Excel",
    description: "Deja las planillas atras. Automatiza tu contabilidad y evita multas del SII.",
    icon: FileSpreadsheet,
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "hover:border-blue-200" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "hover:border-violet-200" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "hover:border-emerald-200" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "hover:border-amber-200" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "hover:border-green-200" },
};

export default function CompararPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compara CuentaX con la{" "}
              <span className="gradient-text-light">competencia</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
            >
              Analisis detallado y honesto contra las alternativas mas populares en Chile.
              Que tu decidas con informacion real.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARISONS.map((comp, i) => {
              const colors = colorMap[comp.color] ?? colorMap.blue;
              return (
                <ScrollReveal key={comp.slug} delay={i * 0.08}>
                  <Link
                    href={`/comparar/${comp.slug}`}
                    className={`group flex flex-col rounded-2xl border border-surface-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 ${colors.border}`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                      <comp.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-surface-900">
                      {comp.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-500">
                      {comp.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-500">
                      Ver comparacion completa
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Convencete tu mismo
            </h2>
            <p className="mt-4 text-lg text-blue-100/70">
              Prueba CuentaX gratis durante 14 dias y compara en vivo.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/registro"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:-translate-y-0.5"
              >
                Empezar prueba gratis
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
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
