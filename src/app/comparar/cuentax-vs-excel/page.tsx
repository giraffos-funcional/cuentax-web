"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Clock,
  ShieldAlert,
  TrendingUp,
  Zap,
  FileSpreadsheet,
  Check,
  X,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ComparisonTable } from "@/components/comparison-table";

const COMPARISON_ROWS = [
  { feature: "Facturacion electronica SII", values: ["Automatica", "Manual (copiar y pegar)"] },
  { feature: "Libro de compras y ventas", values: ["Automatico", "Manual (propenso a errores)"] },
  { feature: "Declaracion F29", values: ["1 clic", "Calcular a mano"] },
  { feature: "Remuneraciones", values: ["Automatizadas", "Formulas complejas"] },
  { feature: "Previred", values: ["Automatico", "Exportar manualmente"] },
  { feature: "Conciliacion bancaria", values: ["Automatica", "Linea por linea"] },
  { feature: "Riesgo de errores", values: ["Minimo", "Alto"] },
  { feature: "Riesgo de multas SII", values: ["Bajo", "Alto"] },
  { feature: "Actualizacion de tablas", values: ["Automatica", "Tu responsabilidad"] },
  { feature: "Backup de datos", values: ["Automatico en la nube", "Tu responsabilidad"] },
  { feature: "Acceso desde cualquier lugar", values: ["yes", "Solo tu computador"] },
  { feature: "Multiples usuarios", values: ["yes", "Problemas de versiones"] },
];

const HORROR_STORIES = [
  {
    icon: AlertTriangle,
    title: "La formula que se rompio",
    description:
      "Un empleado borro una celda sin querer y las liquidaciones de sueldo de 3 meses estaban mal. Nadie se dio cuenta hasta que llego la fiscalizacion.",
  },
  {
    icon: ShieldAlert,
    title: "La multa del SII",
    description:
      "Una PYME declaraba su F29 con una planilla Excel. Un error de formula significo $2.8 millones en multas e intereses. El software cuesta menos que eso en 3 anos.",
  },
  {
    icon: Clock,
    title: "Las 40 horas mensuales",
    description:
      "Un contador dedicaba 40 horas al mes a ingresar datos en Excel. Con CuentaX automatizo el 80% y ahora usa ese tiempo para asesorar a sus clientes.",
  },
];

export default function CuentaxVsExcelPage() {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm"
            >
              <FileSpreadsheet className="h-4 w-4" />
              Es hora de evolucionar
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              CuentaX vs Excel:{" "}
              <span className="gradient-text-light">
                Deja las planillas atras
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
            >
              Excel fue tu primer software de contabilidad. Pero tu PYME crecio, y una planilla no deberia
              ser lo que te separa de una multa del SII.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Cost of Excel */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              El verdadero costo de usar Excel para tu contabilidad
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              Excel es gratis (o casi), pero los errores y el tiempo perdido cuestan mucho mas.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "+20 horas/mes",
                description: "Tiempo promedio que una PYME dedica a ingresar datos manualmente en Excel.",
                color: "text-amber-500 bg-amber-50",
              },
              {
                icon: AlertTriangle,
                title: "88% de planillas tienen errores",
                description: "Segun estudios, casi 9 de cada 10 planillas Excel contienen al menos un error.",
                color: "text-red-500 bg-red-50",
              },
              {
                icon: TrendingUp,
                title: "$38.000/mes",
                description: "Desde 0,99 UF puedes automatizar todo. Menos que lo que pierdes en un solo error.",
                color: "text-accent-500 bg-accent-50",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-surface-200 bg-white p-8 text-center shadow-sm">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}>
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-surface-900">{stat.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Horror Stories */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Historias reales de PYMEs que usaban Excel
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {HORROR_STORIES.map((story, i) => (
              <ScrollReveal key={story.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-surface-200 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <story.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-surface-900">{story.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-500">{story.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Excel vs CuentaX: Comparacion directa
            </h2>
          </ScrollReveal>
          <div className="mt-12 rounded-2xl border border-surface-200 bg-white p-2 shadow-sm">
            <ComparisonTable
              headers={["Tarea", "CuentaX", "Excel"]}
              rows={COMPARISON_ROWS}
              highlightColumn={1}
            />
          </div>
        </div>
      </section>

      {/* What you gain */}
      <section className="section-dark py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lo que ganas al dejar Excel
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Zap, title: "20+ horas libres al mes", desc: "Automatiza la entrada de datos y dedicale ese tiempo a hacer crecer tu negocio." },
                { icon: ShieldAlert, title: "Cero riesgo de multas", desc: "Declaraciones correctas, a tiempo, todos los meses. Sin errores de formula." },
                { icon: TrendingUp, title: "Visibilidad financiera real", desc: "Dashboard en tiempo real con tus numeros. No mas esperar a que el contador te mande un informe." },
                { icon: FileSpreadsheet, title: "Datos seguros en la nube", desc: "Backup automatico, acceso desde cualquier dispositivo, sin miedo a perder el archivo." },
              ].map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-600/20 text-accent-400">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-blue-100/60">{benefit.desc}</p>
                  </div>
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
              Evoluciona de Excel a CuentaX en un dia
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Importamos tus datos desde Excel gratis. Tu primer mes puede ser hoy.
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
