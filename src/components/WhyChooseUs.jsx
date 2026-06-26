import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, TrendingUp, Zap, Users, Headphones } from "lucide-react";
import { SectionHeader } from "./SectionHeader.jsx";

const items = [
  { icon: ShieldCheck, title: "Trusted Consultancy", text: "Licensed, transparent, and ethical — guiding you with integrity at every step." },
  { icon: GraduationCap, title: "Professional Guidance", text: "Certified advisors with 15+ years of immigration and admissions expertise." },
  { icon: TrendingUp, title: "98% Visa Success Rate", text: "Industry-leading approval record across student, work, and visit categories." },
  { icon: Zap, title: "Fast Processing", text: "Streamlined documentation and priority filing to save you weeks of waiting." },
  { icon: Users, title: "Experienced Team", text: "Country specialists who know every embassy interview and policy update." },
  { icon: Headphones, title: "24/7 Support", text: "Real humans on call — pre-arrival to post-landing, in your time zone." },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>A consultancy built on <span className="text-gradient">trust & results.</span></>}
          subtitle="We blend deep regulatory knowledge with hands-on care, so your visa journey feels clear, fast, and confident."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-glow">
                  <it.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
