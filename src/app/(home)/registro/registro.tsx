'use client';
import Image from 'next/image';
import Link from 'next/link';

const Registro = () => {
   return (
      <>
         <div className="w-screen h-screen bg-azul-Main flex flex-col items-center pt-15">
            <Image
               src="/logo.png"
               alt="Hunty.uy"
               width={220}
               height={90}
               className="mb-15"
            />
            <div className="flex flex-col justify-around items-center w-110 h-110 bg-white rounded-sm p-8 px-15 font-(family-name:--font-open-sans) gap-7">
               <div className="flex flex-col items-center gap-2">
                  <Image
                     src="/crear_cuenta.png"
                     alt="Crear Cuenta"
                     width={160}
                     height={110}
                     className="mb-4"
                  />
                  <h2 className="text-azul-Main text-xl font-semibold text-center">
                     Para crear tu cuenta te pediremos algunos datos
                  </h2>
                  <p className="text-gray-500 font-semibold text-sm font-(family-name:--font-open-sans)">
                     Solo te tomará unos minutos
                  </p>
               </div>
               <div className="flex flex-col gap-3">
                  <Link
                     href="/registro/cuentaPersonal"
                     className="text-white bg-azul-Main text-sm text-center p-2 px-7 rounded-full font-bold"
                  >
                     Crear Cuenta Personal
                  </Link>
                  <Link
                     href=""
                     className="text-azul-Main bg-azul-Main/40 text-sm text-center bg-op p-2 px-7 rounded-full font-bold"
                  >
                     Crear Cuenta Empresa
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Registro;
