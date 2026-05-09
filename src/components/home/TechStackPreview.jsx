import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiSupabase
} from 'react-icons/si';

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
    ]
  },
  {
    category: 'Database',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    ]
  },
  {
    category: 'Tools',
    technologies: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'Figma', icon: FaFigma, color: 'text-pink-500' },
    ]
  }
];

const TechStackPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          My <span className="text-gradient">Tech Stack</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          A comprehensive toolkit of modern technologies I use to build scalable, high-performance applications.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStack.map((group, groupIndex) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-3">
              {group.category}
            </h3>
            <div className="space-y-4">
              {group.technologies.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg bg-white/5 mr-4 group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/10 ${tech.color}`}>
                    <tech.icon size={20} />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackPreview;
