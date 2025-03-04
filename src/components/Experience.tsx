import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const experiences = [
    
    {
      title: 'Full Stack Developer',
      company: 'Digicognit',
      period: 'OCT 2023 - Present',
      description: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Built frontend components with React and integrated with backend services',
        'Implemented authentication and authorization using JWT',
        'Worked with MongoDB for data storage and retrieval'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs']
    },
    {
      title: 'Frontend Developer',
      company: 'FOSS Project',
      period: 'Jan 2023 - Present',
      description: [
        'Lead the frontend development of a SaaS platform using React, TypeScript, and Redux',
        'Implemented responsive designs and improved performance by 40%',
        'Collaborated with UX/UI designers to create intuitive user interfaces',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest']
    },
    {
      title: 'Junior Web Developer',
      company: 'VGLUG ',
      period: 'Jun 2022 - Feb 2023',
      description: [
        'Assisted in developing web applications using the MERN stack',
        'Created responsive UI components following design specifications',
        'Participated in daily stand-ups and sprint planning meetings',
        'Fixed bugs and implemented new features for existing applications'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React Basics', 'Node.js Basics', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            My professional journey as a MERN stack developer over the past 2 years.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary-800 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-auto md:pl-0' : 'md:pl-12 md:ml-auto md:mr-auto md:pr-0'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 w-5 h-5 rounded-full bg-primary-500 shadow-lg z-10 left-0 md:left-auto md:right-auto md:-ml-2.5 md:-translate-x-0 md:translate-y-0">
                {index % 2 === 0 ? (
                  <div className="absolute right-0 transform translate-x-full mt-1 ml-6 w-12 h-0.5 bg-primary-500/50"></div>
                ) : (
                  <div className="absolute left-0 transform -translate-x-full mt-1 -ml-6 w-12 h-0.5 bg-primary-500/50"></div>
                )}
              </div>
              
              <div className={`bg-secondary-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'md:rounded-tr-none' : 'md:rounded-tl-none'
              }`}>
                <div className="flex items-center mb-4 md:justify-start">
                  <div className="p-2 bg-primary-500/10 rounded-lg text-primary-500 mr-3">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                </div>
                
                <div className="mb-4">
                  <div className="text-primary-400 font-medium">{exp.company}</div>
                  <div className="flex items-center text-secondary-400 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start text-secondary-300">
                      <span className="h-1.5 w-1.5 bg-primary-500 rounded-full mr-2 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary-700 text-primary-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;