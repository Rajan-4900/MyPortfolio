import { motion } from 'framer-motion';
import { FaNodeJs, FaPython, FaLock, FaNetworkWired } from 'react-icons/fa';

const backendSkills = [
  {
    title: 'Node.js',
    icon: FaNodeJs,
    color: 'text-green-500',
    description: 'Event-driven server architecture and highly scalable RESTful API development.',
  },
  {
    title: 'Express.js',
    icon: FaNetworkWired,
    color: 'text-slate-300',
    description: 'Middleware routing, error handling, and robust server-side logic structuring.',
  },
  {
    title: 'Authentication',
    icon: FaLock,
    color: 'text-blue-400',
    description: 'JWT tokens, OAuth implementations, and secure session management.',
  },
  {
    title: 'Python Scripts',
    icon: FaPython,
    color: 'text-yellow-400',
    description: 'Data processing, automation, and basic machine learning pipeline integrations.',
  }
];

const BackendSkills = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="mb-12 text-right">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Backend <span className="text-gradient">Architecture</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl ml-auto"
        >
          Designing secure, efficient, and scalable server-side systems.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {backendSkills.map((skill, index) => (
          <motion.div 
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-8 flex items-start space-x-6 group hover:border-white/10 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:-translate-y-1"
          >
            <div className={`p-4 rounded-2xl bg-[#0F172A] border border-white/5 group-hover:bg-white/5 transition-colors ${skill.color}`}>
              <skill.icon size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BackendSkills;
