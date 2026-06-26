import { Plane } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.16_0.04_260)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary shadow-glow">
                <Plane className="h-5 w-5 text-white -rotate-45" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold">Voyaverse</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">Overseas Consultancy</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A licensed overseas consultancy helping students and professionals build futures
              across 30+ countries — with honest guidance, ethical filing, and end-to-end care.
            </p>
            <div className="mt-6 flex gap-2">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp].map((Ic, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:gradient-orange transition-colors">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={["Home", "About", "Process", "Testimonials", "Gallery", "FAQ"]} />
          <FooterCol title="Services" links={["Student Visa", "Work Permit", "Visit Visa", "Document Processing", "Passport Help", "Career Counseling"]} />
          <FooterCol title="Countries" links={["Canada", "Australia", "United Kingdom", "Germany", "Japan", "Romania"]} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Voyaverse Overseas Consultancy. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-white/70">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-accent-orange">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
