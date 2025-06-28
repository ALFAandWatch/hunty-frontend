'use client';

import { Field, Form, Formik } from 'formik';
import Link from 'next/link';

const opcionesDeAyuda = [
   'Publicar en Hunty',
   'Vender Online',
   'Página web',
   'Campañas en Google',
   'Redes Sociales',
   'Tienda Online',
   'Atención al cliente',
];

const EmpresaForm = () => {
   const handleSubmit = () => {
      alert('Formulario enviado');
   };

   return (
      <>
         <div className="w-110 h-fit rounded-lg bg-[#F3F3F3] pt-5 px-3 pb-3 border-4 border-azul-Main">
            <h2 className="text-black text-center font-bold text-md">
               Dejanos tus datos
            </h2>
            <p className="text-gray-400 text-center text-xs mt-2">
               Pronto te contactará uno de nuestros expertos
            </p>
            <Formik
               initialValues={{
                  nombre: '',
                  email: '',
                  celular: '',
                  tipoDeAyuda: '',
                  mensaje: '',
               }}
               onSubmit={handleSubmit}
            >
               {({ values, setFieldValue }) => (
                  <Form className="flex flex-col items-center p-4 px-3">
                     <label
                        htmlFor="nombre"
                        className="text-black w-full text-sm font-bold mt-5"
                     >
                        Nombre y Apellido
                     </label>
                     <Field
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        className="bg-gray-200 h-[40px] text-sm w-full mt-1 placeholder:text-gray-400 p-3 text-black"
                     />

                     <label
                        htmlFor="email"
                        className="text-black w-full text-sm font-bold mt-5"
                     >
                        Correo
                     </label>
                     <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Correo"
                        className="bg-gray-200 h-[40px] w-full mt-1 placeholder:text-gray-400 p-3 text-black"
                     />

                     <label
                        htmlFor="celular"
                        className="text-black w-full text-sm font-bold mt-5"
                     >
                        Celular
                     </label>
                     <Field
                        id="celular"
                        name="celular"
                        placeholder="Celular"
                        className="bg-gray-200 h-[40px] w-full mt-1 placeholder:text-gray-400 p-3 text-black"
                     />

                     <label
                        htmlFor="tipoDeAyuda"
                        className="text-black w-full text-sm font-bold mt-5"
                     >
                        ¿En qué prefieres que ayudemos a tu neogcio?
                     </label>
                     <div className="flex flex-wrap gap-1 mt-2">
                        {opcionesDeAyuda.map((opcion) => (
                           <button
                              key={opcion}
                              type="button"
                              onClick={() =>
                                 setFieldValue('tipoDeAyuda', opcion)
                              }
                              className={`px-4 py-2 rounded-full border text-xs transition-colors
                                 ${
                                    values.tipoDeAyuda === opcion
                                       ? 'bg-azul-Main text-white border-azul-Main'
                                       : 'bg-white text-gray-700 border-gray-300'
                                 }`}
                           >
                              {opcion}
                           </button>
                        ))}
                     </div>

                     <label
                        htmlFor="mensaje"
                        className="text-black w-full font-bold mt-5"
                     >
                        Mensaje
                     </label>
                     <Field
                        id="mensaje"
                        name="mensaje"
                        as="textarea"
                        placeholder="Mensaje"
                        className="bg-gray-200 h-[100px] w-full mt-1 placeholder:text-gray-400 p-3 text-black"
                     />

                     <label className="text-black text-xs mt-3">
                        <Field
                           type="checkbox"
                           name="aceptaTerminos"
                           className="me-2 accent-azul-Main"
                        />
                        He leído y acepto los
                        <Link
                           href="/terminos"
                           className="text-azul-Main hover:underline"
                        >
                           {' '}
                           Términos y Condiciones{' '}
                        </Link>
                        y las
                        <Link
                           href="/privacidad"
                           className="text-azul-Main hover:underline"
                        >
                           {' '}
                           Políticas de Privacidad{' '}
                        </Link>
                     </label>

                     <button
                        type="submit"
                        className="text-white text-sm bg-azul-Main rounded-full w-[70%] py-2 mt-5"
                     >
                        ENVIAR
                     </button>
                  </Form>
               )}
            </Formik>
         </div>
      </>
   );
};

export default EmpresaForm;
