import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  type?: 'outline' | 'outlineSecondary' | 'principal' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'principal',
  onClick,
  disabled = false,
  className = '',
  size = 'md'
}) => {
  // Estilos base
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  // Tamaños
  const sizeStyles = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-5 text-lg'
  };
  
  // Tipos de botón
  const typeStyles = {
    outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black',
    outlineSecondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white',
    principal: 'bg-black text-white border-2 border-black hover:bg-gray-800 hover:border-gray-800 focus:ring-black shadow-lg',
    secondary: 'bg-white text-black border-2 border-white hover:bg-gray-100 hover:border-gray-100 focus:ring-gray-300 shadow-lg'
  };

  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${typeStyles[type]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;