'use client';
import { ICategory } from '@/interfaces/ICategory';
import axiosInstance from '@/services/axiosInstance';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const MainBanner = () => {
   const { categoriaId } = useParams();
   const [categoriaSeleccionada, setCategoriaSeleccionada] =
      useState<ICategory>({} as ICategory);

   useEffect(() => {
      axiosInstance
         .get(`categorias/${categoriaId}`)
         .then((response) => {
            setCategoriaSeleccionada(response.data);
         })
         .catch((error) => {
            console.error('Error al obtener los datos:', error);
         });
   }, [categoriaId]);

   return (
      <>
         <div className="flex justify-center items-center h-80 bg-[url('/bannerImage.jpg')] bg-cover bg-bottom bg-no-repeat">
            <h1 className="text-5xl font-bold">
               {categoriaSeleccionada.parent?.name}
            </h1>
         </div>
      </>
   );
};

export default MainBanner;
