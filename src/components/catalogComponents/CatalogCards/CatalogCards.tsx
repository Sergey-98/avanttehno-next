import React, { useContext } from 'react';
import Link from "next/link";
import styles from '../../../styles/CatalogCards.module.css';
import { getCatalogData } from '../../../API/API';
import CatalogCard from '../CatalogCard/CatalogCard';
import { Context } from '../../../Context/Context';
import { ForkliftCardType } from '../../../types/types';

export default function CatalogCards() {
  const { forkliftDispatch } = useContext(Context);
  const data = getCatalogData();
  const forkliftTypes = Object.keys(data);
  const forkliftData = Object.values(data);
  const openForkliftType = (forkliftType: string, forkliftD: string) => {
    forkliftDispatch({ type: 'resetType', payload: { type: forkliftType } });
    localStorage.setItem('typeForklift', forkliftType);
    localStorage.setItem('catalogTitle', forkliftD);
  };

  return (
    
      <section className={styles.mainCatalog_wrapper}>
      {forkliftData.map((value: ForkliftCardType, id: number) => {
        return (
          <Link href={`/catalog/${forkliftTypes[id]}`} key={id}>
            <CatalogCard
            onOpenForklift={() => openForkliftType(forkliftTypes[id], forkliftData[id].title)}
            cardValue={value}
            key={id}
          />
          </Link>
        );
      })}
    </section>
    
  );
}
