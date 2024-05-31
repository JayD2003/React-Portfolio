import React from 'react';
import styles from './SkillCard.module.css';
import { getImageUrl } from '../../../utils';

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({skill : {title, names, libraries}}) => {

  const contain = useRef(null);
  useEffect(()=>{
    const con = contain.current;
    gsap.fromTo(
      con,
      { opacity: 0,
        scale: 0
      },
      {
          opacity: 1,
          duration: 0.9,
          scale: 1,
          scrollTrigger: {
              trigger: con,
          },
      }
    );
  })

  return (
      <div className={styles.container} ref={contain}>
          <h1 className={styles.title} >{title}</h1>
          <div className={styles.namescontain}>
            <div className={styles.main} >
            {
                names.map((prog, x) => {
                    return (
                      <ul className={styles.content}>
                        <li key={x} >
                          <div className={styles.list}>
                            <h2 className={styles.name}>{prog.name}</h2>
                            <h3 className={styles.exp}>{prog.exp}</h3>
                          </div>
                        </li>
                      </ul>
                    );
                })
            
              }
              </div>
            <div >
              {
                libraries.map((lib, id)=>{
                  return (
                    <ul key={id} className={styles.content}>
                      <li>
                        <div  className={styles.list}>
                      <h2 className={styles.name}>{lib.name}</h2>
                      <h3 className={styles.exp}>{lib.exp}</h3>
                      </div>
                      </li>
                    </ul>
                  );
                })
              }
            </div>
            </div>
        </div>
  )
}

export default SkillCard