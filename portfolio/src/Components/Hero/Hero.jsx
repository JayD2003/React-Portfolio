import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Example = ({args_if_necessary}) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Web Developer.", "Coder.", "Gamer.", "Tech Geek."],
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
        <section className={styles.container}>
            <div className={styles.content}>
                <h2>Hi</h2>
                <h2>My Name is <span className={styles.title}>Jay.</span> </h2>
                <h2>and </h2>
                <h2>I am a <Example args_if_necessary={"something"} /></h2>
            </div>
            <img className={styles.HeroImg} src={getImageUrl("hero/dp.jpeg")} alt="" />
      </section>
  )
}

export default Hero