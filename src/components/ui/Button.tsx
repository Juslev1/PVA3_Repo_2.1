import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  children,
  onClick,
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-blue-900 hover:bg-blue-800 text-white focus:ring-blue-700",
    secondary: "bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-400",
    outline: "bg-transparent border-2 border-blue-900 hover:bg-blue-50 text-blue-900 focus:ring-blue-700",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  
  const styles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;
  
  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;