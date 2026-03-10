import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FeatureAccordion from '../components/FeatureAccordion';
import SectionLabel from '../components/SectionLabel';
import { productFeatures } from '../content/stax';

const CX_IMAGES = [
  '/assets/ui_workflow.png',
  '/assets/ui_workflow.png',
  '/assets/ui_workflow.png',
  '/assets/ui_workflow.png',
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = activeIndex >= 0 ? CX_IMAGES[activeIndex] : CX_IMAGES[0];

  return (
    <section ref={ref} id="products" className="bg-white py-28 text-[#001f2b]">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionLabel text="Products" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-center text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-none tracking-[-0.06em]"
        >
          Client Experience
        </motion.h2>
        <div className="mt-16 grid items-start gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/assets/icon_cx.png" alt="Client Experience" className="h-24 w-24 object-contain" />
            <p className="mt-8 max-w-[30rem] text-[1.15rem] leading-8 text-[#597786]">
              Revolutionize client interactions and plan administration with an intelligent, all-in-one platform.
            </p>
            <div className="mt-10">
              <FeatureAccordion items={productFeatures} activeIndex={activeIndex} onSelect={setActiveIndex} />
            </div>
            <div className="mt-8">
              <Link to="/client-experience" className="inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-5 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]">
                Learn more about CX
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-[1.85rem] bg-[#022f3b] p-5 shadow-[0_28px_70px_rgba(0,31,43,0.18)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage + activeIndex}
                  src={currentImage}
                  alt="Client Experience Interface"
                  className="w-full rounded-[1.1rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
