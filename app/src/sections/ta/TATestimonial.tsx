import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TATestimonial = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#002c39] py-28">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[42rem] text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[#1fd3ee]/30 bg-[#0f4652]">
            <span className="text-xl font-bold text-[#1fd3ee]">MZ</span>
          </div>
          <blockquote className="text-[clamp(1.3rem,2.4vw,1.75rem)] font-medium leading-[1.4] tracking-[-0.02em] text-white/82 italic">
            &ldquo;In partnership with Stax.ai, we are harnessing the power of AI to revolutionize the redundant, daily tasks within the third-party administration industry.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-white">Michelle Zentner, QKAB, RPA</p>
          <p className="mt-1 text-[0.78rem] text-white/55">Vice President of Operations, The Retirement Advantage</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TATestimonial;
