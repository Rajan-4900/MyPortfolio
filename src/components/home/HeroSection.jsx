import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Full Stack Web Developer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Building Modern <br className="hidden md:block" />
              <span className="text-gradient">Full Stack Web</span> <br className="hidden md:block" />
              Experiences
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              I engineer scalable, high-performance web applications with a focus on elegant UI/UX design and robust backend architectures. Turning complex problems into intuitive digital solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="group">
                View Projects 
                <FaArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-5 pt-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block h-[500px] w-full"
          >
            {/* Abstract Decorative Editor Mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Window Header */}
              <div className="h-10 bg-[#0F172A]/80 border-b border-white/5 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              {/* Code Content placeholder */}
              <div className="p-6 font-mono text-sm text-slate-300">
                <div className="text-blue-400 mb-2">import <span className="text-white">{'{'}</span> <span className="text-violet-400">useState</span>, <span className="text-violet-400">useEffect</span> <span className="text-white">{'}'}</span> from <span className="text-green-400">'react'</span>;</div>
                <br />
                <div className="text-blue-400">const <span className="text-yellow-200">Developer</span> = <span className="text-white">() {`=>`} {'{'}</span></div>
                <div className="pl-4 mt-2">
                  <div className="text-slate-400">// Crafting exceptional digital experiences</div>
                  <div className="text-blue-400 mt-2">return <span className="text-white">(</span></div>
                  <div className="pl-4 mt-1 text-white">
                    <span className="text-slate-500">&lt;</span><span className="text-blue-300">Portfolio</span>
                    <br />
                    <span className="pl-4 text-violet-300">quality</span>=<span className="text-green-400">"Premium"</span>
                    <br />
                    <span className="pl-4 text-violet-300">design</span>=<span className="text-green-400">"Human-crafted"</span>
                    <br />
                    <span className="pl-4 text-violet-300">architecture</span>=<span className="text-green-400">"Scalable"</span>
                    <br />
                    <span className="text-slate-500">/&gt;</span>
                  </div>
                  <div className="text-white">);</div>
                </div>
                <div className="text-white">{'}'}</div>
                <br />
                <div className="text-blue-400">export default <span className="text-yellow-200">Developer</span>;</div>
              </div>
            </motion.div>
            
            {/* Floating abstract elements */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-2xl opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
