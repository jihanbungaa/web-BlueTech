import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded-sm group";
  
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 shadow-lg hover:shadow-blue-900/20",
    secondary: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50",
    white: "bg-white text-blue-900 hover:bg-gray-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showIcon && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};