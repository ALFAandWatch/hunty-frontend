import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
   return (
      <>
         <footer className="w-screen flex flex-col">
            <div className="bg-violeta flex flex-col justify-center items-center p-15">
               <h1 className="font-black text-5xl">HUNTY</h1>
               <h2 className="text-md text-yellow-500 me-2 mb-5 -mt-3">
                  Cazador de Negocios
               </h2>
               <p className="w-[40%] text-sm text-center">
                  HUNTY es el directorio comercial más grande de Uruguay, en el
                  que encontrarás la solución que necesitás de forma rápida y
                  sencilla. Realiza tus búsquedas de negocios o servicios desde
                  cualquier lugar y dispositivo.
               </p>
            </div>
            <div className="bg-amarillo flex flex-col text-violeta p-3 gap-4">
               <div className="flex justify-center gap-10 text-sm">
                  <Link href="">Nosotros</Link>
                  <Link href="">Preguntas Frecuentes</Link>
                  <Link href="">Empresas</Link>
                  <Link href="">Favoritos</Link>
               </div>
               <div className="flex justify-center text-sm gap-10">
                  <Link href="">Términos y Condiciones</Link>
                  <Link href="">Políticas de Privacidad</Link>
               </div>
               <div className="flex justify-center text-sm gap-4">
                  <p className="me-10">Copyright © 2025 Hunty.uy</p>
                  <Image
                     src="/icons/whatsappLogo.png"
                     alt="Whatsapp"
                     width={25}
                     height={25}
                     className="rounded-full"
                  />
                  <Image
                     src="/icons/facebookLogo.png"
                     alt="Facebook"
                     width={25}
                     height={25}
                     className="rounded-full"
                  />
                  <Image
                     src="/icons/instagramLogo.png"
                     alt="Instagram"
                     width={25}
                     height={25}
                     className="rounded-full"
                  />
                  <Image
                     src="/icons/youtubeLogo.png"
                     alt="Youtube"
                     width={25}
                     height={25}
                     className="rounded-full p-1 bg-violeta"
                  />
                  <Image
                     src="/icons/tiktokLogo.png"
                     alt="Tiktok"
                     width={25}
                     height={25}
                     className="rounded-full"
                  />
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
