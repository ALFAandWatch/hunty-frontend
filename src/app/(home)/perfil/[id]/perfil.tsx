'use client';

import { IEmpresaPerfil } from '@/interfaces/IEmpresa';
import axiosInstance from '@/services/axiosInstance';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import EmpresaMainData from '@/components/EmpresaMainData/EmpresaMainData';
import AcercaDe from '@/components/AcercaDe/AcercaDe';

const EmpresaData = () => {
   const [empresa, setEmpresa] = useState<IEmpresaPerfil | null>(null);
   const { id } = useParams();

   useEffect(() => {
      axiosInstance
         .get(`/empresas/${id}`)
         .then((res) => {
            setEmpresa(res.data);
         })
         .catch((err) => {
            console.log('Error al obtener la empresa.', err);
         });
   }, [id]);

   return (
      <>
         <div className="w-full bg-gray-100 pb-20">
            <div className="flex justify-center items-center h-80 bg-[url('/bannerImage.jpg')] bg-cover bg-bottom bg-no-repeat" />
            {empresa ? (
               <>
                  <EmpresaMainData empresa={empresa} />
                  <AcercaDe empresa={empresa} />
               </>
            ) : (
               <p>Cargando Empresa...</p>
            )}
         </div>
      </>
   );
};

export default EmpresaData;
