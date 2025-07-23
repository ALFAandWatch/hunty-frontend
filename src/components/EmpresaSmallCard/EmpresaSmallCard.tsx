import { IEmpresaPerfil } from '@/interfaces/IEmpresaPerfil';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   empresa: IEmpresaPerfil;
}

const EmpresaSmallCard = ({ empresa }: Props) => {
   const { id, nombre, direccion, esPremium, sitioWeb } = empresa;

   return (
      <>
         <div className="w-full rounded-xl overflow-hidden flex flex-col bg-white shadow-md min-h-[18rem]">
            <div className="h-[10rem] w-full bg-[url('/empresa.jpg')] bg-cover relative">
               {esPremium && (
                  <h2 className="bg-white rounded-full text-violeta w-fit absolute top-2 left-2">
                     <Image
                        src="/icons/premium.svg"
                        alt="Premium"
                        width={20}
                        height={20}
                        className="inline"
                     />
                     Premium
                  </h2>
               )}
               <Image
                  src="/empresaLogo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="rounded-full z-10 aspect-square absolute left-0 bottom-0 -mb-9 ms-3 border-2 border-violeta"
               ></Image>
            </div>
            <div className="flex justify-end gap-3 mt-2 px-2">
               <a
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-violeta text-white text-xs rounded-full p-1 px-2"
               >
                  <Image
                     src="/icons/phone.svg"
                     alt="Llamar"
                     width={13}
                     height={13}
                     className="inline invert me-1"
                  />
                  Llamar
               </a>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <Image
                     src="/icons/whatsapp.png"
                     alt="Whatsapp"
                     width={25}
                     height={25}
                     className="rounded-full"
                  />
               </a>
               <button>
                  <Image
                     src="/icons/emptyHeart.svg"
                     alt="Favorito"
                     width={20}
                     height={20}
                  />
               </button>
            </div>
            <div className="flex flex-col w-full p-3 pt-6">
               <Link
                  href={`/perfil/${id}`}
                  className="text-black font-bold text-sm"
               >
                  {nombre}
               </Link>
               <h2 className="text-gray-500 text-sm">
                  <Image
                     src="/icons/location_gray.svg"
                     alt="Ubicacion"
                     width={14}
                     height={14}
                     className="inline align-text-baseline mb-1 me-1"
                  />
                  {direccion}
               </h2>
               <a
                  href={sitioWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-center text-sm hover:text-blue-600 hover:underline hover:cursor-pointer"
               >
                  {sitioWeb}
               </a>
            </div>
         </div>
      </>
   );
};

export default EmpresaSmallCard;
