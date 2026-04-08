"use client";

import {
  Shield,
  Key,
  FolderOpen,
  Workflow,
  Wifi,
  Award,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function CertificacionSiiPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Certificacion SII guiada paso a paso"
        subtitle="Wizard interactivo que te lleva desde la carga del certificado digital hasta la emision de tu primer DTE certificado ante el SII."
        badge="Certificacion SII"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Certificado digital .pfx"
        description="Carga y gestiona tus certificados digitales de forma segura. Validacion automatica y asociacion a empresa en segundos."
        icon={Key}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Carga con un click",
            description:
              "Carga tu archivo .pfx/.p12 con un click. Sin configuraciones complicadas.",
          },
          {
            title: "Validacion automatica de vigencia",
            description:
              "El sistema verifica que tu certificado este vigente y sea valido ante el SII.",
          },
          {
            title: "Asociacion a empresa",
            description:
              "Vincula el certificado a la empresa correspondiente de forma automatica.",
          },
          {
            title: "Soporte multi-certificado",
            description:
              "Administra multiples certificados digitales para distintas empresas o usuarios.",
          },
        ]}
      />

      <FeatureSection
        title="Gestion de folios CAF"
        description="Administra los folios autorizados por el SII para cada tipo de documento tributario electronico."
        icon={FolderOpen}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "Carga de archivos CAF del SII",
            description:
              "Importa los archivos CAF descargados desde el portal del SII directamente.",
          },
          {
            title: "Control de folios disponibles por tipo DTE",
            description:
              "Visualiza cuantos folios quedan disponibles para facturas, boletas, notas de credito y mas.",
          },
          {
            title: "Alertas de folios por agotarse",
            description:
              "Recibe notificaciones cuando los folios estan por acabarse para evitar interrupciones.",
          },
          {
            title: "Asignacion automatica en emision",
            description:
              "El sistema asigna el folio correcto automaticamente al emitir un documento.",
          },
        ]}
      />

      <FeatureSection
        title="Wizard de certificacion"
        description="Un proceso guiado paso a paso que te lleva desde la configuracion inicial hasta la certificacion exitosa ante el SII."
        icon={Workflow}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Proceso paso a paso con checklist",
            description:
              "Sigue un checklist claro con cada etapa del proceso de certificacion.",
          },
          {
            title: "Carga y procesamiento de set de pruebas",
            description:
              "Sube el set de pruebas del SII y procesalo automaticamente en el sistema.",
          },
          {
            title: "Validacion automatica de XMLs",
            description:
              "Cada XML generado se valida contra los esquemas del SII antes del envio.",
          },
          {
            title: "Estado en tiempo real de cada etapa",
            description:
              "Monitorea el progreso de la certificacion con indicadores de estado en vivo.",
          },
        ]}
      />

      <FeatureSection
        title="Conectividad con el SII"
        description="Comunicacion directa con los servicios web del SII para envio, consulta y seguimiento de documentos tributarios."
        icon={Wifi}
        accentColor="amber"
        imagePosition="left"
        features={[
          {
            title: "Envio directo de DTEs al SII",
            description:
              "Envia facturas, boletas y otros DTEs directamente al SII desde la plataforma.",
          },
          {
            title: "Consulta de estado TrackID",
            description:
              "Consulta el estado de tus envios en tiempo real usando el TrackID del SII.",
          },
          {
            title: "Acuse de recibo automatico",
            description:
              "El sistema procesa automaticamente los acuses de recibo del SII.",
          },
          {
            title: "Reintentos en caso de error",
            description:
              "Si el envio falla, el sistema reintenta automaticamente para asegurar la entrega.",
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
              El proceso de certificacion SII no tiene por que ser complicado.
              Te guiamos en cada paso.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Proceso guiado sin expertos",
                description:
                  "No necesitas un consultor externo. El wizard te lleva paso a paso por todo el proceso de certificacion.",
              },
              {
                icon: Rocket,
                title: "Certificacion mas rapida",
                description:
                  "Automatizamos la generacion de XMLs, validaciones y envios para que certifiques en dias, no semanas.",
              },
              {
                icon: HeadphonesIcon,
                title: "Soporte tecnico incluido",
                description:
                  "Nuestro equipo te acompana durante todo el proceso. Si algo falla, estamos ahi para ayudarte.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
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
        headline="Certifica tu empresa ante el SII"
        subheadline="El proceso de certificacion SII no tiene por que ser complicado. Te guiamos en cada paso."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
