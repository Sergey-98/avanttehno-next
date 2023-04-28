import React from 'react';
import Image from "next/image";
import styles from "../../../styles/Contact.module.css";
import { ContactType } from "../../../types/types";

export default function Contact(props: ContactType) {
  return (
    <section className={styles.contact__container}>
      <Image src={props.icon as string} alt={"icon"} className={styles.contact__img} />
      <h4 className={styles.contact__title}>{props.title}</h4>
      <span className={styles.contact__text}>{props.text}</span>
    </section>
  );
}
