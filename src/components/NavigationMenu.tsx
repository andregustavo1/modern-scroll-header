
import React, { useEffect, useState } from 'react';

interface NavigationMenuProps {
  isScrolled: boolean;
}

interface NavItem {
  title: string;
  href: string;
  delay: number;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isScrolled }) => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  
  const navItems: NavItem[] = [
    { title: 'Home', href: '#home', delay: 200 },
    { title: 'Sobre', href: '#sobre', delay: 300 },
    { title: 'Serviços', href: '#servicos', delay: 400 },
    { title: 'Benefícios', href: '#beneficios', delay: 500 },
    { title: 'Contato', href: '#contato', delay: 600 },
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop <= 100 && sectionTop >= -section.clientHeight + 100) {
        setActiveLink(`#${section.id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setActiveLink(href);
    }
  };

  return (
    <nav className="hidden md:flex items-center justify-center">
      <ul className="flex space-x-5 lg:space-x-8">
        {navItems.map((item) => (
          <li 
            key={item.title}
            className="animate-fade-in opacity-0"
            style={{ animationDelay: `${item.delay}ms` }}
          >
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`nav-link text-sm lg:text-base font-medium ${
                activeLink === item.href ? 'active' : ''
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
