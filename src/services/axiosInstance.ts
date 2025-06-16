import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:3000/',
   timeout: 5000,
   withCredentials: true,
});

// Interceptor para agregar token si existiera
axiosInstance.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem('token');
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales si querés (opcional)
axiosInstance.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response?.status === 401) {
         console.warn('No autorizado, posiblemente el token expiró');
      }
      return Promise.reject(error);
   }
);

export default axiosInstance;
