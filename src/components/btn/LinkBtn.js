import React from 'react';
import styles from './LinkBtn.module.css';


function LinkBtn({path, text, classBtn, icon}) {

  return (
    <a href={path} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles[classBtn]}`}>{icon && icon} {text}</a>
  )
}

export default LinkBtn;