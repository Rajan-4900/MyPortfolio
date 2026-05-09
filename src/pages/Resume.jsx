import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import ResumeHero from '../components/resume/ResumeHero';
import ProfessionalSummary from '../components/resume/ProfessionalSummary';
import ExperienceTimeline from '../components/resume/ExperienceTimeline';
import EducationSection from '../components/resume/EducationSection';
import CertificationsSection from '../components/resume/CertificationsSection';
import AchievementsSection from '../components/resume/AchievementsSection';
import JourneyStats from '../components/resume/JourneyStats';
import DownloadResume from '../components/resume/DownloadResume';
import ResumeCTA from '../components/resume/ResumeCTA';

const Resume = () => {
  return (
    <PageTransition>
      <SEOProvider 
        title="Resume & Experience" 
        description="Review my professional experience, education, certifications, and download my interactive CV."
      />
      <div className="flex flex-col min-h-screen">
        <ResumeHero />
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
          <ProfessionalSummary />
          <ExperienceTimeline />
          <EducationSection />
          <CertificationsSection />
          <AchievementsSection />
          <JourneyStats />
        </div>
        <DownloadResume />
        <ResumeCTA />
      </div>
    </PageTransition>
  );
};

export default Resume;
