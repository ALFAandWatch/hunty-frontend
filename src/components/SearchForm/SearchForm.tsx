'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axiosInstance from '@/services/axiosInstance';

type Category = {
   id: number;
   name: string;
   parent: number | null;
   children?: Category[];
};

type Departamento = {
   id: number;
   name: string;
};

const SearchForm = () => {
   //estados de Categories================
   //========================================
   const [categoryInputValue, setCategoryInputValue] = useState('');
   const [categorySearchResults, setCategorySearchResults] = useState<
      Category[]
   >([]);
   const [selectedCategory, setSelectedCategory] = useState<Category | null>(
      null
   );
   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

   //estados de Departamentos================
   //========================================
   const [departamentoValue, setDepartamentoValue] = useState('');
   const [departamentoSearchResults, setDepartamentoSearchResults] = useState<
      Departamento[]
   >([]);
   const [selectedDepartamento, setSelectedDepartamento] =
      useState<Departamento | null>(null);
   const [showDepartamentoDropdown, setShowDepartamentoDropdown] =
      useState(false);

   const router = useRouter();

   //Request para obtener categorías
   //========================================
   useEffect(() => {
      const delay = 500;
      if (categoryInputValue.length > 3) {
         const timeout = setTimeout(() => {
            axiosInstance
               .get(`categorias/search?q=${categoryInputValue}`)
               .then((res) => {
                  setCategorySearchResults(res.data);
                  setShowCategoryDropdown(res.data.length > 0);
               })
               .catch((err) => {
                  console.error('Error al buscar categorías:', err);
               });
         }, delay);
         return () => clearTimeout(timeout);
      } else {
         setCategorySearchResults([]);
         setShowCategoryDropdown(false);
      }
   }, [categoryInputValue]);

   //request para obtener departamentos
   //========================================
   useEffect(() => {
      const delay = 500;

      if (departamentoValue.length > 1) {
         const timeout = setTimeout(() => {
            axiosInstance
               .get(`departamentos/search?q=${departamentoValue}`)
               .then((res) => {
                  setDepartamentoSearchResults(res.data);
                  setShowDepartamentoDropdown(res.data.length > 0);
               })
               .catch((err) => {
                  console.error('Error al buscar departamentos:', err);
               });
         }, delay);
         return () => clearTimeout(timeout);
      } else {
         setDepartamentoSearchResults([]);
         setShowDepartamentoDropdown(false);
      }
   }, [departamentoValue]);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const categoriaId = selectedCategory?.id;
      const departamentoId = selectedDepartamento?.id;

      if (!categoriaId || !departamentoId) return;
      router.push(`/results/${categoriaId}/${departamentoId}`);
   };
   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="flex justify-center bg-white p-[1px] h-[3.5rem] rounded-md shadow-md">
               <div className="flex flex-col relative w-full">
                  <div className="flex group w-full focus-within:border-blue-500 border-2 rounded-l-md">
                     <Image
                        src="/icons/search.svg"
                        alt="Buscar"
                        width={50}
                        height={50}
                        className="p-2"
                     />
                     <input
                        type="text"
                        placeholder="Supermercados"
                        className={`p-2 rounded-lg w-50 text-black focus:outline-none ${
                           selectedCategory && 'bg-green-300 rounded-r-none'
                        }`}
                        value={
                           selectedCategory
                              ? selectedCategory.name
                              : categoryInputValue
                        }
                        onChange={(e) => {
                           setCategoryInputValue(e.target.value);
                           setSelectedCategory(null);
                        }}
                        onBlur={() => {
                           setTimeout(
                              () => setShowCategoryDropdown(false),
                              150
                           );
                        }}
                        onFocus={() => {
                           if (categorySearchResults.length > 0)
                              setShowCategoryDropdown(true);
                        }}
                        readOnly={!!selectedCategory}
                     />
                     {selectedCategory && (
                        <button
                           onClick={() => {
                              setSelectedCategory(null);
                              setCategoryInputValue('');
                              setCategorySearchResults([]);
                           }}
                           className=" text-gray-500 hover:text-black p-2 bg-green-300 rounded-r-lg"
                        >
                           X
                        </button>
                     )}
                  </div>
                  {showCategoryDropdown &&
                     categorySearchResults.length > 0 &&
                     !selectedCategory && (
                        <ul className="absolute top-12 z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                           {categorySearchResults
                              .filter((cat) => cat.parent !== null)
                              .map((cat) => (
                                 <li
                                    key={cat.id}
                                    className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer"
                                    onMouseDown={() => {
                                       setSelectedCategory(cat);
                                       setShowCategoryDropdown(false);
                                    }}
                                 >
                                    {cat.name}
                                 </li>
                              ))}
                        </ul>
                     )}
               </div>
               <div className="flex flex-col relative w-full">
                  <div className="flex group focus-within:border-blue-500 border-2">
                     <Image
                        src="/icons/location.svg"
                        alt="Ubicación"
                        width={50}
                        height={50}
                        className="p-2"
                     />
                     <input
                        type="text"
                        placeholder="Montevideo"
                        className={`p-2 rounded-lg w-50 text-black focus:outline-none ${
                           selectedDepartamento && 'bg-green-300 rounded-r-none'
                        }`}
                        value={
                           selectedDepartamento
                              ? selectedDepartamento.name
                              : departamentoValue
                        }
                        onChange={(e) => {
                           setDepartamentoValue(e.target.value);
                           setSelectedDepartamento(null);
                        }}
                        readOnly={!!selectedDepartamento}
                     />
                     {selectedDepartamento && (
                        <button
                           onClick={() => {
                              setSelectedDepartamento(null);
                              setDepartamentoValue('');
                              setDepartamentoSearchResults([]);
                           }}
                           className=" text-gray-500 hover:text-black p-2 bg-green-300 rounded-r-lg"
                        >
                           X
                        </button>
                     )}
                  </div>
                  {showDepartamentoDropdown &&
                     departamentoSearchResults.length > 0 &&
                     !selectedDepartamento && (
                        <ul className="absolute top-12 z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                           {departamentoSearchResults.map((dep) => (
                              <li
                                 key={dep.id}
                                 className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer"
                                 onMouseDown={() => {
                                    setSelectedDepartamento(dep);
                                    setShowDepartamentoDropdown(false);
                                 }}
                              >
                                 {dep.name}
                              </li>
                           ))}
                        </ul>
                     )}
               </div>
               <button
                  type="submit"
                  className="bg-yellow-500 text-azul-Main text-sm font-bold p-2 px-8 ms-1 hover:cursor-pointer hover:brightness-110"
               >
                  Buscar
               </button>
            </div>
         </form>
      </>
   );
};

export default SearchForm;
