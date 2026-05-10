import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0F172A]/50 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-gradient">Rajan</span> L
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building high-performance, modern web experiences with a focus on clean design and scalable architecture.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rajan-4900" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rajan-l/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/rajan91480" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link to="/skills" className="text-slate-400 hover:text-white transition-colors text-sm">Skills</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white transition-colors text-sm">Projects</Link></li>
            </ul>
          </div>

          {/* Services/Support */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/resume" className="text-slate-400 hover:text-white transition-colors text-sm">Resume</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/login" className="text-slate-400 hover:text-white transition-colors text-sm">Admin Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <p className="text-slate-400 text-sm mb-4">
              Interested in collaborating or have a project in mind?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Start a Conversation
              <FaEnvelope className="ml-2" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Rajan L. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <span className="hover:text-slate-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
