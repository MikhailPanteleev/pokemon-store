import axios from 'axios';

import { LOCAL_STORAGE_KEY } from '../constants/localStorageKeys';

const baseURL = 'https://it-shatle-demo-api.herokuapp.com/';

const config = {
  baseURL,
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);

  config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

export default api;
