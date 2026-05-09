import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBookReader } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <section className="py-20 relative">
      <div className="text-center mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Education & <span className="text-gradient">Growth</span>
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
            <FaGraduationCap size={24} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">University Degree</h4>
          <p className="text-sm text-blue-400 mb-4">Bachelor of Computer Science</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Focused on data structures, algorithms, and software engineering principles. Built a strong foundational understanding of computer science.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6">
            <FaCertificate size={24} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Certifications</h4>
          <p className="text-sm text-violet-400 mb-4">Modern Web Development</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Completed advanced certifications in React, Node.js, and Cloud Computing. Actively applying modern industry standards to personal projects.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
            <FaBookReader size={24} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
          <p className="text-sm text-emerald-400 mb-4">Self-Directed Study</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Passionate about reading technical documentation, exploring new frameworks, and participating in open-source discussions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
