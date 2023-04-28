import React from 'react';
import styles from '../../../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about__company_wrapper}>
      <div className={styles.about__company_textwrapper}>
        <div className={styles.about__company_title}>
          <h2 className={styles.main__title}>О компании</h2>
        </div>
        <p className={styles.about__company_text}>
          Наша компания более 10 лет занимается поставками складской техники по России, а также
          является официальным дистрибьютером крупнейшего производителя JAC.
        </p>
        <p className={styles.about__company_text}>
          Наша стратегия - продажа современой техники, отвечающей мировым стандартам качества. Мы
          предлагаем заказчикам комплексное решение технических задач на основе применения в работе
          современной складской техники, способной повысить эффективность работы в десятки раз.
        </p>
        <p className={styles.about__company_text}>
          Кроме того, большим преимуществом нашей компании является рациональная ценовая политика.
          Практика работы нашей компании подтверждает стабильный спрос со стороны многочисленных
          клиентов. Предлагаемая нами продукция складского назначения отличается высоким качеством
          изготовления и самыми современными техническими свойствами.
        </p>
        <span className={styles.about__company_text}></span>
      </div>
    </section>
  );
}
