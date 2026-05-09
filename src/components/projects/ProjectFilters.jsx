import { motion } from 'framer-motion';

const ProjectFilters = ({ activeFilter, setActiveFilter, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeFilter === category;
        return (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none
              ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 bg-transparent border border-white/10'}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="active-filter-bg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
