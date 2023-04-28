// import React from 'react';
import styles from '../../../styles/Button.module.css';
import { Props } from '../../../types/types';

const Close = (props: Props) => {
  return (
    <button onClick={props.onClick} className={styles.cl_btn_2}>
      <div>
        <div className={styles.leftright}></div>
        <div className={styles.rightleft}></div>
      </div>
    </button>
  );
};

export default Close;
