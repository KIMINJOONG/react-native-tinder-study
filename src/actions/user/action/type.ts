import {
  IJOIN_FAILURE,
  IJOIN_REQUEST,
  IJOIN_SUCCESS,
  ILOAD_USERS_FAILURE,
  ILOAD_USERS_REQUEST,
  ILOAD_USERS_SUCCESS,
  ILOG_IN_FAILURE,
  ILOG_IN_REQUEST,
  ILOG_IN_SUCCESS,
} from './interface';

export type UserActionType =
  | IJOIN_REQUEST
  | IJOIN_SUCCESS
  | IJOIN_FAILURE
  | ILOG_IN_REQUEST
  | ILOG_IN_SUCCESS
  | ILOG_IN_FAILURE
  | ILOAD_USERS_REQUEST
  | ILOAD_USERS_SUCCESS
  | ILOAD_USERS_FAILURE;
