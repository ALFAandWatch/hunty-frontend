'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Footer from '../Footer/Footer';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
   const pathname = usePathname();

   // Lista de rutas donde NO se debe mostrar el footer
   const ocultarFooterEn = ['/'];

   const mostrarFooter = !ocultarFooterEn.includes(pathname);

   return (
      <>
         {children}
         {mostrarFooter && <Footer />}
      </>
   );
};

export default LayoutWrapper;
