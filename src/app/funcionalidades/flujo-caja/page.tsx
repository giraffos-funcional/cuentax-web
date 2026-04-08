"use client";

import {
  TrendingUp,
  DollarSign,
  Bell,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  LineChart,
  Target,
  ShieldCheck,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function FlujoCajaPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Proyecta tu flujo de caja con confianza"
        subtitle="Visualiza ingresos y egresos proyectados a 30, 60 y 90 dias. Anticipa problemas de liquidez antes de que ocurran."
        badge="Flujo de Caja"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Proyeccion inteligente"
        description="Saldo actual + cuentas por cobrar y pagar. Gastos recurrentes proyectados. Grafico historico vs proyectado."
        icon={TrendingUp}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Saldo actual en tiempo real",
            description:
              "Parte desde tu saldo actual e incorpora cuentas por cobrar y pagar pendientes.",
          },
          {
            title: "Gastos recurrentes",
            description:
              "Proyecta automaticamente arriendos, sueldos, servicios y otros gastos fijos.",
          },
          {
            title: "Historico vs proyectado",
            description:
              "Compara lo que realmente ocurrio con la proyeccion para ajustar estimaciones.",
          },
        ]}
      />

      <FeatureSection
        title="Alertas de liquidez"
        description="Notificacion cuando el saldo proyectado baja de umbral. Deteccion temprana de brechas. Recomendaciones de accion."
        icon={Bell}
        accentColor="amber"
        imagePosition="left"
        features={[
          {
            title: "Umbral configurable",
            description:
              "Define el saldo minimo aceptable y recibe notificacion cuando se proyecta por debajo.",
          },
          {
            title: "Deteccion de brechas",
            description:
              "Identifica periodos futuros donde los egresos superan los ingresos disponibles.",
          },
          {
            title: "Recomendaciones de accion",
            description:
              "Sugerencias concretas para anticipar y resolver problemas de liquidez.",
          },
        ]}
      />

      <FeatureSection
        title="Analisis visual"
        description="Graficos interactivos con Recharts. Desglose por categoria (ventas, gastos fijos, variables). Filtro por periodo y centro de costo."
        icon={BarChart3}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Graficos interactivos",
            description:
              "Visualiza tu flujo de caja con graficos de linea y barras interactivos.",
          },
          {
            title: "Desglose por categoria",
            description:
              "Separa ingresos por ventas y egresos por gastos fijos, variables y extraordinarios.",
          },
          {
            title: "Filtro por periodo y centro de costo",
            description:
              "Analiza el flujo por rangos de fecha especificos o por unidad de negocio.",
          },
        ]}
      />

      {/* Benefits section */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Beneficios para tu empresa
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Proyecta tu liquidez y toma decisiones financieras con datos
              reales.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: AlertTriangle,
                title: "Anticipa problemas",
                description:
                  "Detecta brechas de liquidez semanas antes de que ocurran y actua a tiempo.",
              },
              {
                icon: Lightbulb,
                title: "Decisiones informadas",
                description:
                  "Decide inversiones, contrataciones y pagos con proyecciones confiables.",
              },
              {
                icon: ShieldCheck,
                title: "Control financiero total",
                description:
                  "Visibilidad completa de tu posicion de caja actual y futura en un solo lugar.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="No te quedes sin liquidez"
        subheadline="Proyecta tu flujo de caja y toma decisiones con datos reales."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
