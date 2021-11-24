import api from '../../../http/index';

export const getPokemons = (page) => api.get(`/products?page=${page}&limit=25`);
