import React from "react";
import Image from 'next/image';
import GlobalContainer from '../components/GlobalContainer';
import Link from "next/link";
import styles from '../styles/404.module.css';
import errorImg from '../assets/error-image.jpg';

export default function Error() {
  return (
    <GlobalContainer title='404 — Страница не найдена'>
      <main className={styles.error__contsiner}>
      <div className={styles.error_block}>
        <div className={styles.error_number_wrapper}>
          <div className={styles.error_number}>404</div>
        </div>
        <div className={styles.error_main_block}>
          <h1 className={styles.error_title}>Вы перешли на несуществующую страницу!</h1>
          <p className={styles.error_text_block}>
            Такое иногда случается! Самые вероятные причины - устаревшая ссылка или страница была
            удалена. Перейдите на <Link href="/">главную страницу</Link> и попробуйте начать оттуда.
          </p>
        </div>
      </div>
      <div className={styles.container__img}>
        <Image src={errorImg} alt="broken jac" width={400} height={400}></Image>
      </div>
    </main>
    </GlobalContainer>
  );
}
