import * as loginPageActions from '../pages/LogInPage/actions';
import * as loginPageAPI from '../pages/LogInPage/api';

import * as pokemonsPageActions from '../pages/PokemonsPage/actions';
import * as pokemonsPageAPI from '../pages/PokemonsPage/api';

import * as signupPageActions from '../pages/SignUpPage/actions';
import * as signupPageAPI from '../pages/SignUpPage/api';

import * as detailsPageActions from '../pages/PokemonDetailsPage/actions';
import * as detailsPageAPI from '../pages/PokemonDetailsPage/api';

import * as cartPageActions from '../pages/CartPage/actions';
import * as cartPageAPI from '../pages/CartPage/api';

import * as userPageActions from '../pages/UserPage/actions';
import * as userPageAPI from '../pages/UserPage/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOGIN_REQUEST]: loginPageAPI.signIn,
    [pokemonsPageActions.POKEMONS_REQUEST]: pokemonsPageAPI.getPokemons,
    [signupPageActions.SIGNUP_REQUEST]: signupPageAPI.signup,
    [detailsPageActions.GET_DETAILS_REQUEST]: detailsPageAPI.getDetails,
    [cartPageActions.GET_CART_REQUEST]: cartPageAPI.getCart,
    [cartPageActions.ADD_ITEM_TO_CART_REQUEST]: cartPageAPI.addToCart,
    [cartPageActions.CHANGE_CART_REQUEST]: cartPageAPI.changeCart,
    [userPageActions.GET_ORDER_REQUEST]: userPageAPI.getUserOrder,
    [userPageActions.ADD_ORDER_REQUEST]: userPageAPI.addUserOrder,
  };

  return mapping[action.type];
};

export default apiCallsMapping;
