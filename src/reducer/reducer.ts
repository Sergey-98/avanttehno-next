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

export function reducer(state: State, action: DispatchType) {
  switch (action.type) {
    case 'resetRequisites':
      state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    case 'resetModal':
      state.isOpenModal = action.payload.isOpenModal;
      return {
        ...state,
      };
    case 'resetModalCallback':
      state.isOpenModalCallback = action.payload.isOpenModalCallback;
      return {
        ...state,
      };
    case 'resetAlert':
      state.isOpenAlert = action.payload.isOpenAlert;
      return {
        ...state,
      };
    default:
      return state;
  }
}

export function formReducer(state: FormParamState, action: DispatchFormType) {
  switch (action.type) {
    case 'name':
      state.name = action.payloadForm.name;
      return {
        ...state,
      };
    case 'phoneNumber':
      state.phoneNumber = action.payloadForm.phoneNumber;
      return {
        ...state,
      };
    case 'email':
      state.email = action.payloadForm.email;
      return {
        ...state,
      };
    case 'message':
      state.message = action.payloadForm.message;
      return {
        ...state,
      };
    case 'model':
      state.model = action.payloadForm.model;
      return {
        ...state,
      };
    case 'errorName':
      // state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    case 'errorNumber':
      state.errorNumber = action.payloadForm.errorNumber;
      return {
        ...state,
      };
    case 'errorEmail':
      state.errorEmail = action.payloadForm.errorEmail;
      return {
        ...state,
      };
      return {
        ...state,
      };
    case 'errorMessage':
      // state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    default:
      return state;
  }
}

export function formCallbackReducer(
  state: FormCallbackParamState,
  action: DispatchFormCallbackType
) {
  switch (action.type) {
    case 'name':
      state.name = action.payloadFormCallback.name;
      return {
        ...state,
      };
    case 'phoneNumber':
      state.phoneNumber = action.payloadFormCallback.phoneNumber;
      return {
        ...state,
      };
    default:
      return state;
  }
}

export function forkliftReducer(state: ForkliftState, action: DispatchForkliftType) {
  switch (action.type) {
    case 'resetType':
      state.type = action.payload.type;
      return {
        ...state,
      };
    default:
      return state;
  }
}
