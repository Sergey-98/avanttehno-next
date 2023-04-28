import React, { useEffect, useState } from "react";
import GlobalContainer from "../../components/GlobalContainer";
import styles from "../../styles/ForkliftsCatalog.module.css";
import ForkliftCards from "../../components/catalogComponents/ForkliftCards/ForkliftCards";

export default function ForkliftsCatalog() {
  const [catalogTitle, setCatalogTitle] = useState("Бензиновые погрузчики");
  useEffect(
    () => {
      const x = localStorage.getItem("catalogTitle");
      if (x) {
        setCatalogTitle(String(x));
      }
    },
    []
  );
  return (
    <GlobalContainer
      title={`${catalogTitle} | Avant-Техно`}
      keywords={`JAC погрузчики, погрузчики JAC, ${catalogTitle.toLowerCase()}, ${catalogTitle.toLowerCase()} в Саратове, ${catalogTitle.toLowerCase()} в саратове`}
      description={`Каталог (${catalogTitle}) - ООО"AvantTehno" - официальный дилер погрузчиков JAC.`}
    >
      <main className={styles.main__catalog_wrapper}>
        <div className={styles.main__title_wrapper}>
          <h2 className={styles.main__catalog_title}>{catalogTitle}</h2>
        </div>
        <ForkliftCards />
      </main>
    </GlobalContainer>
  );
}
