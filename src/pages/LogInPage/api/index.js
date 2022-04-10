import api from '../../../http/index';

export const signIn = (signData) => api.post('/auth/signIn', signData);
