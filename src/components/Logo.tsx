
import React from 'react';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <div 
      className={`font-semibold text-2xl transition-all duration-300 ease-in-out ${
        isScrolled ? 'scale-90' : ''
      }`}
      style={{ animationDelay: '100ms' }}
    >
      <span className="font-bold">Elegance</span>
    </div>
  );
};

export default Logo;
