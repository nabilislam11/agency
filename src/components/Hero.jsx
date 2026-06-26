import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, Plane, Globe2, BookOpen, Stamp, Briefcase } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero-travel.jpg";

const words = ["Student Visas.", "Work Permits.", "Visit Visas.", "Brighter Futures."];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient-orange">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] align-middle bg-accent-orange ml-1 animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Travelers at airport" className="h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,oklch(0.16_0.05_260/0.7)_100%)]" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent-orange/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl animate-blob" />

      <FloatingIcon className="left-[6%] top-[28%] animate-float"><Plane className="h-6 w-6 -rotate-45" /></FloatingIcon>
      <FloatingIcon className="right-[8%] top-[22%] animate-float-slow"><Globe2 className="h-6 w-6" /></FloatingIcon>
      <FloatingIcon className="left-[12%] bottom-[18%] animate-float-slow"><BookOpen className="h-6 w-6" /></FloatingIcon>
      <FloatingIcon className="right-[14%] bottom-[24%] animate-float"><Stamp className="h-6 w-6" /></FloatingIcon>
      <FloatingIcon className="left-[48%] top-[14%] hidden md:flex animate-float"><Briefcase className="h-6 w-6" /></FloatingIcon>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/90">
            <Star className="h-3.5 w-3.5 fill-accent-orange text-accent-orange" />
            Trusted by 12,500+ applicants worldwide
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Your Trusted Overseas
            <br />
            Consultancy for <Typed />
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            We help students and professionals achieve their dreams abroad through expert guidance
            on Student Visas, Work Permits, and Visit Visas — across 30+ destinations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105">
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/10000000000" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-elegant transition-transform hover:scale-105">
              <FaWhatsapp className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-full border border-white/30 glass-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-white">
            <Stat value="98%" label="Visa Success" />
            <Stat value="12.5K+" label="Happy Clients" />
            <Stat value="30+" label="Destinations" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-elegant">
            <img src={heroImg} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl glass p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary">
                  <Plane className="h-5 w-5 text-white -rotate-45" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground">Next Departure</div>
                  <div className="text-xs text-muted-foreground">Toronto, Canada · Fall Intake 2026</div>
                </div>
                <span className="ml-auto rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Open
                </span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-6 top-10 rounded-2xl glass p-4 shadow-soft w-56"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Approval Rate</div>
            <div className="mt-1 text-3xl font-bold text-gradient">98%</div>
            <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[98%] gradient-orange" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-12 bg-background [clip-path:polygon(0_70%,100%_30%,100%_100%,0_100%)]" />
    </section>
  );
}

function FloatingIcon({ className, children }) {
  return (
    <div className={`pointer-events-none absolute hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl glass-dark text-white shadow-elegant ${className}`}>
      {children}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}
