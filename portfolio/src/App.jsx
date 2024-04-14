import React from 'react';
import styles from './App.module.css';
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App