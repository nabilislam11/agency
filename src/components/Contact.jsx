import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeader } from "./SectionHeader.jsx";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact Us"
          title={<>Let's plan your <span className="text-gradient-orange">next chapter abroad.</span></>}
          subtitle="Book a free consultation — no pressure, no obligation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 text-white shadow-elegant sm:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-orange/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-glow/40 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">Get in touch</h3>
              <p className="mt-3 text-white/80">Our advisors typically respond within 2 working hours.</p>

              <ul className="mt-8 space-y-5">
                <Info icon={MapPin} title="Head Office" text="221 Garrison Avenue, 4th Floor, Karachi 75500, Pakistan" />
                <Info icon={Phone} title="Phone" text="+92 300 1234567 · +1 416 555 0188" />
                <Info icon={Mail} title="Email" text="hello@voyaverse.consulting" />
                <Info icon={Clock} title="Working Hours" text="Mon–Sat · 10:00 AM – 7:00 PM (PKT)" />
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+923001234567" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href="https://wa.me/923001234567" className="inline-flex items-center gap-2 rounded-full gradient-orange px-5 py-3 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform">
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp Chat
                </a>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/20">
                <iframe
                  title="Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=67.0,24.8,67.1,24.9&layer=mapnik"
                  className="h-48 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border bg-card p-8 shadow-soft sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">Book free consultation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Fill the form and we'll reach out shortly.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" placeholder="Jane Doe" />
              <Field label="Email" type="email" placeholder="jane@example.com" />
              <Field label="Phone" placeholder="+92 300 0000000" />
              <Field label="Country of Interest" placeholder="e.g. Canada" />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground">Service</label>
              <select className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30">
                <option>Student Visa</option>
                <option>Work Permit</option>
                <option>Visit Visa</option>
                <option>Document Processing</option>
                <option>Career Counseling</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us a bit about your goals..."
                className="mt-1.5 w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              By submitting you agree to our privacy policy.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-white/75">{text}</div>
      </div>
    </li>
  );
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
