"use client";

import {
  Building2,
  ArrowLeftRight,
  Settings,
  LayoutDashboard,
  Shield,
  Users,
  Clock,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function MultiEmpresaPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Todas tus empresas en una sola cuenta"
        subtitle="Administra multiples empresas desde un solo login. Cambia entre ellas en un click, cada una con su propia contabilidad, remuneraciones y facturacion."
        badge="Multi-Empresa"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Switch instantaneo entre empresas"
        description="Cambia de empresa en un click sin cerrar sesion. Cada empresa mantiene sus datos completamente aislados con dashboards independientes."
        icon={ArrowLeftRight}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Un click para cambiar de empresa",
            description:
              "Selector rapido en la barra superior para cambiar entre empresas al instante.",
          },
          {
            title: "Cada empresa con datos aislados",
            description:
              "Contabilidad, remuneraciones y facturacion completamente separados por empresa.",
          },
          {
            title: "Dashboard independiente por empresa",
            description:
              "Cada empresa tiene su propio panel con metricas, alertas y resumen financiero.",
          },
          {
            title: "Ideal para contadores con multiples clientes",
            description:
              "Gestiona todas las empresas de tus clientes desde una sola cuenta profesional.",
          },
        ]}
      />

      <FeatureSection
        title="Setup wizard por empresa"
        description="Configuracion guiada paso a paso para cada nueva empresa. En minutos tienes todo listo para operar."
        icon={Settings}
        accentColor="blue"
        imagePosition="left"
        features={[
          {
            title: "Configuracion guiada para cada empresa",
            description:
              "Wizard paso a paso que te lleva desde cero hasta empresa operativa en minutos.",
          },
          {
            title: "RUT, giro, certificado digital",
            description:
              "Configura los datos tributarios, giro comercial y certificado digital del SII.",
          },
          {
            title: "Plan de cuentas personalizado",
            description:
              "Cada empresa con su propio plan de cuentas adaptado a su giro y necesidades.",
          },
          {
            title: "Cada empresa con su propia configuracion SII",
            description:
              "Folios, CAFs y conexion al SII independiente por cada empresa registrada.",
          },
        ]}
      />

      <FeatureSection
        title="Gestion centralizada"
        description="Administra todas tus empresas desde un solo lugar con vista consolidada y acceso rapido a cada modulo."
        icon={LayoutDashboard}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Vista consolidada de todas tus empresas",
            description:
              "Panel general con el estado de cada empresa: facturacion, remuneraciones y contabilidad.",
          },
          {
            title: "Acceso rapido a cualquier modulo",
            description:
              "Navega directamente al modulo que necesitas de cualquier empresa sin pasos extra.",
          },
          {
            title: "Un solo equipo administrando todo",
            description:
              "Asigna roles y permisos por empresa. Tu equipo accede solo a lo que necesita.",
          },
        ]}
      />

      {/* Benefits section */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Beneficios de Multi-Empresa
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Una sola cuenta para todas tus empresas. Menos cuentas, menos
              claves, mas productividad.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Ideal para contadores",
                description:
                  "Gestiona todas las empresas de tus clientes desde un solo login profesional.",
              },
              {
                icon: Shield,
                title: "Datos 100% aislados",
                description:
                  "Cada empresa tiene su propia contabilidad, remuneraciones y facturacion completamente separada.",
              },
              {
                icon: Clock,
                title: "Ahorra tiempo",
                description:
                  "Cambia entre empresas en un click. Sin cerrar sesion, sin multiples cuentas.",
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
        headline="Gestiona todas tus empresas desde un solo lugar"
        subheadline="Perfecto para contadores y grupos empresariales. Incluido en todos los planes de CuentaX."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
