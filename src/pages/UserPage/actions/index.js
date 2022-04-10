import { createAction } from "redux-actions";

export const GET_ORDER_REQUEST = createAction("GET_ORDER_REQUEST");
export const GET_ORDER_SUCCESS = createAction("GET_ORDER_SUCCESS");
export const GET_ORDER_FAIL = createAction("GET_ORDER_FAIL");

export const ADD_ORDER_REQUEST = createAction("ADD_ORDER_REQUEST");
export const ADD_ORDER_SUCCESS = createAction("ADD_ORDER_SUCCESS");
export const ADD_ORDER_FAIL = createAction("ADD_ORDER_FAIL");