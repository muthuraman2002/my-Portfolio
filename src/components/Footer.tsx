import React from 'react';
import { Link } from 'react-router-dom';
import {  Github, Linkedin, Twitter, Mail,Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Terminal className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">Muthu Raman</span>
            </Link>
            <p className="text-secondary-400 mb-4 max-w-md">
              MERN Stack Developer with 2 years of experience building modern web applications.
              Specialized in React, Node.js, Express, and MongoDB.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/muthuraman2002" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:mraman2002bca@gmail.com" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-secondary-400">
              <li>Chennai,Tamil Nadu ,India</li>
              <li>mraman2002bca@gmail.com</li>
              <li>+91 7200225530</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Muthuraman. All rights reserved.
          </p>
          <p className="text-secondary-400 text-sm mt-4 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;