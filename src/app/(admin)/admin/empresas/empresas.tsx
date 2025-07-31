import ListaEmpresasAdmin from '@/components/ListaEmpresasAdmin/ListaEmpresasAdmin';
import Image from 'next/image';

const Empresas = () => {
   return (
      <div className="contentWrapper font-(family-name:--font-poppins) text-black">
         <div className="bg-amarillo p-3 flex gap-2">
            <div className="w-[20px] h-[20px] relative">
               <Image
                  src="/icons/store-solid.svg"
                  alt="Empresas"
                  fill
                  sizes="100vw"
                  className="grayscale-100"
               />
            </div>
            <h1 className="text-black text-sm">Empresas</h1>
         </div>
         <ListaEmpresasAdmin />
      </div>
   );
};

export default Empresas;
