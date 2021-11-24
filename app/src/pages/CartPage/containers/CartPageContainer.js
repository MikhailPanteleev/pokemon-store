import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartLayout from '../components/CartLayout';
import { GET_CART_REQUEST } from '../actions';

import { ADD_ORDER_REQUEST } from '../../UserPage/actions';
import { CHANGE_CART_REQUEST } from '../../CartPage/actions';

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { itemsList, totalPrice, isLoading } = useSelector(
    (state) => state.cartPage
  );
  const { userInfo } = useSelector((state) => state.auth);

  const handlePokemonIncrement = useCallback(
    (pokemon) => {
      const pokemonToUpdate = {
        id: pokemon.id,
        quantity: pokemon.quantity + 1,
      };
      dispatch(CHANGE_CART_REQUEST(pokemonToUpdate));
    },
    [dispatch]
  );

  const handlePokemonDecrement = useCallback(
    (pokemon) => {
      if (pokemon.quantity !== 0) {
        const pokemonToUpdate = {
          id: pokemon.id,
          quantity: pokemon.quantity - 1,
        };
        dispatch(CHANGE_CART_REQUEST(pokemonToUpdate));
      }
    },
    [dispatch]
  );

  const handleAddOrder = useCallback(() => {
    setOpen(true);
    const addOrder = {
      itemsList: itemsList,
      totalPrice: totalPrice,
      customerId: userInfo._id,
    };
    dispatch(ADD_ORDER_REQUEST(addOrder));
  }, [dispatch, itemsList, totalPrice, userInfo]);

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    window.location.reload();
  };

  const orderHeaders = ['Image', 'Prise', 'quantity', 'Total price', 'Delete'];

  return (
    <CartLayout
      isLoading={isLoading}
      totalPrice={totalPrice}
      itemsList={itemsList}
      handlePokemonIncrement={handlePokemonIncrement}
      handlePokemonDecrement={handlePokemonDecrement}
      handleAddOrder={handleAddOrder}
      handleClose={handleClose}
      open={open}
      orderHeaders={orderHeaders}
    />
  );
};

export default CartPageContainer;
