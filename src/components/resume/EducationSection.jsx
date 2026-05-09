import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Academic <span className="text-gradient">Background</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 text-white">
            <FaUniversity size={150} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <FaGraduationCap size={32} />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-2xl font-bold text-white">Bachelor of Computer Science</h3>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-slate-300 mt-2 md:mt-0 border border-white/10 w-fit">
                  2020 - 2024
                </span>
              </div>
              <h4 className="text-lg font-medium text-slate-400 mb-4">State University of Technology</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <strong className="text-white block mb-1">Key Coursework:</strong>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Database Management Systems</li>
                    <li>• Web Development Architectures</li>
                    <li>• Software Engineering Principles</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-1">Academic Highlights:</strong>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Graduated with Honors (GPA: 3.8/4.0)</li>
                    <li>• Lead Developer for Senior Capstone Project</li>
                    <li>• Vice President of the Computer Science Club</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
