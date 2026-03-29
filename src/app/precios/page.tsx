"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  CreditCard,
  Clock,
  Truck,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import clsx from "clsx";
import { PricingToggle } from "@/components/pricing-toggle";
import { PricingCard } from "@/components/pricing-card";
import { ComparisonTable } from "@/components/comparison-table";
import { FaqAccordion } from "@/components/faq-accordion";
import { ScrollReveal } from "@/components/scroll-reveal";

const PLANS = [
  {
    name: "Starter",
    price: "0,99",
    priceAnnual: "0,79",
    priceCLP: "$38.000",
    priceCLPAnnual: "$30.400",
    features: [
      "Hasta 5 empleados",
      "50 DTE por mes",
      "Contabilidad basica",
      "5 liquidaciones de sueldo",
      "Soporte por email",
      "Libro de compras y ventas",
      "Declaracion F29 simplificada",
    ],
    ctaText: "Empezar gratis",
    ctaHref: "/registro?plan=starter",
  },
  {
    name: "Pro",
    price: "1,99",
    priceAnnual: "1,59",
    priceCLP: "$76.000",
    priceCLPAnnual: "$61.000",
    features: [
      "Hasta 20 empleados",
      "200 DTE por mes",
      "Contabilidad completa",
      "Remuneraciones completas",
      "Soporte chat + email",
      "Reportes financieros avanzados",
      "Conciliacion bancaria",
      "Multi-usuario (3 usuarios)",
    ],
    highlighted: true,
    badge: "Recomendado",
    ctaText: "Empezar gratis",
    ctaHref: "/registro?plan=pro",
  },
  {
    name: "Business",
    price: "3,49",
    priceAnnual: "2,79",
    priceCLP: "$134.000",
    priceCLPAnnual: "$107.000",
    features: [
      "Hasta 50 empleados",
      "DTE ilimitados",
      "Contabilidad completa + multi-empresa",
      "Remuneraciones + Previred",
      "Soporte prioritario + telefono",
      "API de integracion",
      "Reportes personalizados",
      "Multi-usuario ilimitado",
    ],
    ctaText: "Empezar gratis",
    ctaHref: "/registro?plan=business",
  },
  {
    name: "Contador",
    price: "2,49",
    priceAnnual: "1,99",
    priceCLP: "$96.000",
    priceCLPAnnual: "$76.000",
    unit: "/empresa/mes",
    features: [
      "Empleados ilimitados",
      "DTE ilimitados",
      "Contabilidad completa + multi-empresa",
      "Remuneraciones + Operacion Renta",
      "Soporte dedicado",
      "Dashboard multi-cliente",
      "Portal de clientes",
      "Reportes con tu marca",
      "15% comision recurrente",
    ],
    ctaText: "Contactar ventas",
    ctaHref: "/contacto?plan=contador",
  },
];

const DETAILED_FEATURES = [
  {
    feature: "Empleados",
    values: ["Hasta 5", "Hasta 20", "Hasta 50", "Ilimitado"],
  },
  {
    feature: "DTE mensuales",
    values: ["50", "200", "Ilimitados", "Ilimitados"],
  },
  {
    feature: "Contabilidad",
    values: ["Basica", "Completa", "Completa", "Completa"],
  },
  {
    feature: "Multi-empresa",
    values: ["no", "no", "yes", "yes"],
  },
  {
    feature: "Remuneraciones",
    values: ["5 liquidaciones", "Completas", "Completas", "Completas"],
  },
  { feature: "Previred automatico", values: ["no", "no", "yes", "yes"] },
  { feature: "Operacion Renta", values: ["no", "no", "no", "yes"] },
  {
    feature: "Libro de compras y ventas",
    values: ["yes", "yes", "yes", "yes"],
  },
  { feature: "Declaracion F29", values: ["Simplificada", "Completa", "Completa", "Completa"] },
  { feature: "Conciliacion bancaria", values: ["no", "yes", "yes", "yes"] },
  { feature: "Reportes financieros", values: ["Basicos", "Avanzados", "Personalizados", "Personalizados"] },
  { feature: "Multi-usuario", values: ["1 usuario", "3 usuarios", "Ilimitado", "Ilimitado"] },
  { feature: "API de integracion", values: ["no", "no", "yes", "yes"] },
  { feature: "Portal de clientes", values: ["no", "no", "no", "yes"] },
  { feature: "Reportes con marca propia", values: ["no", "no", "no", "yes"] },
  {
    feature: "Soporte",
    values: ["Email", "Chat + Email", "Prioritario + Telefono", "Dedicado"],
  },
];

const QUICK_COMPARISON = [
  { feature: "Precio desde (UF/mes)", values: ["0,99", "2,5", "3,0"] },
  { feature: "Contabilidad + Remuneraciones", values: ["yes", "partial", "yes"] },
  { feature: "Facturacion electronica", values: ["yes", "yes", "yes"] },
  { feature: "Multi-empresa", values: ["yes", "no", "partial"] },
  { feature: "Certificado SII", values: ["yes", "yes", "yes"] },
  { feature: "Soporte en espanol", values: ["yes", "yes", "yes"] },
  { feature: "Operacion Renta automatizada", values: ["yes", "no", "partial"] },
  { feature: "Interfaz moderna e intuitiva", values: ["yes", "no", "no"] },
  { feature: "Migracion gratis", values: ["yes", "no", "no"] },
];

