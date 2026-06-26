import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader.jsx";

const countries = [
  { flag: "🇨🇦", name: "Canada", desc: "PGWP-friendly study & PR pathways" },
  { flag: "🇦🇺", name: "Australia", desc: "Skilled migration & student visas" },
  { flag: "🇬🇧", name: "United Kingdom", desc: "Tier 4 study & skilled worker routes" },
  { flag: "🇯🇵", name: "Japan", desc: "SSW work permits & language pathways" },
  { flag: "🇰🇷", name: "South Korea", desc: "E-7, E-9 employment programs" },
  { flag: "🇩🇪", name: "Germany", desc: "Ausbildung, blue card & job seeker" },
  { flag: "🇮🇹", name: "Italy", desc: "Seasonal, decreto flussi & study" },
  { flag: "🇷🇴", name: "Romania", desc: "Factory & construction work permits" },
  { flag: "🇵🇱", name: "Poland", desc: "Type D work visas & EU mobility" },
  { flag: "🇵🇹", name: "Portugal", desc: "D7, tech visa & student routes" },
  { flag: "🇲🇾", name: "Malaysia", desc: "Hospitality, IT & education permits" },
];

export function Countries() {
  return (
    <section id="countries" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Countries We Serve"
          title={<>30+ destinations. <span className="text-gradient">One trusted partner.</span></>}
          subtitle="Country specialists keep you ahead of policy changes, intake windows, and embassy nuances."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-8 -bottom-8 text-[7rem] leading-none opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-25">
                {c.flag}
              </div>
              <div className="relative">
                <div className="text-4xl">{c.flag}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explore programs →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
