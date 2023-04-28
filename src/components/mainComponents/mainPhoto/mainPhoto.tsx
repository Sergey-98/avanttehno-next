import React from "react";
import Image from 'next/image';
import photo from '../../../assets/img/main-photo-2.png';
import styles from '../../../styles/mainPhoto.module.css';

export default function MainPhoto() {
  return (
    <section className={styles.main_photo_section}>
      <h1 className={styles.main_title}>Погрузчики от официального дилера JAC</h1>
      <Image src={photo} alt="" className={styles.main_photo} placeholder="blur" blurDataURL={String(photo)} />
    </section>
  );
}
