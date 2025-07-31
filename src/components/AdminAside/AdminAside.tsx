'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const AdminASide = () => {
   const [opcionSeleccionada, setOpcionSeleccionada] = useState('Estadísticas');
   const base_url = '/admin';
   const botonesAside = [
      {
         nombre: 'Estadísticas',
         slug: 'estadisticas',
         url: '/estadisticas',
         imagen: '/icons/chart-bar-regular.svg',
      },
      {
         nombre: 'Categorías',
         slug: 'categorias',
         url: '/categorias',
         imagen: '/icons/hand-point-right-solid.svg',
      },
      {
         nombre: 'Nueva Categoría',
         slug: 'nuevaCategoria',
         url: '/nuevaCategoria',
         imagen: '/icons/plus-circle-regular.svg',
      },
      {
         nombre: 'Empresas',
         slug: 'empresas',
         url: '/empresas',
         imagen: '/icons/store-solid.svg',
      },
      {
         nombre: 'Nueva Empresa',
         slug: 'nuevaEmpresa',
         url: '/nuevaEmpresa',
         imagen: '/icons/plus-circle-regular.svg',
      },
      {
         nombre: 'Banners',
         slug: 'banners',
         url: '/banners',
         imagen: '/icons/image-solid.svg',
      },
      {
         nombre: 'Nuevo Banner',
         slug: 'nuevoBanner',
         url: '/nuevoBanner',
         imagen: '/icons/plus-circle-regular.svg',
      },
      {
         nombre: 'Testimonios',
         slug: 'testimonios',
         url: '/testimonios',
         imagen: '/icons/comments-solid.svg',
      },
      {
         nombre: 'Configuración',
         slug: 'configuracion',
         url: '/configuracion',
         imagen: '/icons/tools-solid.svg',
      },
   ];

   return (
      <ul className="font-(family-name:--font-poppins) text-black h-screen w-full">
         {botonesAside.map((opcion, index) => (
            <li
               key={index}
               className="border-b border-gray-400 p-4 hover:bg-gray-100 text-sm 2xl:text-xl font-medium hover:cursor-pointer"
            >
               <Link
                  href={`${base_url}${opcion.url}`}
                  onClick={() => setOpcionSeleccionada(opcion.slug)}
                  className=""
               >
                  <div className="flex gap-2">
                     <div className="w-[20px] h-[20px] relative">
                        <Image
                           src={opcion.imagen}
                           alt="Estadísticas"
                           fill
                           sizes="100vw"
                        />
                     </div>
                     <h2
                        className={`${
                           opcionSeleccionada === opcion.slug &&
                           'text-violeta font-semibold'
                        }`}
                     >
                        {opcion.nombre}
                     </h2>
                  </div>
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default AdminASide;
