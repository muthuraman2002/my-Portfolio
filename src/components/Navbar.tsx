import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Terminal className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">Muthu Raman</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-primary-400' : 'text-white'} hover:text-primary-400 transition-colors duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`${isActive('/projects') ? 'text-primary-400' : 'text-white'} hover:text-primary-400 transition-colors duration-200`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-primary-400' : 'text-white'} hover:text-primary-400 transition-colors duration-200`}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/muthuraman2002/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-white hover:bg-secondary-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-900 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'bg-secondary-800 text-white' : 'text-secondary-300'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-800 hover:text-white transition-colors duration-200`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive('/projects') ? 'bg-secondary-800 text-white' : 'text-secondary-300'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-800 hover:text-white transition-colors duration-200`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'bg-secondary-800 text-white' : 'text-secondary-300'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-800 hover:text-white transition-colors duration-200`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com/muthuraman2002/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;