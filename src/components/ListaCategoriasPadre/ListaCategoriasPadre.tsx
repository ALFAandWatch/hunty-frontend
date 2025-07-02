'use client';

import { ICategory } from '@/interfaces/ICategory';
import axiosInstance from '@/services/axiosInstance';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ListaCategoriasPadreProps = {
   categoriaActiva: string | null;
   onCategoriaClick: (categoriaNombre: string) => void;
};

const ListaCategoriasPadre = (Props: ListaCategoriasPadreProps) => {
   const [categorias, setCategorias] = useState<ICategory[] | null>(null);
   const { categoriaActiva, onCategoriaClick } = Props;
   console.log('Categoria Activa', categoriaActiva);

   useEffect(() => {
      axiosInstance
         .get('/categorias/groups')
         .then((res) => {
            setCategorias(res.data);
            console.log(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <>
         <div className="rounded-lg shadow-md bg-white w-65 p-4 sticky top-3 mb-5">
            <ul>
               {categorias &&
                  categorias.map((categoria) => (
                     <li
                        key={categoria.id}
                        onClick={() => onCategoriaClick(categoria.name)}
                        className={`text-sm font-(family-name:--font-open-sans) mb-1 hover:cursor-pointer ${
                           categoriaActiva === categoria.name
                              ? 'text-blue-500 font-bold'
                              : 'text-gray-600'
                        }`}
                     >
                        {categoria.iconUrl && (
                           <Image
                              src={categoria.iconUrl}
                              alt="Categoria"
                              width={10}
                              height={10}
                              className="inline me-2"
                           />
                        )}
                        {categoria.name}
                     </li>
                  ))}
            </ul>
         </div>
      </>
   );
};

export default ListaCategoriasPadre;
