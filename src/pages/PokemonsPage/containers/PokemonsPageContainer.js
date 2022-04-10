import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { POKEMONS_REQUEST, CHANGE_PAGE } from '../actions';
import PokemonsPageLayout from '../components/PokemonsPageLayout';
import { ROUTES } from '../../../routes/routeNames';
import { ADD_ITEM_TO_CART_REQUEST } from '../../CartPage/actions';

const PokemonsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pokeList, currentPage, isLoading, itemsList } = useSelector(
    (state) => state.pokemonsPage
  );

  const handleAddPokemonCart = useCallback(
    (pokemon) => {
      const pokemonToAdd = { ...pokemon, quantity: 1 };
      dispatch(ADD_ITEM_TO_CART_REQUEST(pokemonToAdd));
    },
    [dispatch]
  );

  const handleGoToPokemonDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`);
    },
    [history]
  );

  useEffect(() => {
    dispatch(POKEMONS_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = useCallback(
    (event, page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_PAGE(page));
      }
    },
    [currentPage]
  );

  return (
    <PokemonsPageLayout
      pokemons={pokeList}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      isLoading={isLoading}
      handleGoToDetails={handleGoToPokemonDetails}
      handleAddPokemonCart={handleAddPokemonCart}
      cartItems={itemsList}
    />
  );
};

export default PokemonsPageContainer;
