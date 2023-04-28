import React from "react";
import classes from "../styles/ContactsPage.module.css";
import GlobalContainer from "../components/GlobalContainer";
import MapBlock from "../components/contactsComponents/MapBlock/MapBlock";
import Information from "../components/contactsComponents/Information/Information";

export default function ContactsPage() {
  return (
    <GlobalContainer
      title="Контакты | Avant-Техно"
      keywords='аванттехно контакты, авант техно контакты, AvantTehno контакты, ООО"Авант Техно" контакты, ООО"Avant Техно" погрузчики в Саратове, JAC контакты, погрузчики JAC, джак, погрузчики контакты, официальный дилер JAC в Саратове, Бирюзова 22 контакты, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC'
      description='Контакты - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
    >
      <main className={classes.main__contacts__container}>
      <section className={classes.contacts__container}>
        <MapBlock />
        <Information />
      </section>
      </main>
    </GlobalContainer>
  );
}
