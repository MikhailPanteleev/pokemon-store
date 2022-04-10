import api from '../../../http/index';

export const getDetails = (id) => api.get(`/products/${id}`);
