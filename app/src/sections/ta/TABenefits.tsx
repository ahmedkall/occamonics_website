import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { taBenefits } from '../../content/ta';

const TABenefits = () => {
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
            Benefits
          </p>
          <h2 className="mx-auto mt-4 max-w-[30rem] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#001f2b]">
            Say goodbye to manual data entry challenges
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {taBenefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="rounded-[1.4rem] border border-[#dbe6ea] bg-[#f4fafb] p-7"
            >
              <h4 className="text-[1rem] font-semibold text-[#001f2b]">{b.title}</h4>
              <p className="mt-3 text-[0.88rem] leading-6 text-[#597786]">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TABenefits;
