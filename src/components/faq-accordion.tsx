"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-surface-200 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary-600"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-surface-900">{item.question}</span>
        <ChevronDown
          className={clsx(
            "h-5 w-5 shrink-0 text-surface-400 transition-transform duration-300",
            isOpen && "rotate-180 text-primary-500"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-surface-600">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={clsx("divide-surface-200 rounded-2xl border border-surface-200 bg-white px-6", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
