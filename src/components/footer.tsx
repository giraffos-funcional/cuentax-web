"use client";

import Link from "next/link";
import { Calculator, ShieldCheck, Server, Globe, Mail } from "lucide-react";

const FOOTER_SECTIONS = [
  {
    title: "Producto",
    links: [
      { label: "Contabilidad", href: "/funcionalidades/contabilidad" },
      { label: "Remuneraciones", href: "/funcionalidades/remuneraciones" },
      { label: "Facturacion Electronica", href: "/funcionalidades/facturacion-electronica" },
      { label: "Declaraciones SII", href: "/funcionalidades/declaraciones-sii" },
      { label: "Reportes", href: "/funcionalidades/reportes" },
      { label: "Portal del Trabajador", href: "/funcionalidades/portal-del-trabajador" },
      { label: "Precios", href: "/precios" },
    ],
  },
  {
    title: "Comparar",
    links: [
      { label: "CuentaX vs Nubox", href: "/comparar/cuentax-vs-nubox" },
      { label: "CuentaX vs Defontana", href: "/comparar/cuentax-vs-defontana" },
      { label: "CuentaX vs Bsale", href: "/comparar/cuentax-vs-bsale" },
      { label: "CuentaX vs BUK", href: "/comparar/cuentax-vs-buk" },
      { label: "CuentaX vs Excel", href: "/comparar/cuentax-vs-excel" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Para Contadores", href: "/para-contadores" },
      { label: "Para Empresas", href: "/para-empresas" },
      { label: "Contacto", href: "/contacto" },
      { label: "Agendar Demo", href: "/demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terminos de Servicio", href: "/terminos" },
      { label: "Politica de Privacidad", href: "/privacidad" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Sitio Web", href: "https://giraffos.com", icon: Globe },
  { label: "Contacto", href: "mailto:hola@cuentax.cl", icon: Mail },
];

export function Footer() {
  return (
    <footer className="section-dark">
      {/* Newsletter Band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Recibe tips de contabilidad y novedades
              </h3>
              <p className="mt-1 text-sm text-surface-400">
                Una vez al mes. Sin spam, lo prometemos.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@empresa.cl"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-surface-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
              />
              <button
                type="submit"
                className="magnetic rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-400">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="mt-12 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <ShieldCheck className="h-4 w-4 text-accent-400" />
            <span className="text-xs font-medium text-surface-300">Certificado SII</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Server className="h-4 w-4 text-primary-400" />
            <span className="text-xs font-medium text-surface-300">Datos alojados en Chile</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Calculator className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm text-surface-500">
              &copy; {new Date().getFullYear()} CuentaX by Giraffos SpA. Todos los derechos reservados.
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg p-2 text-surface-500 transition-colors hover:text-white hover:bg-white/10"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
