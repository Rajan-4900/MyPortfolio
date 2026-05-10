import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Abstract glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/20 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to bring your ideas to life?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm currently available for freelance work and open to new opportunities. Let's collaborate and build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40 focus:outline-none w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                <span className="relative flex items-center">
                  Let's Work Together
                  <FaPaperPlane className="ml-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
