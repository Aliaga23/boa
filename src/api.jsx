import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendfitmrp-production.up.railway.app/api',  // URL de tu backend
  withCredentials: false,  // Permite solicitudes sin credenciales
});

export default api;
