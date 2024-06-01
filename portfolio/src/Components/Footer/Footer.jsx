import React from 'react';
import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';

const Footer = () => {
  return (
    <div className={styles.wrapper} id="contact">
    <div className={styles.container}>
        <div className={styles.left}>
            <h1 className={styles.title}>Designed & Developed by <br></br></h1>
            <h1 className={styles.title}>Jayasai Dodla</h1>
        </div>
        <div className={styles.right}>
            <ul>
                <li><a href="mailto:jayasaidodla@gmail.com">Email</a></li>
                <li> <a href="https://www.linkedin.com/in/jaydodla" target='_blank'>LinkedIn</a> </li>
                <li> <a href="https://github.com/JayD2003" target='_blank'>Github</a></li>
                <li><a href="https://www.instagram.com/_mr__ingenious_/" target='_blank'>Instagram</a></li>
                <li><a href="https://x.com/JayDodla" target='_blank'>X</a></li>
            </ul>
        </div>
    </div>
    <h2 className={styles.copyright}>&copy; Jayasai Dodla</h2>
    </div>
  )
}

export default Footer