import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  isLoading: false,
  errors: null,
};

const cartPageReducer = handleActions(
  {
    [actions.GET_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_CART_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      itemsList: payload.response.itemsList,
      quantity: payload.response.quantity,
      totalPrice: payload.response.totalPrice,
    }),
    [actions.GET_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.ADD_ITEM_TO_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.ADD_ITEM_TO_CART_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        itemsList: payload.response.itemsList,
        quantity: payload.response.quantity,
        totalPrice: payload.response.totalPrice,
      };
    },
    [actions.ADD_ITEM_TO_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.CHANGE_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.CHANGE_CART_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response;

      const itemsCopy = [...state.itemsList];

      const itemToUpdate = itemsCopy.find((item) => {
        return updatedItem.id === item.id;
      });

      itemToUpdate.quantity = updatedItem.quantity;

      return {
        ...state,
        isLoading: false,
        itemsList: itemsCopy,
        quantity: cartState.quantity,
        totalPrice: cartState.totalPrice,
      };
    },
    [actions.CHANGE_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.DELETE_FROM_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.DELETE_FROM_CART_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response;
      const copy = [...state.itemsList];
      const findItemIndex = copy.findIndex((item) => item.id === removedItemId);
      copy.splice(findItemIndex, 1);
      return {
        ...state,
        isLoading: false,
        itemsList: copy,
        quantity: cartState.quantity,
        totalPrice: cartState.totalPrice,
      };
    },
    [actions.DELETE_FROM_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default cartPageReducer;
