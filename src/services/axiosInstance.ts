import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/',
   timeout: 5000,
   withCredentials: true,
});

// Interceptor para agregar token si existiera
axiosInstance.interceptors.request.use(
   (config) => {
      if (typeof window !== 'undefined') {
         const token = localStorage.getItem('token');
         if (token) {
            config.headers.Authorization = `Bearer ${token}`;
         }
      }
      return config;
   },
   (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales si querés (opcional)
axiosInstance.interceptors.response.use(
   (response) => response,
   (error) => {
      const status = error.response?.status;

      switch (status) {
         case 400:
            console.warn('Estructura incorrecta');
         case 401:
            console.warn('Token inválido o expirado');
            break;
         case 403:
            console.warn('Acceso prohibido');
            break;
         case 500:
            console.error('Error interno del servidor');
            break;
         default:
            console.error('Error no controlado', error.message);
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;
