import React from 'react';
import styles from './Education.module.css';

const EducationCard = ({details : {course, name, startDate, endDate, marks}}) => {
  return (
    <ul className={styles.container}>
      <li>
      <h2 className={styles.title}>{course}</h2>
      <p className={styles.subheading}>{name}</p>
      
      <div className={styles.data}>
        <h4 className={styles.dates}>{startDate} - {endDate}</h4>
        <h2 className={styles.marks}>{marks}</h2>
        </div>
        </li>
    </ul>
  )
}

export default EducationCard