import { motion } from 'framer-motion';
import { FaPuzzlePiece, FaUsers, FaPaintBrush, FaCodeBranch, FaRocket } from 'react-icons/fa';

const strengths = [
  { icon: FaPuzzlePiece, title: 'Problem Solving', desc: 'Approaching complex bugs logically and methodically.', color: 'text-blue-400' },
  { icon: FaUsers, title: 'Team Collaboration', desc: 'Communicating effectively with designers and engineers.', color: 'text-violet-400' },
  { icon: FaPaintBrush, title: 'UI/UX Interest', desc: 'Translating design mockups into pixel-perfect code.', color: 'text-pink-400' },
  { icon: FaCodeBranch, title: 'Full Stack Development', desc: 'Bridging the gap between the client and server.', color: 'text-green-400' },
  { icon: FaRocket, title: 'Continuous Learning', desc: 'Adapting rapidly to new tools and best practices.', color: 'text-yellow-400' }
];

const StrengthsSection = () => {
  return (
    <section className="py-20 relative border-t border-white/5">
      <div className="text-center mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Personal <span className="text-gradient">Strengths</span>
        </motion.h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {strengths.map((strength, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group hover:border-white/10"
          >
            <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform ${strength.color}`}>
              <strength.icon size={28} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{strength.title}</h4>
            <p className="text-sm text-slate-400">{strength.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StrengthsSection;
