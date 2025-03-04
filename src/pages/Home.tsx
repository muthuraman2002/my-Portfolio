import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import ProjectsSection from '../components/ProjectsSection';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <Contact />
    </>
  );
};

export default Home;