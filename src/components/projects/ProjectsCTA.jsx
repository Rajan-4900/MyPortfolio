import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const ProjectsCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass-card rounded-3xl p-10 md:p-16 border border-white/10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
          >
            <FaPaperPlane className="mr-3" />
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsCTA;
