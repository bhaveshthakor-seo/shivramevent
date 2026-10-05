"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type FaqProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

export function Faq({ question, answer, isOpen = false }: FaqProps) {
  const [open, setOpen] = useState(isOpen);

  return (
    <details
      className="group rounded-lg border border-ink-border bg-ink-card p-6 transition-[border-color] duration-300 hover:border-gold"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-lg font-semibold text-cream [&::-webkit-details-marker]:hidden">
        {question}
        <span className="ml-4 flex size-8 shrink-0 items-center justify-center rounded-full border border-gold-dark text-gold transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-4 text-muted">
        {answer}
      </div>
    </details>
  );
}

export function FaqSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {faqs.map((faq, index) => (
        <Reveal key={index} delay={index * 100}>
          <Faq question={faq.question} answer={faq.answer} />
        </Reveal>
      ))}
    </div>
  );
}
