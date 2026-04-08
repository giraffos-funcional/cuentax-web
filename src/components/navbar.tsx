"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  {
    label: "Funcionalidades",
    href: "/funcionalidades",
    children: [
      { label: "Contabilidad", href: "/funcionalidades/contabilidad" },
      { label: "Remuneraciones", href: "/funcionalidades/remuneraciones" },
      { label: "Facturacion Electronica", href: "/funcionalidades/facturacion-electronica" },
      { label: "Declaraciones SII", href: "/funcionalidades/declaraciones-sii" },
      { label: "Reportes", href: "/funcionalidades/reportes" },
      { label: "Portal del Trabajador", href: "/funcionalidades/portal-del-trabajador" },
    ],
  },
  { label: "Precios", href: "/precios" },
  { label: "Para Contadores", href: "/para-contadores" },
  { label: "Comparar", href: "/comparar" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-sm shadow-primary-500/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-lg shadow-primary-500/25 transition-transform duration-300 group-hover:scale-110">
            <Calculator className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold tracking-tight text-surface-900">
            Cuenta<span className="gradient-text">X</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 hover:bg-surface-100"
                >
                  {link.label}
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white p-2 shadow-xl shadow-surface-900/10 ring-1 ring-surface-200"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-surface-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 hover:bg-surface-100"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href="https://cuentax.giraffos.com"
            className="rounded-lg px-4 py-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900"
          >
            Iniciar Sesion
          </a>
          <a
            href="https://cuentax.giraffos.com"
            className="magnetic rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
          >
            Prueba Gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-lg p-2 text-surface-600 hover:bg-surface-100"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-surface-200 bg-white"
          >
            <div className="px-6 py-6 space-y-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <span className="block px-4 py-2.5 text-sm font-semibold text-surface-400 uppercase tracking-wider">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-2.5 pl-8 text-sm font-medium text-surface-600 hover:bg-primary-50 hover:text-primary-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-surface-600 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 mt-4 border-t border-surface-200 space-y-3">
                <a
                  href="https://cuentax.giraffos.com"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-xl border border-surface-300 px-4 py-3 text-center text-sm font-semibold text-surface-700 hover:bg-surface-50"
                >
                  Iniciar Sesion
                </a>
                <a
                  href="https://cuentax.giraffos.com"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-xl bg-accent-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent-600/25"
                >
                  Prueba Gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
