import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabase';
import { 
  FaChartPie, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaSignOutAlt, 
  FaTimes,
  FaFileAlt,
  FaCogs
} from 'react-icons/fa';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: FaChartPie, end: true },
  { name: 'Projects', path: '/admin/projects', icon: FaProjectDiagram },
  { name: 'Messages', path: '/admin/messages', icon: FaEnvelope },
  { name: 'Resume', path: '/admin/resume', icon: FaFileAlt },
  { name: 'Settings', path: '/admin/settings', icon: FaCogs }
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 bottom-0 w-64 bg-[#111827] border-r border-white/5 z-50
        flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="font-bold text-white text-2xl tracking-tight">
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">CMS</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                }
              `}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 font-medium"
          >
            <FaSignOutAlt size={18} />
            <span>Logout</span>
          </button>
          
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">
              View Live Website ↗
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
