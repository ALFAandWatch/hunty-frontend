'use client';
import { validateRegister } from '@/utils/validateRegister';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';

const CuentaPersonal = () => {
   const handleSubmit = () => {};

   return (
      <>
         <div className="w-screen bg-azul-Main flex flex-col gap-3 items-center pt-5 font-(family-name:--font-open-sans)">
            <div className="h-13 w-45 relative mt-10">
               <Image src="/logo.png" alt="Hunty.uy" fill sizes="100vw" />
            </div>
            <div className="flex flex-col items-center w-110 h-auto bg-white rounded-sm p-8 px-15 gap-3 mt-5 mb-10">
               <div className="w-30 h-22 relative">
                  <Image
                     src="/crear_cuenta.png"
                     alt="Crear Cuenta"
                     fill
                     sizes="100vw"
                     className="mb-4"
                  />
               </div>
               <h2 className="text-azul-Main text-xl font-semibold">
                  Completa los datos
               </h2>
               <p className="text-gray-500 font-semibold text-md font-(family-name:--font-open-sans)">
                  Solo te tomará unos minutos
               </p>
               <a
                  href=""
                  className="text-gray-500 border border-gray-500 text-sm rounded-lg p-1 px-4"
               >
                  <Image
                     src="/icons/google.png"
                     alt="Google"
                     width={15}
                     height={15}
                     className="inline mb-1 mr-3"
                  />
                  Regístrate con Google
               </a>
               <p className="text-gray-400 text-xs">o regístrate con correo</p>
               <Formik
                  initialValues={{
                     email: '',
                     nombre: '',
                     celular: '',
                     password: '',
                  }}
                  validate={validateRegister}
                  onSubmit={handleSubmit}
               >
                  <Form>
                     <div className="flex flex-col justify-around px-12 font-(family-name:--font-poppins) gap-3">
                        <div className="flex flex-col gap-3">
                           <label
                              htmlFor="email"
                              className="text-black font-bold text-sm"
                           >
                              Email
                           </label>
                           <Field
                              type="email"
                              name="email"
                              id="email"
                              className="bg-gray-100 h-8 text-black p-2 text-sm rounded-lg"
                           />
                           <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-xs"
                           />
                        </div>
                        <div className="flex flex-col gap-3">
                           <label
                              htmlFor="nombre"
                              className="text-black font-bold text-sm"
                           >
                              Nombre
                           </label>
                           <Field
                              type="text"
                              name="nombre"
                              id="nombre"
                              className="bg-gray-100 h-8 text-black p-2 text-sm rounded-lg"
                           />
                           <ErrorMessage
                              name="nombre"
                              component="div"
                              className="text-red-500 text-xs"
                           />
                        </div>
                        <div className="flex flex-col gap-3">
                           <label
                              htmlFor="celular"
                              className="text-black font-bold text-sm"
                           >
                              Celular
                           </label>
                           <Field
                              name="celular"
                              id="celular"
                              type="number"
                              className="bg-gray-100 h-8 text-black p-2 text-sm rounded-lg"
                           />
                           <ErrorMessage
                              name="celular"
                              component="div"
                              className="text-red-500 text-xs"
                           />
                        </div>
                        <div className="flex flex-col gap-3">
                           <label
                              htmlFor="password"
                              className="text-black font-bold text-sm"
                           >
                              Contraseña
                           </label>
                           <Field
                              type="password"
                              name="password"
                              id="password"
                              className="bg-gray-100 h-8 text-black p-2 text-sm rounded-lg"
                           />
                           <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-500 text-xs"
                           />
                        </div>
                        <div className="flex flex-col gap-3">
                           <label
                              htmlFor="passwordConfirm"
                              className="text-black font-bold text-sm"
                           >
                              Confirmar Contraseña
                           </label>
                           <Field
                              type="password"
                              name="passwordConfirm"
                              id="passwordConfirm"
                              className="bg-gray-100 h-8 text-black p-2 text-sm rounded-lg"
                           />
                           <ErrorMessage
                              name="passwordConfirm"
                              component="div"
                              className="text-red-500 text-xs"
                           />
                        </div>
                        <div className="flex flex-col gap-3">
                           <label className="text-black text-xs">
                              <Field type="checkbox" name="toggle" />
                              He leído y acepto los
                              <Link href="/terminos" className="text-azul-Main">
                                 Términos y Condiciones
                              </Link>
                              y las
                              <Link
                                 href="/privacidad"
                                 className="text-azul-Main"
                              >
                                 Políticas de Privacidad
                              </Link>
                           </label>
                           <button className="bg-azul-Main text-white font-bold rounded-full p-2 font-(family-name:--font-open-sans) text-sm hover:cursor-pointer hover:brightness-115">
                              Crear Cuenta Personal
                           </button>
                        </div>
                     </div>
                  </Form>
               </Formik>
            </div>
         </div>
      </>
   );
};

export default CuentaPersonal;
