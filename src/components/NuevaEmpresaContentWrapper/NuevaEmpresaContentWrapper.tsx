'use client';

import { useEffect, useState } from 'react';
import NuevaEmpresaForm from '../NuevaEmpresaForm/NuevaEmpresaForm';
import NuevaEmpresaInformacionForm from '../NuevaEmpresaInformacionForm/NuevaEmpresaInformacionForm';
import NuevaEmpresaFotosForm from '../NuevaEmpresaFotosForm/NuevaEmpresaFotosForm';
import { useSearchParams } from 'next/navigation';
import fetchEmpresabyId from '@/services/fetchEmpresaById';
import { IEmpresa } from '@/interfaces/IEmpresa';

type SeccionEmpresa =
   | 'perfil'
   | 'informacion'
   | 'fotos'
   | 'video'
   | 'productos'
   | 'propiedades'
   | 'viajes'
   | 'menu';

const NuevaEmpresaContentWrapper = () => {
   const [opcionSeleccionada, setOpcionSeleccionada] =
      useState<SeccionEmpresa>('perfil');
   const [empresaParaEditar, setEmpresaParaEditar] = useState<IEmpresa | null>(
      null
   );

   const searchParams = useSearchParams();
   const empresaId = searchParams.get('id');

   useEffect(() => {
      if (empresaId) {
         const buscarEmpresaPorId = async () => {
            try {
               const data = await fetchEmpresabyId(empresaId);
               setEmpresaParaEditar(data);
            } catch (error) {
               console.log('No se pudo encontrar la empresa', error);
            }
         };
         buscarEmpresaPorId();
      }
   }, []);

   const nuevaEmpresaNav: { nombre: string; slug: SeccionEmpresa }[] = [
      { nombre: 'Perfil', slug: 'perfil' },
      { nombre: 'Información', slug: 'informacion' },
      { nombre: 'Fotos', slug: 'fotos' },
      { nombre: 'Video', slug: 'video' },
      { nombre: 'Productos', slug: 'productos' },
      { nombre: 'Propiedades', slug: 'propiedades' },
      { nombre: 'Viajes', slug: 'viajes' },
      { nombre: 'Menú', slug: 'menu' },
   ];

   const componentes = {
      perfil: <NuevaEmpresaForm empresaParaEditar={empresaParaEditar} />,
      informacion: (
         <NuevaEmpresaInformacionForm empresaParaEditar={empresaParaEditar} />
      ),
      fotos: <NuevaEmpresaFotosForm empresaParaEditar={empresaParaEditar} />,
      video: <div>Video</div>,
      productos: <div>Productos</div>,
      propiedades: <div>Propiedades</div>,
      viajes: <div>Viajes</div>,
      menu: <div>Menú</div>,
   };

   return (
      <>
         <nav className="bg-violeta p-3 flex gap-2 mt-4">
            <ul className="flex gap-7">
               {nuevaEmpresaNav.map((opcion, index) => (
                  <li
                     key={index}
                     className={`
                        ${
                           [
                              'productos',
                              'propiedades',
                              'viajes',
                              'menu',
                           ].includes(opcion.slug) &&
                           empresaParaEditar?.perfilEspecial !== opcion.slug
                              ? 'hidden'
                              : ''
                        }
                     `}
                  >
                     <button
                        disabled={!empresaId && opcion.slug !== 'perfil'}
                        onClick={() => setOpcionSeleccionada(opcion.slug)}
                        className={`text-xs font-semibold hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                           opcionSeleccionada === opcion.slug
                              ? 'text-amarillo'
                              : 'text-white'
                        }`}
                     >
                        {opcion.nombre}
                     </button>
                  </li>
               ))}
            </ul>
         </nav>
         {componentes[opcionSeleccionada]}
      </>
   );
};

export default NuevaEmpresaContentWrapper;
