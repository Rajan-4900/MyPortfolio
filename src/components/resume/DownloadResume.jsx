import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import { toast } from 'react-hot-toast';

const DownloadResume = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDownload = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast.error('Please sign in or sign up to download the resume');
      navigate('/login', { state: { from: location } });
      return;
    }

    // Path to the actual resume file
    const resumeUrl = "/assets/Resume.pdf"; 
    window.open(resumeUrl, '_blank');
    toast.success('Download started!');
  };

  return (
    <section className="py-24 relative border-b border-white/5 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-10 md:p-16 border border-white/10 text-center max-w-2xl w-full mx-4 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#0F172A] border border-white/5 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <FaFilePdf size={32} />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Get the full picture.</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Download my complete curriculum vitae for a detailed look at my experience, skills, and academic background.
          </p>
          
          <button 
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
          >
            <FaDownload className="mr-3" />
            Download Resume (PDF)
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadResume;
