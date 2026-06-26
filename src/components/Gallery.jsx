import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader.jsx";
import office from "../assets/g-office.jpg";
import students from "../assets/g-students.jpg";
import workers from "../assets/g-workers.jpg";
import airport from "../assets/g-airport.jpg";
import visa from "../assets/g-visa.jpg";
import docs from "../assets/g-docs.jpg";

const items = [
  { src: office, label: "Our Office", span: "row-span-2" },
  { src: students, label: "Students", span: "" },
  { src: workers, label: "Workers", span: "" },
  { src: airport, label: "Airport", span: "row-span-2" },
  { src: visa, label: "Visa Stamping", span: "" },
  { src: docs, label: "Documentation", span: "" },
];

export function Gallery() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Moments from our <span className="text-gradient">global journey.</span></>}
          subtitle="A look inside our office, our process, and the lives we help reshape."
        />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}
            >
              <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-2 rounded-full glass px-3 py-1 text-xs font-semibold text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
