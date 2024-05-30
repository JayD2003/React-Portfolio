import React from 'react';
import styles from './SkillCard.module.css';
import { getImageUrl } from '../../../utils';

const SkillCard = ({skill : {title, names}}) => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.namescontain}>
            {
                names.map((prog, x) => {
                    return (
                    <div key={x} className={styles.content}>
                        <h2 className={styles.name}>{prog.name}</h2>
                        <img className={styles.img} src={getImageUrl(prog.Imgsrc)} alt="" />
                    </div>
                    );
                })
            
              }
            </div>
        </div>
  )
}

export default SkillCard