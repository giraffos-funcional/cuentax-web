"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Receipt,
  ScrollText,
  CreditCard,
  Truck,
  BookOpen,
  Send,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function FacturacionElectronicaPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Facturacion electronica certificada por el SII."
        subtitle="Emite facturas, boletas, notas de credito y guias de despacho. Todo se envia automaticamente al SII y se registra en tu contabilidad."
        badge="Certificado por el SII"
      />

      {/* SII Badge Banner */}
      <section className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <ShieldCheck className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              Software de facturacion electronica certificado por el Servicio de
              Impuestos Internos de Chile
            </span>
          </motion.div>
        </div>
      </section>

      <FeatureSection
        title="Facturas electronicas (DTE 33)"
        description="Emite facturas electronicas afectas a IVA con todos los campos requeridos por el SII. Envio automatico y acuse de recibo."
        icon={FileText}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Emision en segundos",
            description:
              "Completa los datos del cliente y productos. CuentaX hace el resto.",
          },
          {
            title: "Timbre electronico",
            description:
              "Cada documento incluye el timbre electronico del SII automaticamente.",
          },
          {
            title: "Envio automatico al SII",
            description:
              "Los documentos se envian al SII en tiempo real. Sin pasos manuales.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Facturas exentas y boletas (DTE 34 y 39)"
          description="Emite facturas exentas de IVA y boletas electronicas con la misma facilidad. Ideal para ventas al detalle."
          icon={Receipt}
          accentColor="emerald"
          imagePosition="left"
          features={[
            {
              title: "Facturas exentas (34)",
              description:
                "Para ventas exentas de IVA segun la normativa tributaria.",
            },
            {
              title: "Boletas electronicas (39)",
              description:
                "Emision rapida para ventas a consumidor final con boleta electronica.",
            },
            {
              title: "Numeracion automatica",
              description:
                "Folio correlativo gestionado automaticamente. Sin saltos ni duplicados.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Notas de credito y debito"
        description="Anula o modifica documentos tributarios emitidos con notas de credito y debito correctamente referenciadas."
        icon={CreditCard}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Notas de credito",
            description:
              "Anulacion total o parcial de facturas con referencia automatica al documento original.",
          },
          {
            title: "Notas de debito",
            description:
              "Corrige montos o agrega cargos adicionales a documentos ya emitidos.",
          },
          {
            title: "Trazabilidad completa",
            description:
              "Cada nota queda vinculada al documento original para auditoria.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Guias de despacho"
          description="Emite guias de despacho electronicas para el traslado de mercaderias. Cumple con la normativa de transporte del SII."
          icon={Truck}
          accentColor="amber"
          imagePosition="left"
          features={[
            {
              title: "Guia electronica",
              description:
                "Documento tributario valido para amparar el traslado de bienes.",
            },
            {
              title: "Facturacion posterior",
              description:
                "Convierte guias en facturas con un click. Sin reingreso de datos.",
            },
            {
              title: "Control de despachos",
              description:
                "Historial completo de guias emitidas con estado de facturacion.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Libro de compra y venta automatico"
        description="Los libros de compra y venta se generan automaticamente con cada documento emitido o recibido. Listos para el SII."
        icon={BookOpen}
        accentColor="rose"
        imagePosition="right"
        features={[
          {
            title: "Libro de ventas",
            description:
              "Todas tus facturas y boletas emitidas ordenadas por periodo.",
          },
          {
            title: "Libro de compras",
            description:
              "Registro automatico de facturas de proveedores recibidas.",
          },
          {
            title: "Envio electronico",
            description:
              "Genera los libros en formato electronico para envio directo al SII.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Envio automatico al SII"
          description="Cada documento se envia al SII automaticamente al momento de emitirlo. Recibe la confirmacion en tiempo real."
          icon={Send}
          accentColor="cyan"
          imagePosition="left"
          features={[
            {
              title: "Envio en tiempo real",
              description:
                "Los documentos llegan al SII en segundos despues de emitirlos.",
            },
            {
              title: "Estado de aceptacion",
              description:
                "Verifica si el SII acepto o rechazo cada documento enviado.",
            },
            {
              title: "Reintentos automaticos",
              description:
                "Si hay un error temporal, el sistema reintenta el envio automaticamente.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="PDF personalizable con tu marca"
        description="Cada documento se genera como PDF con el diseno de tu empresa. Logo, colores y datos de contacto personalizados."
        icon={Palette}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Tu logo y colores",
            description:
              "Personaliza el PDF con la identidad visual de tu empresa.",
          },
          {
            title: "Datos de contacto",
            description:
              "Incluye direccion, telefono, sitio web y redes sociales.",
          },
          {
            title: "Envio por email",
            description:
              "Envia el PDF directamente al cliente desde CuentaX.",
          },
        ]}
      />

      <CtaSection
        headline="Factura sin complicaciones"
        subheadline="Emite documentos tributarios electronicos certificados por el SII en segundos. Sin software adicional, sin configuraciones complejas."
      />
    </main>
  );
}
