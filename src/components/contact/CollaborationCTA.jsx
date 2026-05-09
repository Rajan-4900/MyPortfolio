import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaRocket } from 'react-icons/fa';

const CollaborationCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to start a project?
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          I'm currently available for freelance work and full-time opportunities. Let's build something exceptional together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 w-full sm:w-auto"
          >
            <FaRocket className="mr-3" />
            View My Projects
          </Link>
          <Link 
            to="/resume" 
            className="inline-flex items-center justify-center px-8 py-4 font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-colors w-full sm:w-auto"
          >
            <FaDownload className="mr-3" />
            Download Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CollaborationCTA;
