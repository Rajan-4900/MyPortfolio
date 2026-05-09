import { motion } from 'framer-motion';
import { FaRegEnvelope } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <FaRegEnvelope className="text-blue-400" />
          <span className="text-sm font-medium text-slate-300 tracking-wider uppercase">Get In Touch</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed"
        >
          Have a question, a project idea, or a job opportunity? I'm always open to discussing new engineering challenges and creative collaborations.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
