import React from 'react';
import styles from '../../../styles/advantages.module.css';
import Advantage from './advantage/advantage';
import ic_JAC from '../../../assets/icons/advantages/JAC.svg';
import ic_community from '../../../assets/icons/advantages/community.svg';
import ic_autopart from '../../../assets/icons/advantages/autopart.svg';
import ic_garanty from '../../../assets/icons/advantages/garanty.svg';
import ic_repair from '../../../assets/icons/advantages/repair.svg';
import ic_tradein from '../../../assets/icons/advantages/tradein.svg';
import ic_help from '../../../assets/icons/advantages/help.svg';

export default function Advantages() {
  const icons = [ic_JAC, ic_community, ic_autopart, ic_garanty, ic_repair, ic_tradein, ic_help];
  const titles = [
    'Компания JAC',
    'Забота о клиентах',
    '100000 запчастей',
    'Расширенная гарантия',
    'Ремонт и сервис',
    'Trade-in',
    'Помощь в освоении техники',
  ];
  const texts = [
    'Официальный поставщик техники мирового уровня. Использование складской техники фирмы JAC облегчает поиск запчастей и комплектующих для ремонта и обслуживания.',
    'Оперативная обратная связь с клиентом по возникающим вопросам в ходе эксплуатации техники.',
    'Наличие запчастей для техники на складе и под заказ от производителя.',
    'Надежные погрузчики с гарантией 5 лет или 5000 моточасов.',
    'Компания AvantTehno предлагает квалифицированные услуги по обслуживанию и ремонту погрузчиков и другой спецтехники.',
    'Вы можете выгодно обменять ваш старый погрузчик JAC в счет оплаты нового.',
    'Мы обучим вашего оператора работе на машине и дадим понятные инструкции по эксплуатации.',
  ];
  return (
    <section className={styles.advantages__section}>
      <div className={styles.line_title}>
        <h2 className={styles.advantages__title}>Преимущества работы с нами</h2>
      </div>

      <div className={styles.advantages__section_container}>
        {titles.map((blockTitle: string, id: number) => {
          return <Advantage title={blockTitle} text={texts[id]} icon={icons[id]} key={id} />;
        })}
      </div>
    </section>
  );
}
