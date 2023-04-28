import React, { useContext } from "react";
import Image from "next/image";
import styles from "../../../styles/ForkliftCard.module.css";
import { PropsForkliftCardType } from "../../../types/types";
import Button from "../../../components/UI/button/Button";
import { Context } from "../../../Context/Context";

export default function CatalogCard(props: PropsForkliftCardType) {
  const { state, dispatch, formDispatch } = useContext(Context);
  const changeModal = () => {
    if (state.isOpenModal) {
      if (dispatch) {
        dispatch({ type: "resetModal", payload: { isOpenModal: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: "resetModal", payload: { isOpenModal: true } });
      }
    }
    if (formDispatch) {
      formDispatch({
        type: "model",
        payloadForm: { model: props.cardValue.description?.model },
      });
    }
  };
  return (
    <section
      className={styles.mainCatalog_wrapper}
      onClick={props.onOpenForklift}
    >
      <h4 className={styles.mainCatalog_title}>{props.cardValue.title}</h4>
      <Image
        src={props.cardValue.img as string}
        alt="forkliftCard"
        className={styles.img}
        placeholder="blur"
        blurDataURL={String(props.cardValue.img)}
      />
      <p className={styles.specifications}>
        {props.cardValue.description?.model ||
        props.cardValue.description?.loadCapacity ||
        props.cardValue.description?.engineType ||
        props.cardValue.description?.liftingHeight ||
        props.cardValue.description?.wheelType ? (
          <span>
            <b>
              <i>Характеристики:</i>
            </b>
          </span>
        ) : null}
        {props.cardValue.description?.model ? (
          <span>Модель: {props.cardValue.description?.model}</span>
        ) : null}
        {props.cardValue.description?.loadCapacity ? (
          <span>
            Грузоподъемность: {props.cardValue.description?.loadCapacity}
          </span>
        ) : null}
        {props.cardValue.description?.engineType ? (
          <span>Двигатель: {props.cardValue.description?.engineType}</span>
        ) : null}
        {props.cardValue.description?.liftingHeight ? (
          <span>
            Высота подъёма: {props.cardValue.description?.liftingHeight}
          </span>
        ) : null}
        {props.cardValue.description?.wheelType ? (
          <span>Тип шин: {props.cardValue.description?.wheelType}</span>
        ) : null}
      </p>
      <Button onClick={changeModal}>Заказать</Button>
    </section>
  );
}
