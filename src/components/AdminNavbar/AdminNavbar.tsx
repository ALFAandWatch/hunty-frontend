'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminNavbar = () => {
   const pathname = usePathname();
   const isHome = pathname === '/';
   const isEmpresa = pathname === '/empresa';

   return (
      <>
         <nav className="w-screen flex justify-between py-2 pe-5 bg-violeta text-xs">
            {!isHome && (
               <Link
                  href="/"
                  aria-label="Volver al inicio"
                  className="hover:cursor-pointer"
               >
                  <Image
                     src="/logo.png"
                     alt="Hunty Logo"
                     width={161}
                     height={50}
                     className="object-contain ms-10"
                  />
               </Link>
            )}
            <ul className="flex gap-4 ms-auto items-center py-2">
               {!isEmpresa && (
                  <li>
                     <Link
                        href="/empresa"
                        className="p-2 rounded-full bg-amarillo text-violeta px-6 hover:brightness-110"
                     >
                        Anunciate como empresa
                     </Link>
                  </li>
               )}
               <li>
                  <Link href="/registro" className="p-2 hover:underline">
                     Regístrate
                  </Link>
               </li>
               <li>
                  <Link href="/about" className="p-2 hover:underline">
                     Inicia Sesión
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default AdminNavbar;
