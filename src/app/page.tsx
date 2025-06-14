import Image from 'next/image';

export default function Home() {
   return (
      <div className="w-screen h-screen bg-azul-Main flex flex-col items-center justify-center">
         <h1 className="font-black text-6xl">HUNTY</h1>
         <h2 className="text-xl text-yellow-500 me-2">Cazador de Negocios</h2>
         <form action="" className="mt-5">
            <div className="flex justify-center bg-white p-[1px] h-[4rem] gap-1 rounded-md">
               <div className="flex">
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
                     className="p-2 rounded-lg w-80 text-black"
                  />
               </div>
               <div className="flex">
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
                     className="p-2 rounded-lg w-80 text-black"
                  />
               </div>
               <button
                  type="submit"
                  className="bg-yellow-500 text-azul-Main text-sm font-bold p-2 px-8 hover:cursor-pointer hover:brightness-110"
               >
                  Buscar
               </button>
            </div>
         </form>
      </div>
   );
}
