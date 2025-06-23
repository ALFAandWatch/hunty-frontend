'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useFilterContext } from '@/context/FilterContext';

const puntuaciones = [
   '1 Estrella',
   '2 Estrellas',
   '3 Estrellas',
   '4 Estrellas',
   '5 Estrellas',
];
const formasPago = ['Efectivo', 'Tarjeta', 'Transferencia'];

const FilterSelector = () => {
   const { filtrosActivos, agregarFiltro, eliminarFiltro } = useFilterContext();

   const [openPuntuacion, setOpenPuntuacion] = useState(false);
   const [openFormaPago, setOpenFormaPago] = useState(false);

   const toggleFiltro = (filtro: string) => {
      if (filtrosActivos.includes(filtro)) {
         eliminarFiltro(filtro);
      } else {
         agregarFiltro(filtro);
      }
   };

   const isActivo = (filtro: string) => filtrosActivos.includes(filtro);

   return (
      <>
         <div className="flex justify-between items-center w-[75%] mx-auto mt-12 mb-8 text-sm">
            <div className="flex gap-2 items-center">
               <span className="shadow-md p-2 px-3 bg-white text-black rounded-sm">
                  <Image
                     src="/icons/location.svg"
                     alt="Ubicacion"
                     width={18}
                     height={18}
                     className="inline mb-1 me-1"
                  />
                  Montevideo
                  <Image
                     src="/icons/dropdown.svg"
                     alt="Flecha"
                     width={25}
                     height={25}
                     className="inline ms-1"
                  />
               </span>
               <span className="shadow-md p-2 px-3 bg-white text-black rounded-sm flex">
                  Abierto
                  <span
                     onClick={() => toggleFiltro('Abierto ahora')}
                     className={`w-10 h-5 flex items-center rounded-full p-1 ms-1 self-center cursor-pointer transition-colors duration-300 ${
                        isActivo('Abierto ahora')
                           ? 'bg-blue-600'
                           : 'bg-gray-300'
                     }`}
                  >
                     <span
                        className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ${
                           isActivo('Abierto ahora')
                              ? 'translate-x-5'
                              : 'translate-x-0'
                        }`}
                     />
                  </span>
               </span>
               <span className="shadow-md p-2 px-3 bg-white text-black rounded-sm flex">
                  Premium
                  <span
                     onClick={() => toggleFiltro('Premium')}
                     className={`w-10 h-5 flex items-center rounded-full p-1 ms-1 self-center cursor-pointer transition-colors duration-300 ${
                        isActivo('Premium') ? 'bg-blue-600' : 'bg-gray-300'
                     }`}
                  >
                     <span
                        className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ${
                           isActivo('Premium')
                              ? 'translate-x-5'
                              : 'translate-x-0'
                        }`}
                     />
                  </span>
               </span>
               <div className="relative">
                  <span
                     className="shadow-md p-2 px-3 bg-white text-black rounded-sm flex items-center cursor-pointer select-none"
                     onClick={() => {
                        setOpenPuntuacion(!openPuntuacion);
                        setOpenFormaPago(false);
                     }}
                  >
                     <Image
                        src="/icons/star.svg"
                        alt="Puntuacion"
                        width={18}
                        height={18}
                        className="inline mb-1 me-1"
                     />
                     Puntuacion
                     <Image
                        src="/icons/dropdown.svg"
                        alt="Flecha"
                        width={25}
                        height={25}
                        className="inline ms-1"
                     />
                  </span>
                  {openPuntuacion && (
                     <div className="absolute top-9 bg-white shadow-lg rounded-sm mt-1 w-40 max-h-48 overflow-auto z-30 text-black">
                        {puntuaciones.map((p) => (
                           <div
                              key={p}
                              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                                 filtrosActivos.includes(p)
                                    ? 'bg-blue-200 font-semibold'
                                    : ''
                              }`}
                              onClick={() => {
                                 toggleFiltro(p);
                                 setOpenPuntuacion(false);
                              }}
                           >
                              {p}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
               <div className="relative">
                  <span
                     className="shadow-md p-2 px-3 bg-white text-black rounded-sm flex items-center cursor-pointer select-none"
                     onClick={() => {
                        setOpenFormaPago(!openFormaPago);
                        setOpenPuntuacion(false);
                     }}
                  >
                     <Image
                        src="/icons/creditCard.svg"
                        alt="Forma de Pago"
                        width={18}
                        height={18}
                        className="inline mb-1 me-1"
                     />
                     Forma de Pago
                     <Image
                        src="/icons/dropdown.svg"
                        alt="Flecha"
                        width={25}
                        height={25}
                        className="inline ms-1"
                     />
                  </span>
                  {openFormaPago && (
                     <div className="absolute bg-white shadow-lg rounded-md mt-1 w-40 max-h-48 overflow-auto z-30 text-black">
                        {formasPago.map((fp) => (
                           <div
                              key={fp}
                              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                                 filtrosActivos.includes(fp)
                                    ? 'bg-blue-200 font-semibold'
                                    : ''
                              }`}
                              onClick={() => {
                                 toggleFiltro(fp);
                                 setOpenFormaPago(false);
                              }}
                           >
                              {fp}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
            <div className="flex gap-2">
               <span className="shadow-md p-2 px-3 bg-white text-black rounded-sm">
                  <Image
                     src="/icons/grid.svg"
                     alt="Fotos"
                     width={18}
                     height={18}
                     className="inline mb-1 me-1"
                  />
                  Fotos
               </span>
               <span className="shadow-md p-2 px-3 bg-white text-black rounded-sm">
                  <Image
                     src="/icons/list.svg"
                     alt="Lista"
                     width={18}
                     height={18}
                     className="inline mb-1 me-1"
                  />
                  Lista
               </span>
            </div>
         </div>
      </>
   );
};

export default FilterSelector;
