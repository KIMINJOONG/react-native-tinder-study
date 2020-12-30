import {
  JOIN_FAILURE,
  JOIN_REQUEST,
  JOIN_SUCCESS,
  LOAD_USERS_FAILURE,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS, REMOVE_USER_CARD_REQUEST
} from "../type";

export interface IJOIN_REQUEST {
  type: typeof JOIN_REQUEST;
  data: {
    id: string;
    password: string;
    confirmPassword: string;
  };
}

export interface IJOIN_SUCCESS {
  type: typeof JOIN_SUCCESS;
  data: any;
}

export interface IJOIN_FAILURE {
  type: typeof JOIN_FAILURE;
  error: any;
}

export interface ILOG_IN_REQUEST {
  type: typeof LOG_IN_REQUEST;
  data: {
    id: string;
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

export interface ILOAD_USERS_REQUEST {
  type: typeof LOAD_USERS_REQUEST;
  query?: string;
}

export interface ILOAD_USERS_SUCCESS {
  type: typeof LOAD_USERS_SUCCESS;
  data: any;
}

export interface ILOAD_USERS_FAILURE {
  type: typeof LOAD_USERS_FAILURE;
  error: any;
}

export interface IREMOVE_USER_CARD_REQUEST {
  type: typeof REMOVE_USER_CARD_REQUEST;
}
