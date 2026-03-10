import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FeatureAccordion from '../components/FeatureAccordion';
import { trustFeatures } from '../content/stax';

const TA_IMAGES = [
  '/assets/ui_dashboard.png',
  '/assets/ui_dashboard.png',
  '/assets/ui_dashboard.png',
];

const TrustAccounting = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = activeIndex >= 0 ? TA_IMAGES[activeIndex] : TA_IMAGES[0];

  return (
    <section ref={ref} className="bg-white py-16 text-[#001f2b]">
      <div className="container-stax">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-none tracking-[-0.06em]"
        >
          Trust Accounting
        </motion.h2>
        <div className="mt-16 grid items-start gap-16 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-[1.85rem] bg-[#022f3b] p-5 shadow-[0_28px_70px_rgba(0,31,43,0.18)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage + activeIndex}
                  src={currentImage}
                  alt="Trust Accounting Interface"
                  className="w-full rounded-[1.1rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img src="/assets/icon_ta.png" alt="Trust Accounting" className="h-24 w-24 object-contain" />
            <p className="mt-8 max-w-[30rem] text-[1.15rem] leading-8 text-[#597786]">
              Streamline trust accounting processes with AI-driven automation for unparalleled accuracy and efficiency.
            </p>
            <div className="mt-10">
              <FeatureAccordion items={trustFeatures} activeIndex={activeIndex} onSelect={setActiveIndex} />
            </div>
            <div className="mt-8">
              <Link to="/trust-accounting" className="inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-5 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]">
                Learn more about TA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustAccounting;
