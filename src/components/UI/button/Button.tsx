// import React from 'react';
import styles from '../../../styles/Button.module.css';
import { Props } from '../../../types/types';

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
