'use client';

import { useParams } from 'next/navigation';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import axiosInstance from '@/services/axiosInstance';
import { IDepartamento } from '@/interfaces/IDepartamento';
import { useFilterContext } from '@/context/FilterContext';

const ActiveFilter = () => {
   const { departamentoId } = useParams();
   const [departamentoSeleccionado, setDepartamentoSeleccionado] =
      useState<IDepartamento>({} as IDepartamento);

   const { filtrosActivos, agregarFiltro, eliminarFiltro, limpiarFiltros } =
      useFilterContext();

   useEffect(() => {
      axiosInstance
         .get(`departamentos/${departamentoId}`)
         .then((res) => {
            setDepartamentoSeleccionado(res.data);
            agregarFiltro(res.data.name);
         })
         .catch((err) => {
            console.error('Error al obtener el departamento:', err);
         });
   }, [departamentoId]);

   return (
      <>
         <div className="h-30 bg-white flex flex-col items-center shadow-md">
            <div className="-mt-7 max-h-fit">
               <SearchForm />
            </div>
            <div className="flex justify-center items-center w-[60%] h-full relative gap-2">
               <button className="text-black absolute left-0">
                  Borrar Filtros:
               </button>
               {filtrosActivos.map((filtro, index) => (
                  <span
                     key={index}
                     className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                     {filtro}
                     <button
                        onClick={() => eliminarFiltro(filtro)}
                        className="ml-2 text-blue-600 hover:text-red-500"
                        aria-label={`Eliminar filtro ${filtro}`}
                     >
                        ×
                     </button>
                  </span>
               ))}
            </div>
         </div>
      </>
   );
};

export default ActiveFilter;
