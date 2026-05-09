import { motion } from 'framer-motion';
import { FaCode, FaReact, FaServer, FaDatabase } from 'react-icons/fa';

const SkillsHero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/5">
      {/* Background Blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Engineering Arsenal</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Technical <span className="text-gradient">Skills</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-slate-300">
            A comprehensive toolkit for modern web development.
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            My expertise spans the entire development stack, from crafting pixel-perfect interfaces to architecting robust database schemas. I focus on technologies that prioritize performance, developer experience, and scalability.
          </p>
        </motion.div>

        {/* Abstract Floating Icons Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Center Core */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border border-white/10 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96 rounded-full border border-white/5"
            />

            {/* Central Icon */}
            <div className="relative z-10 p-6 glass-card rounded-2xl border border-white/20 shadow-2xl shadow-blue-500/20">
              <FaCode size={48} className="text-blue-400" />
            </div>

            {/* Orbiting Icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 p-4 glass-card rounded-xl border border-white/10"
            >
              <FaReact size={32} className="text-cyan-400" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 p-4 glass-card rounded-xl border border-white/10"
            >
              <FaServer size={32} className="text-green-400" />
            </motion.div>

            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-4 p-4 glass-card rounded-xl border border-white/10"
            >
              <FaDatabase size={32} className="text-violet-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsHero;
