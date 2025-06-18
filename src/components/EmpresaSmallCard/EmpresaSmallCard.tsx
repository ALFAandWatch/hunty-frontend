import { IEmpresaPerfil } from '@/interfaces/IEmpresaPerfil';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   empresa: IEmpresaPerfil;
}

const EmpresaSmallCard = ({ empresa }: Props) => {
   const { nombre, direccion, esPremium } = empresa;

   return (
      <>
         <div className="w-full rounded-xl overflow-hidden flex flex-col bg-white shadow-md">
            <div className="h-[10rem] w-full bg-[url('/empresa.jpg')] bg-cover relative">
               {esPremium && (
                  <h2 className="bg-white rounded-full text-azul-Main w-fit absolute top-2 left-2">
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
            </div>
            <div className="flex justify-between mt-2 px-2">
               <Image
                  src="/empresaLogo.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full -mt-10 z-10 aspect-square"
               ></Image>
               <Link
                  href=""
                  className="bg-azul-Main text-white text-xs rounded-full p-1 px-2"
               >
                  <Image
                     src="/icons/phone.svg"
                     alt="Llamar"
                     width={13}
                     height={13}
                     className="inline invert me-1"
                  />
                  Llamar
               </Link>
               <Link href="">
                  <Image
                     src="/icons/whatsapp.png"
                     alt="Whatsapp"
                     width={20}
                     height={20}
                     className="rounded-full"
                  />
               </Link>
               <button>
                  <Image
                     src="/icons/emptyHeart.svg"
                     alt="Favorito"
                     width={20}
                     height={20}
                  />
               </button>
            </div>
            <div className="flex flex-col w-full">
               <h2 className="text-black">{nombre}</h2>
               <h2 className="text-black">{direccion}</h2>
               <h3 className="text-black"></h3>
            </div>
         </div>
      </>
   );
};

export default EmpresaSmallCard;
