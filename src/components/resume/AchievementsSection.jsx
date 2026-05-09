import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaAward, FaMedal } from 'react-icons/fa';

const achievements = [
  { title: "Best Intern Project Award", desc: "Awarded for optimizing the company's internal dashboard loading times by 40%.", icon: FaTrophy, color: "text-yellow-400" },
  { title: "Hackathon Winner", desc: "1st place out of 50 teams at University CodeFest 2023 for building an AI-powered study tool.", icon: FaMedal, color: "text-blue-400" },
  { title: "Dean's List", desc: "Recognized on the Dean's List for 6 consecutive semesters for academic excellence.", icon: FaStar, color: "text-purple-400" },
  { title: "Top Contributor", desc: "Recognized as a top contributor in the open-source React community during Hacktoberfest.", icon: FaAward, color: "text-emerald-400" }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 relative border-b border-white/5 bg-[#111827]/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Key <span className="text-gradient">Achievements</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-6 p-6 rounded-2xl bg-[#0F172A] border border-white/5 hover:bg-[#1E293B] transition-colors group"
          >
            <div className={`p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
