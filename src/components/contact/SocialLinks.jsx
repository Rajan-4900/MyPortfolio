import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/Rajan-4900", name: "GitHub", color: "hover:text-white hover:bg-[#333]" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/rajan-l/", name: "LinkedIn", color: "hover:text-white hover:bg-[#0077b5]" },
  { icon: FaTwitter, url: "https://x.com/rajan91480", name: "Twitter", color: "hover:text-white hover:bg-[#1DA1F2]" }
];

const SocialLinks = () => {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-white mb-2">Connect Elsewhere</h3>
        <p className="text-slate-400">Find me across the web.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {socialLinks.map((social, index) => (
          <motion.a 
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className={`flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl glass-card border border-white/5 text-slate-400 transition-all duration-300 ${social.color} hover:shadow-xl hover:-translate-y-2`}
          >
            <social.icon size={32} className="mb-3" />
            <span className="text-xs font-medium">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
