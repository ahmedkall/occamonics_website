import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#002c39] pb-10 pt-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,214,238,0.12),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-[-6rem] h-[16rem] bg-[radial-gradient(circle_at_center,rgba(31,211,238,0.18),transparent_55%)]" />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="container-stax">
          <div className="mx-auto max-w-[44rem] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-[clamp(3.3rem,7vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-white"
            >
              Trusted by 8 of Top 10 TPAs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-6 max-w-[40rem] text-[1.15rem] leading-8 text-white/68"
            >
              Automate payroll and census intake, deliver a next-gen client portal, and boost sponsor satisfaction by 29%—all before the 2025 plan year census season.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#cta" className="btn-primary">
                Get Census-Ready
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="btn-secondary">
                Learn more
              </a>
            </motion.div>
          </div>
          <div className="mt-16 flex items-end justify-center gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-[21%] max-w-[16rem]"
            >
              <motion.img
                src="/assets/hero_geometric_1.png"
                alt=""
                className="w-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="w-[36%] max-w-[30rem]"
            >
              <motion.img
                src="/assets/hero_geometric_2.png"
                alt=""
                className="w-full"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.46 }}
              className="w-[21%] max-w-[16rem]"
            >
              <motion.img
                src="/assets/hero_geometric_1.png"
                alt=""
                className="w-full scale-x-[-1]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
            </motion.div>
          </div>
          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-between gap-5 border-t border-white/10 pt-5 text-sm text-white/82"
          >
            <span className="inline-flex rounded-full border border-[#1fd3ee]/30 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1fd3ee]">
              News
            </span>
            <span className="text-right">
              8 of the Top 10 Retirement TPAs Choose Stax.ai to Power Administration and Growth
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
