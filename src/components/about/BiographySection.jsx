import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaLightbulb } from 'react-icons/fa';

const BiographySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* Left Column - Core Biography */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white mb-6">
            My <span className="text-gradient">Background</span>
          </motion.h3>
          
          <motion.div variants={itemVariants} className="prose prose-invert max-w-none prose-lg text-slate-400">
            <p>
              My journey into software development began with a deep curiosity about how things work on the internet. What started as simple HTML/CSS tweaks quickly evolved into a passion for building full-scale web applications from scratch.
            </p>
            <p className="mt-4">
              I specialize in the modern JavaScript ecosystem, heavily utilizing React, Next.js, and Node.js. My approach to development combines strong technical foundations with a keen eye for user experience design. I believe that the best applications are not only robust and secure but also intuitive and delightful to use.
            </p>
            <p className="mt-4">
              When I'm not writing code, I'm constantly learning new paradigms, exploring the latest frameworks, and refining my system architecture skills to tackle more complex, real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Key Focus Areas */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start space-x-4 group hover:border-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <FaLaptopCode size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Frontend Development</h4>
              <p className="text-sm text-slate-400">Crafting pixel-perfect, responsive, and accessible user interfaces with React and Tailwind CSS.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start space-x-4 group hover:border-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
              <FaServer size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Backend Architecture</h4>
              <p className="text-sm text-slate-400">Designing secure RESTful APIs and managing scalable databases with Node.js, Express, and PostgreSQL.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start space-x-4 group hover:border-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <FaLightbulb size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Continuous Learning</h4>
              <p className="text-sm text-slate-400">Always adapting to new technologies, embracing best practices, and focusing on long-term maintainability.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BiographySection;
