import React, { useContext, useRef } from 'react';
import styles from '../../styles/ModalCallback.module.css';
import { Context } from '../../Context/Context';
import Close from '../UI/button/Close';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

export default function ModalCallback() {
  const { formCallbackState, formCallbackDispatch, state, dispatch } = useContext(Context);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_ksceqzu', 'template_v8msxyq', form.current, 'a16Nmw3f7CqETrIRS')
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire('Good job!', 'Ваша заявка успешно отправлена', 'success');
            resetForm();
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Сервис временно недоступен. Попробуйте повторить запрос через несколько минут',
            });
          }
        );
    }
  };

  const resetForm = () => {
    if (formCallbackDispatch) {
      form.current?.reset();
      formCallbackDispatch({ type: 'phoneNumber', payloadFormCallback: { phoneNumber: '' } });
      formCallbackDispatch({ type: 'name', payloadFormCallback: { name: '' } });
      dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: false } });
    }
  };

  const inputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formCallbackDispatch) {
      formCallbackDispatch({ type: 'name', payloadFormCallback: { name: event.target.value } });
    }
  };
  const inputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formCallbackDispatch) {
      formCallbackDispatch({
        type: 'phoneNumber',
        payloadFormCallback: { phoneNumber: event.target.value },
      });
    }
  };
  const changeModal = () => {
    if (state.isOpenModalCallback) {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: true } });
      }
    }
  };

  return (
    <section className={styles.modal_container}>
      <span className={styles.modal_close}>
        <Close onClick={changeModal}></Close>
      </span>
      <span className={styles.modal__title_block}>
        <h3 className={styles.modal__title}>Заказать звонок</h3>
        <p className={styles.modal__title_text}>
          Укажите ваши контактные данные и мы свяжемся с вами в ближайшее время
        </p>
      </span>
      <form className={styles.modal_container__form} onSubmit={sendEmail} ref={form}>
        <label>
          <input
            className={styles.input__text}
            value={formCallbackState.name}
            name="name"
            placeholder={'Имя'}
            autoComplete="nope"
            type="text"
            onChange={inputText}
          />
          <span className={formCallbackState.errorName ? 'error-text' : 'none'}>
            {formCallbackState.errorName}
          </span>
        </label>
        <label>
          <input
            className={styles.input__text}
            name="phone"
            value={formCallbackState.phoneNumber}
            placeholder={'Номер телефона'}
            autoComplete="nope"
            type="tel"
            onChange={inputNumber}
          />
          <span className={formCallbackState.errorNumber ? 'error-text' : 'none'}>
            {formCallbackState.errorNumber}
          </span>
        </label>
        <input className={styles.input__submit} value={'Заказать звонок'} type={'submit'} />
      </form>
    </section>
  );
}
