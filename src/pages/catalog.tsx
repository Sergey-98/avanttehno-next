import React from "react";
import styles from "../styles/Catalog.module.css";
import GlobalContainer from "../components/GlobalContainer";
import CatalogCards from "../components/catalogComponents/CatalogCards/CatalogCards";

export default function Catalog() {
  return (
    <GlobalContainer
      title="Каталог | Avant-Техно"
      keywords="аванттехно, авант техно каталог, аванттехно каталог, каталог JAC, JAC погрузчики, погрузчики JAC, продажа погрузчиков, спецтехника, спец техника в Саратове, погрузчики JAC каталог, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC"
      description='Каталог - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
    >
      <main className={styles.main__catalog_wrapper}>
        <div className={styles.main__title_wrapper}>
          <h2 className={styles.main__catalog_title}>Каталог</h2>
        </div>
        <CatalogCards />
      </main>
    </GlobalContainer>
  );
}
