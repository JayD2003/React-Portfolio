import React from 'react';
import styles from './Education.module.css';


import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const EducationCard = ({details : {course, name, startDate, endDate, marks}}) => {

  const edu = useRef(null);
  useEffect(()=>{
    const ed = edu.current;
    gsap.fromTo(
      ed,
      {
        translateY: 100,
      },
      {
        translateY: 0,
        duration: 1
      }
    );
  })

  return (
    <ul className={styles.container} ref={edu}>
      <li>
      <h2 className={styles.title}>{course}</h2>
      <p className={styles.subheading}>{name}</p>
      
      <div className={styles.data}>
        <h4 className={styles.dates}>{startDate} - {endDate}</h4>
        <h2 className={styles.marks}>{marks}</h2>
        </div>
        </li>
    </ul>
  )
}

export default EducationCard