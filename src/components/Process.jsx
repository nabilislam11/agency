import { motion } from "framer-motion";
import { MessageSquare, FolderCheck, Send, FileSearch, Plane } from "lucide-react";
import { SectionHeader } from "./SectionHeader.jsx";

const steps = [
  { icon: MessageSquare, title: "Free Consultation", text: "Honest 30-min profile assessment with a country specialist." },
  { icon: FolderCheck, title: "Document Collection", text: "Personalised checklist, drafting support, and quality review." },
  { icon: Send, title: "Application Submission", text: "Filing through the right channel — embassy, VFS, or sponsor." },
  { icon: FileSearch, title: "Visa Processing", text: "Status tracking, interview prep, and embassy follow-ups." },
  { icon: Plane, title: "Travel Abroad", text: "Pre-departure briefing, airport pickup & landing support." },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title={<>From first call to <span className="text-gradient">boarding pass.</span></>}
          subtitle="A transparent 5-step journey — you always know what's next."
        />
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-accent-orange/40 to-primary/40 lg:hidden" />
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-accent-orange/40 to-primary/30" />

          <ol className="grid gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20 lg:pl-0 lg:text-center"
              >
                <div className="absolute left-0 top-0 lg:relative lg:left-auto lg:mx-auto lg:mb-4">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-glow lg:mx-auto">
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent-orange text-xs font-bold text-white shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground lg:px-2">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
