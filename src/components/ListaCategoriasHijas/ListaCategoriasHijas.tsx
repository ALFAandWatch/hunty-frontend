'use client';

import { ICategory } from '@/interfaces/ICategory';
import axiosInstance from '@/services/axiosInstance';
import { useEffect, useState } from 'react';
import CategoriaHijaCard from '../CategoriaHijaCard/CategoriaHijaCard';

type ListaCategoriasHijasProps = {
   setCategoriaActiva: React.Dispatch<React.SetStateAction<string | null>>;
   categoriaRefs: React.MutableRefObject<{
      [key: string]: HTMLDivElement | null;
   }>;
};

const ListaCategoriasHijas = ({
   setCategoriaActiva,
   categoriaRefs,
}: ListaCategoriasHijasProps) => {
   const [categorias, setCategorias] = useState<ICategory[] | null>(null);

   useEffect(() => {
      axiosInstance
         .get('/categorias/groups')
         .then((res) => {
            setCategorias(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   useEffect(() => {
      if (!categorias) return;

      const observer = new IntersectionObserver(
         (entries) => {
            const visible = entries.find((entry) => entry.isIntersecting);
            if (visible) {
               const categoria = visible.target.getAttribute('data-categoria');
               if (categoria) setCategoriaActiva(categoria);
            }
         },
         {
            rootMargin: '0px 0px -40% 0px',
            threshold: 0,
         }
      );

      Object.values(categoriaRefs.current).forEach((ref) => {
         if (ref) observer.observe(ref);
      });

      return () => {
         Object.values(categoriaRefs.current).forEach((ref) => {
            if (ref) observer.unobserve(ref);
         });
      };
   }, [categorias]);

   return (
      <div className="w-full flex flex-col p-5 pt-0">
         {categorias?.map((categoriaPadre) => (
            <div
               key={categoriaPadre.id}
               ref={(el) => {
                  categoriaRefs.current[categoriaPadre.name] = el;
               }}
               data-categoria={categoriaPadre.name}
               className="mb-10 min-h-[200px]" // podés ajustar esto si querés
            >
               <h2 className="text-black font-bold text-xl p-2">
                  {categoriaPadre.name}
               </h2>
               <div className="grid grid-cols-3 gap-4">
                  {categoriaPadre.children?.map((categoriaHija) => (
                     <CategoriaHijaCard
                        key={categoriaHija.id}
                        name={categoriaHija.name}
                     />
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
};

export default ListaCategoriasHijas;
