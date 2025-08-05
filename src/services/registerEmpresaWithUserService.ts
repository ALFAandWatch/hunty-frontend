import empresaOnlyRequestType from '@/types/EmpresaOnlyRequestType';
import axiosInstance from './axiosInstance';

const registerEmpresaWithUserService = async (
   values: empresaOnlyRequestType
) => {
   console.log('objeto enviado al back', values);
   try {
      const response = await axiosInstance.post(
         '/auth/register/empresaWithUsuario',
         values
      );
      return response;
   } catch (error) {
      console.error('Error al registrar empresa:', error);
      throw error;
   }
};

export default registerEmpresaWithUserService;
