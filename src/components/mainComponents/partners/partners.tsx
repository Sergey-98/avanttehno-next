import React from "react";
import Image from 'next/image';
import gazprom from '../../../assets/partners/gazprom.png';
import interRAOES from '../../../assets/partners/interRAOES.png';
import oboronService from '../../../assets/partners/oboronService.png';
import pochtaRussia from '../../../assets/partners/pochtaRussia.png';
import rosneft from '../../../assets/partners/rosneft.png';
import rostelecom from '../../../assets/partners/rostelecom.png';
import RusGidro from '../../../assets/partners/RusGidro.png';
import tatneft from '../../../assets/partners/tatneft.png';
import styles from '../../../styles/partners.module.css';

export default function Partners() {
  const cards = [
    gazprom,
    interRAOES,
    oboronService,
    pochtaRussia,
    rosneft,
    rostelecom,
    RusGidro,
    tatneft,
  ];
  return (
    <section className={styles.partners_section}>
      <h2 className={styles.partners_title}>Наши партнеры</h2>
      <div className={styles.partners_section__cards}>
        {cards.map((elem, id: number) => {
          return <Image src={elem} alt={'partner'} className={styles.partners__img} key={id} />;
        })}
      </div>
    </section>
  );
}
