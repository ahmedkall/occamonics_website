import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type FeatureItem = { title: string; description: string };

type Props = {
  heading: string;
  subtitle: string;
  features: FeatureItem[];
  callout: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
};

const ProductFeatureBlock = ({ heading, subtitle, features, callout, imageSrc, imageAlt, reversed = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-[1.7rem] border border-[#0f4652] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    >
      <h3 className="text-[1.55rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#001f2b]">
        {subtitle}
      </h3>
      <ul className="mt-6 space-y-4">
        {features.map((f) => (
          <li key={f.title} className="border-b border-[#e4edf0] pb-4 last:border-b-0">
            <h4 className="text-[0.92rem] font-semibold text-[#001f2b]">{f.title}</h4>
            <p className="mt-1 text-[0.88rem] leading-6 text-[#597786]">{f.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-[#d6e8ed] bg-[#f0f8fa] px-5 py-4">
        <p className="text-[0.85rem] leading-6 text-[#597786]">{callout}</p>
      </div>
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex items-center justify-center"
    >
      <img src={imageSrc} alt={imageAlt} className="w-full max-w-[26rem] rounded-[1.2rem]" />
    </motion.div>
  );

  return (
    <div ref={ref} className="py-20">
      <div className="container-stax">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-white"
        >
          {heading}
        </motion.h2>
        <div className={`mt-12 grid items-center gap-12 lg:grid-cols-2 ${reversed ? 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]' : ''}`}>
          {textBlock}
          {imageBlock}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatureBlock;
