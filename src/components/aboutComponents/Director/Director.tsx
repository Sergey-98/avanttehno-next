import React from 'react';
import classes from '../../../styles/Director.module.css';

export default function Director() {
  return (
    <section className={classes.contacts__director}>
      <h3 className={classes.director__title}>Руководство компании ООО «AvantТехно»</h3>
      <div className={classes.director__container}>
        <div className={classes.director__img_wrapper}>
          <div className={classes.director__img}></div>
        </div>
        <div className={classes.director__text_container}>
          <div className={classes.director__text_name}>
            <span className={classes.director__text_title}>Христов Олег Вячеславович</span>
            <span className={classes.director__text_subtitle}>Директор</span>
          </div>
          <span className={classes.director__text_quote}>
            &laquo;Я лично слежу за качеством наших услуг. Для меня важно, чтобы каждый клиент был
            доволен поставляемой продукцией&raquo;
          </span>
        </div>
      </div>
    </section>
  );
}
