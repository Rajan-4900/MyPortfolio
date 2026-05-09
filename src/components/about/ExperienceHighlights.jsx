import { motion } from 'framer-motion';

const highlights = [
  { label: 'Lines of Code Written', value: '500K+', color: 'from-blue-500 to-cyan-500' },
  { label: 'Cups of Coffee', value: '1,240', color: 'from-violet-500 to-purple-500' },
  { label: 'GitHub Contributions', value: '850+', color: 'from-green-500 to-emerald-500' },
  { label: 'Hours of Debugging', value: 'Too Many', color: 'from-orange-500 to-red-500' },
];

const ExperienceHighlights = () => {
  return (
    <section className="py-12 relative">
      <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative border border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                {item.value}
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
