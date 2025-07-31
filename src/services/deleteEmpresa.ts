import axiosInstance from './axiosInstance';

const deleteEmpresa = async (id: number) => {
   try {
      const response = axiosInstance.delete(`/empresas/${id}`);
      return response;
   } catch (error) {
      console.error(error);
      throw error;
   }
};

export default deleteEmpresa;
