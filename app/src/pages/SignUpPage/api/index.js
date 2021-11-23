import api from '../../../http/index';

export const signup = (signData) => api.post('/auth/signup', signData);
