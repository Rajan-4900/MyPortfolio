import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const frontendSkills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 95 },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: 90 },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 85 },
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400', level: 90 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: 95 },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500', level: 80 }
];

const FrontendSkills = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Frontend <span className="text-gradient">Technologies</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl"
        >
          Building responsive, accessible, and highly interactive user interfaces.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frontendSkills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 group hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${skill.color}`}>
                  <skill.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-white">{skill.name}</h4>
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors">{skill.level}%</span>
            </div>
            
            {/* Progress Bar Visualization */}
            <div className="h-2 w-full bg-[#0F172A] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 relative"
              >
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FrontendSkills;
