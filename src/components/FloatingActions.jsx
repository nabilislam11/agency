import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/923001234567"
        aria-label="WhatsApp"
        className="relative grid place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      </a>
      <a
        href="tel:+923001234567"
        aria-label="Call"
        className="grid place-items-center rounded-full gradient-primary text-white shadow-elegant transition-transform hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid place-items-center rounded-full gradient-orange text-white shadow-glow transition-transform hover:scale-110"
            style={{ height: 52, width: 52 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
