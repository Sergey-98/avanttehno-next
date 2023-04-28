import React from "react";
import Image from 'next/image';
import styles from '../../../../styles/InfoComponent.module.css';
import { InfoProps } from '../../../../types/types';

export default function InfoComponent(props: InfoProps) {
  const { src, title, text } = props;
  return (
    <div className={styles.information__contact_container}>
      <Image src={src} alt="" width={30} height={30} />
      <div className={styles.information__contact}>
        <span className={styles.information__title}>{title}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
