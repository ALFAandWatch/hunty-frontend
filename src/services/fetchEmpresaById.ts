import axiosInstance from './axiosInstance';

const fetchEmpresabyId = async (id: string) => {
   try {
      const response = await axiosInstance.get(`/empresas/${id}`);
      return response.data;
   } catch (error) {
      console.log('No se pudo encontrar la empresa', error);
   }
};

export default fetchEmpresabyId;
