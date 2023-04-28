import React from 'react';
import classes from '../../../styles/MapBlock.module.css';
import { YMaps, Map, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';

export default function MapBlock() {
  const coordinates = [51.569315, 46.031589];
  return (
    <section className={classes.map__container}>
      <h1 className={classes.map__title}>Схема проезда</h1>
      <YMaps query={{ lang: 'ru_RU' }}>
        <div className={classes.map__board}>
          <Map
            defaultState={{ center: coordinates, zoom: 17 }}
            width={'40vw'}
            height={'60vh'}
            className={classes.map}
          >
            <FullscreenControl options={{ float: 'right' }} />
            <Placemark
              geometry={coordinates}
              properties={{
                hintContent: 'ул.Бирюзова, 22',
                balloonContent: 'г.Саратов, ул.Бирюзова, 22 (AvantТехно)',
              }}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />
          </Map>
        </div>
      </YMaps>
    </section>
  );
}
