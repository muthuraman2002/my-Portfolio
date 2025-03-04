import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-primary-500">MERN Stack</span> Developer
            </h1>
            <p className="text-xl text-secondary-300 mb-8 max-w-lg">
            Hi, I'm Muthu Raman, a passionate MERN Stack Developer with 2 years of experience building exceptional digital experiences and contributing to FOSS projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center">
                <Code className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-secondary-300">React</span>
              </div>
              <div className="flex items-center">
                <Server className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-secondary-300">Node.js</span>
              </div>
              <div className="flex items-center">
                <Server className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-secondary-300">Express</span>
              </div>
              <div className="flex items-center">
                <Database className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-secondary-300">MongoDB</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Developer working on code" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-900/40"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-secondary-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="text-sm text-secondary-300">Available for new projects</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-primary-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;