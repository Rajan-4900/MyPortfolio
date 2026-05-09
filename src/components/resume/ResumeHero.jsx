import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const ResumeHero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
            <FaBriefcase className="text-blue-400" size={14} />
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Career Profile</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Resume & <br className="hidden md:block" />
            <span className="text-gradient">Experience</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            A comprehensive overview of my professional journey, academic background, and the technical milestones that have shaped my career as a developer.
          </p>
        </motion.div>

        {/* Right Visual - Modern Abstract Dashboard Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[350px] lg:h-[450px] w-full flex items-center justify-center hidden md:flex"
        >
          <div className="relative w-full max-w-md">
            {/* Main floating card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-2xl p-6 border border-white/10 shadow-2xl relative z-20 bg-[#1E293B]/80 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Software Engineer</div>
                    <div className="text-xs text-slate-400">Full Stack Focus</div>
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  Available
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Experience</span>
                  <div className="h-2 flex-grow mx-4 bg-[#0F172A] rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-white">3 Yrs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Projects</span>
                  <div className="h-2 flex-grow mx-4 bg-[#0F172A] rounded-full overflow-hidden">
                    <div className="h-full w-5/6 bg-violet-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-white">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Frontend</span>
                  <div className="h-2 flex-grow mx-4 bg-[#0F172A] rounded-full overflow-hidden">
                    <div className="h-full w-11/12 bg-cyan-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-white">95%</span>
                </div>
              </div>
            </motion.div>

            {/* Background floating decor */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-2xl blur-xl -z-10"
            />
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-10 -left-10 w-48 h-32 glass-card border border-white/5 rounded-2xl -z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeHero;
