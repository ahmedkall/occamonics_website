import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import CXTestimonials from '../sections/cx/CXTestimonials';
import CTABanner from '../sections/CTABanner';

const fadeUp = { initial: { opacity: 0, y: 30 }, transition: { duration: 0.6 } };
const fadeUpView = (inView: boolean) => (inView ? { opacity: 1, y: 0 } : {});

const CompanyHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#002c39] py-28">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <img src="/assets/hero_geometric_2.png" alt="" className="w-[36rem]" />
      </div>
      <div className="container-stax relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUpView(inView)}
            transition={fadeUp.transition}
            className="rounded-[1.4rem] border border-[#0f4652] bg-[#002c39]/70 p-8 backdrop-blur-md"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1fd3ee]">
              Mission
            </span>
            <p className="mt-4 text-[1.05rem] leading-7 text-white/90">
              Empower retirement professionals to serve America's workforce through technology
              solutions that remove barriers to progress.
            </p>
          </motion.div>
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUpView(inView)}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-[1.4rem] border border-[#0f4652] bg-[#002c39]/70 p-8 backdrop-blur-md"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1fd3ee]">
              Vision
            </span>
            <p className="mt-4 text-[1.05rem] leading-7 text-white/90">
              A retirement ecosystem where empowerment, innovation, and freedom of thought drive
              universal financial security and prosperity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CompanyVideo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative bg-[#002c39] py-28">
        <div className="absolute inset-0 bg-[url('/assets/video_bg.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,44,57,0.7),rgba(0,44,57,0.5))]" />
        <div className="container-stax relative z-10">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUpView(inView)}
            transition={fadeUp.transition}
            className="mx-auto max-w-[56rem] text-center"
          >
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#1fd3ee]">
              TPAs are the backbone of retirement administration—we build the technology that
              empowers them to scale.
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
    </section>
  );
};

const ProductsShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#002c39] py-28">
      <div className="container-stax">
        <div className="space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUpView(inView)}
              transition={fadeUp.transition}
              className="flex justify-center"
            >
              <img src="/assets/ui_workflow.png" alt="Client Experience" className="w-full max-w-[26rem] rounded-[1.2rem]" />
            </motion.div>
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUpView(inView)}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <img src="/assets/icon_cx.png" alt="" className="h-24 w-24 object-contain" />
              <p className="mt-6 text-[1.15rem] leading-8 text-white/85">
                Seamless collaboration, effortless administration.
              </p>
              <Link
                to="/client-experience"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-5 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
              >
                Learn More about Client Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUpView(inView)}
              transition={fadeUp.transition}
              className="order-2 lg:order-1"
            >
              <img src="/assets/icon_ta.png" alt="" className="h-24 w-24 object-contain" />
              <p className="mt-6 text-[1.15rem] leading-8 text-white/85">
                Automate statement sorting, renaming, and filing with real-time reconciliation.
              </p>
              <Link
                to="/trust-accounting"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-5 py-3 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
              >
                Learn More about Trust Accounting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUpView(inView)}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <img src="/assets/ui_dashboard.png" alt="Trust Accounting" className="w-full max-w-[26rem] rounded-[1.2rem]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyPage = () => {
  useEffect(() => {
    document.title = 'Stax.ai | About Our Company';
  }, []);

  return (
    <main className="bg-[#002c39]">
      <CompanyHero />
      <CXTestimonials />
      <CompanyVideo />
      <ProductsShowcase />
      <CTABanner />
    </main>
  );
};

export default CompanyPage;
