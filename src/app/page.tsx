"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Receipt,
  FileText,
  BookMarked,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
  Users,
  Lock,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  MousePointerClick,
} from "lucide-react";
import clsx from "clsx";

/* ─── Animation Helpers ─── */

function AnimateOnScroll({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ─── Data ─── */

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Certificado SII" },
  { icon: Users, label: "+200 PYMEs" },
  { icon: Lock, label: "Datos seguros" },
];

const PROBLEMS = [
  {
    question: "Cansado de Excel?",
    answer: "Contabilidad automatizada",
    description:
      "Olvida las planillas. Tu contabilidad se actualiza sola con cada movimiento, sin errores humanos.",
    icon: Sparkles,
  },
  {
    question: "Las liquidaciones te quitan el sueno?",
    answer: "Remuneraciones en 3 clicks",
    description:
      "Calcula sueldos, imposiciones y descuentos legales automaticamente. AFP, Isapre, todo listo.",
    icon: Zap,
  },
  {
    question: "El SII te complica?",
    answer: "Facturacion electronica certificada",
    description:
      "Emite facturas, boletas y notas de credito directo al SII. Sin intermediarios, sin complicaciones.",
    icon: MousePointerClick,
  },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "Contabilidad Completa",
    description:
      "Plan de cuentas chileno, asientos automaticos, balance y estado de resultados en tiempo real.",
  },
  {
    icon: Receipt,
    title: "Liquidaciones de Sueldo",
    description:
      "Calculo automatico de AFP, salud, seguro cesantia, impuesto unico y gratificacion legal.",
  },
  {
    icon: FileText,
    title: "Facturacion Electronica SII",
    description:
      "Facturas, boletas, notas de credito y debito. Envio directo al SII con acuse de recibo.",
  },
  {
    icon: BookMarked,
    title: "Libro de Compras y Ventas",
    description:
      "Generacion automatica de IECV. Sincronizacion con el registro de compras y ventas del SII.",
  },
  {
    icon: ClipboardCheck,
    title: "F29 y Declaraciones",
    description:
      "Propuesta de F29 generada automaticamente. Revision y envio al SII desde la plataforma.",
  },
  {
    icon: BarChart3,
    title: "Reportes Financieros",
    description:
      "Dashboard con metricas clave. Balance, estado de resultados, flujo de caja y KPIs en un vistazo.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Crea tu cuenta",
    description: "Registrate en 2 minutos con tu RUT y datos basicos. Sin papeleo.",
  },
  {
    number: "2",
    title: "Conecta con el SII",
    description: "Vincula tu certificado digital y empieza a operar al instante.",
  },
  {
    number: "3",
    title: "Gestiona todo en un lugar",
    description: "Contabilidad, remuneraciones y facturacion. Todo desde un solo dashboard.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Antes pasaba dos dias armando liquidaciones en Excel. Ahora las tengo listas en 10 minutos.",
    name: "Carolina Munoz",
    company: "Panaderia El Trigal",
    role: "Socia fundadora",
  },
  {
    quote:
      "Por fin una plataforma que entiende como funciona la contabilidad en Chile. El F29 se arma solo.",
    name: "Felipe Araya",
    company: "Araya & Asociados",
    role: "Contador Auditor",
  },
  {
    quote:
      "Mis clientes pueden ver sus numeros en tiempo real. Eso cambio la confianza en mi trabajo.",
    name: "Valentina Riquelme",
    company: "VR Contadores",
    role: "Contadora independiente",
  },
];

const METRICS = [
  { value: "500+", label: "Facturas emitidas" },
  { value: "200+", label: "Liquidaciones al mes" },
  { value: "50+", label: "Empresas activas" },
];

