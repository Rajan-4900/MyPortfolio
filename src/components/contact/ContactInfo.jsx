import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaCalendarCheck } from 'react-icons/fa';

const infoItems = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "hello@developer.com",
    link: "mailto:hello@developer.com",
    color: "text-blue-400"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "San Francisco, CA (Remote)",
    link: null,
    color: "text-violet-400"
  },
  {
    icon: FaCalendarCheck,
    title: "Availability",
    value: "Open for Opportunities",
    link: null,
    color: "text-emerald-400"
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-6 h-full">
      {infoItems.map((item, index) => (
        <motion.div 
          key={item.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="glass-card p-6 rounded-2xl border border-white/5 flex items-center space-x-6 hover:border-white/10 transition-colors group"
        >
          <div className={`p-4 rounded-full bg-[#0F172A] border border-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
            <item.icon size={24} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">{item.title}</h3>
            {item.link ? (
              <a href={item.link} className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                {item.value}
              </a>
            ) : (
              <p className="text-lg font-bold text-white">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}

      {/* Decorative abstract element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden h-40 hidden md:block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 pointer-events-none" />
        <div className="absolute top-4 right-4 w-24 h-24 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        <div className="relative z-10 h-full flex flex-col justify-center">
          <p className="text-xl font-bold text-white mb-2">"Code is poetry."</p>
          <p className="text-sm text-slate-400">- Let's write something beautiful.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
