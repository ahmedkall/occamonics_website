import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { taHowItWorksSteps } from '../../content/ta';

const TAHowItWorks = () => {
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
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#597786]">
            How it works
          </p>
          <h2 className="mx-auto mt-4 max-w-[34rem] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#001f2b]">
            Effortless Trust Accounting in 5 Simple Steps
          </h2>
        </motion.div>
        <div className="mt-20 space-y-8">
          {taHowItWorksSteps.map((step, i) => {
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
                <div className="flex items-center justify-center rounded-[1.7rem] border border-[#dbe6ea] bg-[#f4fafb] p-12">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#e4f4f7]">
                    <span className="text-4xl font-bold text-[#1fd3ee]/40">{step.num}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TAHowItWorks;
