import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/LiquidGlass.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import WaterDroplets from './components/WaterDroplets';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App" data-theme={isDarkTheme ? 'dark' : 'light'}>
      <WaterDroplets isDarkTheme={isDarkTheme} />
      <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header activeSection={activeSection} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          
          <main>
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;