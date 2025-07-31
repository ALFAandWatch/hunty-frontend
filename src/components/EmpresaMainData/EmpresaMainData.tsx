import { IEmpresaPerfil } from '@/interfaces/IEmpresa';
import Image from 'next/image';

type Props = {
   empresa: IEmpresaPerfil;
};

const EmpresaMainData = ({ empresa }: Props) => {
   const { nombre, direccion, sitioWeb } = empresa;
   return (
      <>
         <div className="w-[70%] mx-auto flex justify-around gap-8 bg-white/50 backdrop-blur-md p-6 h-[9rem] rounded-lg shadow-md -mt-17">
            <div className="flex justify-center items-center">
               <Image
                  src="/empresa.jpg"
                  alt={nombre}
                  width={100}
                  height={100}
                  className="aspect-square border-3 border-violeta rounded-md"
               />
            </div>
            <div className="flex justify-center items-center">
               <h2 className="text-black font-bold text-2xl">{nombre}</h2>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-violeta ps-7">
               <div>
                  <Image
                     src="/icons/location_gray.svg"
                     alt="Ubicacion"
                     width={20}
                     height={20}
                     className="inline me-1"
                  />
                  <p className="text-gray-400 inline">{direccion}</p>
               </div>
               <div>
                  <Image
                     src="/icons/website.svg"
                     alt="Web"
                     width={20}
                     height={20}
                     className="inline me-1"
                  />
                  <p className="text-gray-400 inline">{sitioWeb}</p>
               </div>
            </div>
            <div className="flex items-center gap-2 border-l-2 border-violeta ps-7">
               <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-green-500 rounded-full p-1 px-2"
               >
                  <Image
                     src="/icons/whatsapp.png"
                     alt="Whatsapp"
                     width={20}
                     height={20}
                     className="inline"
                  />
                  Whatsapp
               </a>
               <a href="#" className="bg-violeta rounded-full p-1 px-2">
                  <Image
                     src="/icons/phone.svg"
                     alt="Llamar"
                     width={20}
                     height={20}
                     className="inline invert"
                  />
                  Llamar
               </a>
            </div>
            <Image
               src="/icons/emptyHeart.svg"
               alt="Favorito"
               width={20}
               height={20}
               className="ms-auto"
            />
         </div>
      </>
   );
};

export default EmpresaMainData;
