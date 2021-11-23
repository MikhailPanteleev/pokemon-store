import {handleActions} from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
   pokeList: [],
   currentPage: 1,
   isLoading: false,
   errors: null,
};

const pokemonsPageReducer = handleActions(
   {
      [actions.POKEMONS_REQUEST]: (state) => ({
         ...state,
         isLoading: true,
      }),
      [actions.POKEMONS_SUCCESS]: (state, {payload}) => ({
         ...state,
         isLoading: false,
         pokeList: payload.response,
      }),
      [actions.POKEMONS_FAIL]: (state, {payload}) => ({
         ...state,
         isLoading: false,
         errors: payload,
      }),
      [actions.CHANGE_PAGE]: (state, {payload}) => ({
         ...state,
         currentPage: payload
      }),
   }, 
   defaultState
);

export default pokemonsPageReducer;