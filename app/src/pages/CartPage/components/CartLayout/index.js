import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import styles from './style.module.scss';

const CartLayout = ({
  totalPrice,
  itemsList,
  handlePokemonIncrement,
  handlePokemonDecrement,
  handleAddOrder,
  handleClose,
  open,
  orderHeaders,
}) => {
  return (
    <Box>
      <Box>
        <h1>CART</h1>
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pokemon name</TableCell>
                {orderHeaders.map((header) => (
                  <TableCell key={uuid()}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {itemsList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <img src={item.image} />
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Box className={styles.inputWrapper}>
                      <Button onClick={() => handlePokemonDecrement(item)}>
                        -
                      </Button>
                      <Box>{item.quantity}</Box>
                      <Button onClick={() => handlePokemonIncrement(item)}>
                        +
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell>{item.price * item.quantity}</TableCell>
                  <TableCell>
                    <Button>delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <h3>TOTAL PRICE: {totalPrice}</h3>
      </Box>
      <Box>
        <Button
          type='submit'
          variant='filled'
          color='primary'
          children='CONFIRM'
          onClick={() => handleAddOrder()}
          disabled={totalPrice === 0}
        />
      </Box>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          Your order has been successfully created!
        </Alert>
      </Snackbar>
    </Box>
  );
};

CartLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  totalPrice: PropTypes.number.isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
  handlePokemonIncrement: PropTypes.func.isRequired,
  handlePokemonDecrement: PropTypes.func.isRequired,
  handleAddOrder: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  orderHeaders: PropTypes.array.isRequired,
};

export default CartLayout;
