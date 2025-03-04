import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Globe, Layers, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const skills = [
    { name: 'Frontend', icon: <Code />, items: ['React', 'Redux', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: <Server />, items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Authentication'] },
    { name: 'Database', icon: <Database />, items: ['MongoDB', 'Mongoose', 'Atlas', 'Redis', 'SQL Basics'] },
    { name: 'DevOps', icon: <Globe />, items: ['Git', 'GitHub', 'CI/CD', 'AWS Basics', 'Vercel/Netlify'] },
    { name: 'Architecture', icon: <Layers />, items: ['MVC Pattern', 'Microservices', 'API Design', 'State Management'] },
    { name: 'Tools', icon: <Cpu />, items: ['VS Code', 'Postman', 'Docker Basics', 'npm/yarn', 'Webpack'] },
  ];

  return (
    <section id="about" className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            With 2 years of experience in MERN stack development, I specialize in building
            scalable web applications with modern technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="Developer coding" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-secondary-300 mb-6">
              I'm a MERN stack developer with a passion for creating efficient, scalable, and user-friendly web applications. 
              Over the past 2 years, I've worked on various projects ranging from e-commerce platforms to real-time 
              collaboration tools.
            </p>
            <p className="text-secondary-300 mb-6">
              My approach combines technical expertise with a strong focus on user experience. I believe in writing clean, 
              maintainable code and staying updated with the latest industry trends and best practices.
            </p>
            <p className="text-secondary-300">
              When I'm not coding, you can find me contributing to open-source projects, attending tech meetups, 
              or exploring new technologies to expand my skill set.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-500/10 rounded-lg text-primary-500 mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-secondary-300">
                      <span className="h-1.5 w-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;