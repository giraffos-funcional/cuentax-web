"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={clsx(
          "text-sm font-medium transition-colors",
          !isAnnual ? "text-surface-900" : "text-surface-400"
        )}
      >
        Mensual
      </span>

      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative flex h-8 w-[52px] items-center rounded-full bg-surface-200 p-1 transition-colors hover:bg-surface-300"
        aria-label={isAnnual ? "Cambiar a mensual" : "Cambiar a anual"}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={clsx(
            "h-6 w-6 rounded-full shadow-md",
            isAnnual
              ? "ml-auto bg-accent-600"
              : "bg-white"
          )}
        />
      </button>

      <span
        className={clsx(
          "text-sm font-medium transition-colors",
          isAnnual ? "text-surface-900" : "text-surface-400"
        )}
      >
        Anual
      </span>

      {isAnnual && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700"
        >
          Ahorra 2 meses
        </motion.span>
      )}
    </div>
  );
}
