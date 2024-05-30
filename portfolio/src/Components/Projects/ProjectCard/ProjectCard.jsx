import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../../utils';

const ProjectCard = ({project: {title, techstack,src}}) => {
  return (
        <div className={styles.wrapper}>
            <img src={getImageUrl(src)} alt="" />
            <div className={styles.content}>
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