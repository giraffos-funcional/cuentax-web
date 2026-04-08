"use client";

import {
  FileText,
  Send,
  ArrowRightLeft,
  Zap,
  Award,
  ClipboardCheck,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function CotizacionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Cotizaciones profesionales en segundos"
        subtitle="Crea presupuestos desde tu catalogo de productos, envia al cliente y convierte en factura con un click."
        badge="Cotizaciones"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Creacion rapida de cotizaciones"
        description="Arma presupuestos en segundos seleccionando productos de tu catalogo con precios, cantidades y descuentos precalculados."
        icon={FileText}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Seleccion de productos del catalogo",
            description:
              "Busca y agrega productos directamente desde tu catalogo con precios predefinidos.",
          },
          {
            title: "Calculo automatico de IVA y totales",
            description:
              "Neto, IVA y total se calculan al instante cada vez que agregas o modificas una linea.",
          },
          {
            title: "Descuentos por linea o global",
            description:
              "Aplica descuentos porcentuales o en monto a cada linea o al total de la cotizacion.",
          },
          {
            title: "Datos del cliente desde contactos",
            description:
              "Selecciona el cliente y sus datos de facturacion se completan automaticamente.",
          },
        ]}
      />

      <FeatureSection
        title="Envio y seguimiento"
        description="Envia cotizaciones profesionales por email y mantiene un historial completo por cliente para dar seguimiento efectivo."
        icon={Send}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "Envio por email al cliente",
            description:
              "Envia la cotizacion directamente al correo del cliente desde CuentaX con un click.",
          },
          {
            title: "PDF profesional con logo de la empresa",
            description:
              "Genera un PDF con tu logo, datos fiscales y detalle completo de productos y totales.",
          },
          {
            title: "Historial de cotizaciones por cliente",
            description:
              "Consulta todas las cotizaciones enviadas a cada cliente con su estado y monto.",
          },
        ]}
      />

      <FeatureSection
        title="Conversion a factura electronica"
        description="Convierte cotizaciones aprobadas en facturas electronicas sin re-digitar un solo dato. Trazabilidad completa del proceso comercial."
        icon={ArrowRightLeft}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Un click para facturar",
            description:
              "Convierte una cotizacion aprobada en factura electronica con un solo click.",
          },
          {
            title: "Sin re-digitar datos",
            description:
              "Productos, cantidades, precios y datos del cliente se trasladan automaticamente.",
          },
          {
            title: "Trazabilidad cotizacion a factura",
            description:
              "Cada factura queda vinculada a su cotizacion de origen para control total.",
          },
        ]}
      />

      {/* Benefits section */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Beneficios para tu negocio
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Cotiza, envia y factura desde un solo lugar. Sin planillas, sin
              doble digitacion, sin perder ventas.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Cierra ventas mas rapido",
                description:
                  "Responde a tus clientes en segundos con cotizaciones profesionales listas para aprobar.",
              },
              {
                icon: Award,
                title: "Imagen profesional",
                description:
                  "PDFs con tu logo y datos fiscales que transmiten confianza y seriedad a tus clientes.",
              },
              {
                icon: ClipboardCheck,
                title: "Sin doble digitacion",
                description:
                  "De cotizacion a factura con un click. Cero errores de transcripcion, cero tiempo perdido.",
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
        headline="Cotiza como un profesional"
        subheadline="Crea cotizaciones, envia y factura desde un solo lugar. Incluido en todos los planes de CuentaX."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
