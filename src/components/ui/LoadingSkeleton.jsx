const LoadingSkeleton = ({ type = 'card' }) => {
  if (type === 'hero') {
    return (
      <div className="animate-pulse flex flex-col md:flex-row gap-8 items-center py-20 px-4">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="h-6 bg-[#1E293B] rounded-full w-32"></div>
          <div className="h-16 bg-[#1E293B] rounded-2xl w-3/4"></div>
          <div className="h-4 bg-[#1E293B] rounded-full w-full"></div>
          <div className="h-4 bg-[#1E293B] rounded-full w-5/6"></div>
          <div className="h-12 bg-[#1E293B] rounded-xl w-40 mt-8"></div>
        </div>
        <div className="w-full md:w-1/2 h-80 bg-[#1E293B] rounded-3xl"></div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="animate-pulse space-y-3 w-full">
        <div className="h-4 bg-[#1E293B] rounded-full w-full"></div>
        <div className="h-4 bg-[#1E293B] rounded-full w-5/6"></div>
        <div className="h-4 bg-[#1E293B] rounded-full w-4/6"></div>
      </div>
    );
  }

  // Default 'card' skeleton
  return (
    <div className="animate-pulse glass-card rounded-2xl p-6 border border-white/5 w-full">
      <div className="h-40 bg-[#1E293B] rounded-xl mb-6"></div>
      <div className="h-6 bg-[#1E293B] rounded-full w-1/2 mb-4"></div>
      <div className="space-y-3">
        <div className="h-3 bg-[#1E293B] rounded-full w-full"></div>
        <div className="h-3 bg-[#1E293B] rounded-full w-5/6"></div>
      </div>
      <div className="flex gap-2 mt-6">
        <div className="h-6 bg-[#1E293B] rounded-md w-16"></div>
        <div className="h-6 bg-[#1E293B] rounded-md w-16"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
