import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Loader2, User, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { supabase } from '../services/supabase';
import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from location state, or default to home
  const from = location.state?.from?.pathname || "/";

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email || (authMode === 'password' && !password) || (authMode === 'signup' && !name)) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      if (authMode === 'magic-link') {
        // Passwordless Magic Link
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.origin + from,
          }
        });
        if (error) throw error;
        toast.success('Magic link sent! Check your email.');
      } else if (authMode === 'password') {
        // Standard Sign In
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Successfully logged in!');
        navigate(from, { replace: true });
      } else {
        // Sign Up
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
            emailRedirectTo: window.location.origin + from,
          }
        });
        if (error) throw error;
        toast.success('Confirmation email sent! Please check your inbox.');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [authMode, setAuthMode] = useState('password'); // 'password', 'signup', 'magic-link'
  return (
    <PageTransition className="flex items-center justify-center min-h-[calc(100vh-6rem)] py-12">
      <SEOProvider 
        title={authMode === 'signup' ? "Create Account" : authMode === 'magic-link' ? "Magic Link" : "Sign In"} 
        description="Access exclusive content and resources from my portfolio."
      />
      
      <div className="w-full max-w-md px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Background Glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />

          <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl relative z-10 backdrop-blur-2xl">
            <div className="text-center mb-8">
              <motion.div
                key={authMode}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20"
              >
                {authMode === 'signup' ? <User className="text-white" size={28} /> : <Lock className="text-white" size={28} />}
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                {authMode === 'signup' ? "Create Account" : authMode === 'magic-link' ? "Passwordless Login" : "Welcome Back"}
              </h1>
              <p className="text-slate-400">
                {authMode === 'signup' ? "Join to download the resume instantly" : authMode === 'magic-link' ? "We'll email you a login link" : "Sign in to your account to continue"}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              <AnimatePresence mode="wait">
                {authMode === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1"
                  >
                    <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#0F172A]/40 border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all hover:bg-[#0F172A]/60"
                        placeholder="John Doe"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0F172A]/40 border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all hover:bg-[#0F172A]/60"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {authMode !== 'magic-link' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1"
                  >
                    <div className="flex justify-between items-center px-1">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      {authMode === 'password' && (
                        <button type="button" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          Forgot Password?
                        </button>
                      )}
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                        <Lock size={18} />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-[#0F172A]/40 border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all hover:bg-[#0F172A]/60"
                        placeholder="••••••••"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-accent text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#111827] transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    {authMode === 'signup' ? "Create Account" : authMode === 'magic-link' ? "Send Magic Link" : "Sign In"}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center space-y-3">
              {authMode === 'password' && (
                <>
                  <p className="text-slate-400 text-sm">
                    Don't have an account?
                    <button onClick={() => setAuthMode('signup')} className="ml-2 font-bold text-white hover:text-blue-400 transition-colors">Sign Up Now</button>
                  </p>
                  <p className="text-slate-500 text-xs">
                    Tired of passwords?
                    <button onClick={() => setAuthMode('magic-link')} className="ml-2 font-medium text-blue-400/80 hover:text-blue-300 transition-colors underline underline-offset-4">Login via Magic Link</button>
                  </p>
                </>
              )}
              {authMode === 'signup' && (
                <p className="text-slate-400 text-sm">
                  Already have an account?
                  <button onClick={() => setAuthMode('password')} className="ml-2 font-bold text-white hover:text-blue-400 transition-colors">Sign In Here</button>
                </p>
              )}
              {authMode === 'magic-link' && (
                <p className="text-slate-400 text-sm">
                  Prefer a password?
                  <button onClick={() => setAuthMode('password')} className="ml-2 font-bold text-white hover:text-blue-400 transition-colors">Sign In with Password</button>
                </p>
              )}
            </div>
            
            {/* Optional Social Provider */}
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#111827] px-2 text-slate-500">Or continue with</span></div>
            </div>

            <button
              type="button"
              className="mt-6 w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all font-medium"
            >
              <FaGithub size={20} />
              GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Login;
