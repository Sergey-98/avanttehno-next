import React from "react";
import Image from 'next/image';
import styles from '../../../styles/MainAbout.module.css';
import factory from '../../../assets/img/JAC_company.jpeg';

export default function MainAbout() {
  return (
    <section className={styles.about__company_section}>
      <div className={styles.about__title}>
        <h2 className={styles.main__title}>О компании</h2>
      </div>
      <div className={styles.about__container}>
        <div className={styles.about__textblock}>
          <h3 className={styles.about__subtitle}>Поставщик вилочных погрузчиков JAC в России</h3>
          <p className={styles.about__textblock_description}>
            <i>ООО &quot;АвантТехно&quot;</i> - официальный дилер по продаже складской техники фирмы
            JAC по Российской Федерации с 2013 года.
          </p>
          <p className={styles.about__textblock_description}>
            JAC – корпорация государственная, поэтому здесь проводится серьезный госконтроль
            качества сборки. Особенные требования предъявляются к поставщикам деталей, качественным
            показателям двигателей, сплавов и гидравлики. При изготовлении складского оборудования
            применяются комплектующие и технологии известных японских компаний.
          </p>
          <p className={styles.about__textblock_description}>
            Мы предлагаем качественную технику по низким ценам. Отгрузка осуществляется в любой
            регион РФ в минимальные сроки.
          </p>
          <p className={styles.about__textblock_description}>
            JAC погрузчики – искусство транспортировки груза.
          </p>
          <p className={styles.about__textblock_description}>
            Девизом нашей компании является &quot;Высокая производительность и комплексное
            обслуживание&quot;. Работа ради клиентов с нашей стороны позволяет получать лишь самую
            качественную технику, которая адаптирована к Российским условиям эксплуатации.
          </p>
        </div>
        <Image src={factory} alt="" className={styles.about__photo} />
      </div>
    </section>
  );
}
