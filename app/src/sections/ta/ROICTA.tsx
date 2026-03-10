import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ROICTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#002c39] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(31,211,238,0.08),transparent_70%)]" />
      <div className="relative z-10 container-stax text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto max-w-[32rem] text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-white">
            See Your Savings in Action
          </h2>
          <p className="mx-auto mt-4 max-w-[34rem] text-[1rem] leading-7 text-white/60">
            Discover how much time and money you can save with automated trust accounting. Our ROI calculator uses real TPA data to estimate your efficiency gains—whether you manage 100 or 10,000+ plans.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-6 py-3.5 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
          >
            Calculate my ROI
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICTA;
