import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaEnvelope, FaStar, FaEye } from 'react-icons/fa';
import { supabase } from '../../services/supabase';

const StatCard = ({ title, value, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all"
  >
    <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform ${color}`}>
      <Icon size={120} />
    </div>
    
    <div className="flex items-center space-x-4 mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[#0F172A] border border-white/5 ${color}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-slate-400 font-medium">{title}</h3>
    </div>
    <div className="text-4xl font-bold text-white">{value}</div>
  </motion.div>
);

const DashboardOverview = () => {
  const [stats, setStats] = useState({ projects: 0, messages: 0, featured: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { count: projectCount } = await supabase.from('projects').select('*', { count: 'exact', head: true });
        const { count: messageCount } = await supabase.from('contact_messages').select('*', { count: 'exact', head: true });
        const { count: featuredCount } = await supabase.from('projects').select('*', { count: 'exact', head: true }).eq('featured', true);
        
        setStats({
          projects: projectCount || 0,
          messages: messageCount || 0,
          featured: featuredCount || 0
        });
      } catch (err) {
        console.warn('Could not fetch stats', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back, Admin</h1>
        <p className="text-slate-400">Here's a quick overview of your portfolio's performance.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
          {[1,2,3,4].map(i => <div key={i} className="h-32 bg-[#1E293B] rounded-2xl border border-white/5"></div>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Projects" value={stats.projects} icon={FaProjectDiagram} color="text-blue-400" delay={0.1} />
          <StatCard title="Total Messages" value={stats.messages} icon={FaEnvelope} color="text-violet-400" delay={0.2} />
          <StatCard title="Featured Projects" value={stats.featured} icon={FaStar} color="text-yellow-400" delay={0.3} />
          <StatCard title="Profile Views" value="2.4k" icon={FaEye} color="text-emerald-400" delay={0.4} />
        </div>
      )}

      {/* Placeholder for Recent Activity or Charts */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass-card p-8 rounded-3xl border border-white/5 min-h-[400px] flex items-center justify-center flex-col"
      >
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <FaChartPie className="text-slate-500" size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
        <p className="text-slate-500">More detailed analytics components can be integrated here.</p>
      </motion.div>
    </div>
  );
};

export default DashboardOverview;
