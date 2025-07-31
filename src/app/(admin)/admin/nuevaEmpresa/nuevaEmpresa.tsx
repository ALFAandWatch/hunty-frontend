import NuevaEmpresaContentWrapper from '@/components/NuevaEmpresaContentWrapper/NuevaEmpresaContentWrapper';
import Image from 'next/image';

const NuevaEmpresa = () => {
   return (
      <div className="contentWrapper font-(family-name:--font-poppins) text-black">
         <div className="bg-amarillo p-3 flex gap-2">
            <div className="w-[20px] h-[20px] 2xl:w-[30px] 2xl:h-[30px] relative">
               <Image
                  src="/icons/plus-circle-regular.svg"
                  alt="Empresas"
                  fill
                  sizes="100vw"
                  className="grayscale-100"
               />
            </div>
            <h1 className="text-black 2xl:text-2xl">Nueva Empresa</h1>
         </div>
         <NuevaEmpresaContentWrapper />
      </div>
   );
};

export default NuevaEmpresa;
