import SearchForm from '@/components/SearchForm/SearchForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="w-screen h-[calc(100vh-72px)] bg-azul-Main flex flex-col items-center justify-center">
         <h1 className="font-black text-6xl">HUNTY</h1>
         <h2 className="text-xl text-yellow-500 me-2 mb-5">
            Cazador de Negocios
         </h2>
         <SearchForm />
         <div className="flex justify-between gap-2 mt-6">
            <Link
               href="/about"
               className="text-sm px-2 text-gray-500 bg-white rounded-full"
            >
               <Image
                  src="/icons/restaurant.svg"
                  alt="restaurantes"
                  width={12}
                  height={12}
                  className="inline pb-1 me-1"
               />
               Restaurantes
            </Link>
            <Link
               href="/contact"
               className="text-sm px-2 text-gray-500 bg-white rounded-full"
            >
               <Image
                  src="/icons/pharmacy.svg"
                  alt="farmacias"
                  width={12}
                  height={12}
                  className="inline pb-1 me-1"
               />
               Farmacias
            </Link>
            <Link
               href="/contact"
               className="text-sm px-2 text-gray-500 bg-white rounded-full"
            >
               <Image
                  src="/icons/market.svg"
                  alt="supermercados"
                  width={12}
                  height={12}
                  className="inline pb-1 me-1"
               />
               Supermercados
            </Link>
            <Link
               href="/contact"
               className="text-sm px-2 text-gray-500 bg-white rounded-full"
            >
               <Image
                  src="/icons/vet.svg"
                  alt="Veterinarias"
                  width={12}
                  height={12}
                  className="inline pb-1 me-1"
               />
               Veterinarias
            </Link>
            <Link
               href="/contact"
               className="text-sm px-2 text-white hover:underline"
            >
               + Categorias
            </Link>
         </div>
      </div>
   );
}
