"use client";

import {
  BookOpen,
  Table,
  FileDown,
  ClipboardCheck,
  Scale,
  Zap,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function LibroRemuneracionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Libro de Remuneraciones electronico y al dia"
        subtitle="Registro mensual obligatorio con todos los haberes y descuentos por trabajador. Formato Direccion del Trabajo, exportable en PDF y CSV."
        badge="Libro de Remuneraciones"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Registro mensual completo"
        description="Cada periodo incluye el detalle por trabajador con todos los componentes de la remuneracion, desde haberes hasta descuentos legales."
        icon={BookOpen}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Datos del trabajador",
            description:
              "RUT, nombre, tipo de contrato y dias trabajados en el periodo.",
          },
          {
            title: "Haberes e imposiciones",
            description:
              "Sueldo base, gratificacion, otros haberes. AFP, salud, cesantia e impuesto unico.",
          },
          {
            title: "Totales y liquido",
            description:
              "Totales imponibles y no imponibles. Liquido a pagar por cada trabajador.",
          },
        ]}
      />

      <FeatureSection
        title="Formato oficial"
        description="El libro se genera en el formato exigido por la Direccion del Trabajo, listo para cualquier fiscalizacion sin ajustes manuales."
        icon={Table}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "Cumple con la Direccion del Trabajo",
            description:
              "Estructura y campos segun normativa vigente para el registro de remuneraciones.",
          },
          {
            title: "Orientacion landscape",
            description:
              "Disenado en formato horizontal para mayor legibilidad de todas las columnas.",
          },
          {
            title: "Fila de totales generales",
            description:
              "Resumen consolidado al final del documento con los totales de cada columna.",
          },
        ]}
      />

      <FeatureSection
        title="Exportacion multiple"
        description="Descarga el libro de remuneraciones en el formato que necesites, listo para archivar, compartir o analizar."
        icon={FileDown}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "PDF con diseno profesional",
            description:
              "Documento formateado y listo para imprimir o enviar a la Direccion del Trabajo.",
          },
          {
            title: "CSV para analisis en Excel",
            description:
              "Archivo tabular para procesar, filtrar y analizar en cualquier planilla de calculo.",
          },
          {
            title: "Descarga por periodo mensual",
            description:
              "Selecciona el mes y descarga el libro completo en un solo clic.",
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
              El Libro de Remuneraciones se genera automaticamente desde las
              liquidaciones confirmadas, sin trabajo adicional.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Scale,
                title: "Obligacion legal cumplida",
                description:
                  "Cumple con el registro obligatorio exigido por la Direccion del Trabajo para todas las empresas con trabajadores.",
              },
              {
                icon: Zap,
                title: "Generacion automatica",
                description:
                  "Se construye automaticamente desde las liquidaciones de sueldo confirmadas. Sin digitacion manual.",
              },
              {
                icon: ClipboardCheck,
                title: "Exportacion inmediata",
                description:
                  "Descarga en PDF o CSV en segundos. Listo para fiscalizacion, auditoria o archivo contable.",
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
        headline="Cumple con la Direccion del Trabajo"
        subheadline="Tu libro de remuneraciones se genera automaticamente desde las liquidaciones confirmadas."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
