import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { resourceItems } from '../content/stax';
import SectionLabel from '../components/SectionLabel';

const CARD_IMAGES = [
  '/assets/asset_1.jpg',
  '/assets/asset_2.jpg',
  '/assets/asset_3.jpg',
];

const ResourceLibrary = () => (
  <section id="resources" className="bg-white py-28 text-[#001f2b]">
    <div className="container-stax">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="max-w-[44rem]"
      >
        <SectionLabel text="TPA Resource Library" />
        <h2 className="mt-5 text-[clamp(2.5rem,4.5vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
          Learn and lead with confidence through a host of blogs, industry news, and other resources pinpointing our AI-powered future.
        </h2>
      </motion.div>
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {resourceItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group relative flex min-h-[24rem] flex-col overflow-hidden rounded-[1.7rem] border border-[#d9e5ea] shadow-[0_20px_50px_rgba(0,31,43,0.06)] transition hover:shadow-[0_28px_65px_rgba(0,31,43,0.12)]"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={CARD_IMAGES[index]}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#1fd3ee]/85 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">Read More</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-7">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#597786]">
                  {item.type} &nbsp; {item.date}
                </p>
                <h3 className="mt-4 text-[1.35rem] font-semibold leading-[1.12] tracking-[-0.03em]">{item.title}</h3>
              </div>
              <a href="#resources" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#18d5f0]">
                Read More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <a href="#resources" className="inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-6 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]">
          Visit library
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ResourceLibrary;
