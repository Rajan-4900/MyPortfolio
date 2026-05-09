import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AboutCTA = () => {
  return (
    <section className="py-24 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to build something great?
        </h3>
        <p className="text-lg text-slate-400 mb-10">
          I'm always open to discussing product design work or partnership opportunities. Let's create something beautiful and functional.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
        >
          Let's Connect
          <FaArrowRight className="ml-3" />
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
