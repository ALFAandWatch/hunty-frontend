'use client';
import NuevaEmpresaForm from '@/components/NuevaEmpresaForm/NuevaEmpresaForm';
import NuevaEmpresaPerfil from '@/components/NuevaEmpresaForm/NuevaEmpresaForm';
import Image from 'next/image';
import { useState } from 'react';

const NuevaEmpresa = () => {
   const [opcionSeleccionada, setOpcionSeleccionada] = useState('perfil');

   // const nuevaEmpresaNav = [
   //    { nombre: 'Perfil', slug: 'perfil' },
   //    { nombre: 'Información', slug: 'informacion' },
   //    { nombre: 'Fotos', slug: 'fotos' },
   //    { nombre: 'Video', slug: 'video' },
   //    { nombre: 'Productos', slug: 'productos' },
   //    { nombre: 'Propiedades', slug: 'propiedades' },
   //    { nombre: 'Viajes', slug: 'viajes' },
   //    { nombre: 'Menú', slug: 'menu' },
   // ];

   // const componentes = {
   //    perfil: <NuevaEmpresaPerfil />,
   //    informacion: <div>Información</div>,
   //    fotos: <div>Fotos</div>,
   //    video: <div>Video</div>,
   //    productos: <div>Productos</div>,
   //    propiedades: <div>Propiedades</div>,
   //    viajes: <div>Viajes</div>,
   //    menu: <div>Menú</div>,
   // };

   return (
      <div className="contentWrapper font-(family-name:--font-poppins) text-black">
         <div className="bg-amarillo p-3 flex gap-2">
            <div className="w-[20px] h-[20px] relative">
               <Image
                  src="/icons/plus-circle-regular.svg"
                  alt="Empresas"
                  fill
                  sizes="100vw"
                  className="grayscale-100"
               />
            </div>
            <h1 className="text-black">Nueva Empresa</h1>
         </div>
         {/* <nav className="bg-violeta p-3 flex gap-2 mt-4">
            <ul className="flex gap-7">
               {nuevaEmpresaNav.map((opcion, index) => (
                  <li key={index}>
                     <button
                        onClick={() => setOpcionSeleccionada(opcion.slug)}
                        className={`text-xs font-semibold hover:cursor-pointer ${
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
         </nav> */}
         <NuevaEmpresaForm />
      </div>
   );
};

export default NuevaEmpresa;
