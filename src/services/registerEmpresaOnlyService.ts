import empresaOnlyRequestType from '@/types/EmpresaOnlyRequestType';
import axiosInstance from './axiosInstance';

const registerEmpresaOnlyService = async (values: empresaOnlyRequestType) => {
   console.log('objeto enviado al back', values);
   try {
      const response = await axiosInstance.post(
         '/auth/register/empresa',
         values
      );
      return response;
   } catch (error) {
      console.error('Error al registrar empresa:', error);
      throw error;
   }
};

export default registerEmpresaOnlyService;
