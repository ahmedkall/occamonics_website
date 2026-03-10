import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DashboardPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#001F2B] py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F2B] via-[#002838] to-[#001F2B]" />

      <div className="container-stax relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Dashboard Image */}
          <img
            src="/assets/ui_dashboard.png"
            alt="Dashboard Preview"
            className="w-full h-auto rounded-2xl"
          />
          
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#001F2B] to-transparent">
            <p className="text-white/80 max-w-xl">
              Stay in control—track annual administration progress, automate tasks, 
              and deliver a seamless experience for your clients, all from one powerful dashboard.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
