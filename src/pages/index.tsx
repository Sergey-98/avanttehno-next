import React from "react";
import GlobalContainer from "../components/GlobalContainer";
import MainAbout from "../components/mainComponents/About/MainAbout";
import MainPhoto from "../components/mainComponents/mainPhoto/mainPhoto";
import Partners from "../components/mainComponents/partners/partners";
import Advantages from "../components/mainComponents/advantages/advantages";

const Index = () => {
  return (
    <GlobalContainer
      title="Главная | Avant-Техно"
      keywords='аванттехно, JAC, погрузчики в саратове, погрузчики в Саратове, JAC в Саратове, вилочные погрузчики jac, авант техно, AvantTehno, ООО"Авант Техно", ООО"Avant Техно" погрузчики в Саратове, погрузчики JAC, джак, погрузчики, официальный дилер JAC в Саратове, Бирюзова 22, продажа погрузчиков, спецтехника, спец техника в Саратове, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC'
      description='ООО"AvantTehno" - официальный дилер вилочных погрузчиков JAC. Прямые поставки из Китая погрузчиков фирмы JAC. Гарантия ⑤ лет! ✓ В наличии на складе! Быстрая доставка по России ⛟. тел: ☎'
    >
      <MainPhoto />
      <MainAbout />
      <Partners />
      <Advantages />
    </GlobalContainer>
  );
};

export default Index;
