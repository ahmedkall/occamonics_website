import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../../components/SectionLabel';

const WhyTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#002c39] py-28">
      <div className="container-stax">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel text="Why Stax.ai?" dark />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[clamp(1.35rem,2.6vw,1.85rem)] font-medium leading-[1.38] tracking-[-0.02em] text-white/82">
              Leading TPAs use Stax.ai to automate reconciliations, eliminate data entry, and ensure accurate transactions. Our AI processes trust statements, splits data, and fits into your workflow—saving hours and boosting compliance.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-5 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
            >
              Product FAQ
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyTA;
