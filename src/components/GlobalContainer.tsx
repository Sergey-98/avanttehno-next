import React, { useReducer, useState } from "react";
import Head from "next/head";
import { GlobalProps } from "../types/types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import ModalCallback from "./ModalCallback/ModalCallback";
import { Context } from "../Context/Context";
import {
  reducer,
  formReducer,
  forkliftReducer,
  formCallbackReducer,
} from "../reducer/reducer";
import AlertModal from "./AlertModal/AlertModal";

const GlobalContainer = ({
  children,
  title,
  keywords,
  description,
}: GlobalProps) => {
  let initialForkliftType = {
    type: "",
  };
  let catalogT = "";
  if (typeof window !== 'undefined') {
    initialForkliftType = {
      type: String(localStorage.getItem('typeForklift')),
    };
    catalogT = String(localStorage.getItem('catalogTitle'));
  }
  const initialState = {
    isOpenAlert: false,
    isOpenRequisites: false,
    isOpenModal: false,
    isOpenModalCallback: false,
  };
  const initialFormState = {
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    errorName: "",
    errorNumber: "",
    errorEmail: "",
    errorMessage: "",
  };
  const initialFormCallbackState = {
    name: "",
    phoneNumber: "",
  };
  // const initialForkliftType = {
  //   type: String(localStorage.getItem('typeForklift')),
  // };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [formCallbackState, formCallbackDispatch] = useReducer(
    formCallbackReducer,
    initialFormCallbackState
  );
  const [isBurger, setIsBurger] = useState(false);
  const [catalogTitle, setCatalogTitle] = useState(catalogT);
  // const [catalogTitle, setCatalogTitle] = useState(String(localStorage.getItem('catalogTitle')));
  // const [catalogTitle, setCatalogTitle] = useState('');
  const [forkliftState, forkliftDispatch] = useReducer(
    forkliftReducer,
    initialForkliftType
  );
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="../../static/favicon.ico" type="image/x-icon" />
      </Head>

      <Context.Provider
        value={{
          state,
          dispatch,
          formState,
          formDispatch,
          formCallbackState,
          formCallbackDispatch,
          isBurger,
          setIsBurger,
          catalogTitle,
          setCatalogTitle,
          forkliftState,
          forkliftDispatch,
        }}
      >
        <Header />
        {children}
        <Footer />
        {state.isOpenModal ? <Modal /> : null}
        {state.isOpenModalCallback ? <ModalCallback /> : null}
        {state.isOpenAlert ? <AlertModal /> : null}
      </Context.Provider>
    </>
  );
};

export default GlobalContainer;
