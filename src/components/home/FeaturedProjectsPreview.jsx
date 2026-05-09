import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyImage from '../ui/LazyImage';

const featuredProjects = [
  {
    id: 1,
    title: 'Study Management Platform',
    description: 'A comprehensive study application with intelligent flashcards, real-time sync, and detailed performance analytics dashboards.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Firebase', 'Python', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Financial Loan Dashboard',
    description: 'A high-performance enterprise dashboard for loan applications with liveness detection and real-time session tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'Framer Motion'],
  }
];

const FeaturedProjectsPreview = () => {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            A selection of my recent projects highlighting complex problem-solving and clean UI/UX implementation.
          </motion.p>
        </div>
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
        >
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 font-medium flex items-center group transition-colors">
            View All Projects
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {featuredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:border-white/10 transition-colors"
          >
            {/* Image Container with Hover Scale */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <LazyImage 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <a href="#" className="p-2 rounded-full bg-[#0F172A]/80 text-white hover:bg-blue-500 transition-colors backdrop-blur-md">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-[#0F172A]/80 text-white hover:bg-blue-500 transition-colors backdrop-blur-md">
                  <FaExternalLinkAlt size={16} className="m-[1px]" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={`/projects/${project.id}`} className="inline-flex items-center font-medium text-white hover:text-blue-400 transition-colors w-fit">
                View Details
                <span className="ml-2 w-8 h-[1px] bg-white/30 group-hover:bg-blue-400 group-hover:w-12 transition-all duration-300"></span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile View All Projects Button */}
      <div className="mt-8 text-center md:hidden">
        <Link to="/projects" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjectsPreview;
