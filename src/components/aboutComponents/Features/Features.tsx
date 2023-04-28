import React from 'react';
import styles from '../../../styles/Features.module.css';

export default function Features() {
  return (
    <section className={styles.features_wrapper}>
      <h1 className={styles.features_title}>Особенности вилочных погрузчиков JAC</h1>
      <span className={styles.features_text}>
        <p className={styles.features_textwrapper_text}>
          Вилочные погрузчики и складская техника фирмы JAC отличается доступными ценами, недорогим
          обслуживанием, надёжностью и эффективностью, а также простотой в эксплуатации. JAC –
          корпорация государственная, поэтому здесь проводится серьезный госконтроль качества
          сборки. Особенные требования предъявляются к поставщикам деталей, качественным показателям
          двигателей, сплавов и гидравлики. При изготовлении складского оборудования применяются
          комплектующие и технологии известных японских компаний: TCM, NISSAN, ISUZU.
        </p>
      </span>
      <span className={styles.features_textwrapper}>
        <h4 className={styles.features_textwrapper_title}>Сервисное обслуживание</h4>
        <p className={styles.features_textwrapper_text}>
          Обслуживание техники происходит на авторизированном СТО мастерами высочайшего уровня с
          использованием оригинальных комплектующих.
        </p>
      </span>
      <span className={styles.features_textwrapper}>
        <h4 className={styles.features_textwrapper_title}>Особенности эксплуатации</h4>
        <p className={styles.features_textwrapper_text}>
          Погрузчики бренда JAC выделяются высоким уровнем безопастости, хорошим обзором во всех
          направлениях. Также есть возможность установки дополнительного оборудования, которое может
          значительно увеличить производительность погрузчика.
        </p>
      </span>
      <span className={styles.features_textwrapper}>
        <h4 className={styles.features_textwrapper_title}>
          Технические характеристики погрузчиков
        </h4>
        <p className={styles.features_textwrapper_text}>
          Все серии оборудования от производителя JAC имеют трансмиссию с планетарной передачей. Это
          обеспечивает стабильность агрегатов и увеличивает время их эксплуатации. Устойчивость
          оборудование обеспечивается благодаря мощной системе торможения и рулевому управлению на
          гидроприводе. С целью обеспечить больший комфорт оператору, приборы и инструменты
          производитель вынес на внешнюю панель.
        </p>
      </span>
      <span className={styles.features_textwrapper}>
        <h4 className={styles.features_textwrapper_title}>
          На что обратить внимание при выборе погрузчика.
        </h4>
        <p className={styles.features_textwrapper_text}>
          Выбирая погрузчик, обратите внимание на дополнительные опции, которыми можно оснастить
          погрузчик Jac. Для работы в контейнерах или ограниченном пространстве по высоте необходимо
          использовать мачту со свободным ходом. Для удобства размещения поддонов на стеллажах
          существует опция сайд-шифт, другими словами боковое смещение вил.
        </p>
      </span>
    </section>
  );
}
