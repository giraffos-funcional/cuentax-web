"use client";

import {
  FolderTree,
  PieChart,
  List,
  Building2,
  Network,
  BookOpenCheck,
  BarChart3,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function CentrosCostoPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Sabe exactamente donde se va tu plata"
        subtitle="Asigna ingresos y gastos a centros de costo. Reportes detallados para saber que area, proyecto o sucursal es rentable."
        badge="Centros de Costo"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="CRUD de centros"
        description="Crea centros por area, proyecto o sucursal. Jerarquia flexible. Asignacion en asientos contables."
        icon={FolderTree}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Centros por area, proyecto o sucursal",
            description:
              "Crea tantos centros de costo como necesites, organizados segun tu estructura de negocio.",
          },
          {
            title: "Jerarquia flexible",
            description:
              "Agrupa centros en niveles para consolidar reportes de areas o divisiones completas.",
          },
          {
            title: "Asignacion en asientos contables",
            description:
              "Cada movimiento contable se asocia a un centro de costo al momento del registro.",
          },
        ]}
      />

      <FeatureSection
        title="Reportes por centro"
        description="Ingresos vs gastos por centro. Comparativa entre centros. Evolucion mensual."
        icon={PieChart}
        accentColor="blue"
        imagePosition="left"
        features={[
          {
            title: "Ingresos vs gastos",
            description:
              "Visualiza el resultado neto de cada centro de costo en el periodo seleccionado.",
          },
          {
            title: "Comparativa entre centros",
            description:
              "Compara el rendimiento de distintas areas, proyectos o sucursales lado a lado.",
          },
          {
            title: "Evolucion mensual",
            description:
              "Observa la tendencia de ingresos y gastos mes a mes por centro de costo.",
          },
        ]}
      />

      <FeatureSection
        title="Movimientos detallados"
        description="Lista de movimientos por centro. Filtros por fecha y cuenta contable. Exportacion a PDF."
        icon={List}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Lista de movimientos",
            description:
              "Consulta cada transaccion asignada a un centro con fecha, cuenta, glosa y monto.",
          },
          {
            title: "Filtros por fecha y cuenta",
            description:
              "Acota los movimientos por rango de fecha o cuenta contable especifica.",
          },
          {
            title: "Exportacion a PDF",
            description:
              "Genera reportes en PDF para compartir con socios, gerencia o auditores.",
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
              Centros de costo integrados a tu contabilidad para decisiones mas
              inteligentes.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Rentabilidad por area",
                description:
                  "Identifica que areas, proyectos o sucursales generan valor y cuales consumen recursos.",
              },
              {
                icon: SlidersHorizontal,
                title: "Mejor asignacion de recursos",
                description:
                  "Redirige presupuesto hacia las areas mas rentables con datos concretos.",
              },
              {
                icon: BarChart3,
                title: "Control granular",
                description:
                  "Nivel de detalle que va desde la vision general hasta cada movimiento individual.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
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
        headline="Conoce la rentabilidad de cada area"
        subheadline="Centros de costo integrados a tu contabilidad."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
