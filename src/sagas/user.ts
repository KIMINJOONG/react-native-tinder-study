import {all, call, takeLatest, put, fork, delay} from 'redux-saga/effects';
import {IJOIN_REQUEST, ILOG_IN_REQUEST} from '../actions/user/action/interface';
import axios from 'axios';
import {
  JOIN_FAILURE,
  JOIN_REQUEST,
  JOIN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from '../actions/user/type';

const users: any = [];

function loginUserAPI(data: any) {
  // return axios.post('/users', data, {
  //   withCredentials: true,
  // });
}

function* loginUser(action: ILOG_IN_REQUEST) {
  try {
    const user = users.find(
      (user: any) =>
        user.id === action.data.id && user.password === action.data.password,
    );
    yield delay(500);
    // const result = yield call(joinUserAPI, action.data);
    const result: any = {};
    if (user) {
      result.data = {
        message: '로그인 되었습니다.',
        user,
      };
    } else {
      result.data = {
        message: '일치하는 정보가 없습니다.',
      };
    }
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function joinUserAPI(data: any) {
  // return axios.post('/users', data, {
  //   withCredentials: true,
  // });
}

function* joinUser(action: IJOIN_REQUEST) {
  try {
    users.push({id: action.data.id, password: action.data.password});
    yield delay(500);
    // const result = yield call(joinUserAPI, action.data);
    const result = {
      data: {
        user: {id: action.data.id, password: action.data.password},
        message: '가입에 성공하였습니다.',
      },
    };
    yield put({
      type: JOIN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: JOIN_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchJoin() {
  yield takeLatest(JOIN_REQUEST, joinUser);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, loginUser);
}

export default function* userSaga() {
  yield all([fork(watchJoin), fork(watchLogIn)]);
}
