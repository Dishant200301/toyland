import React, { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'font-bold rounded-full transition-all transform hover:scale-105 wiggle';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-pink-pastel hover:bg-pink-400 text-white',
    secondary: 'bg-yellow-pastel hover:bg-yellow-400 text-gray-800',
    success: 'bg-mint-pastel hover:bg-mint-400 text-gray-800',
    outline:
      'border-2 border-pink-pastel text-pink-pastel hover:bg-pink-pastel hover:text-white',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
