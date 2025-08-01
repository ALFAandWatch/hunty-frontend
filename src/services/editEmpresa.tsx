import { IEmpresa } from '@/interfaces/IEmpresa';
import axiosInstance from './axiosInstance';

const editEmpresa = async (id: number, values: Partial<IEmpresa>) => {
   try {
      const response = await axiosInstance.put(`/empresas/${id}`, values);
      return response.data;
   } catch (error) {
      console.error('Error al editar empresa:', error);
      throw error;
   }
};

export default editEmpresa;
