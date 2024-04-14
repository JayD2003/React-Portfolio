import React from 'react';
import styles from './About.module.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getImageUrl } from '../../utils';
import EducationCard from './EducationCard/EducationCard';
import education from '../../data/education.json';

const About = () => {
  return (
      <section  className={styles.container} id="about">
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.content}>
          <img className={styles.aboutImg} src={getImageUrl("About/dp.jpeg")} alt="" />
              <div className={styles.aboutDesc}>
                  <h3>Hey 👋, I'm Jayasai.</h3>
                  <p>I'm a passionate student currently in my third year pursuing a degree in Computer Science and Engineering.
                      With a passion for software development and innovation, I thrive on crafting elegant solutions to complex problems.</p>
                      <Tabs className="Tabs">
                        <TabList className={styles.aboutItems}>
                            <Tab><a >Experience</a></Tab>
                            <Tab><a >Education</a></Tab>
                        </TabList>
                      <TabPanel className={styles.exp}>
                          <ul>
                          <li>
                            <h4>
                                Looking For Intership Oppurtunity
                            </h4>
                            <h5>Check Out My CV</h5>
                            <button>
                                Download Now
                              </button>
                              </li>
                              </ul>
                        </TabPanel>
                      <TabPanel className={styles.edu}>{
                            education.map((details, id) => {
                                return (
                                    <EducationCard key={id} details={details}/>
                                );
                            })
                        }
                        </TabPanel>
                    </Tabs>
              </div>
          </div>
    </section>
  )
}

export default About