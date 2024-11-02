import React from 'react';
import styles from './About.module.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getImageUrl } from '../../utils';
import EducationCard from './EducationCard/EducationCard';
import education from '../../data/education.json';


import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const imgref = useRef(null);
    const about = useRef(null);

    useEffect(()=>{
        const element = imgref.current;
        const abt = about.current;
        gsap.fromTo(
            element,
            { translateX: 200 },
            {
              translateX: 0,
              duration: 3,
              scrollTrigger: {
                trigger: element,
              },
            }
          );
          gsap.fromTo(
            abt,
            { opacity: 0},
            {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: element,
                },
            }
          );
        
    })

  return (
      <section  className={styles.container} id="about">
          <h2 className={styles.title} ref={about}>About Me</h2>
          <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl("About/dp.jpg")} alt=""/>
              <div className={styles.aboutDesc} ref={imgref}>
                  <h3>Hey 👋, I'm Jayasai.</h3>
                  <p>I'm a passionate student currently in my final year pursuing a degree in Computer Science and Engineering.
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
                            <h5>Check Out My Resume</h5>
                            <button>
                              <a href="https://drive.google.com/file/d/1LpheUUh-U1mHsEEH02ueVTIqjq5phDI8/view?usp=sharing" target='_blank'>Download Now</a> 
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