const FAQ_ITEMS = [
  {
    question: "Puedo probar CuentaX gratis?",
    answer:
      "Si, todos los planes incluyen 14 dias de prueba gratuita sin necesidad de tarjeta de credito. Puedes explorar todas las funcionalidades y decidir si CuentaX es para ti.",
  },
  {
    question: "Que pasa si necesito mas empleados o DTE?",
    answer:
      "Puedes actualizar tu plan en cualquier momento desde tu panel de administracion. El cambio es inmediato y se prorratea automaticamente el costo restante del mes.",
  },
  {
    question: "Puedo cancelar en cualquier momento?",
    answer:
      "Si, no hay contratos de permanencia. Puedes cancelar tu suscripcion cuando quieras. Tus datos estaran disponibles para exportar durante 30 dias despues de la cancelacion.",
  },
  {
    question: "Los precios incluyen IVA?",
    answer:
      "No, todos los precios mostrados son en UF + IVA. El IVA (19%) se agrega al momento de la facturacion. Recibes una factura electronica cada mes.",
  },
  {
    question: "Que significa el precio en UF?",
    answer:
      "La UF (Unidad de Fomento) es una unidad de cuenta usada en Chile que se reajusta diariamente segun la inflacion. Esto permite que los precios se mantengan estables en terminos reales. Los valores en CLP son referenciales basados en la UF de marzo 2026 (~$38.400).",
  },
  {
    question: "Ofrecen descuento por pago anual?",
    answer:
      "Si, al elegir el plan anual obtienes un 20% de descuento, equivalente a 2 meses gratis. El cobro se realiza una vez al ano.",
  },
  {
    question: "Como funciona la migracion desde otro software?",
    answer:
      "Nuestro equipo te ayuda a migrar tus datos desde cualquier plataforma (Nubox, Defontana, Excel, etc.) de forma gratuita. El proceso toma entre 1 y 5 dias habiles dependiendo del volumen de datos.",
  },
  {
    question: "Que metodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de credito y debito (Visa, Mastercard, American Express), transferencia bancaria y Webpay. Para planes anuales tambien ofrecemos pago via factura.",
  },
];

export default function PreciosPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showFullComparison, setShowFullComparison] = useState(false);

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
              Sin tarjeta de credito requerida
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Planes simples,{" "}
              <span className="gradient-text-light">precios transparentes</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70 sm:text-xl"
            >
              Elige el plan perfecto para tu empresa. Todos incluyen 14 dias de prueba gratis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10"
            >
              <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
                <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-8 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan, i) => (
              <PricingCard
                key={plan.name}
                {...plan}
                isAnnual={isAnnual}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Legal note */}
          <p className="mt-8 text-center text-xs text-surface-400">
            Todos los precios en UF + IVA. UF referencial: $38.400 CLP (marzo 2026).
          </p>
        </div>
      </section>

      {/* All plans include */}
      <section className="bg-surface-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Todos los planes incluyen
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "14 dias gratis", desc: "Prueba todo sin compromiso ni limitaciones" },
              { icon: CreditCard, title: "Sin tarjeta de credito", desc: "Comienza tu prueba sin ingresar datos de pago" },
              { icon: Shield, title: "Sin contratos", desc: "Cancela cuando quieras, sin costos ocultos" },
              { icon: Truck, title: "Migracion gratis", desc: "Te ayudamos a migrar tus datos sin costo" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-2xl border border-surface-200 bg-white p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-surface-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Comparacion detallada de funcionalidades
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              Encuentra el plan perfecto comparando todas las funcionalidades
            </p>
          </ScrollReveal>

          <div className="mt-12 rounded-2xl border border-surface-200 bg-white p-2 shadow-sm">
            <ComparisonTable
              headers={["Funcionalidad", "Starter", "Pro", "Business", "Contador"]}
              rows={showFullComparison ? DETAILED_FEATURES : DETAILED_FEATURES.slice(0, 8)}
              highlightColumn={2}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowFullComparison(!showFullComparison)}
              className="inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white px-6 py-3 text-sm font-semibold text-surface-700 shadow-sm transition-all hover:bg-surface-50 hover:shadow-md"
            >
              {showFullComparison ? "Ver menos" : "Ver todas las funcionalidades"}
              {showFullComparison ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Comparison vs Competitors */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              CuentaX vs la competencia
            </h2>
            <p className="mt-4 text-center text-base text-surface-500">
              Comparacion rapida con las alternativas mas populares en Chile
            </p>
          </ScrollReveal>

          <div className="mt-12 rounded-2xl border border-surface-200 bg-white p-2 shadow-sm">
            <ComparisonTable
              headers={["Caracteristica", "CuentaX", "Nubox", "Defontana"]}
              rows={QUICK_COMPARISON}
              highlightColumn={1}
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/comparar/cuentax-vs-nubox"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white px-5 py-2.5 text-sm font-medium text-surface-700 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
            >
              CuentaX vs Nubox <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/comparar/cuentax-vs-defontana"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white px-5 py-2.5 text-sm font-medium text-surface-700 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
            >
              CuentaX vs Defontana <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/comparar"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white px-5 py-2.5 text-sm font-medium text-surface-700 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
            >
              Ver todas las comparaciones <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
              Preguntas frecuentes sobre precios
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
              No te convences? Agenda una demo personalizada
            </h2>
            <p className="mt-4 text-lg text-blue-100/70">
              Te mostramos CuentaX en vivo y respondemos todas tus preguntas.
              Sin compromiso.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/demo"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:bg-accent-500 hover:shadow-accent-500/30 hover:-translate-y-0.5"
              >
                Agendar demo gratuita
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25"
              >
                Empezar prueba gratis
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
