import React from 'react';

interface AnimatedCloudProps {
  className?: string;
  delay?: number;
}

const AnimatedCloud: React.FC<AnimatedCloudProps> = ({ className = '', delay = 0 }) => {
  return (
    <div
      className={`absolute text-6xl opacity-70 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      ☁️
    </div>
  );
};

export default AnimatedCloud;
