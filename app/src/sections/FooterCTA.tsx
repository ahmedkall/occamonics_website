import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white pb-16 pt-4 text-[#001f2b]">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-8 overflow-hidden rounded-[1.75rem] bg-[#dff0f5] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10"
        >
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.06em]">
                Say Goodbye to Manual Data Entry
              </h2>
              <div className="mt-10 hidden md:block">
                <motion.img
                  src="/assets/hero_geometric_2.png"
                  alt=""
                  className="w-full max-w-[26rem]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-8 md:items-end">
            <a href="#cta" className="btn-primary whitespace-nowrap">
              Schedule a Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="max-w-[18rem] text-left text-[0.98rem] leading-7 text-[#001f2b]/72 md:text-right">
              Stop wasting time reformatting census and trust data. Automate data processing with Stax.ai and focus on what truly matters.{' '}
              <span className="font-semibold text-[#001f2b]">#FreeToThink</span>
            </p>
            <div className="md:hidden">
              <motion.img
                src="/assets/hero_geometric_2.png"
                alt=""
                className="w-full max-w-[18rem]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
