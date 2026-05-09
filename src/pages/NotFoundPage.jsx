import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <SEOProvider title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" 
        />

        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-pink-600 mb-6"
        >
          404
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            The link you clicked may be broken or the page may have been removed. Let's get you back on track.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-transform hover:scale-105"
          >
            <FaHome className="mr-3" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
