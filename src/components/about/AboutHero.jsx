import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] -z-10 rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-violet-900/10 blur-[100px] -z-10 rounded-full mix-blend-screen" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Discover My Story</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            About <span className="text-gradient">Me</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-slate-300">
            Crafting elegant solutions through clean code and intuitive design.
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            I'm a passionate Full Stack Developer focused on building scalable, performant, and accessible digital experiences. I bridge the gap between design and engineering to create products that not only look great but work flawlessly under the hood.
          </p>
        </motion.div>

        {/* Right Visual Image/Abstract Concept */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center"
        >
          {/* Abstract Composition replacing a standard image */}
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-3xl rotate-3 blur-sm transition-transform duration-700 hover:rotate-6"></div>
            <div className="absolute inset-0 bg-[#1E293B] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-12 border-b border-white/10 flex items-center px-4 bg-black/20 space-x-2">
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              </div>
              <div className="flex-1 p-6 relative overflow-hidden">
                <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[40px]"></div>
                <div className="absolute bottom-10 -left-10 w-40 h-40 bg-violet-500/20 rounded-full blur-[40px]"></div>
                
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/5 rounded-full animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse delay-75"></div>
                  <div className="h-4 w-5/6 bg-white/5 rounded-full animate-pulse delay-150"></div>
                  <div className="h-4 w-2/3 bg-white/5 rounded-full animate-pulse delay-300"></div>
                </div>
                
                <div className="mt-8">
                   <div className="text-4xl font-mono text-blue-400 mb-2">{"</>"}</div>
                   <div className="text-sm font-mono text-slate-400">Engineering the future of the web.</div>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-20 bg-[#0F172A]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-xl"
            >
              <span className="text-sm font-medium text-blue-400">UI/UX</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-20 bg-[#0F172A]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-xl"
            >
              <span className="text-sm font-medium text-violet-400">Backend</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
