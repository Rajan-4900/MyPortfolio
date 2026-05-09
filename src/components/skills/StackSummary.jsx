import { motion } from 'framer-motion';

const summaryStats = [
  { label: 'Total Technologies', value: '25+', color: 'from-blue-400 to-cyan-400' },
  { label: 'Frontend Focus', value: '60%', color: 'from-violet-400 to-purple-400' },
  { label: 'Backend Focus', value: '40%', color: 'from-emerald-400 to-teal-400' }
];

const StackSummary = () => {
  return (
    <section className="py-20 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          {summaryStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <div className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-400 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StackSummary;
