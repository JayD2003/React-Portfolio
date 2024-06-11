import React from 'react';
import styles from './Skills.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import SkillCard from './SkillCard/SkillCard';


import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const titlename = useRef(null);
  useEffect(()=>{
    const title = titlename.current;
    gsap.fromTo(
      title,
      { opacity: 0},
      {
          opacity: 1,
          duration: 3,
          scrollTrigger: {
              trigger: title,
          },
      }
    );
  })

  return (
    <section  className={styles.container} id="skills">
          <h2 className={styles.title} ref={titlename}>My Skills</h2>
          <div className={styles.content}>
          <div className={styles.skills}>
            <div className={styles.skilllist}>
            {
                    skills.map((skill, id) => {
                      return (
                        <SkillCard key={id} skill={skill} index={id+1}/>
                          );
                    })
                }
                </div>
          </div>
        </div>
    </section>
  )
}

export default Skills