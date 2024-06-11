import React from 'react';
import styles from './App.module.css';
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import { getImageUrl } from './utils';
import Footer from './Components/Footer/Footer';


import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const App = () => {

  const roc = useRef(null);
  const soc = useRef(null);

  useEffect(()=>{
    const r = roc.current;
    const s = soc.current;

    gsap.fromTo(
      r,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        transition: 5,
        scrollTrigger: {
          trigger: r,
      },
      }
    );

    gsap.fromTo(
      s,
      {
        opacity: 0,
      },{
        opacity: 1,
        transition: 2,
        scrollTrigger: {
          trigger: s,
      },
      }
    );

  })

  return (
    <div className={styles.App}>
      <div ref={soc}>
        <ul className={styles.social}>
          <li ><a href="https://www.instagram.com/_mr__ingenious_/" target="_blank"> <img src={getImageUrl("App/insta.png")} alt="" /></a></li>
          <li ><a href="https://leetcode.com/u/jaydodla/" target="_blank">  <img src={getImageUrl("App/leetcode.png")} alt="" /></a></li>
          <li ></li>
        </ul>
      </div>
      
      <NavBar />
      <Hero />
      <About />
      <div  ref={roc} onClick={()=> window.scroll(0,0)}>
        <img src={getImageUrl("App/rocket.png")} alt="" className={styles.rocket}  />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App