import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader.jsx";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";

const items = [
  { name: "Arjun Mehta", role: "Master's, University of Toronto", photo: t1, text: "From SOP drafting to my visa interview prep, every step felt taken care of. I landed in Canada with zero last-minute panic." },
  { name: "Sofia Bianchi", role: "Ausbildung Nurse, Berlin", photo: t2, text: "They paired me with a German hospital and handled the language certification. Six months later I was in Berlin — fully employed." },
  { name: "Hassan Raza", role: "SSW Worker, Osaka", photo: t3, text: "The Japan SSW process is complex. Their team made it feel simple — visa approved on the first attempt." },
  { name: "Priya Sharma", role: "PG Diploma, Sheridan College", photo: t2, text: "Honest counseling that actually fit my budget and grades. Best decision I made for my career." },
];

function Counter({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (t) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Success Stories"
          title={<>Real journeys. <span className="text-gradient-orange">Real outcomes.</span></>}
          subtitle="A few of the 12,500+ clients who now call somewhere new home."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 12500, s: "+", l: "Visas Approved" },
            { v: 98, s: "%", l: "Success Rate" },
            { v: 30, s: "+", l: "Countries" },
            { v: 15, s: "+", l: "Years Experience" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border bg-card p-6 text-center shadow-soft">
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {items.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="relative h-full rounded-3xl border bg-card p-8 shadow-soft">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
                  <div className="flex gap-1 text-accent-orange">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.photo} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
                    <div className="min-w-0">
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="truncate text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
