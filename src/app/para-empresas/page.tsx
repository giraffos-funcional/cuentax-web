"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  User,
  Users,
  ShoppingCart,
  Briefcase,
  Eye,
  ShieldCheck,
  TrendingUp,
  Clock,
  Smile,
  Calculator,
  FileText,
  BarChart3,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const SEGMENTS = [
  {
    icon: User,
    title: "Microempresa (1-5 empleados)",
    description:
      "Recien partiendo o con un equipo pequeno. Necesitas facturar, pagar sueldos y cumplir con el SII sin complicarte la vida.",
    plan: "Starter",
    price: "Desde 0,99 UF/mes",
    features: [
      "Facturacion electronica certificada",
      "Hasta 5 liquidaciones de sueldo",
      "Declaracion F29 simplificada",
      "Libro de compras y ventas automatico",
    ],
  },
  {
    icon: Users,
    title: "PYME (6-50 empleados)",
    description:
      "Tu empresa esta creciendo y necesitas herramientas mas robustas. Contabilidad completa, remuneraciones y visibilidad financiera.",
    plan: "Pro / Business",
    price: "Desde 1,99 UF/mes",
    features: [
      "Contabilidad completa con plan de cuentas",
      "Remuneraciones ilimitadas + Previred",
      "Conciliacion bancaria automatica",
      "Reportes financieros avanzados",
      "Multi-usuario y multi-empresa",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Vendes online y necesitas facturar en volumen. Boletas y facturas electronicas, integracion con plataformas de venta.",
    plan: "Pro",
    price: "Desde 1,99 UF/mes",
    features: [
      "DTE en volumen (hasta 200/mes)",
      "Boletas y facturas electronicas",
      "Reportes de ventas por canal",
      "Integraciones (proximamente)",
    ],
  },
  {
    icon: Briefcase,
    title: "Servicios profesionales",
    description:
      "Consultores, abogados, ingenieros, disenadores. Necesitas facturar por servicios, llevar contabilidad y pagar sueldos.",
    plan: "Pro",
    price: "Desde 1,99 UF/mes",
    features: [
      "Facturacion por servicios simplificada",
      "Contabilidad honorarios + IVA",
      "Control de gastos por proyecto",
      "Reportes de rentabilidad",
    ],
  },
];

const BENEFITS = [
  {
    icon: Eye,
    title: "Visibilidad total de tus finanzas",
    description:
      "Dashboard en tiempo real con los numeros que importan: ingresos, gastos, flujo de caja, cuentas por cobrar.",
  },
  {
    icon: Smile,
    title: "Menos estres contable",
    description:
      "Automatiza las tareas repetitivas y dedicale tu energia a hacer crecer tu negocio, no a cuadrar planillas.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento SII garantizado",
    description:
      "Certificado por el SII. Declaraciones correctas, a tiempo, todos los meses. Sin multas ni sorpresas.",
  },
  {
    icon: Clock,
    title: "Ahorra 20+ horas al mes",
    description:
      "Lo que antes te tomaba dias ahora toma minutos. Facturacion, remuneraciones, declaraciones, todo automatizado.",
  },
  {
    icon: TrendingUp,
    title: "Decisiones basadas en datos",
    description:
      "Reportes financieros claros y accionables. Sabe exactamente como va tu negocio sin esperar al cierre de mes.",
  },
  {
    icon: Calculator,
    title: "Tu contador te va a querer mas",
    description:
      "CuentaX genera toda la informacion que tu contador necesita. Se acabo perseguir facturas y enviar archivos.",
  },
];

export default function ParaEmpresasPage() {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Para duenos de empresa
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Deja de preocuparte por la contabilidad.{" "}
              <span className="gradient-text-light">Nosotros nos encargamos.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
            >
              Contabilidad, remuneraciones y facturacion electronica en una sola plataforma.
              Simple, certificada por el SII y pensada para PYMEs chilenas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/registro"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:-translate-y-0.5"
              >
                Prueba gratis 14 dias
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                Ver demo en vivo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Un plan para cada tipo de empresa
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              No importa tu tamano o rubro, CuentaX se adapta a tu negocio
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SEGMENTS.map((segment, i) => (
              <ScrollReveal key={segment.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-surface-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <segment.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-surface-900">{segment.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary-600">{segment.plan}</span>
                        <span className="text-xs text-surface-400">|</span>
                        <span className="text-xs text-surface-500">{segment.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-surface-500">{segment.description}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {segment.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-surface-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Lo que ganas con CuentaX
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-surface-200 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-surface-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-500">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Precios simples y transparentes
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              Desde 0,99 UF/mes (~$38.000 CLP). Sin costos ocultos.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { name: "Starter", price: "0,99", desc: "Hasta 5 empleados", href: "/precios" },
              { name: "Pro", price: "1,99", desc: "Hasta 20 empleados", href: "/precios", highlight: true },
              { name: "Business", price: "3,49", desc: "Hasta 50 empleados", href: "/precios" },
            ].map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <Link
                  href={plan.href}
                  className={`block rounded-2xl border p-8 text-center transition-all duration-300 hover:shadow-lg ${
                    plan.highlight
                      ? "border-primary-500/30 bg-white shadow-lg ring-2 ring-primary-500/10"
                      : "border-surface-200 bg-white shadow-sm"
                  }`}
                >
                  {plan.highlight && (
                    <span className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-600">
                      Popular
                    </span>
                  )}
                  <p className="text-lg font-bold text-surface-900">{plan.name}</p>
                  <p className="mt-2 text-3xl font-bold gradient-text">{plan.price}</p>
                  <p className="mt-1 text-sm text-surface-400">UF/mes</p>
                  <p className="mt-3 text-sm text-surface-500">{plan.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500"
            >
              Ver comparacion completa de planes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empieza hoy. Tus primeros 14 dias son gratis.
            </h2>
            <p className="mt-4 text-lg text-blue-100/70">
              Sin tarjeta de credito. Sin contratos. Sin sorpresas.
            </p>
            <div className="mt-10">
              <Link
                href="/registro"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:-translate-y-0.5"
              >
                Prueba gratis 14 dias
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
