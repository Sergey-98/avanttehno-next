import React, { useState, useEffect } from 'react';
import styles from '../../../styles/ForkliftCards.module.css';
import { getCatalogData } from '../../../API/API';
import ForkliftCard from '../ForkliftCard/ForkliftCard';
import { TypeForForkliftCard } from '../../../types/types';

export default function ForkliftCards() {
  const data = getCatalogData();
  const [s, setS] = useState(data['petrolForklift' as keyof typeof data]);
  useEffect(
    () => {
      const x = localStorage.getItem('typeForklift');
      if (x) {
        setS(data[String(x) as keyof typeof data]);
      }
    },
    [data]
  );
  return (
    <section className={styles.mainCatalog_wrapper}>
      {(Object.values(s['values' as keyof typeof s]) as TypeForForkliftCard[]).map((val: TypeForForkliftCard, id: number) => {
        return <ForkliftCard cardValue={val} key={id} />;
      })}
    </section>
  );
}
