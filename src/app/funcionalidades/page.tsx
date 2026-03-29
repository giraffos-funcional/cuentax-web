"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Users,
  FileText,
  FileCheck,
  BarChart3,
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { CtaSection } from "@/components/cta-section";

const modules = [
  {
    title: "Contabilidad",
    description:
      "Plan de cuentas SII, asientos automaticos, libro mayor, balance general y estado de resultados. Todo integrado.",
    icon: BookOpen,
    href: "/funcionalidades/contabilidad",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Remuneraciones",
    description:
      "Liquidaciones de sueldo, calculo de imposiciones, Previred integrado y libro de remuneraciones.",
    icon: Users,
    href: "/funcionalidades/remuneraciones",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Facturacion Electronica",
    description:
      "Facturas, boletas, notas de credito, guias de despacho y envio automatico al SII. Certificado.",
    icon: FileText,
    href: "/funcionalidades/facturacion-electronica",
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Declaraciones SII",
    description:
      "F29 mensual automatico, Operacion Renta, DJ 1887 y libros electronicos sincronizados con el SII.",
    icon: FileCheck,
    href: "/funcionalidades/declaraciones-sii",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Reportes",
    description:
      "Dashboard ejecutivo, ratios financieros, flujo de caja y exportacion a PDF y Excel.",
    icon: BarChart3,
    href: "/funcionalidades/reportes",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; hoverBorder: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
    hoverBorder: "group-hover:border-blue-300",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
    hoverBorder: "group-hover:border-emerald-300",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-600",
    hoverBorder: "group-hover:border-violet-300",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    hoverBorder: "group-hover:border-amber-300",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-600",
    hoverBorder: "group-hover:border-rose-300",
  },
};

export default function FuncionalidadesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Todo lo que tu PYME necesita. En un solo lugar."
        subtitle="Contabilidad, remuneraciones, facturacion electronica, declaraciones y reportes. Una plataforma disenada para que te enfoques en hacer crecer tu negocio."
        badge="Plataforma integral"
        ctaText="Comenzar gratis"
      />

      {/* Module Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Modulos integrados
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cinco modulos, una sola plataforma
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Cada modulo esta disenado para trabajar en conjunto. La informacion
              fluye automaticamente entre contabilidad, facturacion y
              remuneraciones.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, i) => {
              const colors = colorMap[mod.color] ?? colorMap.blue;
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                >
                  <Link
                    href={mod.href}
                    className={`group relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors.border} ${colors.hoverBorder}`}
                  >
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
                    >
                      <mod.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {mod.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                      {mod.description}
                    </p>
                    <div
                      className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${colors.text}`}
                    >
                      Ver detalles
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Asi de simple funciona
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Tres pasos para tener tu contabilidad al dia.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Registra tu empresa",
                description:
                  "Ingresa tu RUT y datos basicos. Configuramos tu plan de cuentas automaticamente.",
              },
              {
                step: "02",
                title: "Conecta tus fuentes",
                description:
                  "Vincula SII, bancos y Previred. Importamos tus datos historicos.",
              },
              {
                step: "03",
                title: "Opera con tranquilidad",
                description:
                  "Factura, paga remuneraciones y genera reportes. Todo fluye automaticamente.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="relative text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Listo para simplificar tu gestion?"
        subheadline="Prueba CuentaX gratis por 14 dias. Sin tarjeta de credito, sin compromisos."
      />
    </main>
  );
}
