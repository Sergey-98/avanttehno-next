import React from 'react';
import classes from '../../../styles/Requisites.module.css';

export default function Requisites() {
  return (
    <section className={classes.information__requisites}>
      <h3 className={classes.information__requisites__title}>Информация для оплаты:</h3>
      <div className={classes.requisit}>
        <div className={classes.requisit__title}>
          <span className={classes.requisit__subtitle}>ИНН:</span>
          <span className={classes.requisit__subtitle}>КПП:</span>
          <span className={classes.requisit__subtitle}>ОГРН:</span>
          <span className={classes.requisit__subtitle}>ОКПО:</span>
          <span className={classes.requisit__subtitle}>ОКАТО:</span>
          <span className={classes.requisit__subtitle}>Расчетный счёт:</span>
          <span className={classes.requisit__subtitle}>БИК:</span>
          <span className={classes.requisit__subtitle}>Корр. счёт:</span>
        </div>
        <div className={classes.requisit__text}>
          <span className={classes.requisit__text}>6452105360</span>
          <span className={classes.requisit__text}>645201001</span>
          <span className={classes.requisit__text}>1136450011543</span>
          <span className={classes.requisit__text}>24406505</span>
          <span className={classes.requisit__text}>63401372000</span>
          <span className={classes.requisit__text}>40702.810.4.56000016494</span>
          <span className={classes.requisit__text}>043601607</span>
          <span className={classes.requisit__text}>30101.810.2.00000000607</span>
        </div>
      </div>
    </section>
  );
}
