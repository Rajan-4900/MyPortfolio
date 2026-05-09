import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import SkillsHero from '../components/skills/SkillsHero';
import FrontendSkills from '../components/skills/FrontendSkills';
import BackendSkills from '../components/skills/BackendSkills';
import DatabaseSkills from '../components/skills/DatabaseSkills';
import ToolsSection from '../components/skills/ToolsSection';
import LearningProgress from '../components/skills/LearningProgress';
import StackSummary from '../components/skills/StackSummary';
import SkillsCTA from '../components/skills/SkillsCTA';

const Skills = () => {
  return (
    <PageTransition>
      <SEOProvider 
        title="Technical Skills" 
        description="Explore my comprehensive technical stack, including React, Node.js, databases, and DevOps tools."
      />
      <div className="flex flex-col">
        <SkillsHero />
        <FrontendSkills />
        <BackendSkills />
        <DatabaseSkills />
        <ToolsSection />
        <LearningProgress />
        <StackSummary />
        <SkillsCTA />
      </div>
    </PageTransition>
  );
};

export default Skills;
