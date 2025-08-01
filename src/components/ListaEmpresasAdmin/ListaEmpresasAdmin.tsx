'use client';
import { IEmpresa } from '@/interfaces/IEmpresa';
import deleteEmpresa from '@/services/deleteEmpresa';
import fetchEmpresas from '@/services/fetchEmpresas';
import { EmpresasConFiltrosType } from '@/types/EmpresasConFiltrosType';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ListaEmpresasAdmin = () => {
   const [buscadorValue, setBuscadorValue] = useState('');
   const [empresasConPaginado, setEmpresasConPaginado] =
      useState<EmpresasConFiltrosType>();
   const [currentPage, setCurrentPage] = useState(1);
   const [empresaDeleted, setEmpresaDeleted] = useState(false);

   const totalPages = empresasConPaginado
      ? Math.ceil(empresasConPaginado.total / empresasConPaginado.limit)
      : 0;

   useEffect(() => {
      if (buscadorValue.length > 3) {
         console.log(buscadorValue);
      }
   }, [buscadorValue]);

   useEffect(() => {
      const listarEmpresas = async () => {
         const response = await fetchEmpresas(currentPage);
         setEmpresasConPaginado(response.data);
      };

      listarEmpresas();
   }, [currentPage, empresaDeleted]);

   const handleBorrarEmpresa = (id: number) => {
      const borrarEmpresa = async (id: number) => {
         try {
            const response = await deleteEmpresa(id);
            setEmpresaDeleted(true);
            Swal.fire({
               title: 'La empresa ha sido borrada.',
               icon: 'success',
            }).then(() => setEmpresaDeleted(false));
            return response;
         } catch (error) {
            console.log(error);
            Swal.fire({
               title: 'Error al borrar la empresa.',
               icon: 'error',
            });
            return;
         }
      };
      borrarEmpresa(id);
   };

   return (
      <div className="mt-8 p-6 px-10 flex flex-col gap-4">
         <h2 className="text-md 2xl:text-2xl font-semibold">Buscador</h2>
         <div className="flex flex-col gap-2">
            <label htmlFor="nombreEmpresa" className="text-md 2xl:text-2xl">
               Buscar por Nombre de Empresa:
            </label>
            <input
               type="text"
               name="nombreEmpresa"
               id="nombreEmpresa"
               className="commonField"
               onChange={(e) => setBuscadorValue(e.target.value)}
            />
         </div>
         <ul>
            {empresasConPaginado &&
               empresasConPaginado.data.map((empresa: IEmpresa) => (
                  <li
                     className="flex justify-between gap-4 items-center bg-white rounded-md my-4 p-2 px-4 hover:bg-gray-200"
                     key={empresa.id}
                  >
                     <div className="flex items-center gap-4">
                        <div className="w-[35px] h-[35px] relative">
                           <Image
                              src={
                                 empresa.imagenUrl || '/empresa-placeholder.png'
                              }
                              alt={empresa.nombreFantasia}
                              fill
                              sizes="10vw"
                              className="w-10 h-10 rounded-full"
                           />
                        </div>
                        <p className="text-sm 2xl:text-2xl">#id {empresa.id}</p>
                        <p className="text-sm 2xl:text-2xl">
                           <span className="font-semibold">
                              {empresa.nombreFantasia}
                           </span>{' '}
                           - {empresa.direccion}
                        </p>
                     </div>
                     <div className="flex gap-4">
                        <Link
                           href={`/admin/nuevaEmpresa?id=${empresa.id}`}
                           className="hover:cursor-pointer"
                        >
                           <Image
                              src="/icons/edit_green.svg"
                              alt="Editar"
                              width={25}
                              height={25}
                           />
                        </Link>
                        <button
                           className="hover:cursor-pointer"
                           onClick={() => {
                              Swal.fire({
                                 title: `¿Seguro que quieres borrar la empresa ${empresa.nombreFantasia}?`,
                                 text: 'Esta accion no es reversible.',
                                 icon: 'warning',
                                 showCancelButton: true,
                                 confirmButtonColor: '#df654b',
                                 cancelButtonColor: '#99a1af',
                                 confirmButtonText: 'Borrar Empresa',
                                 cancelButtonText: 'Cancelar',
                              }).then((result) => {
                                 if (result.isConfirmed) {
                                    handleBorrarEmpresa(empresa.id);
                                 }
                              });
                           }}
                        >
                           <Image
                              src="/icons/delete_red.svg"
                              alt="Eliminar"
                              width={25}
                              height={25}
                           />
                        </button>
                     </div>
                  </li>
               ))}
         </ul>
         <div className="flex gap-2 mt-4 flex-wrap">
            <button
               disabled={currentPage === 1}
               onClick={(prev) => setCurrentPage((prev) => prev - 1)}
               className="px-3 py-1 bg-white text-violeta rounded disabled:opacity-20 disabled:cursor-not-allowed text-sm shadow-md hover:bg-gray-100 hover:cursor-pointer"
            >
               Anterior
            </button>
            <div className="flex gap-2">
               {Array.from({ length: totalPages }, (_, index) => (
                  <button
                     key={index}
                     className={`px-4 py-2 rounded shadow-md hover:bg-gray-100 hover:cursor-pointer ${
                        currentPage === index + 1
                           ? 'bg-violeta text-white'
                           : 'text-violeta bg-white'
                     }`}
                     onClick={() => setCurrentPage(index + 1)}
                  >
                     {index + 1}
                  </button>
               ))}
            </div>
            <button
               disabled={currentPage === totalPages}
               onClick={(prev) => setCurrentPage((prev) => prev + 1)}
               className="px-3 py-1 bg-white text-violeta rounded disabled:opacity-20 disabled:cursor-not-allowed text-sm shadow-md hover:bg-gray-100 hover:cursor-pointer"
            >
               Siguiente
            </button>
         </div>
      </div>
   );
};

export default ListaEmpresasAdmin;
