import React from 'react';
import styles from '../styles/AboutCompany.module.css';
import GlobalContainer from '../components/GlobalContainer';
import About from '../components/aboutComponents/About/About';
import Director from '../components/aboutComponents/Director/Director';
import Features from '../components/aboutComponents/Features/Features';

export default function AboutCompany() {
  return (
    <GlobalContainer title="О Компании | Avant-Техно" keywords='аванттехно, аванттехно о компании, JAC о компании, погрузчики в саратове, погрузчики в Саратове, JAC в Саратове, авант техно о компании, AvantTehno о компании, ООО"Авант Техно" о компании, ООО"Avant Техно" погрузчики в Саратове, погрузчики JAC, джак, погрузчики, официальный дилер JAC в Саратове, Бирюзова 22 о компании, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC' description='О Компании - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'>
      <main className={styles.main__about__container}>
      <div className={styles.main__about_company}>
        <About />
        <Director />
      </div>
      <Features />
    </main>
    </GlobalContainer>
    
  );
}
