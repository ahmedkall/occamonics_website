import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Eye, Target, TrendingUp, Heart } from 'lucide-react';
import SectionLabel from '../../components/SectionLabel';
import { keyBenefits } from '../../content/cx';

const ICONS = [Clock, Eye, Target, TrendingUp, Heart];
const CARDS_PER_VIEW = 3;

const CXBenefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [offset, setOffset] = useState(0);

  const maxOffset = Math.max(0, keyBenefits.length - CARDS_PER_VIEW);
  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));
  const visible = keyBenefits.slice(offset, offset + CARDS_PER_VIEW);

  return (
    <section ref={ref} className="bg-white py-28">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div>
            <SectionLabel text="Key Benefits" />
            <h2 className="mt-4 max-w-[28rem] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#001f2b]">
              Revolutionizing client communication.
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4dbe0] text-[#597786] transition hover:border-[#1fd3ee] hover:text-[#1fd3ee] disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={offset >= maxOffset}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4dbe0] text-[#597786] transition hover:border-[#1fd3ee] hover:text-[#1fd3ee] disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={offset}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {visible.map((b, i) => {
                const Icon = ICONS[offset + i] ?? Clock;
                return (
                  <div
                    key={b.title}
                    className="rounded-[1.4rem] border border-[#dbe6ea] bg-white p-7 shadow-[0_2px_12px_rgba(0,31,43,0.06)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f7f9]">
                      <Icon className="h-5 w-5 text-[#597786]" strokeWidth={1.5} />
                    </div>
                    <h4 className="mt-5 text-[1rem] font-semibold text-[#001f2b]">{b.title}</h4>
                    <p className="mt-3 text-[0.88rem] leading-6 text-[#597786]">{b.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CXBenefits;
