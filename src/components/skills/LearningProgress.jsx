import { motion } from 'framer-motion';

const learningPath = [
  { title: "Currently Learning", items: ["Advanced TypeScript Patterns", "GraphQL & Apollo Server", "Docker Containerization"] },
  { title: "Next in Roadmap", items: ["Microservices Architecture", "AWS Cloud Practitioner", "WebSockets / Realtime Systems"] },
  { title: "Long-term Goals", items: ["WebAssembly", "Machine Learning Integration", "Open Source Contributions"] }
];

const LearningProgress = () => {
  return (
    <section className="py-20 relative border-b border-white/5 bg-[#111827]/30">
      <div className="mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Learning <span className="text-gradient">Roadmap</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl"
        >
          Technology moves fast. Here's what I'm focusing on to stay ahead of the curve.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {learningPath.map((path, index) => (
          <motion.div 
            key={path.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            {/* Minimal top border accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500 opacity-50 group-hover:opacity-100 transition-opacity`} />
            
            <h4 className="text-lg font-bold text-white mb-6 mt-2">{path.title}</h4>
            <ul className="space-y-4">
              {path.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningProgress;
