import produce from 'immer';
import {UserActionType} from '../actions/user/action/type';
import {
  JOIN_FAILURE,
  JOIN_REQUEST,
  JOIN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from '../actions/user/type';

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logIn: null,
  me: null,
  joinLoading: false,
  joinDone: false,
  joinError: null,
  join: null,
};

// 동적인 데이터는 함수로 만들어줌 signup.js도 참고할것

const reducer = (state = initialState, action: UserActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case JOIN_REQUEST: {
        draft.joinLoading = true;
        draft.joinDone = false;
        draft.joinError = null;
        break;
      }
      case JOIN_SUCCESS: {
        draft.joinLoading = false;
        draft.joinDone = true;
        draft.join = action.data;
        break;
      }
      case JOIN_FAILURE: {
        draft.joinLoading = false;
        draft.joinError = action.error;
        break;
      }
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
        draft.logIn = action.data;
        draft.me = action.data.user;
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
