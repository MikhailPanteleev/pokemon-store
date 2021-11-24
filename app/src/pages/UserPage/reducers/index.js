import {handleActions} from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
   itemsList: [],
   totalPrice: 0,
   customerId: '',
   isLoading: false,
   errors: null,
};

const userPageReducer = handleActions(
   {
      [actions.GET_ORDER_REQUEST]: (state) => ({
         ...state,
         isLoading: true,
      }),
      [actions.GET_ORDER_SUCCESS]: (state, {payload}) => {
         const ordersList = payload.response
         return{
         ...state,
         isLoading: false,
         ordersList
      }},
      [actions.GET_ORDER_FAIL]: (state, {payload}) => ({
         ...state,
         isLoading: false,
         errors: payload.response,
      }),
      [actions.ADD_ORDER_REQUEST]: (state) => ({
         ...state,
         isLoading: true,
      }),
      [actions.ADD_ORDER_SUCCESS]: (state, {payload}) => {
         return {
         ...state,
         isLoading: false,
         itemsList: payload.response.itemsList,
         totalPrice: payload.response.totalPrice,
         customerId: payload.response.customerId
      }},
      [actions.ADD_ORDER_FAIL]: (state, {payload}) => ({
         ...state,
         isLoading: false,
         errors: payload.response,
      }),
   }, defaultState
);

export default userPageReducer;