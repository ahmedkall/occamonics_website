import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    initials: 'CT',
    quote: 'Stax.ai\'s modern portal design is the unicorn I\'ve been searching for. Plan sponsors, financial advisors, payroll vendors, and compliance consultants all seamlessly have access to the information they need...This is a game changer.',
    name: 'Christopher Tipper',
    title: 'CEO, Hunter Benefits Consulting Group',
  },
  {
    initials: 'MR',
    quote: 'Stax.ai has transformed how we serve our clients by automating time consuming tasks and freeing our team to focus on delivering exceptional client service and driving real value. The company\'s relentless innovation continues to revolutionize our operations.',
    name: 'Matthew Reimer',
    title: 'Managing Partner, MAP Retirement',
  },
  {
    initials: 'TT',
    quote: 'The platform\'s automation capabilities have dramatically reduced our manual workload while improving accuracy. We\'re now able to scale our operations efficiently and deliver a superior experience to our plan sponsors.',
    name: 'Tom Tsaris, APA',
    title: 'CEO, Nexus Administration',
  },
];

const CXTestimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#002c39] py-28">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <motion.img
          src="/assets/hero_geometric_2.png"
          alt=""
          className="w-[36rem]"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative z-10 container-stax">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[48rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#0f4652]">
                <span className="text-lg font-bold text-[#1fd3ee]">
                  {TESTIMONIALS[current].initials}
                </span>
              </div>
              <blockquote className="text-[clamp(1.1rem,2.2vw,1.55rem)] font-medium leading-[1.5] text-white/85">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-[#1fd3ee]">
                {TESTIMONIALS[current].name}
              </p>
              <p className="mt-1 text-[0.78rem] text-white/50">
                {TESTIMONIALS[current].title}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-[#1fd3ee]/50 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-[#1fd3ee]/50 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CXTestimonials;
