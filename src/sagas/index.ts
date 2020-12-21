import {all, call} from 'redux-saga/effects';
import axios from 'axios';
import user from './user';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.kohubi.xyz'
    : 'http://localhost:4000';

export default function* rootSaga() {
  yield all([call(user)]);
}
