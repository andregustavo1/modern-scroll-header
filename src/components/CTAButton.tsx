
import React from 'react';

interface CTAButtonProps {
  isScrolled: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ isScrolled }) => {
  return (
    <a
      href="#contato"
      className={`
        animate-fade-in opacity-0 px-4 py-2 rounded-full 
        font-medium text-sm lg:text-base 
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-md
        ${isScrolled 
          ? 'bg-gray-900 text-white hover:bg-gray-800' 
          : 'bg-white text-gray-900 hover:bg-gray-100'
        }
      `}
      style={{ animationDelay: '700ms' }}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector('#contato');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }}
    >
      Fale Conosco
    </a>
  );
};

export default CTAButton;
