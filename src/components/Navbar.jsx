import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane, ArrowRight } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#countries", label: "Countries" },
  { href: "#opportunities", label: "Opportunities" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary shadow-glow">
            <Plane className="h-5 w-5 text-white -rotate-45" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-lg font-bold ${scrolled ? "text-primary" : "text-white"}`}>
              Voyaverse
            </span>
            <span className={`text-[10px] uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Overseas Consultancy
            </span>
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`xl:hidden grid h-10 w-10 place-items-center rounded-xl border ${
              scrolled ? "border-border text-foreground" : "border-white/30 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden"
          >
            <div className="mx-4 mt-3 rounded-2xl glass p-4 shadow-elegant">
              <div className="grid grid-cols-2 gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full gradient-orange px-5 py-3 text-sm font-semibold text-white"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
