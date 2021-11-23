import React from 'react';
import PropTypes from 'prop-types';
import { ExpandMore } from '@material-ui/icons';
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from '@material-ui/core';

import styles from './style.module.scss';

const PokemonDetailsPageLayout = ({
  pokemonInfo,
  isLoading,
  handleAddPokemonCart,
  pokemon,
}) => {
  return (
    <Box className={styles.box}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Box className={styles.wrapper}>
            <Box>
              <img className={styles.img} src={pokemonInfo.image}></img>
            </Box>
            <Box>
              <h1>Pokemon Name: {pokemonInfo.name}</h1>
              <h3>Price: {pokemonInfo.price}</h3>
              <Button
                variant='filled'
                color='primary'
                children='ADD TO CART'
                onClick={() => handleAddPokemonCart(pokemon)}
              ></Button>
            </Box>
          </Box>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Abilities
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {pokemonInfo.abilities?.map((ability) => (
                  <Box key={ability.title}>
                    <p>
                      <strong>{ability.title}</strong>
                    </p>
                    <p>{ability.description}</p>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Stats
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {pokemonInfo.stats?.map((item) => (
                  <Box key={item.title} className={styles.stats}>
                    <p className={styles.title}>
                      <strong>{item.title} </strong>:
                    </p>
                    <p>{item.value}</p>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </Box>
  );
};

PokemonDetailsPageLayout.propTypes = {
  pokemonInfo: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      abilities: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          value: PropTypes.number,
        })
      ),
    })
  ),
};

export default PokemonDetailsPageLayout;
