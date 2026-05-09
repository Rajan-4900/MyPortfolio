import { motion } from 'framer-motion';
import { SiSupabase, SiMongodb, SiPostgresql, SiFirebase } from 'react-icons/si';

const databaseSkills = [
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500', type: 'BaaS / PostgreSQL' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', type: 'NoSQL Document Store' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', type: 'Relational Database' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', type: 'Realtime Database' },
];

const DatabaseSkills = () => {
  return (
    <section className="py-20 relative border-b border-white/5">
      <div className="mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Data <span className="text-gradient">Management</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl"
        >
          Structuring, storing, and querying data efficiently across different paradigms.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {databaseSkills.map((db, index) => (
          <motion.div 
            key={db.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="glass-card rounded-2xl p-6 text-center group hover:bg-[#1E293B] hover:border-white/10 transition-colors relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-t from-blue-500 to-transparent pointer-events-none"></div>
            
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full bg-[#0F172A] border border-white/5 group-hover:scale-110 transition-transform ${db.color}`}>
                <db.icon size={40} />
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{db.name}</h4>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{db.type}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DatabaseSkills;
