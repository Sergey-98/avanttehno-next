import React from "react";
import Image from 'next/image';
import styles from '../../../../styles/advantage.module.css';
import { AdvantageProps } from '../../../../types/types';

export default function Advantage(props: AdvantageProps) {
  return (
    <div className={styles.advantages__section_block}>
      <Image src={props.icon as string} alt={props.title} className={styles.advantages__icon} />
      <h4 className={styles.advantages__section_block_title}>{props.title}</h4>
      <p className={styles.advantages__section_block_text}>{props.text}</p>
    </div>
  );
}
