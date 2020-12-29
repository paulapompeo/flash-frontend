import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flash-benefits.herokuapp.com/api',
});

export default api;
