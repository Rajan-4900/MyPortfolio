import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certs = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    link: "#"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "Aug 2023",
    link: "#"
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "May 2023",
    link: "#"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Licenses & <span className="text-gradient">Certifications</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col group hover:border-white/10 transition-all hover:-translate-y-1"
          >
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                <FaCertificate size={24} />
              </div>
              <span className="text-xs font-medium text-slate-500 bg-[#0F172A] px-2 py-1 rounded">{cert.date}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
            <p className="text-sm text-slate-400 mb-6 flex-grow">{cert.issuer}</p>
            
            <a href={cert.link} className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mt-auto w-fit">
              View Credential <FaExternalLinkAlt className="ml-2 text-[10px]" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
