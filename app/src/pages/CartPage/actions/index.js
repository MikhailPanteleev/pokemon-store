import { createAction } from 'redux-actions';

export const GET_CART_REQUEST = createAction('GET_CART_REQUEST');
export const GET_CART_SUCCESS = createAction('GET_CART_SUCCESS');
export const GET_CART_FAIL = createAction('GET_CART_FAIL');

export const ADD_ITEM_TO_CART_REQUEST = createAction(
  'ADD_ITEM_TO_CART_REQUEST'
);
export const ADD_ITEM_TO_CART_SUCCESS = createAction(
  'ADD_ITEM_TO_CART_SUCCESS'
);
export const ADD_ITEM_TO_CART_FAIL = createAction('ADD_ITEM_TO_CART_FAIL');

export const CHANGE_CART_REQUEST = createAction('CHANGE_CART_REQUEST');
export const CHANGE_CART_SUCCESS = createAction('CHANGE_CART_SUCCESS');
export const CHANGE_CART_FAIL = createAction('CHANGE_CART_FAIL');

export const DELETE_FROM_CART_REQUEST = createAction(
  'DELETE_FROM_CART_REQUEST'
);
export const DELETE_FROM_CART_SUCCESS = createAction(
  'DELETE_FROM_CART_SUCCESS'
);
export const DELETE_FROM_CART_FAIL = createAction('DELETE_FROM_CART_FAIL');
