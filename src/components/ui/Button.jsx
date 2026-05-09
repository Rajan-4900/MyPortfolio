import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  className = "", 
  disabled,
  ...props 
}, ref) => {
  
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-accent text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5",
    secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/5",
    outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      ref={ref}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
