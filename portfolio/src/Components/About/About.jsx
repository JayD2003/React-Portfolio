import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
      <section  className={styles.container} id="about">
          <h2 className={styles.title}>About</h2>
          <div className={styles.content}>
              <div className={styles.aboutDesc}>
                  <h3>Hey 👋, I'm Jayasai.</h3>
                  <p>I'm a passionate student currently in my third year pursuing a degree in Computer Science and Engineering.
                      With a passion for software development and innovation, I thrive on crafting elegant solutions to complex problems.</p>
                  <ul className={styles.aboutItems}>
                      <li>
                          <a>Experience</a>
                          
                      </li>
                      <li>
                          <a >Education</a>
                      </li>
                  </ul>
                  <div className={styles.exp}>
                        <h4>
                            Looking For Intership Oppurtunity
                        </h4>
                        <h5>Check Out My CV</h5>
                        <button>
                            Download Now
                        </button>
                    </div>
              </div>
              <img className={styles.aboutImg} src={getImageUrl("About/dp.jpeg")} alt="" />
          </div>
    </section>
  )
}

export default About