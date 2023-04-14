import React from 'react';
import styles from './Panel.module.css';

function Panel({num, text}) {
  return (
    <div className={styles.panel}>
        <h2>{num}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Panel