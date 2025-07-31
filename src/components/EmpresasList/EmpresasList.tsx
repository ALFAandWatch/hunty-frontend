'use client';

import axiosInstance from '@/services/axiosInstance';
import { useEffect, useState } from 'react';
import { useFilterContext } from '@/context/FilterContext';
import { IEmpresaPerfil } from '@/interfaces/IEmpresa';
import EmpresaSmallCard from '../EmpresaSmallCard/EmpresaSmallCard';

const EmpresasList = () => {
   const [Empresas, setEmpresas] = useState<IEmpresaPerfil[] | null>();
   const { filtrosActivos, agregarFiltro, eliminarFiltro, limpiarFiltros } =
      useFilterContext();

   useEffect(() => {
      const params = new URLSearchParams();

      if (filtrosActivos.includes('Abierto ahora')) {
         params.append('abierto', 'true');
      }

      if (filtrosActivos.includes('Premium')) {
         params.append('premium', 'true');
      }

      if (filtrosActivos.some((f) => f.startsWith('Puntuacion:'))) {
         const punt = filtrosActivos
            .find((f) => f.startsWith('Puntuacion:'))
            ?.split(':')[1];
         if (punt) params.append('puntuacionMin', punt);
      }

      if (filtrosActivos.some((f) => f.startsWith('Pago:'))) {
         const pago = filtrosActivos
            .find((f) => f.startsWith('Pago:'))
            ?.split(':')[1];
         if (pago) params.append('formaPago', pago);
      }

      params.append('page', '1');
      params.append('limit', '12');

      axiosInstance
         .get(`/empresas/filtros?${params.toString()}`)
         .then((res) => {
            setEmpresas(res.data.data);
         })
         .catch((err) => {
            console.error('Error al obtener empresas:', err);
         });
   }, [filtrosActivos]);

   return (
      <>
         <div className="w-[75%] grid grid-cols-4 mx-auto gap-4 pb-20">
            {Empresas && Empresas.length > 0 ? (
               Empresas.map((empresa) => (
                  <EmpresaSmallCard key={empresa.id} empresa={empresa} />
               ))
            ) : (
               <h2>No se encontraron empresas.</h2>
            )}
         </div>
      </>
   );
};

export default EmpresasList;
