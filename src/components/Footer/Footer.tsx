import React from 'react';
import styles from '../../styles/Footer.module.css';
import Contact from './Contact/Contact';
import ic_mail from '../../assets/icons/mail.svg';
import ic_call from '../../assets/icons/call.svg';
import ic_location from '../../assets/icons/location.svg';
import logo from '../../assets/logo.svg';

export default function Footer() {
  const icons = [logo, ic_mail, ic_call, ic_location];
  const titles = ['Avant Техно', 'Mail', 'Call', 'Location'];
  const texts = [
    'Качество на долгие годы',
    'avanttehno@yandex.ru',
    '(8452)42-00-11, 55-67-15',
    'г.Саратов, ул.Бирюзова 22',
  ];
  return (
    <footer className={styles.footer__container}>
      {icons.map((elem: string, id: number) => {
        return <Contact icon={elem} title={titles[id]} text={texts[id]} key={id} />;
      })}
    </footer>
  );
}
