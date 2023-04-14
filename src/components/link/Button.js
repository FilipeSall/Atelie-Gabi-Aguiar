import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ text, path, onClick }) => {
  const location = useLocation();
  const activeClass = location.pathname === path ? styles.active : '';

  return (
    <NavLink to={path} className={`${styles.button} ${activeClass}`} onClick={onClick}>
      {text}
    </NavLink>
  );
};

export default Button;
