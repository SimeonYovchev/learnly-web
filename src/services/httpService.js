import axios from 'axios';
import { getJwt } from './authService';

axios.defaults.headers.common['x-auth-token'] = getJwt();
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = getJwt();
  config.headers = { ...config.headers, 'x-auth-token': token };

  return config;
});

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response &&
    error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log('Logging the error', error);
    alert('An unexpected error occurred');
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
