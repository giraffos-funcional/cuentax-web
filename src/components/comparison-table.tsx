"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Check, X, Minus } from "lucide-react";

export interface ComparisonRow {
  feature: string;
  values: ("yes" | "no" | "partial" | string)[];
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  highlightColumn?: number;
  className?: string;
}

function CellValue({ value }: { value: string }) {
  if (value === "yes") {
    return <Check className="mx-auto h-5 w-5 text-accent-500" />;
  }
  if (value === "no") {
    return <X className="mx-auto h-5 w-5 text-surface-300" />;
  }
  if (value === "partial") {
    return <Minus className="mx-auto h-5 w-5 text-amber-400" />;
  }
  return <span className="text-sm text-surface-700">{value}</span>;
}

export function ComparisonTable({
  headers,
  rows,
  highlightColumn = 0,
  className,
}: ComparisonTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={clsx("overflow-x-auto", className)}
    >
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={header}
                className={clsx(
                  "border-b-2 px-4 py-4 text-sm font-semibold",
                  i === 0
                    ? "text-left text-surface-500"
                    : "text-center",
                  i === highlightColumn
                    ? "border-primary-500 bg-primary-50/50 text-primary-700"
                    : "border-surface-200 text-surface-700"
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={row.feature}
              className={clsx(
                "transition-colors hover:bg-surface-50",
                rowIdx % 2 === 0 ? "bg-white" : "bg-surface-50/50"
              )}
            >
              <td className="border-b border-surface-100 px-4 py-3.5 text-sm font-medium text-surface-700">
                {row.feature}
              </td>
              {row.values.map((value, colIdx) => (
                <td
                  key={`${row.feature}-${colIdx}`}
                  className={clsx(
                    "border-b border-surface-100 px-4 py-3.5 text-center",
                    colIdx + 1 === highlightColumn && "bg-primary-50/30"
                  )}
                >
                  <CellValue value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
