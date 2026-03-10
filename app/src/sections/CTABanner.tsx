import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta" className="bg-[#002c39] py-28">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-8 overflow-hidden rounded-[1.75rem] bg-[#dff0f5] p-8 text-[#001f2b] md:grid-cols-[1.05fr_0.95fr] md:p-10"
        >
          <div className="flex flex-col justify-between">
            <h2 className="max-w-[22rem] text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.06em]">
              Automate your Census Workflow.
            </h2>
            <motion.img
              src="/assets/hero_geometric_2.png"
              alt=""
              className="mt-10 w-full max-w-[22rem]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-12 md:items-end">
            <a href="#cta" className="btn-primary">
              Schedule a Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="max-w-[18rem] text-[0.98rem] leading-7 text-[#001f2b]/72 md:text-right">
                Simplify annual census collection through effortless payroll data gathering and automated scrubbing based on plan document provisions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
