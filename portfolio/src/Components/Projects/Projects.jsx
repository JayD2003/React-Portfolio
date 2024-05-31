import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json';

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
 
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
      <div className={styles.container} id="projects">
          <h2 className={styles.title} ref={titlename}>Projects</h2>
          <div className={styles.wrapper}>{
                projects.map((project, id) => {
                  return (
                    <ProjectCard key={id} project={project} input={id+1}/>
                  );
                })
              }
            </div>
      </div>
  )
}

export default Projects