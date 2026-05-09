import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import AboutHero from '../components/about/AboutHero';
import BiographySection from '../components/about/BiographySection';
import JourneyTimeline from '../components/about/JourneyTimeline';
import StrengthsSection from '../components/about/StrengthsSection';
import EducationSection from '../components/about/EducationSection';
import ExperienceHighlights from '../components/about/ExperienceHighlights';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  return (
    <PageTransition>
      <SEOProvider 
        title="About Me" 
        description="Learn more about my journey, technical background, strengths, and professional experience as a Full Stack Developer."
      />
      <div className="flex flex-col">
        <AboutHero />
        <BiographySection />
        <JourneyTimeline />
        <StrengthsSection />
        <EducationSection />
        <ExperienceHighlights />
        <AboutCTA />
      </div>
    </PageTransition>
  );
};

export default About;
