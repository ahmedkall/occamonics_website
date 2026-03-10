import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TAHero from '../sections/ta/TAHero';
import WhyTA from '../sections/ta/WhyTA';
import ProductBulletBlock from '../components/ProductBulletBlock';
import ROICTA from '../sections/ta/ROICTA';
import TAHowItWorks from '../sections/ta/TAHowItWorks';
import TATestimonial from '../sections/ta/TATestimonial';
import TABenefits from '../sections/ta/TABenefits';
import CTABanner from '../sections/CTABanner';
import { brokerageFeatures, reconciliationFeatures } from '../content/ta';

const TrustAccountingPage = () => {
  useEffect(() => { document.title = 'Stax.ai TA | Automated Trust Accounting for TPAs'; }, []);
  return (
  <main className="bg-[#002c39]">
    <TAHero />
    <WhyTA />

    <section className="bg-white py-24">
      <div className="container-stax text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto max-w-[36rem] text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#001f2b]">
            Smarter Trust Accounting, Eliminate Manual Work
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-[1rem] leading-7 text-[#597786]">
            Automate trust statement processing, transaction splitting, and reconciliations. Eliminate manual data entry and ensure accuracy—saving hours on every plan.
          </p>
        </motion.div>
      </div>
    </section>

    <ProductBulletBlock
      heading="Brokerage Statement Filing"
      subtitle="Effortless Sorting, Filing, and Organizing. Eliminate manual document management with AI-powered automation."
      bullets={brokerageFeatures}
      callout="Save hours every week by letting AI handle document sorting and filing automatically."
      imageSrc="/assets/ui_workflow.png"
      imageAlt="Brokerage Statement Filing"
    />

    <ProductBulletBlock
      heading="Trust Accounting Reconciliation"
      subtitle="Reconcile with Confidence. Automated matching and instant discrepancy detection for accurate trust accounting."
      bullets={reconciliationFeatures}
      callout="Leading TPAs are reducing reconciliation time by 80% with automated matching and validation."
      imageSrc="/assets/ui_dashboard.png"
      imageAlt="Trust Accounting Reconciliation"
      reversed
    />

    <ROICTA />

    <div className="bg-[#e8f7fa] py-24">
      <div className="container-stax">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.img
              src="/assets/hero_geometric_1.png"
              alt=""
              className="w-full max-w-[20rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#001f2b]">
              Start Saving Time on Trust Accounting
            </h2>
            <p className="mt-4 text-[1rem] leading-7 text-[#597786]">
              See how Stax.ai can transform your trust accounting workflow. Talk to an expert and get started today.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1fd3ee] px-6 py-3.5 text-sm font-semibold text-[#001f2b] transition hover:bg-[#11bbd5]"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>

    <TAHowItWorks />
    <TATestimonial />
    <TABenefits />
    <CTABanner />
  </main>
  );
};

export default TrustAccountingPage;
