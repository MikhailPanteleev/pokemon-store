import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup } from '@material-ui/core';

import Pagination from '../../../../commonComponents/Pagination';
import Loading from '../../../../commonComponents/Loading';

import styles from './style.module.scss';

const PokemonsPageLayout = ({
  pokemons,
  handlePageChange,
  currentPage,
  isLoading,
  handleGoToDetails,
  handleAddPokemonCart,
}) => {
  return (
    <Box className={styles.externalWrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Box className={styles.wrapper}>
            {pokemons.map((pokemon) => {
              return (
                <div className={styles.pokemonCard} key={pokemon.id}>
                  <h3 onClick={() => handleGoToDetails(pokemon.id)}>
                    {pokemon.id}. {pokemon.name}
                  </h3>

                  <div>
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      title='Watch more'
                      onClick={() => handleGoToDetails(pokemon.id)}
                    />
                  </div>
                  <p>
                    Price: <strong>{pokemon.price}</strong> coins
                  </p>
                  <div>
                    <ButtonGroup
                      size='small'
                      variant='outlined'
                      aria-label='outlined button group'
                    >
                      <Button onClick={() => handleGoToDetails(pokemon.id)}>
                        Watch more
                      </Button>
                      <Button onClick={() => handleAddPokemonCart(pokemon)}>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              );
            })}
            <Box className={styles.pagination}>
              <Pagination
                onPageChange={handlePageChange}
                pageCount={20}
                currentPage={currentPage}
              />
            </Box>
          </Box>
        </div>
      )}
    </Box>
  );
};

PokemonsPageLayout.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  currentPage: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default PokemonsPageLayout;
