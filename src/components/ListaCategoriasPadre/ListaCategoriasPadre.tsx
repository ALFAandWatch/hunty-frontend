'use client';

import { ICategory } from '@/interfaces/ICategory';
import axiosInstance from '@/services/axiosInstance';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ListaCategoriasPadre = () => {
   const [categorias, setCategorias] = useState<ICategory[] | null>(null);

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
         <div className="rounded-lg shadow-md bg-white w-full p-4">
            <ul>
               {categorias &&
                  categorias.map((categoria) => (
                     <li
                        key={categoria.id}
                        className="text-sm font-(family-name:--font-open-sans) text-gray-600 mb-2"
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
