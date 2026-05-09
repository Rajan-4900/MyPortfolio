import { motion } from 'framer-motion';
import { FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiPostman, SiVite } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const tools = [
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white' },
  { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
  { name: 'Figma', icon: FaFigma, color: 'text-pink-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-500' }
];

const ToolsSection = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="text-center mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Tools & <span className="text-gradient">Workflow</span>
        </motion.h3>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div 
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center w-[120px] h-[120px] md:w-[150px] md:h-[150px] group hover:-translate-y-2 hover:border-white/20 transition-all cursor-pointer"
          >
            <div className={`mb-3 transition-transform group-hover:scale-110 ${tool.color}`}>
              <tool.icon size={40} />
            </div>
            <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
