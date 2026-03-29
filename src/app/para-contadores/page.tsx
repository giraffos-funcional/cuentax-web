"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  Users,
  FileText,
  Bell,
  BarChart3,
  Shield,
  Percent,
  Laptop,
  CalendarCheck,
  Headphones,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FaqAccordion } from "@/components/faq-accordion";

const PAIN_POINTS = [
  {
    icon: Building2,
    title: "15 empresas en 5 plataformas",
    description:
      "Saltas entre Nubox, Defontana, Excel y el SII para gestionar tu cartera. Pierdes tiempo y ganas frustración.",
  },
  {
    icon: Clock,
    title: "Operacion Renta = fines de semana",
    description:
      "Cada abril es un infierno. Recopilando datos empresa por empresa, cruzando informacion, corrigiendo errores.",
  },
  {
    icon: Users,
    title: "Clientes que no mandan info a tiempo",
    description:
      "Les pides las facturas el dia 5 y te las mandan el dia 20. Vives persiguiendo informacion.",
  },
];

const SOLUTIONS = [
  {
    icon: Laptop,
    title: "Dashboard multi-empresa",
    description:
      "Todas tus empresas en un solo panel. Ve el estado de cada una al instante: declaraciones pendientes, saldos, alertas.",
  },
  {
    icon: CalendarCheck,
    title: "Operacion Renta automatizada",
    description:
      "CuentaX recopila los datos del ano automaticamente y genera la Operacion Renta con un clic. Abril ya no tiene que doler.",
  },
  {
    icon: Users,
    title: "Portal de clientes",
    description:
      "Tus clientes suben sus documentos directamente al portal. Tu recibes notificaciones y todo queda organizado.",
  },
  {
    icon: Bell,
    title: "Alertas automaticas",
    description:
      "Vencimientos, declaraciones pendientes, pagos atrasados. CuentaX te avisa antes de que sea un problema.",
  },
  {
    icon: FileText,
    title: "Reportes con tu marca",
    description:
      "Genera informes financieros profesionales con el logo y colores de tu estudio contable. Impresiona a tus clientes.",
  },
  {
    icon: BarChart3,
    title: "Analitica de tu cartera",
    description:
      "Ve metricas de toda tu cartera: ingresos por cliente, tiempo dedicado, rentabilidad por empresa.",
  },
];

const PARTNER_BENEFITS = [
  {
    icon: Percent,
    title: "15% comision recurrente",
    description: "Por cada cliente que refieras, recibes el 15% de su suscripcion mensual. Mientras siga activo, tu cobras.",
  },
  {
    icon: Shield,
    title: "Soporte dedicado",
    description: "Linea directa con nuestro equipo de soporte. Respuesta garantizada en menos de 2 horas.",
  },
  {
    icon: Headphones,
    title: "Capacitacion gratuita",
    description: "Acceso a capacitaciones exclusivas, webinars y materiales para que domines la plataforma.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Cuantas empresas puedo gestionar?",
    answer: "Con el plan Contador no hay limite de empresas. Puedes gestionar toda tu cartera desde un solo dashboard.",
  },
  {
    question: "Como funciona la comision del 15%?",
    answer: "Por cada cliente que refieras y se suscriba a CuentaX, recibes el 15% de su pago mensual como comision recurrente. Se paga mensualmente via transferencia bancaria.",
  },
  {
    question: "Puedo migrar clientes desde otros software?",
    answer: "Si, nuestro equipo te ayuda a migrar los datos de tus clientes desde cualquier plataforma (Nubox, Defontana, Excel) de forma gratuita.",
  },
  {
    question: "Mis clientes necesitan cuenta aparte?",
    answer: "No necesariamente. Tu puedes gestionar todo desde tu cuenta de contador. Si el cliente quiere acceso propio, puede tener su portal con permisos limitados.",
  },
  {
    question: "Que incluye el soporte dedicado?",
    answer: "Tienes acceso a un ejecutivo asignado, linea telefonica directa, chat prioritario y respuesta garantizada en menos de 2 horas habiles.",
  },
];

export default function ParaContadoresPage() {
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
              Para profesionales contables
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              El software que tu cartera de clientes necesita.{" "}
              <span className="gradient-text-light">Y tu tambien.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
            >
              Gestiona todas tus empresas desde un solo lugar. Automatiza la Operacion Renta.
              Gana un 15% de comision recurrente por cada cliente.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/demo?tipo=contador"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:-translate-y-0.5"
              >
                Agenda una demo para contadores
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                Ver plan Contador
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Te suena familiar?
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              Los dolores de cabeza que todo contador independiente conoce
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PAIN_POINTS.map((pain, i) => (
              <ScrollReveal key={pain.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <pain.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-surface-900">{pain.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600">{pain.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              CuentaX resuelve todo eso
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              Herramientas disenadas especificamente para contadores con multiples clientes
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((sol, i) => (
              <ScrollReveal key={sol.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-surface-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <sol.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-surface-900">{sol.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-500">{sol.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700">
                Programa de Partners
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
                Gana mientras ayudas a tus clientes
              </h2>
              <p className="mt-4 text-base text-surface-500">
                Unete a nuestro programa de partners y recibe comisiones recurrentes por cada cliente que refieras.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PARTNER_BENEFITS.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-accent-100 bg-accent-50/50 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-surface-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-surface-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Precio especial para contadores
            </h2>
            <div className="mt-8 rounded-2xl border-2 border-primary-500/20 bg-white p-10 shadow-lg ring-2 ring-primary-500/10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">Plan Contador</p>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold gradient-text">2,49</span>
                <span className="text-lg text-surface-500">UF/empresa/mes</span>
              </div>
              <p className="mt-2 text-sm text-surface-400">~$96.000 CLP/empresa/mes</p>
              <p className="mt-6 text-sm text-surface-500">
                Empresas ilimitadas. DTE ilimitados. Empleados ilimitados.
                Dashboard multi-cliente. Portal de clientes. Operacion Renta automatizada.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/demo?tipo=contador"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500"
                >
                  Agendar demo
                </Link>
                <Link
                  href="/precios"
                  className="inline-flex items-center justify-center rounded-full border border-surface-300 px-8 py-3.5 text-sm font-semibold text-surface-700 transition-all hover:bg-surface-50"
                >
                  Comparar planes
                </Link>
              </div>
            </div>
            <p className="mt-4 text-xs text-surface-400">Precio en UF + IVA. UF referencial: $38.400 CLP (marzo 2026).</p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Preguntas frecuentes para contadores
            </h2>
          </ScrollReveal>
          <div className="mt-12">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tu cartera de clientes merece un mejor software
            </h2>
            <p className="mt-4 text-lg text-blue-100/70">
              Agenda una demo personalizada y te mostramos como CuentaX puede transformar tu practica contable.
            </p>
            <div className="mt-10">
              <Link
                href="/demo?tipo=contador"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:-translate-y-0.5"
              >
                Agenda una demo para contadores
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
