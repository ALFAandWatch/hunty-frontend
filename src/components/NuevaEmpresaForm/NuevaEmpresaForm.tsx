'use client';

import { useRouter } from 'next/navigation';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { useState } from 'react';
import validateNuevaEmpresa from '../../utils/validateNuevaEmpresa';
import Swal from 'sweetalert2';
import registerEmpresaOnlyService from '@/services/registerEmpresaOnlyService';
import empresaOnlyRequestType from '@/types/EmpresaOnlyRequestType';
import { IEmpresa } from '@/interfaces/IEmpresa';

type Props = {
   empresaParaEditar: IEmpresa | null;
};

const NuevaEmpresaForm = ({ empresaParaEditar }: Props) => {
   const [tipoDePlan, setTipoDePlan] = useState('GRATIS');
   const modoEdicion = empresaParaEditar !== null;

   const formValues = modoEdicion
      ? {
           planCustomValue: '',
           nombre: '',
           email: '',
           password: '',
           ...(empresaParaEditar || {}),
        }
      : {
           nombreFantasia: '',
           plan: '0',
           planCustomValue: '',
           perfilEspecial: '',
           slugUrl: '',
           apellido: '',
           cedula: '',
           razonSocial: '',
           rut: '',
           // ...
           nombre: '',
           email: '',
           password: '',
        };

   const router = useRouter();

   const handleSubmit = (
      values: any,
      { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
   ) => {
      try {
         const { nombre, email, password } = values;

         if (nombre && email && password) {
            Swal.fire({
               title: '¿Crear empresa?',
               text: 'Se va a crear una empresa en la base de datos con su correspondiente ususario!',
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Crear empresa con ususario',
            }).then((result) => {
               if (result.isConfirmed) {
                  // await registerEmpresaWithUsuarioService(values);
               }
            });
         } else {
            Swal.fire({
               title: '¿Crear empresa?',
               text: 'Se va a crear una empresa únicamente, sin ususario asociado.',
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Crear solo empresa',
            }).then((result) => {
               if (result.isConfirmed) {
                  const precioFinal =
                     values.plan === 'PERSONALIZADO'
                        ? Number(values.planCustomValue)
                        : Number(values.plan);

                  const payload = {
                     ...values,
                     plan: precioFinal,
                  };

                  const sendEmpresaOnlyRequest = async (
                     payload: empresaOnlyRequestType
                  ) => {
                     try {
                        await registerEmpresaOnlyService(payload);
                        Swal.fire({
                           title: 'Empresa creada exitosamente.',
                           icon: 'success',
                        }).then((result) => {
                           if (result.isConfirmed) {
                              router.push('/admin/empresas');
                           }
                        });
                     } catch (error) {
                        console.log(error);
                     }
                  };
                  sendEmpresaOnlyRequest(payload);
               }
            });
         }
      } catch (error) {
         console.error('Error al registrar:', error);
      } finally {
         setSubmitting(false);
      }

      console.log(values);
   };

   return (
      <div className="font-(family-name:--font-poppins) mt-8 p-6 px-10">
         <Formik
            initialValues={formValues}
            enableReinitialize
            onSubmit={handleSubmit}
            validate={validateNuevaEmpresa}
         >
            {({ values, setFieldValue, setSubmitting }) => (
               <Form className="flex flex-col gap-8">
                  <h2 className="text-md 2xl:text-2xl font-semibold">
                     Nueva Empresa
                  </h2>

                  {/********************** NOMBRE FANTASIA ****************************/}
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="nombreFantasia"
                        className="text-sm 2xl:text-xl"
                     >
                        Nombre Fantasía de la Empresa
                     </label>
                     <Field
                        type="text"
                        name="nombreFantasia"
                        id="nombreFantasia"
                        placeholder="Nombre Fantasía de la Empresa"
                        className="commonField"
                     />
                     <ErrorMessage
                        name="nombreFantasia"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>

                  {/********************** TIPO DE PLAN ****************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="tipoPlan" className="text-sm 2xl:text-lg">
                        Asignar Plan
                     </label>

                     <Field name="plan">
                        {({ field, form }: FieldProps) => {
                           const planes = [
                              { label: 'Gratis', tipo: 'GRATIS', value: '0' },
                              {
                                 label: 'Premium Gratis',
                                 tipo: 'PREMIUM GRATIS',
                                 value: '0',
                              },
                              {
                                 label: 'Premium',
                                 tipo: 'PREMIUM',
                                 value: '900',
                              },
                              { label: 'Flow', tipo: 'FLOW', value: '12500' },
                              { label: 'Web', tipo: 'WEB', value: '2500' },
                              {
                                 label: 'Ecommerce',
                                 tipo: 'ECOMMERCE',
                                 value: '4200',
                              },
                              { label: 'Redes', tipo: 'REDES', value: '7000' },
                              {
                                 label: 'Google',
                                 tipo: 'GOOGLE',
                                 value: '4500',
                              },
                              {
                                 label: 'Personalizado',
                                 tipo: 'PERSONALIZADO',
                                 value: 'personalizado',
                              },
                           ];

                           return (
                              <div className="grid grid-cols-4 gap-4 me-50">
                                 {planes.map((plan, index) => (
                                    <div
                                       key={index}
                                       className={`flex items-center gap-2 bg-white p-2 shadow-md justify-between`}
                                    >
                                       <label className="text-xs 2xl:text-lg text-black">
                                          {plan.label}
                                       </label>
                                       <div className="bg-gray-300 p-1 rounded-full">
                                          <button
                                             type="button"
                                             role="switch"
                                             aria-checked={
                                                field.value === plan.value
                                             }
                                             onClick={() => {
                                                form.setFieldValue(
                                                   'plan',
                                                   plan.value
                                                );
                                                setTipoDePlan(plan.tipo);
                                                if (
                                                   plan.tipo !== 'PERSONALIZADO'
                                                ) {
                                                   form.setFieldValue(
                                                      'planCustomValue',
                                                      ''
                                                   );
                                                }
                                             }}
                                             className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
                                                tipoDePlan === plan.tipo
                                                   ? 'bg-violeta'
                                                   : 'bg-gray-500'
                                             }`}
                                          >
                                             <div
                                                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                                   tipoDePlan === plan.tipo
                                                      ? 'translate-x-6'
                                                      : ''
                                                }`}
                                             />
                                          </button>
                                       </div>
                                    </div>
                                 ))}

                                 <Field
                                    type="number"
                                    name="planCustomValue"
                                    placeholder="Escribe el valor personalizado"
                                    className={`commonField col-span-2 ${
                                       tipoDePlan === 'PERSONALIZADO'
                                          ? 'opacity-100 shadow-md'
                                          : 'opacity-40'
                                    }`}
                                    onChange={(
                                       e: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                       setFieldValue(
                                          'planCustomValue',
                                          Number(e.target.value)
                                       )
                                    }
                                    disabled={tipoDePlan !== 'PERSONALIZADO'}
                                 />
                              </div>
                           );
                        }}
                     </Field>
                     <ErrorMessage
                        name="plan"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>

                  {/********************** PERFIL ESPECIAL ACTIVO ****************************/}
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="perfilEspecial"
                        className="text-sm 2xl:text-md"
                     >
                        A Especial
                     </label>
                     <Field name="perfilEspecial">
                        {({ field, form }: FieldProps) => {
                           const perfiles = [
                              { label: 'Productos', value: 'productos' },
                              { label: 'Propiedades', value: 'propiedades' },
                              { label: 'Viajes', value: 'viajes' },
                              { label: 'Menú', value: 'menu' },
                           ];

                           return (
                              <div className="grid grid-cols-4 gap-4 me-50">
                                 {perfiles.map((perfil, index) => (
                                    <div
                                       key={index}
                                       className={`flex items-center gap-2 bg-white p-2 shadow-md justify-between`}
                                    >
                                       <label className="text-xs 2xl:text-lg text-black">
                                          {perfil.label}
                                       </label>
                                       <div className="bg-gray-300 p-1 rounded-full">
                                          <button
                                             type="button"
                                             role="switch"
                                             aria-checked={
                                                field.value === perfil.value
                                             }
                                             onClick={() => {
                                                form.setFieldValue(
                                                   'perfilEspecial',
                                                   field.value === perfil.value
                                                      ? ''
                                                      : perfil.value
                                                );
                                             }}
                                             className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
                                                field.value === perfil.value
                                                   ? 'bg-violeta'
                                                   : 'bg-gray-500'
                                             }`}
                                          >
                                             <div
                                                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                                   field.value === perfil.value
                                                      ? 'translate-x-6'
                                                      : ''
                                                }`}
                                             />
                                          </button>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           );
                        }}
                     </Field>
                     <ErrorMessage
                        name="perfilEspecial"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>
                  {/********************** SLUGURL ****************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="slugUrl">
                        Slug URL - sin espacios ni caracteres especiales
                     </label>

                     <Field
                        type="text"
                        name="slugUrl"
                        id="slugUrl"
                        className="commonField"
                     />
                     <ErrorMessage
                        name="slugUrl"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>

                  <div className="flex flex-col gap-4">
                     <label htmlFor="cedula">Cédula</label>

                     <Field
                        type="text"
                        name="cedula"
                        id="cedula"
                        placeholder="Cédula"
                        className="commonField"
                     />
                     <ErrorMessage
                        name="cedula"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>
                  <div className="flex flex-col gap-4">
                     <label htmlFor="razonSocial">Razón Social</label>

                     <Field
                        type="text"
                        name="razonSocial"
                        id="razonSocial"
                        placeholder="Razón Social"
                        className="commonField"
                     />
                     <ErrorMessage
                        name="razonSocial"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>
                  <div className="flex flex-col gap-4">
                     <label htmlFor="rut">RUT</label>

                     <Field
                        type="text"
                        name="rut"
                        id="rut"
                        placeholder="RUT"
                        className="commonField"
                     />
                     <ErrorMessage
                        name="rut"
                        component="div"
                        className="text-red-500 text-xs 2xl:text-md"
                     />
                  </div>
                  {/********************** SECCION USUARIO ****************************/}
                  <div className="p-4 rounded-sm border border-verde bg-verde/10 flex flex-col gap-4">
                     <p className="text-white text-sm italic bg-verde p-2 rounded-md">
                        En caso de querer crear un ususario relacionado a la
                        empresa agrega los datos aquí. Si dejas estos campos
                        vacíos se creará una emrpesa sin usuario asociado.
                     </p>
                     <div className="flex flex-col gap-4">
                        <label htmlFor="nombre">Nombre</label>
                        <Field
                           type="text"
                           name="nombre"
                           id="nombre"
                           placeholder="Nombre"
                           className="commonField"
                        />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label htmlFor="apellido">Apellido</label>

                        <Field
                           type="text"
                           name="apellido"
                           id="apellido"
                           placeholder="Apellido"
                           className="commonField"
                        />
                        <ErrorMessage
                           name="apellido"
                           component="div"
                           className="text-red-500 text-xs 2xl:text-md"
                        />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label htmlFor="email">Email</label>
                        <Field
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Email"
                           className="commonField"
                        />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label htmlFor="password">Contraseña</label>
                        <Field
                           type="text"
                           name="password"
                           id="password"
                           placeholder="Contraseña"
                           className="commonField"
                        />
                     </div>
                  </div>
                  {/********************** BOTOTNES SUBMIT Y CANCELAR ****************************/}
                  <div className="flex flex-col gap-6 w-70 my-4">
                     <button
                        type="submit"
                        className="bg-submit text-white text-sm 2xl:text-lg p-2 rounded-full hover:cursor-pointer hover:brightness-115"
                     >
                        GUARDAR
                     </button>
                     <button
                        type="button"
                        className="bg-cancel text-white text-sm 2xl:text-lg p-2 rounded-full hover:cursor-pointer hover:brightness-115"
                     >
                        CANCELAR
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default NuevaEmpresaForm;
