import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader.jsx";

const faqs = [
  { q: "How long does the visa process usually take?", a: "It depends on the country and visa type — student visas typically take 4–8 weeks, work permits 2–6 months, and visit visas 7–21 days. We give you an honest, country-specific timeline in your free consultation." },
  { q: "Do I need IELTS or another language test?", a: "Most English-speaking countries (Canada, UK, Australia) require IELTS, PTE, or TOEFL. Germany may need German A2/B1, Japan requires JLPT for many work routes. We help you pick the cheapest valid test for your case." },
  { q: "What documents do I need to start?", a: "A valid passport, academic transcripts, CV, and recent photos are enough to begin. Country-specific items (police clearance, financials, medicals) follow a personalised checklist." },
  { q: "What are your consultancy fees?", a: "Initial consultation is free. Service fees are transparent, stage-based, and only charged for work performed — no hidden embassy or third-party markups." },
  { q: "What if my visa gets rejected?", a: "Our 98% success rate is rooted in careful profile evaluation — we only file when chances are strong. In the rare event of refusal, we provide a free reapplication strategy or refund as per our service agreement." },
  { q: "Do you help after I land abroad?", a: "Yes. We offer airport pickup, accommodation help, SIM/bank setup, and ongoing community support for the first 90 days." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 sm:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Answers, before <span className="text-gradient">you even ask.</span></>}
          subtitle="The questions we hear most — straight from 15 years of consultations."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl border bg-card shadow-soft"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-foreground sm:text-lg">{f.q}</span>
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${open === i ? "gradient-orange text-white rotate-45" : "bg-muted text-primary"}`}>
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
