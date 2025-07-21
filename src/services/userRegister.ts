import axios from 'axios';
import { UserRegisterType } from '@/types/UserRegisterType';
import axiosInstance from './axiosInstance';

const userRegister = async (data: UserRegisterType) => {
   try {
      const response = await axiosInstance.post('auth/register/user', data);
      return response.data;
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.error(
            '❌ Error al registrar usuario:',
            error.response?.data || error.message
         );
      } else {
         console.error('❌ Error inesperado:', error);
      }
      throw error;
   }
};

export default userRegister;
