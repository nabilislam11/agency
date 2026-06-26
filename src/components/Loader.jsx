import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Plane } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center gradient-hero"
        >
          <div className="flex flex-col items-center gap-4 text-white">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 40, opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.1 }}
              className="grid h-16 w-16 place-items-center rounded-2xl glass-dark shadow-glow"
            >
              <Plane className="h-8 w-8 -rotate-45" />
            </motion.div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/80">Voyaverse</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
