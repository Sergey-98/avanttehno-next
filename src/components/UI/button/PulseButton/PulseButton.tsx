// import React from 'react';
import styles from '../../../../styles/PulseButton.module.css';
import { Props } from '../../../../types/types';

const PulseButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={styles.pulse_button}>
      <span className={styles.pulse_button__icon}></span>
      <span className={styles.pulse_button__text}>Закажите звонок</span>
      <span className={styles.pulse_button__rings}></span>
      <span className={styles.pulse_button__rings}></span>
      <span className={styles.pulse_button__rings}></span>
    </button>
  );
};

export default PulseButton;
