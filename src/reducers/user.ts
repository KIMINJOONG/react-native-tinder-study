import produce from 'immer';

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  me: null,
  counter: 0,
};

// 비동기 요청
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export interface ILOG_IN_REQUEST {
  type: typeof LOG_IN_REQUEST;
  data: {
    eamil: string;
    password: string;
  };
}

export interface ILOG_IN_SUCCESS {
  type: typeof LOG_IN_SUCCESS;
  data: any;
}

export interface ILOG_IN_FAILURE {
  type: typeof LOG_IN_FAILURE;
  error: any;
}

export type UserActionType =
  | ILOG_IN_REQUEST
  | ILOG_IN_SUCCESS
  | ILOG_IN_FAILURE;

// 동기요청

export const loginAction = () => ({});

// 동적인 데이터는 함수로 만들어줌 signup.js도 참고할것

const reducer = (state = initialState, action: UserActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      }
      case LOG_IN_SUCCESS: {
        // jsCookie.set('token', action.data.data.token);
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data.data;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
