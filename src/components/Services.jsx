import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, FileText, BookOpenCheck, Compass, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader.jsx";

const services = [
  { icon: GraduationCap, title: "Student Visa", text: "End-to-end admissions, SOPs, and visa filing for top universities worldwide." },
  { icon: Briefcase, title: "Work Permit", text: "Skilled trades, IT, healthcare and seasonal work routes across 20+ countries." },
  { icon: MapPin, title: "Visit Visa", text: "Tourist, family, and business visit visas with itinerary and sponsor support." },
  { icon: FileText, title: "Document Processing", text: "Attestation, translations, WES/ECA, police clearance — done right the first time." },
  { icon: BookOpenCheck, title: "Passport Assistance", text: "Fresh issuance, renewal, and urgent processing with embassy liaison." },
  { icon: Compass, title: "Career Counseling", text: "Personalised profile evaluation, course mapping, and country-fit roadmaps." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title={<>Everything you need to <span className="text-gradient-orange">move abroad with confidence.</span></>}
          subtitle="From your first consultation to your boarding pass — one team, one accountable process."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.a
              href="#contact"
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 -top-px h-1 gradient-orange opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/8 text-primary transition-all group-hover:gradient-primary group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-accent-orange group-hover:rotate-45" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
