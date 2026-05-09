import PageTransition from '../animations/PageTransition';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import TechStackPreview from '../components/home/TechStackPreview';
import FeaturedProjectsPreview from '../components/home/FeaturedProjectsPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-8 md:gap-16">
        <HeroSection />
        <StatsSection />
        <TechStackPreview />
        <FeaturedProjectsPreview />
        <CTASection />
      </div>
    </PageTransition>
  );
};

export default Home;
