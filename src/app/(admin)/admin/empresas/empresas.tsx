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
         <h2>Buscador</h2>
         <label htmlFor="nombreEmpresa">Buscar por Nombre de Empresa:</label>
         <input type="text" name="nombreEmpresa" id="nombreEmpresa" />
      </div>
   );
};

export default Empresas;
