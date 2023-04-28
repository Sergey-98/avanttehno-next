import React from "react";
import Image from "next/image";
import styles from "../../../styles/CatalogCard.module.css";
import { PropsCardType } from "../../../types/types";

export default function CatalogCard(props: PropsCardType) {
  return (
    <section
      className={styles.mainCatalog_wrapper}
      onClick={props.onOpenForklift}
    >
      <h4 className={styles.mainCatalog_title}>{props.cardValue.title}</h4>
      <Image
        src={props.cardValue.img as string}
        alt="forkliftCard"
        className={styles.img}
        placeholder="blur"
        blurDataURL={String(props.cardValue.img)}
      />
    </section>
  );
}