const PRICING_PREVIEW = [
  {
    name: "Starter",
    price: "0,99",
    features: ["Hasta 5 trabajadores", "Facturacion electronica", "Contabilidad basica"],
  },
  {
    name: "Profesional",
    price: "2,49",
    popular: true,
    features: ["Hasta 20 trabajadores", "Todo en Starter", "Remuneraciones completas", "F29 automatico"],
  },
  {
    name: "Empresa",
    price: "4,99",
    features: ["Trabajadores ilimitados", "Todo en Profesional", "Multi-empresa", "API acceso"],
  },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <AnimateOnScroll>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">
                  Nuevo: Declaracion F29 automatica
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                La contabilidad de tu PYME,{" "}
                <span className="gradient-text">resuelta.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-600 sm:text-xl">
                Contabilidad, remuneraciones y facturacion electronica SII. Todo en una
                plataforma que de verdad es facil de usar.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://cuentax.giraffos.com"
                  className="magnetic inline-flex items-center gap-2 rounded-2xl bg-accent-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
                >
                  Prueba gratis 14 dias
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="/demo"
                  className="magnetic inline-flex items-center gap-2 rounded-2xl border-2 border-surface-300 px-8 py-4 text-base font-semibold text-surface-700 transition-all hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50"
                >
                  Ver demo
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Trust badges */}
            <AnimateOnScroll delay={0.4}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                {TRUST_BADGES.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-surface-500"
                  >
                    <badge.icon className="h-5 w-5 text-accent-600" />
                    <span className="font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Dashboard mockup */}
          <AnimateOnScroll delay={0.5} className="mt-16 lg:mt-20">
            <div className="mx-auto max-w-5xl">
              <div className="relative rounded-2xl border border-surface-200 bg-white p-2 shadow-2xl shadow-primary-500/10">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 rounded-t-xl bg-surface-100 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-surface-300" />
                    <div className="h-3 w-3 rounded-full bg-surface-300" />
                    <div className="h-3 w-3 rounded-full bg-surface-300" />
                  </div>
                  <div className="ml-4 flex-1 rounded-md bg-surface-200 px-3 py-1">
                    <span className="text-xs text-surface-400">app.cuentax.cl/dashboard</span>
                  </div>
                </div>
                {/* Placeholder dashboard */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-b-xl bg-gradient-to-br from-primary-50 via-white to-accent-50">
                  {/* Simulated dashboard UI */}
                  <div className="absolute inset-0 p-6 lg:p-8">
                    {/* Top metrics row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Ingresos del mes", value: "$12.450.000", color: "from-primary-500 to-primary-600" },
                        { label: "Facturas emitidas", value: "47", color: "from-accent-500 to-accent-600" },
                        { label: "Liquidaciones", value: "12", color: "from-primary-400 to-primary-500" },
                      ].map((metric) => (
                        <div key={metric.label} className="rounded-xl bg-white p-4 shadow-sm border border-surface-100">
                          <p className="text-xs text-surface-400 mb-1">{metric.label}</p>
                          <p className="text-lg font-bold text-surface-900">{metric.value}</p>
                          <div className={`mt-2 h-1.5 w-3/4 rounded-full bg-gradient-to-r ${metric.color} opacity-60`} />
                        </div>
                      ))}
                    </div>
                    {/* Chart placeholder */}
                    <div className="flex gap-4 h-[calc(100%-7rem)]">
                      <div className="flex-1 rounded-xl bg-white p-4 shadow-sm border border-surface-100">
                        <p className="text-xs text-surface-400 mb-4">Ingresos vs Gastos</p>
                        <div className="flex items-end gap-2 h-[60%]">
                          {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                              <div
                                className="w-full rounded-t bg-gradient-to-t from-primary-500 to-primary-400 opacity-80"
                                style={{ height: `${h}%` }}
                              />
                              <div
                                className="w-full rounded-t bg-gradient-to-t from-surface-300 to-surface-200"
                                style={{ height: `${h * 0.6}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="hidden lg:block w-64 rounded-xl bg-white p-4 shadow-sm border border-surface-100">
                        <p className="text-xs text-surface-400 mb-3">Actividad reciente</p>
                        <div className="space-y-3">
                          {[
                            "Factura #1247 emitida",
                            "Liquidacion marzo lista",
                            "Pago proveedor registrado",
                            "F29 febrero enviado",
                          ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-accent-400" />
                              <span className="text-xs text-surface-500 truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 blur-2xl" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ Problem / Solution ═══ */}
      <section className="section-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
              Tu contabilidad no deberia ser un <span className="gradient-text">dolor de cabeza</span>
            </h2>
            <p className="mt-4 text-lg text-surface-600">
              Sabemos lo que enfrentas. Por eso creamos CuentaX.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {PROBLEMS.map((problem) => (
              <motion.div
                key={problem.question}
                variants={staggerChild}
                className="card-hover group relative rounded-2xl border border-surface-200 bg-white p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <problem.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-surface-400">
                  {problem.question}
                </p>
                <h3 className="mt-2 text-xl font-bold text-surface-900">
                  {problem.answer}
                </h3>
                <p className="mt-3 text-surface-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ Features Grid ═══ */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
              Todo lo que necesitas, <span className="gradient-text">nada que no</span>
            </h2>
            <p className="mt-4 text-lg text-surface-600">
              Disenado para PYMEs chilenas. Cada funcion pensada para tu realidad.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerChild}
                className="card-hover group rounded-2xl border border-surface-200 bg-white p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary-500/25">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-surface-900">{feature.title}</h3>
                <p className="mt-2 text-surface-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="section-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
              Empieza en <span className="gradient-text">3 pasos</span>
            </h2>
            <p className="mt-4 text-lg text-surface-600">
              Sin configuraciones complicadas. Sin curva de aprendizaje.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="mt-16">
            <div className="relative grid gap-8 md:grid-cols-3">
              {/* Connecting line */}
              <div className="absolute top-14 left-[16.66%] right-[16.66%] hidden h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 md:block" />

              {STEPS.map((step) => (
                <motion.div
                  key={step.number}
                  variants={staggerChild}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-xl font-bold text-white shadow-xl shadow-primary-500/25">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-surface-900">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-surface-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ Social Proof ═══ */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
              Lo que dicen nuestros <span className="gradient-text">clientes</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerChild}
                className="card-hover rounded-2xl border border-surface-200 bg-white p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-surface-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">{t.name}</p>
                    <p className="text-xs text-surface-500">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Metrics */}
          <AnimateOnScroll className="mt-16">
            <div className="grid grid-cols-3 divide-x divide-surface-200 rounded-2xl border border-surface-200 bg-white">
              {METRICS.map((m) => (
                <div key={m.label} className="px-4 py-8 text-center sm:px-8">
                  <p className="text-3xl font-extrabold gradient-text sm:text-4xl">{m.value}</p>
                  <p className="mt-1 text-sm text-surface-500">{m.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ Pricing Teaser ═══ */}
      <section className="section-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
              Planes simples, <span className="gradient-text">precio justo</span>
            </h2>
            <p className="mt-4 text-lg text-surface-600">
              Desde 0,99 UF/mes. Sin contratos, sin letra chica.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {PRICING_PREVIEW.map((plan) => (
              <motion.div
                key={plan.name}
                variants={staggerChild}
                className={clsx(
                  "card-hover relative rounded-2xl border p-8",
                  plan.popular
                    ? "border-primary-300 bg-white ring-2 ring-primary-500/20 shadow-xl shadow-primary-500/10"
                    : "border-surface-200 bg-white"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-white">
                    Mas popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-surface-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-surface-900">{plan.price}</span>
                  <span className="text-sm text-surface-500">UF/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-surface-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/precios"
                  className={clsx(
                    "mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all",
                    plan.popular
                      ? "bg-accent-600 text-white shadow-lg shadow-accent-600/25 hover:bg-accent-500"
                      : "border border-surface-300 text-surface-700 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50"
                  )}
                >
                  Empezar ahora
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="mt-10 text-center">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Ver todos los planes en detalle
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="section-dark relative overflow-hidden py-24 lg:py-32">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Empieza hoy. Tu primera factura en{" "}
              <span className="gradient-text-light">5 minutos.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-surface-400">
              Unete a mas de 50 PYMEs que ya simplificaron su contabilidad con CuentaX.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="tu@empresa.cl"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-surface-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
              <button
                type="submit"
                className="magnetic rounded-xl bg-accent-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
              >
                Crear cuenta gratis
              </button>
            </form>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="mt-5 text-sm text-surface-500">
              Sin tarjeta de credito &middot; 14 dias gratis &middot; Cancela cuando quieras
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
