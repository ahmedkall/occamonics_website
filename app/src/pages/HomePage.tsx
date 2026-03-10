import Hero from '../sections/Hero';
import MissionSection from '../sections/MissionSection';
import Products from '../sections/Products';
import TrustAccounting from '../sections/TrustAccounting';
import VideoBanner from '../sections/VideoBanner';
import UseCases from '../sections/UseCases';
import CTABanner from '../sections/CTABanner';
import FooterCTA from '../sections/FooterCTA';
import ResourceLibrary from '../sections/ResourceLibrary';

const HomePage = () => (
  <main>
    <Hero />
    <MissionSection />
    <Products />
    <TrustAccounting />
    <FooterCTA />
    <VideoBanner />
    <UseCases />
    <ResourceLibrary />
    <CTABanner />
  </main>
);

export default HomePage;
