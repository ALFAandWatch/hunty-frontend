'use client';
import ListaCategoriasHijas from '@/components/ListaCategoriasHijas/ListaCategoriasHijas';
import ListaCategoriasPadre from '@/components/ListaCategoriasPadre/ListaCategoriasPadre';
import SearchForm from '@/components/SearchForm/SearchForm';
import easeScroll from '@/utils/easeScroll';
import { useRef, useState } from 'react';

const Categorias = () => {
   const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);
   const categoriaRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

   return (
      <>
         <div className="w-full bg-violeta flex justify-center items-center h-[10rem]">
            <h1 className="text-white text-3xl font-(family-name:--font-open-sans) font-bold">
               Categorias
            </h1>
         </div>
         <div className="flex flex-col items-center bg-gray-100">
            <div className="-mt-7 max-h-fit">
               <SearchForm />
            </div>
            <div className="w-[77%] mx-auto mt-15 flex relative">
               <div>
                  <ListaCategoriasPadre
                     categoriaActiva={categoriaActiva}
                     onCategoriaClick={(nombre) => {
                        const el = categoriaRefs.current[nombre];
                        if (el) {
                           easeScroll(el);
                        }
                     }}
                  />
               </div>
               <div>
                  <ListaCategoriasHijas
                     setCategoriaActiva={setCategoriaActiva}
                     categoriaRefs={categoriaRefs}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Categorias;
