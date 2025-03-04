import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Server, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'frontend' | 'fullstack' | 'backend';
  features: string[];
}

interface ProjectsSectionProps {
  showAll?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showAll = false }) => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack' | 'backend'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'fullstack',
      features: [
        'User authentication and profiles',
        'Product search and filtering',
        'Shopping cart functionality',
        'Secure payment processing',
        'Order history and tracking'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team workspaces.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'fullstack',
      features: [
        'Drag-and-drop task organization',
        'Real-time collaboration',
        'Team workspaces',
        'Task assignments and deadlines',
        'Activity tracking and notifications'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current and forecasted weather data.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      tags: ['React', 'Redux', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'frontend',
      features: [
        'Location-based weather data',
        'Interactive weather maps',
        '5-day weather forecast',
        'Temperature and precipitation charts',
        'Responsive design for all devices'
      ]
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description: 'A robust RESTful API service for managing user data and authentication.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'backend',
      features: [
        'User authentication and authorization',
        'CRUD operations for resources',
        'Rate limiting and request validation',
        'Comprehensive API documentation',
        'Secure data handling and storage'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with a clean, responsive design.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'frontend',
      features: [
        'Animated UI elements',
        'Responsive layout for all devices',
        'Dark/light mode toggle',
        'Project showcase with filtering',
        'Contact form with validation'
      ]
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with private messaging and group chat functionality.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'fullstack',
      features: [
        'Real-time messaging',
        'User presence indicators',
        'Message read receipts',
        'Group chat creation',
        'Media sharing capabilities'
      ]
    }
  ];

  // If not showing all, limit to 3 projects
  const displayProjects = showAll ? projects : projects.slice(0, 3);
  
  const filteredProjects = filter === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="h-4 w-4 mr-1" />;
      case 'backend':
        return <Server className="h-4 w-4 mr-1" />;
      case 'fullstack':
        return <Database className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className={`py-20 ${!showAll ? 'bg-secondary-900' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!showAll && (
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              My Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-subtitle mx-auto"
            >
              A showcase of my recent work, including web applications and APIs.
            </motion.p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === 'frontend'
                ? 'bg-primary-500 text-white'
                : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
            }`}
          >
            <Code className="h-4 w-4 inline mr-1" />
            Frontend
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === 'fullstack'
                ? 'bg-primary-500 text-white'
                : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
            }`}
          >
            <Database className="h-4 w-4 inline mr-1" />
            Full Stack
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === 'backend'
                ? 'bg-primary-500 text-white'
                : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
            }`}
          >
            <Server className="h-4 w-4 inline mr-1" />
            Backend
          </button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 flex items-center bg-secondary-800/80 backdrop-blur-sm text-primary-300 text-xs px-3 py-1 rounded-full">
                  {getCategoryIcon(project.category)}
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-secondary-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary-700 text-primary-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;