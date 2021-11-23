import { createAction } from "redux-actions";

export const POKEMONS_REQUEST = createAction("POKEMONS_REQUEST");
export const POKEMONS_SUCCESS = createAction("POKEMONS_SUCCESS");
export const POKEMONS_FAIL = createAction("POKEMONS_FAIL");

export const CHANGE_PAGE = createAction("CHANGE_PAGE");
