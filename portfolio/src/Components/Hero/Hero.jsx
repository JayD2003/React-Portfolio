import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Example = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Student.","Web Developer.", "Coder.", "Gamer.", "Tech Enthusiast."],
        startDelay: 30,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        cursorChar: ' '
    });
    
    return () => {
        typed.destroy();
      };
    }, []);

    return <span className={styles.typing} ref={typeTarget}></span>;
};

const Hero = () => {
    
    return (
          <div className={styles.container}>
              <div className={styles.content}>
                  <h2 className={styles.hi}> <span>.... ..</span> <span>Hi</span></h2>
                  <h2>My Name is <span className={styles.title}>Jay.</span> </h2>
                  <h2><span className={styles.and}>and</span></h2>
                  <h2 className={styles.typing}>I am a <Example /></h2>
              </div>
              <img className={styles.HeroImg} src={getImageUrl("hero/heroImg.jpeg")} alt="" />
          </div>
  )
}

export default Hero