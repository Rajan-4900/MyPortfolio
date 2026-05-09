import { motion } from 'framer-motion';

const journeySteps = [
  {
    year: "Present",
    title: "Full Stack Developer",
    subtitle: "Building Enterprise Solutions",
    description: "Focusing on Next.js, React, and scalable backend architectures. Delivering high-performance applications with seamless user experiences.",
    active: true
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    subtitle: "Tech Company",
    description: "Collaborated with senior engineers to optimize database queries, built dynamic UI components, and participated in Agile development cycles."
  },
  {
    year: "2023",
    title: "Advanced Web Development",
    subtitle: "Self-Taught & Certifications",
    description: "Mastered React.js and modern CSS frameworks. Built several complex personal projects including full-stack platforms and dashboards."
  },
  {
    year: "2022",
    title: "The Beginning",
    subtitle: "First Line of Code",
    description: "Discovered a passion for programming. Started learning computer science fundamentals, HTML, CSS, and basic JavaScript."
  }
];

const JourneyTimeline = () => {
  return (
    <section className="py-20 relative border-t border-white/5">
      <div className="text-center mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          My <span className="text-gradient">Journey</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          A timeline of my growth from writing my first line of code to engineering full-stack applications.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 rounded-full"></div>

        <div className="space-y-12 relative z-10">
          {journeySteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-[#0F172A] border-2 border-slate-600 z-20 flex items-center justify-center">
                {step.active && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className={`glass-card p-6 rounded-2xl hover:border-white/10 transition-colors ${step.active ? 'border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : ''}`}>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${step.active ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-300'}`}>
                    {step.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
                  <h5 className="text-sm font-medium text-slate-400 mb-4">{step.subtitle}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
