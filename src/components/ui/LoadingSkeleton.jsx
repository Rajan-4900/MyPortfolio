const LoadingSkeleton = ({ type = 'card' }) => {
  const baseBg = "bg-slate-700/50"; // Slightly lighter and more visible
  
  if (type === 'hero') {
    return (
      <div className="animate-pulse flex flex-col md:flex-row gap-12 items-center py-20 px-4">
        <div className="w-full md:w-1/2 space-y-6">
          <div className={`h-8 ${baseBg} rounded-full w-48`}></div>
          <div className={`h-20 ${baseBg} rounded-2xl w-full`}></div>
          <div className={`h-4 ${baseBg} rounded-full w-full`}></div>
          <div className={`h-4 ${baseBg} rounded-full w-5/6`}></div>
          <div className="flex gap-4 mt-8">
            <div className={`h-12 ${baseBg} rounded-xl w-32`}></div>
            <div className={`h-12 ${baseBg} rounded-xl w-32`}></div>
          </div>
        </div>
        <div className={`w-full md:w-1/2 h-[400px] ${baseBg} rounded-3xl`}></div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="animate-pulse space-y-4 w-full">
        <div className={`h-4 ${baseBg} rounded-full w-full`}></div>
        <div className={`h-4 ${baseBg} rounded-full w-5/6`}></div>
        <div className={`h-4 ${baseBg} rounded-full w-4/6`}></div>
      </div>
    );
  }

  // Default 'card' skeleton
  return (
    <div className="animate-pulse glass-card rounded-2xl p-6 border border-white/10 w-full">
      <div className={`h-48 ${baseBg} rounded-xl mb-6`}></div>
      <div className={`h-6 ${baseBg} rounded-full w-1/2 mb-4`}></div>
      <div className="space-y-3">
        <div className={`h-3 ${baseBg} rounded-full w-full`}></div>
        <div className={`h-3 ${baseBg} rounded-full w-3/4`}></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
