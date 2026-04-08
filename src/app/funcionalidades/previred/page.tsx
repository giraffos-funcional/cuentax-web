"use client";

import {
  FileDown,
  RefreshCw,
  CheckSquare,
  Table,
  ShieldCheck,
  TrendingUp,
  Clock,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function PreviredPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Archivo Previred listo en un click"
        subtitle="Genera el archivo .pre de declaracion mensual con todos los datos de AFP, Isapre, cesantia e impuesto unico. Validado antes de enviar."
        badge="Previred"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Generacion automatica del archivo .pre"
        description="Formato fixed-width oficial listo para subir a previred.com. Todos los datos de prevision y remuneraciones en un solo archivo."
        icon={FileDown}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Formato oficial",
            description:
              "Archivo .pre con formato fixed-width segun especificacion de Previred.",
          },
          {
            title: "Datos completos",
            description:
              "AFP, Isapre, cesantia trabajador y empleador, sueldo imponible e impuesto unico.",
          },
          {
            title: "Listo para subir",
            description:
              "Descarga el archivo y subelo directamente a previred.com sin edicion manual.",
          },
        ]}
      />

      <FeatureSection
        title="Indicadores economicos actualizados"
        description="Los valores de UF, UTM, topes imponibles y tasas de AFP se actualizan automaticamente. Sin ingreso manual."
        icon={RefreshCw}
        accentColor="blue"
        imagePosition="left"
        features={[
          {
            title: "Scraping automatico",
            description:
              "UF, UTM, UTA e IPC obtenidos de fuentes oficiales sin intervencion.",
          },
          {
            title: "Tasas siempre al dia",
            description:
              "Tasas de AFP e Isapre actualizadas para cada periodo de remuneraciones.",
          },
          {
            title: "Topes imponibles calculados",
            description:
              "Topes de AFP y seguro de cesantia calculados automaticamente con la UF del mes.",
          },
        ]}
      />

      <FeatureSection
        title="Validacion pre-envio"
        description="Checklist automatico que verifica la consistencia de los datos antes de generar el archivo Previred."
        icon={CheckSquare}
        accentColor="amber"
        imagePosition="right"
        features={[
          {
            title: "Checklist automatico",
            description:
              "Verificacion completa antes de generar el archivo .pre.",
          },
          {
            title: "AFP e Isapre asignados",
            description:
              "Verifica que todos los empleados tengan AFP e Isapre asignados correctamente.",
          },
          {
            title: "Liquidaciones confirmadas",
            description:
              "Verifica que las liquidaciones del periodo esten confirmadas. Alerta de inconsistencias.",
          },
        ]}
      />

      <FeatureSection
        title="Vista previa detallada"
        description="Revisa todos los datos linea por linea antes de descargar el archivo. Transparencia total en cada campo."
        icon={Table}
        accentColor="violet"
        imagePosition="left"
        features={[
          {
            title: "Tabla completa",
            description:
              "Todos los trabajadores con sus datos Previred en una tabla clara y legible.",
          },
          {
            title: "Revision linea por linea",
            description:
              "Verifica cada campo antes de descargar: AFP, Isapre, montos y cotizaciones.",
          },
          {
            title: "Exportacion validada",
            description:
              "Descarga el archivo .pre solo cuando todos los datos estan verificados.",
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
              Automatiza la generacion del archivo Previred y elimina errores
              manuales en la declaracion mensual.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Cero errores en Previred",
                description:
                  "Validacion automatica de todos los campos antes de generar el archivo .pre.",
              },
              {
                icon: TrendingUp,
                title: "Indicadores siempre al dia",
                description:
                  "UF, UTM, tasas de AFP e Isapre actualizadas sin ingreso manual.",
              },
              {
                icon: Clock,
                title: "Ahorra horas de trabajo manual",
                description:
                  "Genera el archivo completo en un click en vez de armar planillas a mano.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
        headline="Olvida los errores en Previred"
        subheadline="Genera tu archivo de declaracion mensual validado y listo para subir."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
