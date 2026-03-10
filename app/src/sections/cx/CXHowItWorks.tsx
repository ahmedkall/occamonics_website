import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from '../../components/SectionLabel';
import { howItWorksSteps } from '../../content/cx';

const STEP_IMAGES = [
  '/assets/ui_dashboard.png',
  '/assets/ui_workflow.png',
  '/assets/ui_dashboard.png',
  '/assets/ui_workflow.png',
  '/assets/ui_dashboard.png',
];

const CXHowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-28">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionLabel text="How it works" />
          <h2 className="mx-auto mt-4 max-w-[34rem] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#001f2b]">
            Enhancing how TPAs handle client communications.
          </h2>
        </motion.div>
        <div className="mt-20 space-y-8">
          {howItWorksSteps.map((step, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className={`grid items-center gap-10 lg:grid-cols-2 ${isReversed ? 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]' : ''}`}
              >
                <div className="rounded-[1.7rem] border border-[#dbe6ea] bg-[#f4fafb] p-10">
                  <span className="rounded-full border border-[#d6e8ed] bg-white px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#001f2b]">
                    Step {step.num}
                  </span>
                  <h3 className="mt-6 text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#001f2b]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.92rem] leading-7 text-[#597786]">{step.description}</p>
                </div>
                <div className="overflow-hidden rounded-[1.7rem] border border-[#dbe6ea] bg-[#e4f4f7]">
                  <img
                    src={STEP_IMAGES[i]}
                    alt={step.title}
                    className="w-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CXHowItWorks;
