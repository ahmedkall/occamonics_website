import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ElevateCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#e8f7fa] py-24">
      <div className="container-stax">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <motion.img
              src="/assets/hero_geometric_2.png"
              alt=""
              className="w-full max-w-[20rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#001f2b]">
              Elevate Your TPA Firm with CX
            </h2>
            <p className="mt-4 text-[1rem] leading-7 text-[#597786]">
              Discover how leading TPAs are streamlining operations, saving time, and scaling effortlessly. Talk to an expert today!
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-6 py-3.5 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElevateCTA;
