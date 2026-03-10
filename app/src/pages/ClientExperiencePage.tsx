import { useEffect } from 'react';
import CXHero from '../sections/cx/CXHero';
import WhyCX from '../sections/cx/WhyCX';
import Touchpoints from '../sections/cx/Touchpoints';
import ProductBulletBlock from '../components/ProductBulletBlock';
import ProductFeatureBlock from '../components/ProductFeatureBlock';
import ElevateCTA from '../sections/cx/ElevateCTA';
import CXHowItWorks from '../sections/cx/CXHowItWorks';
import CXTestimonials from '../sections/cx/CXTestimonials';
import CXBenefits from '../sections/cx/CXBenefits';
import CTABanner from '../sections/CTABanner';
import { censusFeatures, portalFeatures, inboxFeatures, insightFeatures, advisorFeatures, resourceHubFeatures, salesFeatures } from '../content/cx';

const ClientExperiencePage = () => {
  useEffect(() => { document.title = 'Stax.ai CX | TPA Client Experience & Automation Platform'; }, []);
  return (
  <main className="bg-[#002c39]">
    <CXHero />
    <WhyCX />
    <Touchpoints />

    <ProductBulletBlock
      heading="Census and Payroll Automation"
      subtitle="From Collection to Compliance, Seamlessly Automated. Eliminate manual workflows and back-and-forth with plan sponsors."
      bullets={censusFeatures}
      callout="Reduce errors, ensure compliance, and save valuable time for your team."
      imageSrc="/assets/ui_workflow.png"
      imageAlt="Census and Payroll Automation"
    />

    <ProductBulletBlock
      heading="White-label Client Portal"
      subtitle="A Modern Experience Tailored for Your Clients. Transform the way plan sponsors interact with you through a customizable, branded client portal."
      bullets={portalFeatures}
      callout="Leading TPAs are elevating client relationships with a seamless, branded portal for secure collaboration and real-time insights."
      imageSrc="/assets/ui_dashboard.png"
      imageAlt="White-label Client Portal"
      reversed
    />

    <ProductFeatureBlock
      heading="AI-powered Inbox, To-do, and CRM"
      subtitle="Stay organized with an AI-driven inbox, smart to-dos, and a CRM designed for seamless client management."
      features={inboxFeatures}
      callout="Top TPAs are saving time, staying proactive, and effortlessly managing client requests with AI-powered organization."
      imageSrc="/assets/ui_workflow.png"
      imageAlt="AI-powered Inbox"
    />

    <ProductFeatureBlock
      heading="Unmatched Insights for Smarter Decisions"
      subtitle="Gain real-time visibility into every plan, task, and client interaction—empowering smarter decisions and proactive TPA management."
      features={insightFeatures}
      callout="For CFOs and COOs, Stax.ai CX's dashboards and reporting tools are game-changers. They don't just show you data—they empower you to predict trends, drive efficiency, and achieve exceptional results."
      imageSrc="/assets/ui_dashboard.png"
      imageAlt="Unmatched Insights"
      reversed
    />

    <ProductFeatureBlock
      heading="For Financial Advisors and CPAs"
      subtitle="Strengthen partnerships with financial advisors and CPAs through seamless collaboration, shared insights, and automated data workflows—ensuring accuracy, efficiency, and better client outcomes."
      features={advisorFeatures}
      callout="Top TPAs are building stronger advisor and CPA relationships—automating data sharing, improving accuracy, and delivering unmatched client service."
      imageSrc="/assets/ui_workflow.png"
      imageAlt="Financial Advisors"
    />

    <ProductFeatureBlock
      heading="Your Centralized Resource Hub"
      subtitle="Simplify workflows and collaboration with a one-stop system for templates, forms, and team knowledge."
      features={resourceHubFeatures}
      callout="Empower your team to work smarter and faster with a centralized hub for all your operational needs."
      imageSrc="/assets/ui_dashboard.png"
      imageAlt="Resource Hub"
      reversed
    />

    <ProductFeatureBlock
      heading="Drive Sales with Automation"
      subtitle="Turn efficiency into growth—automate client onboarding, streamline proposals, and accelerate deal closures with AI-powered workflows."
      features={salesFeatures}
      callout="Top TPAs are closing deals faster with automated follow-ups, seamless onboarding, and AI-powered sales workflows."
      imageSrc="/assets/ui_workflow.png"
      imageAlt="Drive Sales"
    />

    <ElevateCTA />
    <CXHowItWorks />
    <CXTestimonials />
    <CXBenefits />
    <CTABanner />
  </main>
  );
};

export default ClientExperiencePage;
