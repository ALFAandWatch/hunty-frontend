'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { useState } from 'react';

const NuevaEmpresaForm = () => {
   const [tipoDePlan, setTipoDePlan] = useState('GRATIS');

   const formValues = {
      nombreFantasia: '',
      plan: '',
      planCustomValue: '',
      slugUrl: '',
      usuario: '',
      password: '',
      nombre: '',
      apellido: '',
      cedula: '',
      razonSocial: '',
      rut: '',
   };

   const handleSubmit = (values: any) => {
      const precioFinal =
         values.plan === 'PERSONALIZADO' ? values.planCustomValue : values.plan;

      console.log(values);
   };

   return (
      <div className="font-(family-name:--font-poppins) mt-8 p-6 px-10">
         <Formik initialValues={formValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
               <Form className="flex flex-col gap-8">
                  <h2 className="text-md font-semibold">Nueva Empresa</h2>

                  {/********************** NOMBRE FANTASIA ****************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="nombreFantasia" className="text-sm">
                        Nombre Fantasía de la Empresa
                     </label>
                     <Field
                        type="text"
                        name="nombreFantasia"
                        id="nombreFantasia"
                        placeholder="Nombre Fantasía de la Empresa"
                        className="commonField"
                     />
                  </div>

                  {/********************** TIPO DE PLAN ****************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="tipoPlan" className="text-sm">
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
                                       <label className="text-xs text-black">
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
                                                   ? 'bg-blue-500'
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
                  </div>

                  {/********************** PERFIL ESPECIAL ACTIVO ****************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="perfilEspecial" className="text-sm">
                        A Especial
                     </label>
                     <Field name="plan">
                        {({ field, form }: FieldProps) => {
                           const perfiles = [
                              { label: 'Productos', value: 'PRODUCTOS' },
                              { label: 'Propiedades', value: 'PROPIEDADES' },
                              { label: 'Viajes', value: 'VIAJES' },
                              { label: 'Menú', value: 'MENU' },
                           ];

                           return (
                              <div className="grid grid-cols-4 gap-4 me-50">
                                 {perfiles.map((perfil, index) => (
                                    <div
                                       key={index}
                                       className={`flex items-center gap-2 bg-white p-2 shadow-md justify-between`}
                                    >
                                       <label className="text-xs text-black">
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
                                                   'plan',
                                                   perfil.value
                                                );
                                             }}
                                             className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
                                                field.value === perfil.value
                                                   ? 'bg-blue-500'
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
                  </div>
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
                  </div>
                  <div className="flex flex-col gap-4">
                     <label htmlFor="usuario">Usuario</label>

                     <Field
                        type="text"
                        name="usuario"
                        id="usuario"
                        placeholder="usuario"
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
                  </div>
                  <div className="flex flex-col gap-6 w-70 my-4">
                     <button
                        type="submit"
                        className="bg-submit text-white text-sm p-2 rounded-full hover:cursor-pointer hover:brightness-115"
                     >
                        GUARDAR
                     </button>
                     <button
                        type="button"
                        className="bg-cancel text-white text-sm p-2 rounded-full hover:cursor-pointer hover:brightness-115"
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
