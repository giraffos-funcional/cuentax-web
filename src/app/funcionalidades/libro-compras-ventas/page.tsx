"use client";

import {
  BookOpen,
  FileSpreadsheet,
  Send,
  Download,
  Columns,
  CalendarSearch,
  CheckCircle2,
  Zap,
  ArrowUpFromLine,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function LibroComprasVentasPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Libro de Compras y Ventas sincronizado con el SII"
        subtitle="Generacion automatica del IECV desde tus documentos tributarios. Tabs Ventas y Compras, totales calculados y envio directo al SII."
        badge="Libro de Compras y Ventas"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Generacion automatica"
        description="Se alimenta de facturas emitidas y recibidas. Folio, tipo DTE, fecha, RUT, razon social, neto, IVA, total. Fila de totales por periodo."
        icon={BookOpen}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Desde tus DTEs",
            description:
              "Cada factura emitida o recibida se registra automaticamente en el libro correspondiente.",
          },
          {
            title: "Detalle completo",
            description:
              "Folio, tipo de documento, fecha, RUT, razon social, monto neto, IVA y total por linea.",
          },
          {
            title: "Totales por periodo",
            description:
              "Fila de totales calculada automaticamente al cierre de cada mes tributario.",
          },
        ]}
      />

      <FeatureSection
        title="Exportacion y envio"
        description="PDF oficial para archivo. CSV para analisis. Envio electronico al SII integrado."
        icon={Send}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "PDF oficial",
            description:
              "Genera el libro en formato PDF listo para archivo y fiscalizacion.",
          },
          {
            title: "CSV para analisis",
            description:
              "Exporta los datos a CSV para trabajar en planillas o herramientas de BI.",
          },
          {
            title: "Envio directo al SII",
            description:
              "Envia el IECV electronico al SII sin salir de CuentaX.",
          },
        ]}
      />

      <FeatureSection
        title="Tabs Ventas y Compras"
        description="Selector de periodo mes/ano. Vista separada ventas y compras. Busqueda y filtros rapidos."
        icon={Columns}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Selector de periodo",
            description:
              "Navega entre meses y anos para consultar cualquier periodo tributario.",
          },
          {
            title: "Vista separada",
            description:
              "Tabs independientes para ventas y compras con totales individuales.",
          },
          {
            title: "Busqueda y filtros",
            description:
              "Filtra por RUT, razon social, tipo de documento o rango de montos.",
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
              El Libro de Compras y Ventas se genera solo y se envia al SII
              desde CuentaX.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: CheckCircle2,
                title: "Obligacion SII cumplida",
                description:
                  "Cumple con la normativa del SII sin esfuerzo manual. IECV siempre al dia.",
              },
              {
                icon: Zap,
                title: "Cero digitacion manual",
                description:
                  "El libro se construye automaticamente desde tus documentos tributarios emitidos y recibidos.",
              },
              {
                icon: ArrowUpFromLine,
                title: "Envio directo al SII",
                description:
                  "Envia el libro electronico al SII con un clic, sin plataformas externas.",
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
        headline="Tu libro de compras y ventas se genera solo"
        subheadline="Automatiza el IECV y envia al SII desde CuentaX."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
