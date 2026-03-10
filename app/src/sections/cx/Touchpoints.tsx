import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { touchpoints } from '../../content/cx';

const GlowOrb = () => (
  <div className="relative flex h-14 w-14 items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-[#1fd3ee]/20 blur-xl" />
    <div className="absolute inset-1 rounded-full bg-[#1fd3ee]/15 blur-lg" />
    <div className="relative h-8 w-8 rounded-full bg-[radial-gradient(circle_at_40%_35%,#5eeaff,#1fd3ee_50%,#0fa8be)] shadow-[0_0_24px_rgba(31,211,238,0.5)]" />
  </div>
);

const Touchpoints = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#002c39] py-24">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-white">
            Streamline Every Touchpoint
          </h2>
          <p className="mx-auto mt-4 max-w-[36rem] text-[1rem] leading-7 text-white/60">
            Deliver seamless client experiences from onboarding to annual administration in one powerful platform.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {touchpoints.map((tp, i) => (
            <motion.div
              key={tp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-[1.4rem] border border-[#0f4652] bg-[linear-gradient(180deg,rgba(4,55,67,0.6),rgba(0,29,38,0.9))] p-7"
            >
              <GlowOrb />
              <h3 className="mt-5 text-[1.15rem] font-semibold text-white">{tp.title}</h3>
              <p className="mt-3 text-[0.88rem] leading-6 text-white/58">{tp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Touchpoints;
