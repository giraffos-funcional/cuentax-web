"use client";

import {
  Users,
  Package,
  Link2,
  Contact,
  Search,
  FileText,
  ShoppingCart,
  Tag,
  Database,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function GestionComercialPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Contactos y productos organizados para facturar rapido"
        subtitle="Administra tu base de clientes, proveedores y catalogo de productos. Todo conectado con facturacion y cotizaciones."
        badge="Gestion Comercial"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Contactos: clientes y proveedores"
        description="CRUD completo con RUT, razon social, giro, direccion. Clasificacion cliente/proveedor. Busqueda rapida. Historial de documentos por contacto."
        icon={Users}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Ficha completa",
            description:
              "RUT, razon social, giro, direccion, comuna, telefono y email en un solo lugar.",
          },
          {
            title: "Clasificacion y busqueda",
            description:
              "Marca cada contacto como cliente, proveedor o ambos. Busqueda instantanea por nombre o RUT.",
          },
          {
            title: "Historial de documentos",
            description:
              "Consulta todas las facturas, boletas y cotizaciones emitidas a cada contacto.",
          },
        ]}
      />

      <FeatureSection
        title="Catalogo de productos"
        description="Nombre, codigo, precio, unidad de medida. IVA configurable por producto. Categorias y busqueda. Vinculado a cotizaciones y facturas."
        icon={Package}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "Datos del producto",
            description:
              "Nombre, codigo interno, precio unitario y unidad de medida configurables.",
          },
          {
            title: "IVA configurable",
            description:
              "Define si cada producto es afecto, exento o tiene IVA especial.",
          },
          {
            title: "Categorias y busqueda",
            description:
              "Organiza productos en categorias y encuentra cualquier item al instante.",
          },
        ]}
      />

      <FeatureSection
        title="Todo conectado"
        description="Selecciona contacto al emitir factura. Productos con precio precargado. Sin re-digitar datos nunca mas."
        icon={Link2}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Contacto en un clic",
            description:
              "Al emitir una factura o cotizacion, selecciona el contacto y sus datos se cargan automaticamente.",
          },
          {
            title: "Productos con precio precargado",
            description:
              "Agrega productos al documento y el precio, unidad e IVA se completan solos.",
          },
          {
            title: "Sin re-digitar datos",
            description:
              "Toda la informacion comercial se reutiliza en cada documento que emites.",
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
              Tu base comercial siempre lista para facturar sin fricciones.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Base de datos centralizada",
                description:
                  "Clientes, proveedores y productos en un solo lugar, accesibles desde cualquier modulo.",
              },
              {
                icon: Zap,
                title: "Facturacion mas rapida",
                description:
                  "Emite facturas y cotizaciones en segundos con datos precargados de contactos y productos.",
              },
              {
                icon: ShieldCheck,
                title: "Cero errores de datos",
                description:
                  "Al no re-digitar informacion, eliminas errores de tipeo en RUT, precios y datos tributarios.",
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
        headline="Organiza tus contactos y productos"
        subheadline="Tu base comercial siempre lista para facturar."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
