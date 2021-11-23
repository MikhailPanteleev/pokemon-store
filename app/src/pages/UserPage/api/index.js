import api from '../../../http/index';

export const getUserOrder = (signData) => api.get('/order', signData);
export const addUserOrder = (signData) => api.post('/order', signData);
