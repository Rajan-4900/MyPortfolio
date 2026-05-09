import { useState, useMemo } from 'react';
import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import ProjectsHero from '../components/projects/ProjectsHero';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectModal from '../components/projects/ProjectModal';
import ProjectStats from '../components/projects/ProjectStats';
import ProjectsCTA from '../components/projects/ProjectsCTA';
import { useProjects } from '../hooks/useProjects';
import Spinner from '../components/ui/Spinner';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'UI/UX'];

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <PageTransition>
      <SEOProvider 
        title="Projects Portfolio" 
        description="View my latest full stack web development projects, featuring real-world applications and open-source contributions."
      />
      <div className="flex flex-col min-h-screen">
        <ProjectsHero />
        
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center">
            <Spinner size={40} />
            <p className="text-slate-400 mt-4 animate-pulse">Loading projects from Supabase...</p>
          </div>
        ) : error ? (
          <div className="py-32 flex flex-col items-center justify-center text-center px-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 max-w-lg">
              <p className="font-semibold mb-2">Failed to load projects</p>
              <p className="text-sm">{error.message}</p>
            </div>
          </div>
        ) : (
          <>
            <FeaturedProjects projects={projects} onProjectClick={handleOpenModal} />
            
            <section className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">All Projects</h2>
                <p className="text-slate-400">Filter and explore my complete portfolio of work.</p>
              </div>
              
              <ProjectFilters 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
                categories={categories} 
              />
              
              <ProjectsGrid 
                projects={filteredProjects} 
                onProjectClick={handleOpenModal} 
              />
            </section>
            
            <ProjectStats projects={projects} />
          </>
        )}
        
        <ProjectsCTA />

        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={handleCloseModal} 
        />
      </div>
    </PageTransition>
  );
};

export default Projects;
