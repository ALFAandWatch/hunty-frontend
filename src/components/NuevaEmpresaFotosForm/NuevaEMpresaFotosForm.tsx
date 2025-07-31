'use client';
import { Field, FieldProps, Form, Formik } from 'formik';
import Image from 'next/image';

const NuevaEmpresaFotosForm = () => {
   const handleSubmit = () => {
      console.log('Formulario enviado');
   };
   return (
      <div className="font-(family-name:--font-poppins) mt-8 p-6 px-10">
         <h2 className="text-md 2xl:text-2xl font-semibold">La Pasiva</h2>
         <Formik initialValues={{ logo: '' }} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
               <Form className="flex flex-col gap-8">
                  {/************************* LOGO ***************************/}
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="logo"
                        className="text-sm 2xl:text-xl flex flex-col"
                     >
                        Logos 500x500px
                        <Field name="logo">
                           {({ form }: FieldProps) => (
                              <>
                                 <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded w-70"
                                    onClick={() => {
                                       const input =
                                          document.getElementById('logo');
                                       if (input) {
                                          input.click();
                                       }
                                    }}
                                 >
                                    Subir archivo
                                 </button>
                                 <input
                                    type="file"
                                    id="logo"
                                    name="logo"
                                    className="hidden"
                                    onChange={(
                                       event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                       const file =
                                          event.currentTarget.files?.[0];
                                       if (file) {
                                          form.setFieldValue('logo', file);
                                       }
                                    }}
                                 />
                              </>
                           )}
                        </Field>
                     </label>
                     <Image src={}/>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default NuevaEmpresaFotosForm;
