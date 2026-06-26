import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader.jsx";

const ops = [
  { country: "Japan", flag: "🇯🇵", title: "SSW Work Permit", category: "Manufacturing", duration: "5 years", seats: 120, status: "open" },
  { country: "Romania", flag: "🇷🇴", title: "Factory Worker", category: "Production line", duration: "2 years", seats: 80, status: "open" },
  { country: "Canada", flag: "🇨🇦", title: "Student Visa — Fall '26", category: "PG Diploma", duration: "2 years", seats: 200, status: "open" },
  { country: "Germany", flag: "🇩🇪", title: "Ausbildung — Nursing", category: "Vocational", duration: "3 years", seats: 40, status: "closing" },
  { country: "Italy", flag: "🇮🇹", title: "Seasonal Visa", category: "Agriculture", duration: "9 months", seats: 0, status: "closed" },
  { country: "Poland", flag: "🇵🇱", title: "Construction Work", category: "Skilled trades", duration: "1 year", seats: 60, status: "open" },
];

const badge = {
  open: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  closing: "bg-amber-100 text-amber-700 ring-amber-200",
  closed: "bg-rose-100 text-rose-700 ring-rose-200",
};
const dot = {
  open: "bg-emerald-500",
  closing: "bg-amber-500",
  closed: "bg-rose-500",
};
const label = { open: "Open", closing: "Closing Soon", closed: "Closed" };

export function Opportunities() {
  return (
    <section id="opportunities" className="relative py-24 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Open Opportunities"
          title={<>Live programs with <span className="text-gradient-orange">verified placements.</span></>}
          subtitle="Curated weekly. Apply early — seat availability changes in real time."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ops.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="text-3xl">{o.flag}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{o.country}</div>
                    <h3 className="truncate font-display text-lg font-bold text-foreground">{o.title}</h3>
                  </div>
                </div>
                <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${badge[o.status]}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${dot[o.status]} ${o.status === "open" ? "animate-pulse" : ""}`} />
                  {label[o.status]}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
                <Meta icon={MapPin} label={o.category} />
                <Meta icon={Clock} label={o.duration} />
                <Meta icon={Users} label={o.seats > 0 ? `${o.seats} seats` : "Waitlist"} />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <a href="#contact" className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  o.status === "closed" ? "bg-muted text-muted-foreground" : "gradient-primary text-white hover:scale-105"
                }`}>
                  {o.status === "closed" ? "Notify Me" : "Apply Now"} →
                </a>
                <span className="text-xs text-muted-foreground">Updated weekly</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ icon: Icon, label }) {
  return (
    <div className="flex min-w-0 items-center gap-1.5 rounded-lg bg-muted/60 px-2.5 py-2 text-muted-foreground">
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}
