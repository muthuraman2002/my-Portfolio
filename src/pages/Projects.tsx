import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            A comprehensive showcase of my work as a MERN stack developer over the past 2 years.
            Browse through my projects to see my skills and expertise in action.
          </p>
        </motion.div>
      </div>
      
      <ProjectsSection showAll={true} />
    </div>
  );
};

export default Projects;