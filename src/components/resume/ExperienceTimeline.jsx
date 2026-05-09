import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    duration: "Jan 2024 - Present",
    icon: FaLaptopCode,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    description: "Contributing to the core SaaS product architecture. Collaborating with senior engineers to implement new features and optimize performance.",
    responsibilities: [
      "Developed and integrated robust RESTful APIs using Node.js and Express.",
      "Optimized React components, reducing initial load time by 30%.",
      "Participated in Agile sprints, code reviews, and daily stand-ups."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Jun 2023 - Dec 2023",
    icon: FaRocket,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    description: "Designed and developed custom web applications for small businesses and independent clients.",
    responsibilities: [
      "Built responsive landing pages and e-commerce dashboards.",
      "Integrated third-party APIs including Stripe for payment processing.",
      "Managed client communication, gathering requirements, and deploying applications."
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"]
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "GitHub Community",
    duration: "Jan 2023 - Present",
    icon: FaGraduationCap,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    description: "Actively learning and contributing to various open-source web development projects.",
    responsibilities: [
      "Fixed UI bugs in popular React component libraries.",
      "Improved documentation for setup and installation processes.",
      "Collaborated with global developers through issues and pull requests."
    ],
    technologies: ["JavaScript", "Git", "Markdown"]
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experience <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A chronologic mapping of my professional roles and key milestones.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Continuous Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent -translate-x-1/2 opacity-30"></div>

        <div className="space-y-12 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-6 flex items-center justify-center z-20">
                <div className={`w-12 h-12 rounded-full border-4 border-[#0F172A] ${exp.bgColor} ${exp.color} flex items-center justify-center shadow-xl`}>
                  <exp.icon size={20} />
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:shadow-2xl group relative overflow-hidden">
                  
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 transition-colors duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-slate-300 mb-4 border border-white/10">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <h4 className="text-sm font-medium text-slate-400 mb-4">{exp.company}</h4>
                    
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">▹</span>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs font-medium text-slate-500 bg-[#0F172A] rounded-md border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
