import React from 'react';
import classes from '../../../../styles/GuideContact.module.css';

export default function GuideContact() {
  // const { src, title, text } = props;
  return (
    <div className={classes.guide__contact_container}>
      <h3 className={classes.guide__persons_title}>Руководство компании:</h3>
      <div className={classes.guide__contact_persons}>
        <div className={classes.guide__main_person}>
          <span className={classes.person_title}>Христов Олег Вячеславович</span>
          <span className={classes.person_text}>
            <a className={classes.person_text_phone} href="tel:+79372585005">
              +7 (937) 258-50-05
            </a>
          </span>
        </div>
        <div className={classes.guide__main_person}>
          <span className={classes.person_title}>Банников Андрей Александрович</span>
          <span className={classes.person_text}>
            <a className={classes.person_text_phone} href="tel:+79272239573">
              +7 (927) 223-95-73
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
