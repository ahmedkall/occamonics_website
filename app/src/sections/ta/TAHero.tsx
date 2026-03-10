import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StackMark from '../../components/StackMark';

const TAHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#002c39] pt-36 pb-0">
      <div className="absolute inset-0 bg-[url('/assets/video_bg.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#002c39]/60 via-[#002c39]/40 to-[#002c39]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(31,211,238,0.08),transparent_70%)]" />
      <div className="relative z-10 container-stax text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <StackMark className="h-14 w-14 text-[#1fd3ee]" />
          </motion.div>
          <h1 className="text-[clamp(2.8rem,6vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
            Trust Accounting
          </h1>
          <h2 className="mx-auto mt-4 max-w-[36rem] text-[1.08rem] leading-7 text-white/62">
            Automate trust accounting—streamline reconciliations, reduce errors, and save hours.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-[52rem]"
        >
          <img
            src="/assets/ui_dashboard.png"
            alt="Trust Accounting dashboard"
            className="w-full rounded-t-[1.2rem] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TAHero;
