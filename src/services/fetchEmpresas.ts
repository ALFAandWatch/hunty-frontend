import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';
import { EmpresasConFiltrosType } from '@/types/EmpresasConFiltrosType';

const fetchEmpresas = async (
   page: number = 1
): Promise<AxiosResponse<EmpresasConFiltrosType>> => {
   try {
      const response = await axiosInstance.get<EmpresasConFiltrosType>(
         `/empresas/filtros?page=${page}`
      );
      return response;
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export default fetchEmpresas;
