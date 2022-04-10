import api from '../../../http/index';

export const getCart = (body) => api.get('/cart', body);
export const addToCart = (body) => api.post('/cart/item', body);
export const changeCart = (body) => api.patch('/cart/item', body);
export const deleteFromCart = (id) => api.delete(`/cart/item/${id}`);
