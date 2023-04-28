/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Dispatch, SetStateAction } from 'react';
import {
  State,
  FormParamState,
  FormCallbackParamState,
  DispatchType,
  DispatchFormType,
  DispatchFormCallbackType,
  ForkliftState,
  DispatchForkliftType,
} from '../types/types';

type PropsP = {
  state: State;
  dispatch: Dispatch<DispatchType>;
  formState: FormParamState;
  formDispatch: Dispatch<DispatchFormType>;
  formCallbackState: FormCallbackParamState;
  formCallbackDispatch: Dispatch<DispatchFormCallbackType>;
  isBurger: boolean;
  catalogTitle: string;
  setCatalogTitle: Dispatch<SetStateAction<string>>;
  setIsBurger: Dispatch<SetStateAction<boolean>>;
  forkliftState: ForkliftState;
  forkliftDispatch: Dispatch<DispatchForkliftType>;
};

export const Context = React.createContext<PropsP>({
  state: { isOpenRequisites: false, isOpenModal: false, isOpenModalCallback: false },
  dispatch: () => {},
  formState: {
    name: '',
    phoneNumber: '',
    email: '',
    model: '',
    message: '',
    errorName: '',
    errorNumber: '',
    errorEmail: '',
    errorMessage: '',
  },
  formDispatch: () => {},
  formCallbackState: {
    name: '',
    phoneNumber: '',
  },
  formCallbackDispatch: () => {},
  isBurger: false,
  setIsBurger: () => {},
  catalogTitle: '',
  setCatalogTitle: () => {},
  forkliftState: { type: '' },
  forkliftDispatch: () => {},
});
