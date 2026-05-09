import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
          >
            <FaTimes size={20} />
          </button>

          <div className="overflow-y-auto custom-scrollbar">
            {/* Modal Hero Image */}
            <div className="relative h-64 sm:h-80 w-full bg-[#0F172A]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-10 -mt-16 relative z-10">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                {project.category}
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {project.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                {project.live_demo_url && (
                  <a 
                    href={project.live_demo_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Live Demo
                  </a>
                )}
                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    <FaGithub className="mr-2" size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
