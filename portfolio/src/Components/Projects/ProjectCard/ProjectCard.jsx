import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../../utils';

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({project: {id, title, techstack,src}}) => {

  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { translateX: -100,
       },
      {
        translateX: 0,
        duration: 3,
        stagger:1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);


  return (
        <div className={styles.wrapper} ref={imgRef} >
            <img src={getImageUrl(src)} alt="" />
            <div className={styles.content} >
              <h1 className={styles.projecttitle}>{title}</h1>
              <div className={styles.projectinfo}>
                {
                    techstack.map((tech, id) => {
                        return (
                            <p key={id}>{tech.name}</p>
                        );
                    })
                }
              </div>
            </div>
        </div>
  )
}

export default ProjectCard