import { motion } from 'framer-motion';
import StackMark from '../components/StackMark';

const MissionSection = () => (
  <section className="relative overflow-hidden bg-[#002c39] pb-16 pt-10 text-white">
    <div className="absolute inset-x-0 bottom-0 h-[320px] bg-[radial-gradient(circle_at_top,rgba(31,211,238,0.2),transparent_58%)]" />
    <div className="container-stax relative z-10">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[44rem]"
        >
          <h2 className="text-[clamp(2.9rem,5vw,4.65rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#c4d3d8]">
            TPAs using Stax.ai{' '}
            <StackMark className="inline-block h-[0.85em] w-[0.85em] align-[-0.08em] text-[#1fd3ee]" />
            {' '}are scaling faster than ever—automating workflows, reducing busywork, and delivering exceptional service that plan sponsors trust and appreciate.
          </h2>
          <a
            href="#products"
            className="mt-10 inline-flex rounded-full border border-[#1fd3ee]/50 px-5 py-3 text-sm font-medium text-[#1fd3ee] transition hover:bg-[#1fd3ee]/10"
          >
            Our Mission
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <img src="/assets/ui_dashboard.png" alt="Stax.ai dashboard" className="w-full rounded-[1.75rem] shadow-[0_30px_80px_rgba(0,0,0,0.35)]" />
          <p className="mt-6 text-sm leading-6 text-white/55">
            Stay in control—track annual administration progress, automate tasks, and deliver a seamless experience for your clients, all from one powerful dashboard.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionSection;
