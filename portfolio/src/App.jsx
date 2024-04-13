import React from 'react';
import styles from './App.module.css';
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  )
}

export default App