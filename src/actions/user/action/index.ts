import {JOIN_REQUEST, LOAD_USERS_REQUEST, LOG_IN_REQUEST} from '../type';

export const userJoinAction = (data: any) => ({
  type: JOIN_REQUEST,
  data,
});

export const loginAction = (data: any) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const loadUsersAction = () => ({
  type: LOAD_USERS_REQUEST,
});
