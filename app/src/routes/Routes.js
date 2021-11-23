import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './routeNames';
import PrivateRoute from './PrivateRoute';
import LoginPageContainer from '../pages/LogInPage/containers/LoginPageContainer';
import PokemonsPageContainer from '../pages/PokemonsPage/containers/PokemonsPageContainer';
import SignupPageContainer from '../pages/SignUpPage/containers/SignUpPageContainer';
import PokemonDetailsPageContainer from '../pages/PokemonDetailsPage/containers/PokemonDetailsPageContainer';
import CartPageContainer from '../pages/CartPage/containers/CartPageContainer';
import UserPageContainer from '../pages/UserPage/containers/UserPageContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN_PAGE} component={LoginPageContainer} />
      <Route path={ROUTES.SIGNUP_PAGE} component={SignupPageContainer} />
      <PrivateRoute
        exact
        path={ROUTES.POKEMONS_PAGE}
        component={PokemonsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.POKEMON_DETAILS}
        component={PokemonDetailsPageContainer}
      />
      <PrivateRoute path={ROUTES.CART_PAGE} component={CartPageContainer} />
      <PrivateRoute path={ROUTES.USER_PAGE} component={UserPageContainer} />
    </Switch>
  );
};

export default Routes;
