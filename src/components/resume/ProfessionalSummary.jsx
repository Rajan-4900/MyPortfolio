import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-white/10 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Professional <br className="hidden md:block" /><span className="text-gradient">Summary</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4"></div>
          </div>
          
          <div className="md:w-2/3 prose prose-invert prose-lg text-slate-400">
            <p>
              I am a dedicated Full Stack Developer with a strong foundation in modern web technologies. My core expertise lies in the React ecosystem, Node.js backend architecture, and designing intuitive user interfaces that scale.
            </p>
            <p>
              During my recent internships, I have successfully contributed to enterprise-level applications, optimizing database performance, and implementing robust features that directly impacted user engagement. 
            </p>
            <p>
              My ultimate career goal is to engineer complex SaaS platforms that solve real-world problems. I am continuously expanding my knowledge in cloud infrastructure, microservices, and modern DevOps practices to become a well-rounded software architect.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalSummary;
