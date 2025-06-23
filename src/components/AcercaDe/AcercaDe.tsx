import { IEmpresaPerfil } from '@/interfaces/IEmpresaPerfil';
import Image from 'next/image';

type Props = {
   empresa: IEmpresaPerfil;
};

const AcercaDe = ({ empresa }: Props) => {
   const { nombre, descripcion, abiertoAhora } = empresa;

   return (
      <>
         <div className="w-[60%] mx-auto mt-20 p-5 bg-white rounded-md flex flex-col shadow-md">
            <div className="flex justify-between mb-5">
               <h2 className="text-black font-bold text-3xl">
                  Acerca de {nombre}
               </h2>
               {abiertoAhora && (
                  <div className="bg-azul-Main rounded-full text-white p-1 px-3 mt-1">
                     <Image
                        src="/icons/clock.svg"
                        alt="Abierto"
                        width={20}
                        height={20}
                        className="inline me-1 align-sub"
                     />
                     Abierto
                  </div>
               )}
            </div>
            <div className="mb-5">
               <p className="text-black">{descripcion}</p>
            </div>
         </div>
      </>
   );
};

export default AcercaDe;
