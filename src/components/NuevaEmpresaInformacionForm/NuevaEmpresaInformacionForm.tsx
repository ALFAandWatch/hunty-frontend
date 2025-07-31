import { IEmpresa } from '@/interfaces/IEmpresa';
import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik';
import { useState } from 'react';

type FranjaHoraria = {
   inicio: string | null;
   fin: string | null;
};

type Horarios = {
   [key: string]: {
      manana: FranjaHoraria;
      tarde: FranjaHoraria;
   };
};

type Props = {
   empresaParaEditar: IEmpresa | null;
};

const NuevaEmpresaInformacionForm = ({ empresaParaEditar }: Props) => {
   const [mostrarModal, setMostrarModal] = useState(false);

   const dias = [
      { nombre: 'lunes', slug: 'lunes' },
      { nombre: 'martes', slug: 'martes' },
      { nombre: 'miércoles', slug: 'miercoles' },
      { nombre: 'jueves', slug: 'jueves' },
      { nombre: 'viernes', slug: 'viernes' },
      { nombre: 'sábado', slug: 'sabado' },
      { nombre: 'domingo', slug: 'domingo' },
   ];

   const handleSubmit = () => {};

   const handleClick = () => {
      setMostrarModal(true);
   };

   const handleAceptarModal = () => {
      setMostrarModal(false);
   };

   return (
      <div className="font-(family-name:--font-poppins) mt-8 p-6 px-10">
         <Formik
            initialValues={{
               subCategoria: '',
               subcategoiraOpcion: [],
               departamento: '',
               ciudad: '',
               direccion: '',
               descripcion: '',
               telefono: '',
               whatsapp: '',
               web: '',
               horarioAtencion: dias.reduce((acc, dia) => {
                  acc[dia.slug] = {
                     manana: { inicio: '', fin: '' },
                     tarde: { inicio: '', fin: '' },
                  };
                  return acc;
               }, {} as Horarios),
               mediosPago: '',
               linkInstagram: '',
               linkFacebook: '',
               linkTiktok: '',
               linkYoutube: '',
               linkX: '',
            }}
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue }) => (
               <Form className="flex flex-col gap-8 relative">
                  <h2 className="text-md 2xl:text-2xl font-semibold">
                     La Pasiva
                  </h2>
                  {/********************* SUB CATEGORIA *************************/}
                  <div className="flex flex-col gap-4 w-[50%]">
                     <label
                        htmlFor="subCategoria"
                        className="text-sm 2xl:text-xl"
                     >
                        Subcategoría
                     </label>
                     <Field
                        className="commonField"
                        name="subCategoria"
                        id="subCategoria"
                     />
                  </div>
                  {/********************* CHECKBOXES SUBCATEGORIAOPCION *************************/}
                  <div
                     role="group"
                     aria-labelledby="checkbox-group"
                     className="flex gap-4"
                  >
                     <label>
                        <Field
                           type="checkbox"
                           name="subcategoiraOpcion"
                           value="restaurantes"
                           className="me-2"
                        />
                        Restaurantes
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="subcategoiraOpcion"
                           value="pizzeria"
                           className="me-2"
                        />
                        Pizzeria
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="subcategoiraOpcion"
                           value="cafeteria"
                           className="me-2"
                        />
                        Cafeteria
                     </label>
                  </div>
                  {/********************* DEPARTAMENTO Y CIUDAD *************************/}
                  <div className="flex gap-8">
                     <div className="flex flex-col gap-4 grow-1">
                        <label
                           htmlFor="departamento"
                           className="text-sm 2xl:text-xl"
                        >
                           Departamento
                        </label>
                        <Field
                           className="commonField"
                           name="departamento"
                           id="departamento"
                        />
                     </div>
                     <div className="flex flex-col gap-4 grow-1">
                        <label htmlFor="ciudad" className="text-sm 2xl:text-xl">
                           Ciudad, Barrio, Localidad
                        </label>
                        <Field
                           className="commonField"
                           name="ciudad"
                           id="ciudad"
                        />
                     </div>
                  </div>
                  {/********************* DIRECCION *************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="direccion" className="text-sm 2xl:text-xl">
                        Dirección
                     </label>
                     <Field
                        className="commonField"
                        name="direccion"
                        id="direccion"
                     />
                  </div>
                  {/********************* DESCRIPCION *************************/}
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="descripcion"
                        className="text-sm 2xl:text-xl"
                     >
                        Descripción
                     </label>
                     <Field
                        as="textarea"
                        rows="4"
                        className="commonField"
                        name="descripcion"
                        id="descripcion"
                     />
                  </div>
                  {/********************* TELEFONO Y WHATSAPP *************************/}
                  <div className="flex gap-8">
                     <div className="flex flex-col gap-4 grow-1">
                        <label
                           htmlFor="telefono"
                           className="text-sm 2xl:text-xl"
                        >
                           Teléfono
                        </label>
                        <Field
                           className="commonField"
                           name="telefono"
                           id="telefono"
                        />
                     </div>
                     <div className="flex flex-col gap-4 grow-1">
                        <label
                           htmlFor="whatsapp"
                           className="text-sm 2xl:text-xl"
                        >
                           Whatsapp
                        </label>
                        <Field
                           className="commonField"
                           name="whatsapp"
                           id="whatsapp"
                        />
                     </div>
                  </div>
                  {/********************* TELEFONO Y WHATSAPP *************************/}
                  <div className="flex flex-col gap-4">
                     <label htmlFor="web" className="text-sm 2xl:text-xl">
                        Web
                     </label>
                     <Field
                        as="textarea"
                        rows="4"
                        className="commonField"
                        name="web"
                        id="web"
                     />
                  </div>
                  {/********************* HORARIOS DE ATENCION *************************/}
                  <div className="flex gap-4 me-20">
                     {dias.map((dia, i) => (
                        <button
                           key={i}
                           onClick={handleClick}
                           className="grow-1 basis-0 hover:cursor-pointer"
                        >
                           <div className="bg-white shadow-md rounded-md aspect-square  p-2 flex flex-col justify-around">
                              <h2 className="font-(family-name:--font-open-sans) text-center text-sm">
                                 {dia.nombre.toUpperCase()}
                              </h2>
                              <div className="flex flex-col">
                                 <p>
                                    {
                                       values.horarioAtencion[dia.slug]?.manana
                                          .inicio
                                    }
                                    -
                                    {
                                       values.horarioAtencion[dia.slug]?.manana
                                          .fin
                                    }
                                 </p>
                                 <p>
                                    {
                                       values.horarioAtencion[dia.slug]?.tarde
                                          .inicio
                                    }
                                    -
                                    {
                                       values.horarioAtencion[dia.slug]?.tarde
                                          .fin
                                    }
                                 </p>
                              </div>
                           </div>
                        </button>
                     ))}
                  </div>
                  {/********************* MODAL DE HORARIOS *************************/}
                  {mostrarModal && (
                     <div className="flex items-center justify-center z-50 fixed inset-0 bg-black/50 shadow-md rounded-md">
                        <div className="flex flex-col gap-4 bg-white p-6">
                           <div className=" rounded-md shadow-md w-[850px] flex gap-4 overflow-x-scroll">
                              {dias.map((dia, i) => (
                                 <div
                                    className="p-2 grow basis-0 shadow-md rounded-md"
                                    key={i}
                                 >
                                    <div className="border p-4 rounded-lg shadow-sm">
                                       <h3 className="font-semibold text-lg mb-2">
                                          {dia.nombre.toUpperCase()}
                                       </h3>

                                       <div className="mb-4">
                                          <p className="text-sm font-medium mb-1">
                                             Mañana:
                                          </p>
                                          <div className="flex items-center gap-2">
                                             <Field
                                                type="time"
                                                name={`horarioAtencion.${dia.slug}.manana.inicio`}
                                                className="border rounded px-2 py-1 w-[120px]"
                                             />
                                             <span className="text-gray-500">
                                                —
                                             </span>
                                             <Field
                                                type="time"
                                                name={`horarioAtencion.${dia.slug}.manana.fin`}
                                                className="border rounded px-2 py-1 w-[120px]"
                                             />
                                          </div>
                                       </div>

                                       <div>
                                          <p className="text-sm font-medium mb-1">
                                             Tarde:
                                          </p>
                                          <div className="flex items-center gap-2">
                                             <Field
                                                type="time"
                                                name={`horarioAtencion.${dia.slug}.tarde.inicio`}
                                                className="border rounded px-2 py-1 w-[120px]"
                                             />
                                             <span className="text-gray-500">
                                                —
                                             </span>
                                             <Field
                                                type="time"
                                                name={`horarioAtencion.${dia.slug}.tarde.fin`}
                                                className="border rounded px-2 py-1 w-[120px]"
                                             />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                           <div className="flex gap-4 justify-center">
                              <button
                                 className="p-3 bg-verde text-white rounded-sm shadow-md hover:cursor-pointer hover:brightness-115"
                                 onClick={() => handleAceptarModal()}
                              >
                                 Aceptar
                              </button>
                           </div>
                        </div>
                     </div>
                  )}
                  {/********************* MEDIOSPAGO *************************/}
                  <div id="checkbox-group">Seleccionar Medios de Pago</div>
                  <div
                     role="group"
                     aria-labelledby="checkbox-group"
                     className="flex gap-5 flex-wrap me-30"
                  >
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="efectivo"
                           className="me-2"
                        />
                        Efectivo
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="transferenciaBancaria"
                           className="me-2"
                        />
                        Transferencia Bancaria
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="craditoVisa"
                           className="me-2"
                        />
                        Crédito Visa
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="craditoMastercard"
                           className="me-2"
                        />
                        Crédito Mastercard
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="creditoOca"
                           className="me-2"
                        />
                        Crédito OCA
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="debitoVisa"
                           className="me-2"
                        />
                        Débito Visa
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="debitoMastercard"
                           className="me-2"
                        />
                        Débito Mastercard
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="mercadoPago"
                           className="me-2"
                        />
                        Mercado Pago
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="abitab"
                           className="me-2"
                        />
                        Abitab
                     </label>
                     <label>
                        <Field
                           type="checkbox"
                           name="mediosPago"
                           value="redPagos"
                           className="me-2"
                        />
                        Red Pagos
                     </label>
                  </div>
                  {/********************* REDES SOCIALES *************************/}
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="linkInstagram"
                        className="text-sm 2xl:text-xl"
                     >
                        Link a Instagram
                     </label>
                     <Field
                        type="url"
                        className="commonField"
                        name="linkInstagram"
                        id="linkInstagram"
                     />
                  </div>
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="linkFacebook"
                        className="text-sm 2xl:text-xl"
                     >
                        Link a Facebook
                     </label>
                     <Field
                        type="url"
                        className="commonField"
                        name="linkFacebook"
                        id="linkFacebook"
                     />
                  </div>
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="linkTiktok"
                        className="text-sm 2xl:text-xl"
                     >
                        Link a TikTok
                     </label>
                     <Field
                        type="url"
                        className="commonField"
                        name="linkTiktok"
                        id="linkTiktok"
                     />
                  </div>
                  <div className="flex flex-col gap-4">
                     <label
                        htmlFor="linkYoutube"
                        className="text-sm 2xl:text-xl"
                     >
                        Link a Youtube
                     </label>
                     <Field
                        type="url"
                        className="commonField"
                        name="linkYoutube"
                        id="linkYoutube"
                     />
                  </div>
                  <div className="flex flex-col gap-4">
                     <label htmlFor="linkX" className="text-sm 2xl:text-xl">
                        Link a X
                     </label>
                     <Field
                        type="url"
                        className="commonField"
                        name="linkX"
                        id="linkX"
                     />
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

export default NuevaEmpresaInformacionForm;
