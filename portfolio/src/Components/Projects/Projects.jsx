import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json';

const Projects = () => {
  return (
      <div className={styles.container} id="projects">
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.wrapper}>{
                projects.map((project, id) => {
                  return (
                    <ProjectCard key={id} project={project} />
                  );
                })
              }
            </div>
      </div>
  )
}

export default Projects