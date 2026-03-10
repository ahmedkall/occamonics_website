import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { FeatureItem } from '../content/stax';

type FeatureAccordionProps = {
  items: FeatureItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const FeatureAccordion = ({ items, activeIndex, onSelect }: FeatureAccordionProps) => (
  <div>
    {items.map((item, index) => {
      const isOpen = activeIndex === index;

      return (
        <div key={item.title} className="border-b border-[#d4dbe0] py-5">
          <button
            type="button"
            onClick={() => onSelect(isOpen ? -1 : index)}
            className="flex w-full items-center justify-between gap-6 text-left text-[1.08rem] font-semibold leading-7 text-[#001f2b]"
          >
            <span className="flex items-center gap-3">
              <ChevronRight className={`h-4 w-4 text-[#18d5f0] transition-transform ${isOpen ? 'rotate-90' : ''}`} />
              {item.title}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="ml-7 mt-4 border-l-2 border-[#18d5f0] pl-5 text-[0.95rem] leading-7 text-[#597786]">
                  {item.description}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      );
    })}
  </div>
);

export default FeatureAccordion;
