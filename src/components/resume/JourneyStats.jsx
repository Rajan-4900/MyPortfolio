import { motion } from 'framer-motion';

const stats = [
  { label: 'Lines of Code Written', value: '150k+', color: 'from-blue-400 to-cyan-400' },
  { label: 'Commits Pushed', value: '1,200+', color: 'from-violet-400 to-purple-400' },
  { label: 'Coffee Cups Consumed', value: '850+', color: 'from-orange-400 to-red-400' },
  { label: 'Bugs Squashed', value: '500+', color: 'from-emerald-400 to-teal-400' }
];

const JourneyStats = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 pointer-events-none" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-3`}>
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyStats;
