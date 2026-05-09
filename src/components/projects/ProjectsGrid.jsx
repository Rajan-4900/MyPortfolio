import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects, onProjectClick }) => {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-400 text-lg">No projects found for this category.</p>
      </div>
    );
  }

  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]"
    >
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={onProjectClick} 
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsGrid;
