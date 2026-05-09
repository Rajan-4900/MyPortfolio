import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { id: 1, label: 'Projects Completed', value: 24, suffix: '+' },
  { id: 2, label: 'Technologies Learned', value: 15, suffix: '+' },
  { id: 3, label: 'Internship Experience', value: 1, suffix: ' Yr' },
  { id: 4, label: 'Certifications', value: 5, suffix: '' },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#111827]/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-default transition-all duration-300 hover:border-white/10 hover:bg-[#1E293B]"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono flex justify-center items-baseline group-hover:text-blue-400 transition-colors">
                <Counter value={stat.value} />
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
