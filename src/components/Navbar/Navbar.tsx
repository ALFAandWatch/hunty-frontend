'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
   const pathname = usePathname();
   const isHome = pathname === '/';
   const isEmpresa = pathname === '/empresa';

   return (
      <>
         <div className="w-screen flex justify-between py-2 pe-5 bg-azul-Main text-xs">
            {!isHome && (
               <Link href="/" className="hover:cursor-pointer">
                  <Image
                     src="/logo.png"
                     alt="Hunty Logo"
                     width={161}
                     height={50}
                     className="object-contain ms-10"
                  />
               </Link>
            )}
            <div className="flex gap-4 ms-auto items-center">
               {!isEmpresa && (
                  <Link
                     href="/empresa"
                     className="p-2 rounded-full bg-amarillo-Main text-azul-Main px-6 hover:brightness-110"
                  >
                     Anunciate como empresa
                  </Link>
               )}
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
