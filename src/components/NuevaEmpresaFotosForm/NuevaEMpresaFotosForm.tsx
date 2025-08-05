'use client';
import { IEmpresa } from '@/interfaces/IEmpresa';
import { empresaDefault } from '@/utils/EmpresaDefault';
import { Field, FieldProps, Form, Formik } from 'formik';
import Image from 'next/image';

type FormValues = {
   logo: string | File | null;
   banner: string | File | null;
   album: (string | File)[];
};

type Props = {
   empresaParaEditar: IEmpresa | null;
};

const NuevaEmpresaFotosForm = ({ empresaParaEditar }: Props) => {
   const empresaToFormValues = (empresa: Partial<IEmpresa>): FormValues => ({
      logo: empresa.logo ?? null,
      banner: empresa.banner ?? null,
      album: empresa.album ?? [],
   });

   if (!empresaParaEditar) return null;

   const { nombreFantasia } = empresaParaEditar;

   const handleSubmit = () => {
      console.log('Formulario enviado');
   };
   return (
      <div className="font-(family-name:--font-poppins) mt-8 p-6 px-10">
         <h2 className="text-md 2xl:text-2xl font-semibold">
            {nombreFantasia}
         </h2>
         <Formik
            initialValues={empresaToFormValues(
               empresaParaEditar ?? empresaDefault
            )}
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue }) => (
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
                                          event.currentTarget.value = '';
                                       }
                                    }}
                                 />
                              </>
                           )}
                        </Field>
                     </label>
                     <div className="flex gap-4">
                        <div className="w-35 aspect-square relative">
                           <Image
                              src={
                                 values.logo instanceof File
                                    ? URL.createObjectURL(values.logo)
                                    : '/empresa-placeholder.png'
                              }
                              alt="Logo"
                              fill
                              sizes="10vw"
                              className={`border-3 rounded-lg border-blue-500 object-cover ${
                                 !values.logo ? 'hidden' : ''
                              }`}
                           />
                        </div>
                        <button
                           type="button"
                           className="w-8 aspect-square relative hover:cursor-pointer"
                           onClick={() => setFieldValue('logo', null)}
                        >
                           <Image
                              src="/icons/delete_red.svg"
                              alt="Borrar"
                              fill
                              sizes="10vw"
                              className={`${!values.logo ? 'hidden' : ''}`}
                           />
                        </button>
                     </div>
                  </div>
                  {/************************* BANNER ***************************/}
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="banner"
                        className="text-sm 2xl:text-xl flex flex-col"
                     >
                        Imagen Banner 1920x300px
                        <Field name="banner">
                           {({ form }: FieldProps) => (
                              <>
                                 <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded w-70"
                                    onClick={() => {
                                       const input =
                                          document.getElementById('banner');
                                       if (input) {
                                          input.click();
                                       }
                                    }}
                                 >
                                    Subir archivo
                                 </button>
                                 <input
                                    type="file"
                                    id="banner"
                                    name="banner"
                                    className="hidden"
                                    onChange={(
                                       event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                       const file =
                                          event.currentTarget.files?.[0];
                                       if (file) {
                                          form.setFieldValue('banner', file);
                                          event.currentTarget.value = '';
                                       }
                                    }}
                                 />
                              </>
                           )}
                        </Field>
                     </label>
                     <div className="flex gap-4">
                        <div className="w-160 h-41 relative">
                           <Image
                              src={
                                 values.banner instanceof File
                                    ? URL.createObjectURL(values.banner)
                                    : '/empresa-placeholder.png'
                              }
                              alt="Imagen Banner"
                              fill
                              sizes="10vw"
                              className={`rounded-lg object-cover ${
                                 !values.banner ? 'hidden' : ''
                              }`}
                           />
                        </div>
                        <button
                           type="button"
                           className="w-8 aspect-square relative hover:cursor-pointer"
                           onClick={() => setFieldValue('banner', null)}
                        >
                           <Image
                              src="/icons/delete_red.svg"
                              alt="Borrar"
                              fill
                              sizes="10vw"
                              className={`${!values.banner ? 'hidden' : ''}`}
                           />
                        </button>
                     </div>
                  </div>
                  {/************************* ALBUM DE FOTOS ***************************/}
                  <div>
                     <label htmlFor="album">Álbum de Fotos</label>
                     <div className="w-full bg-white flex flex-col items-center p-8 gap-4">
                        <h2 className="font-bold">Cargar Fotos al Álbum</h2>
                        <Field>
                           {({ form }: FieldProps) => (
                              <>
                                 <button className="flex flex-col items-center hover:cursor-pointer">
                                    <h2>
                                       Toca para cargar imágenes desde la
                                       galeria
                                    </h2>
                                    <div className="w-20 aspect-square relative">
                                       <Image
                                          src="/icons/cloud-upload.svg"
                                          alt="Subir Imagenes"
                                          fill
                                          sizes="10vw"
                                       />
                                    </div>
                                 </button>
                                 <input
                                    type="file"
                                    id="album"
                                    name="album"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={(
                                       event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                       const files = event.currentTarget.files;
                                       if (files && files.length > 0) {
                                          const fileArray = Array.from(files);
                                          form.setFieldValue(
                                             'album',
                                             fileArray
                                          );
                                          event.currentTarget.value = '';
                                       }
                                    }}
                                 />
                              </>
                           )}
                        </Field>
                        {values.album && values.album.length > 0 && (
                           <div className="grid grid-cols-4 gap-2 mt-4">
                              {values.album.map((item, index) => {
                                 const url =
                                    typeof item === 'string'
                                       ? item // ya es una URL
                                       : URL.createObjectURL(item); // es un File
                                 return (
                                    <div className="grow-1 basis-0 relative">
                                       <Image
                                          key={index}
                                          src={url}
                                          alt={`Imagen ${index + 1}`}
                                          width={100}
                                          height={100}
                                          className="rounded"
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                        )}
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default NuevaEmpresaFotosForm;
