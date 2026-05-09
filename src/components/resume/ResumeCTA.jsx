import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaProjectDiagram } from 'react-icons/fa';

const ResumeCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let's build something <span className="text-gradient">amazing</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10">
          Whether you have a question, a project idea, or just want to connect, I'd love to hear from you. My inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 w-full sm:w-auto"
          >
            <FaPaperPlane className="mr-3" />
            Contact Me
          </Link>
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-colors w-full sm:w-auto"
          >
            <FaProjectDiagram className="mr-3" />
            View My Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeCTA;
