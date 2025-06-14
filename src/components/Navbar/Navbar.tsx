'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
   const pathname = usePathname();
   const isHome = pathname === '/';

   return (
      <>
         <div className="absolute top-0 w-screen flex justify-between py-4 pe-5 bg-azul-Main">
            {!isHome && (
               <Image
                  src="/logo.png"
                  alt="Hunty Logo"
                  width={100}
                  height={100}
                  className="object-contain ms-10"
               />
            )}
            <div className="flex gap-4 ms-auto">
               <Link
                  href="/about"
                  className="p-2 rounded-full bg-amarillo-Main text-azul-Main px-6 hover:brightness-110"
               >
                  Anunciate como empresa
               </Link>
               <Link href="/about" className="p-2 hover:underline">
                  Regístrate
               </Link>
               <Link href="/about" className="p-2 hover:underline">
                  Inicia Sesión
               </Link>
            </div>
         </div>
      </>
   );
};

export default Navbar;
