import { motion } from 'framer-motion';

const ProjectStats = ({ projects }) => {
  const total = projects.length;
  const fullstack = projects.filter(p => p.category === 'Full Stack').length;
  const frontend = projects.filter(p => p.category === 'Frontend').length;
  
  // Calculate unique technologies
  const allTechs = projects.flatMap(p => p.technologies);
  const uniqueTechs = new Set(allTechs).size;

  const stats = [
    { label: 'Total Projects', value: total, suffix: '' },
    { label: 'Full Stack', value: fullstack, suffix: '' },
    { label: 'Frontend', value: frontend, suffix: '' },
    { label: 'Technologies', value: uniqueTechs, suffix: '+' }
  ];

  return (
    <section className="py-16 border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 text-center border border-white/5"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
              {stat.value}{stat.suffix}
            </div>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStats;
