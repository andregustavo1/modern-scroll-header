
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import CTAButton from './CTAButton';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        px-4 md:px-6 lg:px-10
        animate-fade-in opacity-0
        ${isScrolled 
          ? 'header-scrolled h-16 md:h-[70px] lg:h-20' 
          : 'bg-transparent text-white h-20 md:h-[75px] lg:h-[80px]'
        }
      `}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="animate-fade-in opacity-0">
          <Logo isScrolled={isScrolled} />
        </div>
        
        <NavigationMenu isScrolled={isScrolled} />
        
        <div className="flex items-center space-x-4">
          <CTAButton isScrolled={isScrolled} />
          
          <button 
            className="md:hidden animate-fade-in opacity-0 transition-colors duration-300"
            style={{ animationDelay: '800ms' }}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          className={`
            md:hidden fixed top-[60px] left-0 w-full 
            transition-all duration-300 ease-in-out
            bg-white text-gray-800 shadow-lg
            animate-fade-in opacity-0
          `}
        >
          <nav className="py-4 px-6">
            <ul className="space-y-4">
              {['Home', 'Sobre', 'Serviços', 'Benefícios', 'Contato'].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="nav-link block py-2 text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
