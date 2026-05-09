import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import LazyImage from '../ui/LazyImage';

const FeaturedProjects = ({ projects, onProjectClick }) => {
  const featured = projects.filter(p => p.featured).slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Featured Highlights</h2>
        <p className="text-slate-400">Deep dives into complex engineering problems.</p>
      </div>

      <div className="space-y-12 md:space-y-24">
        {featured.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Showcase */}
            <div 
              className="w-full lg:w-3/5 group cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] aspect-[16/10] md:aspect-[16/9]">
                <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <LazyImage 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : ''}`}>
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">Featured Project</div>
              <h3 
                className="text-3xl font-bold text-white mb-6 hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                {project.title}
              </h3>
              
              <div className="glass-card p-6 rounded-2xl border border-white/5 mb-6 relative z-20 hover:border-white/10 transition-colors shadow-lg">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-slate-400 text-sm font-medium">
                    {tech}{idx < project.technologies.length - 1 ? <span className="mx-2 text-white/20">•</span> : ''}
                  </span>
                ))}
              </div>

              <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                    <FaGithub size={22} />
                  </a>
                )}
                {project.live_demo_url && (
                  <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
