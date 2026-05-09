import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:border-white/10 hover:shadow-2xl transition-all cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Image Preview Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20 flex space-x-2">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-full bg-[#0F172A]/80 text-white hover:bg-blue-500 transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
              <FaGithub size={16} />
            </a>
          )}
          {project.live_demo_url && (
            <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-full bg-[#0F172A]/80 text-white hover:bg-blue-500 transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 delay-75">
              <FaExternalLinkAlt size={14} className="m-[1px]" />
            </a>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{project.description}</p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 rounded-md">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-transparent">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
