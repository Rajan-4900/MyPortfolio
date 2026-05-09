import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import TechStackPreview from '../components/home/TechStackPreview';
import FeaturedProjectsPreview from '../components/home/FeaturedProjectsPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <PageTransition>
      <SEOProvider 
        title="Home" 
        description="I'm a Full Stack Developer specializing in building exceptional digital experiences. Discover my projects and skills."
      />
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
