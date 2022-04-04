import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton, Button, Badge, Box, Toolbar } from '@material-ui/core';
import { AccountBox, ShoppingCart, ExitToApp } from '@material-ui/icons';

import { ROUTES } from '../../routes/routeNames';

import styles from './style.module.scss';

const NavBar = () => {
  const { quantity } = useSelector((state) => state.cartPage);
  return (
    <div>
      <Box>
        <Toolbar variant='dense'>
          <Link to={ROUTES.POKEMONS_PAGE} className={styles.link}>
            <Button variant='filled' color='primary'>
              Pokemons
            </Button>
          </Link>
          <Box>
            <Link to={ROUTES.CART_PAGE}>
              <IconButton>
                <Badge badgeContent={quantity} color='primary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            <Link to={ROUTES.USER_PAGE}>
              <IconButton color='success'>
                <Badge>
                  <AccountBox />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ExitToApp />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </div>
  );
};

export default NavBar;
