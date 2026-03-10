import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Workflow, BarChart3, CreditCard, Inbox, FileText } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useCases } from '../content/stax';

const ICONS = [Workflow, BarChart3, CreditCard, Inbox, FileText];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="usecases" className="bg-white py-28 text-[#001f2b]">
      <div className="container-stax">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionLabel text="Use cases" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-center text-[clamp(2.5rem,4.6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.06em]"
        >
          Solutions tailored for TPAs.<br />
          Engineered for productivity.
        </motion.h2>
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative min-h-[28rem]"
          >
            <div className="sticky top-28 rounded-[2rem] bg-[linear-gradient(180deg,#e8f7fa,#d5f1f8)] p-8">
              <motion.img
                src="/assets/hero_geometric_1.png"
                alt=""
                className="mx-auto w-full max-w-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {useCases.map((useCase, index) => {
              const Icon = ICONS[index];
              const isAlt = index % 2 === 1;

              return (
                <motion.div
                  key={useCase.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group flex min-h-[17rem] flex-col justify-between rounded-[1.7rem] border p-8 shadow-[0_20px_50px_rgba(0,31,43,0.05)] transition hover:shadow-[0_28px_65px_rgba(0,31,43,0.1)] ${isAlt ? 'border-[#c8e6ed] bg-[#e8f7fa]' : 'border-[#dbe6ea] bg-white'}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[#597786]" strokeWidth={1.5} />
                      <span className="inline-flex rounded-full border border-[#d6e5ea] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#001f2b]">
                        Use case &nbsp;.{useCase.number}
                      </span>
                    </div>
                    <h4 className="mt-5 text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em]">
                      {useCase.title}
                    </h4>
                    <p className="mt-4 text-[0.95rem] leading-7 text-[#597786]">{useCase.description}</p>
                  </div>
                  <a
                    href="#usecases"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#1fd3ee] px-5 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
