import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative bg-[#002c39] py-28">
        <div className="absolute inset-0 bg-[url('/assets/video_bg.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,44,57,0.6),rgba(0,44,57,0.4))]" />
        <div className="relative z-10">
          <div className="container-stax">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-[56rem] text-center"
            >
              <h2 className="text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-white">
                Top TPAs are eliminating paperwork, streamlining operations, and elevating their plan sponsor experience.
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#002c39] py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 h-[70%] w-[60%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(31,211,238,0.08),transparent_65%)]" />
          <motion.img
            src="/assets/hero_geometric_2.png"
            alt=""
            className="absolute right-[10%] top-[10%] w-[22rem] opacity-20"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="relative z-10">
          <div className="container-stax">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-[50rem] text-center"
            >
              <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.06em] text-white">
                Join the automation revolution—eliminate busywork, speed up workflows, and deliver next-level service with Stax.ai.
              </h2>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#1fd3ee] px-6 py-3.5 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
              >
                Play Video
                <Play className="h-4 w-4" fill="currentColor" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
