import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Image_logo from '../../assets/logo.svg';
import Link from "next/link";
import Button from "../UI/button/Button";
import { Context } from '../../Context/Context';
import PulseButton from '../UI/button/PulseButton/PulseButton';
import Hamburger from '../Hamburger/Hamburger';

export default function Header() {
  const { isBurger, setIsBurger, state, dispatch } = useContext(Context);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: true } });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  const changeModal = () => {
    if (state.isOpenModal) {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
      }
    }
  };
  const changeModalCallback = () => {
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
  const changeBurger = () => {
    if (isBurger) {
      setIsBurger(false);
    }
  };
  return (
    <header className="header">
        <Link className="header__logo_wrapper" href="/">
          <Image
            src={Image_logo}
            alt=""
            className="header__logo"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            placeholder="blur" 
            blurDataURL={String(Image_logo)}
          />
        </Link>
        <nav className={isBurger ? "navbar active" : "navbar"}>
          <div className="navbar__links">
            <Link onClick={changeBurger} className="navbar__link" href="/">
              Главная
            </Link>
            <Link
              onClick={changeBurger}
              className="navbar__link"
              href="/catalog"
            >
              Каталог
            </Link>
            <Link
              onClick={changeBurger}
              className="navbar__link"
              href="/about"
            >
              О компании
            </Link>
            <Link
              onClick={changeBurger}
              className="navbar__link"
              href="/contacts"
            >
              Контакты
            </Link>
          </div>
        </nav>
        <Button onClick={changeModal}>Оставить заявку</Button>
        <Hamburger />
        <PulseButton onClick={changeModalCallback} />
      </header>
  );
  
}