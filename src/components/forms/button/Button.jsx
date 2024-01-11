import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, disabled, props }) => {
  return (
    <button disabled={disabled} {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
