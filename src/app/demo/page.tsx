"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  ShieldCheck,
  Clock,
  Users,
  BarChart3,
  Calculator,
  Headphones,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const MODULE_OPTIONS = [
  "Contabilidad",
  "Remuneraciones",
  "Facturacion Electronica",
  "Reportes Financieros",
  "Multi-empresa",
  "Operacion Renta",
  "Previred",
  "Conciliacion Bancaria",
];

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "Certificado SII" },
  { icon: Clock, text: "Demo de 30 minutos" },
  { icon: Users, text: "+500 PYMEs confian en nosotros" },
  { icon: Headphones, text: "Sin compromiso" },
];

const BENEFITS = [
  { icon: Calculator, title: "Demo personalizada", desc: "Te mostramos exactamente las funcionalidades que tu empresa necesita." },
  { icon: BarChart3, title: "Analisis de tu caso", desc: "Evaluamos tu situacion actual y te sugerimos el mejor plan." },
  { icon: Clock, title: "30 minutos", desc: "Una sesion corta y enfocada. Sin presentaciones genéricas." },
  { icon: Headphones, title: "Respuesta en 24 horas", desc: "Agenda hoy y te contactamos al dia siguiente como maximo." },
];

export default function DemoPage() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    empresa: "",
    rut: "",
    empleados: "",
    modulos: [] as string[],
    fecha: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function toggleModule(mod: string) {
    setFormState((prev) => ({
      ...prev,
      modulos: prev.modulos.includes(mod)
        ? prev.modulos.filter((m) => m !== mod)
        : [...prev.modulos, mod],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sin compromiso
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Agenda una demo personalizada
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70"
            >
              Te mostramos CuentaX en vivo, enfocado en las necesidades de tu empresa.
              30 minutos que pueden cambiar como manejas tu contabilidad.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="rounded-2xl border border-accent-200 bg-accent-50 p-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                      <Send className="h-8 w-8" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-surface-900">Demo agendada</h2>
                    <p className="mt-3 text-surface-500">
                      Te contactamos en menos de 24 horas para confirmar el horario. Revisa tu email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-surface-700">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          required
                          value={formState.nombre}
                          onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="Juan Perez"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-surface-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="juan@empresa.cl"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-surface-700">
                          Empresa *
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          required
                          value={formState.empresa}
                          onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="Mi Empresa SpA"
                        />
                      </div>
                      <div>
                        <label htmlFor="rut" className="block text-sm font-medium text-surface-700">
                          RUT empresa
                        </label>
                        <input
                          type="text"
                          id="rut"
                          value={formState.rut}
                          onChange={(e) => setFormState({ ...formState, rut: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="76.123.456-7"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="empleados" className="block text-sm font-medium text-surface-700">
                          Numero de empleados
                        </label>
                        <select
                          id="empleados"
                          value={formState.empleados}
                          onChange={(e) => setFormState({ ...formState, empleados: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        >
                          <option value="">Seleccionar</option>
                          <option value="1-5">1 - 5</option>
                          <option value="6-20">6 - 20</option>
                          <option value="21-50">21 - 50</option>
                          <option value="50+">Mas de 50</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="fecha" className="block text-sm font-medium text-surface-700">
                          Fecha preferida
                        </label>
                        <input
                          type="date"
                          id="fecha"
                          value={formState.fecha}
                          onChange={(e) => setFormState({ ...formState, fecha: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>
                    </div>

                    {/* Module checkboxes */}
                    <div>
                      <label className="block text-sm font-medium text-surface-700">
                        Que modulos te interesan?
                      </label>
                      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {MODULE_OPTIONS.map((mod) => (
                          <button
                            key={mod}
                            type="button"
                            onClick={() => toggleModule(mod)}
                            className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                              formState.modulos.includes(mod)
                                ? "border-primary-500 bg-primary-50 text-primary-700 ring-2 ring-primary-500/20"
                                : "border-surface-200 bg-white text-surface-600 hover:border-primary-200 hover:bg-primary-50/50"
                            }`}
                          >
                            {mod}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-surface-700">
                        Algo mas que debamos saber?
                      </label>
                      <textarea
                        id="mensaje"
                        rows={3}
                        value={formState.mensaje}
                        onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                        className="mt-2 block w-full resize-none rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Ej: Actualmente usamos Nubox y queremos migrar..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="magnetic inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30 sm:w-auto"
                    >
                      Agendar demo gratuita
                      <Send className="h-4 w-4" />
                    </button>

                    <p className="text-xs text-surface-400">
                      Te contactamos en menos de 24 horas para confirmar el horario.
                    </p>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  {/* Trust Badges */}
                  <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-surface-900">Por que agendar una demo?</h3>
                    <ul className="mt-4 space-y-4">
                      {TRUST_BADGES.map((badge) => (
                        <li key={badge.text} className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                            <badge.icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-surface-700">{badge.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Benefits */}
                  <div className="rounded-2xl border border-primary-100 bg-primary-50/50 p-6">
                    <h3 className="font-bold text-surface-900">En tu demo veras</h3>
                    <ul className="mt-4 space-y-4">
                      {BENEFITS.map((benefit) => (
                        <li key={benefit.title} className="flex gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600 shadow-sm">
                            <benefit.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-surface-900">{benefit.title}</p>
                            <p className="text-xs text-surface-500">{benefit.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
