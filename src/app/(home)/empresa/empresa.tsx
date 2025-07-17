import EmpresaForm from '@/components/EmpresaForm/EmpresaForm';
import Image from 'next/image';

const Empresa = () => {
   return (
      <>
         <div className="w-screen mx-auto bg-linear-to-b from-azul-Main from-10% via-violet-400 via-30% to-white to-70%">
            {/********************* Formulario e imagenes ****************/}
            <div className="w-[77%] mx-auto flex gap-10 pt-10">
               <div className="flex flex-col gap-7">
                  <h2 className="text-amarillo-Main font-(family-name:--font-open-sans) text-3xl">
                     Tus potenciales clientes ya están en internet, sólo faltás
                     vos.
                  </h2>
                  <p className="text-xl">
                     Anunciá en el buscador de negocios y servicios N°1 de
                     Uruguay y aumentá la presencia de tu negocio en internet.
                  </p>
                  <div className="flex gap-6 pt-7">
                     <div className="flex flex-col gap-6 justify-end">
                        <Image
                           src="/clientes1.png"
                           alt="Clientes"
                           width={315}
                           height={444}
                           className="mt-auto"
                        />

                        <button className="bg-amarillo-Main p-5 text-azul-Main rounded-lg font-bold text-sm max-h-[100px] hover:brightness-110 hover:cursor-pointer">
                           <Image
                              src="/icons/whatsappLogo.png"
                              alt="Whatsapp"
                              width={31}
                              height={36}
                              className="inline pe-2 align-middle mb-1"
                           />
                           Contactar a un Asesor
                        </button>
                     </div>
                     <div className="flex flex-col gap-6">
                        <Image
                           src="/clientes2.png"
                           alt="Clientes"
                           width={315}
                           height={409}
                        />
                        <Image
                           src="/clientes3.png"
                           alt="Clientes"
                           width={315}
                           height={177}
                           className="mb-5"
                        />
                     </div>
                  </div>
               </div>
               <div>
                  <EmpresaForm />
               </div>
            </div>
            {/********************* Conoce los beneficios ****************/}
            <div className="w-[75%] mx-auto flex flex-col items-center mt-[10rem]">
               <h2 className="text-azul-Main font-bold text-3xl text-center">
                  Conocé los beneficios de publicar en Hunty.uy
               </h2>
               <div className="flex justify-between gap-5 mt-15">
                  <div className="flex-1 rounded-lg bg-amarillo-Main p-5">
                     <h2 className="text-azul-Main text-md font-bold">
                        Público objetivo
                     </h2>
                     <p className="text-black text-sm">
                        Hunty identifica audiencias y relaciona búsquedas con
                        anuncios relevantes para personas o negocios que
                        realmente están interesados en conseguir un servicio o
                        producto.
                     </p>
                  </div>
                  <div className="flex-1 rounded-lg bg-amarillo-Main p-5">
                     <h2 className="text-azul-Main text-md font-bold">
                        Precios accesibles
                     </h2>
                     <p className="text-black text-sm">
                        Hunty ofrece soluciones a precios accesibles a cualquier
                        tipo de negocio, ya sean profesionales, pequeñas,
                        medianas o grandes empresas.
                     </p>
                  </div>
                  <div className="flex-1 rounded-lg bg-amarillo-Main p-5">
                     <h2 className="text-azul-Main text-md font-bold">
                        Reportes y estadísticas
                     </h2>
                     <p className="text-black text-sm">
                        Hunty cuenta con reportes que facilitan la toma de
                        decisiones relevantes para el negocio sacando provecho a
                        la inversión en base a resultados.
                     </p>
                  </div>
                  <div className="flex-1 rounded-lg bg-amarillo-Main p-5">
                     <h2 className="text-azul-Main text-md font-bold">
                        Adaptabilidad
                     </h2>
                     <p className="text-black text-sm">
                        Hunty trabaja con el soporte digital orientado a
                        dispositivos móviles, ordenadores de escritorio y
                        tablets, lo que le permite llegar con un anuncio único a
                        una gran audiencia multidispositivo.
                     </p>
                  </div>
               </div>
               <button className="bg-azul-Main rounded-full text-white w-75 p-2 mt-12">
                  QUIERO ANUNCIAR
               </button>
            </div>
            {/********************* Pasos ****************/}
            <div className="w-[75%] mx-auto mt-25 pb-40">
               <h2 className="text-3xl font-bold text-azul-Main text-center">
                  Empezá a publicar con nosotros en 3 simples pasos
               </h2>
               <div className="flex flex-col mt-10 ml-[15rem]">
                  <div className="flex mb-8">
                     <div className="w-13 aspect-square text-2xl bg-amarillo-Main text-azul-Main flex justify-center items-center rounded-full font-semibold me-5 -mt-2 mb-2">
                        1
                     </div>
                     <div>
                        <h2 className="text-azul-Main font-bold text-xl">
                           Envianos tus datos
                        </h2>
                        <p className="text-black text-sm">
                           Dejá los datos de tu empresa o negocio en el
                           formulario de contacto.
                        </p>
                     </div>
                  </div>
                  <div className="flex mb-8">
                     <div className="w-13 aspect-square text-2xl bg-amarillo-Main text-azul-Main flex justify-center items-center rounded-full font-semibold me-5 -mt-2 mb-2">
                        2
                     </div>
                     <div>
                        <h2 className="text-azul-Main font-bold text-xl">
                           Hablá con un asesor
                        </h2>
                        <p className="text-black text-sm">
                           Recibí el contacto por WhatsApp de un asesor digital
                           para preparar tu anuncio.
                        </p>
                     </div>
                  </div>
                  <div className="flex mb-8">
                     <div className="w-13 aspect-square text-2xl bg-amarillo-Main text-azul-Main flex justify-center items-center rounded-full font-semibold me-5 -mt-2 mb-2">
                        3
                     </div>
                     <div>
                        <h2 className="text-azul-Main font-bold text-xl">
                           Tené tu anuncio
                        </h2>
                        <p className="text-black text-sm">
                           En unos pocos días, tu negocio estará publicado
                           en Hunty.uy.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Empresa;
