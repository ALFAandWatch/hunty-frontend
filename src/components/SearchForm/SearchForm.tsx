'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
   const router = useRouter();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push('/results');
   };
   return (
      <>
         <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex justify-center bg-white p-[1px] h-[3.5rem] rounded-md">
               <div className="flex group focus-within:border-blue-500 border-2 rounded-l-md">
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
                     className="p-2 rounded-lg w-50 text-black focus:outline-none"
                  />
               </div>
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
                     className="p-2 rounded-lg w-50 text-black focus:outline-none"
                  />
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
