import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PokemonDetailsPageLayout from '../components/PokemonDetailsPageLayout';
import { GET_DETAILS_REQUEST } from '../actions';
import { ADD_ITEM_TO_CART_REQUEST } from '../../CartPage/actions';

const PokemonDetailsPageContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemonInfo, isLoading, itemsList } = useSelector(
    (state) => state.pokemonDetailsPage
  );

  const pokemon = {
    id: pokemonInfo.id,
    name: pokemonInfo.name,
    image: pokemonInfo.image,
    price: pokemonInfo.price,
  };

  const handleAddPokemonCart = useCallback(
    (pokemon) => {
      const pokemonToAdd = { ...pokemon, quantity: 1 };
      dispatch(ADD_ITEM_TO_CART_REQUEST(pokemonToAdd));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(GET_DETAILS_REQUEST(id));
  }, [dispatch]);

  return (
    <PokemonDetailsPageLayout
      pokemonInfo={pokemonInfo}
      isLoading={isLoading}
      cartItems={itemsList}
      handleAddPokemonCart={handleAddPokemonCart}
      pokemon={pokemon}
    />
  );
};

export default PokemonDetailsPageContainer;
