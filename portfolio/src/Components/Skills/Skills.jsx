import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from './Skills.module.css';
import web from '../../data/web.json';
import prog from '../../data/programming.json';
import too from '../../data/tools.json';
import { getImageUrl } from '../../utils';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section  className={styles.container} id="skills">
          <h2 className={styles.title}>My Skills</h2>
          <div className={styles.content}>
          <Tabs className={styles.tabs}>
              <TabList className={styles.skills}>
                <Tab><a>Programming</a></Tab>
                <Tab><a>Web Development</a></Tab>
                <Tab><a>Others</a></Tab>
              </TabList>
          <TabPanel>
          {
                  prog.map((skill, id) => {
                    return (
                      <SkillCard key={id} skill={skill} />
                        );
                  })
              }
              </TabPanel>
          <TabPanel>
          {
                  web.map((skill, id) => {
                    return (
                      <SkillCard key={id} skill={skill} />
                        );
                  })
              }
              </TabPanel>
          <TabPanel>
          {
                  too.map((skill, id) => {
                    return (
                      <SkillCard key={id} skill={skill} />
                        );
                  })
              }
              </TabPanel>
          </Tabs>
        </div>
    </section>
  )
}

export default Skills