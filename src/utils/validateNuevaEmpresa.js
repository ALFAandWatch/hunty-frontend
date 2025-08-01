import { PerfilEspecial } from '@/enums/PerfilEspecial';

function validateNuevaEmpresa(datos) {
   const errores = {};

   if (!datos.nombreFantasia || datos.nombreFantasia.trim() === '') {
      errores.nombreFantasia = 'Este campo es obligatorio';
   }

   if (!datos.plan) {
      errores.plan = 'Selecciona un plan';
   }

   if (datos.plan === 'personalizado') {
      const valor = parseFloat(datos.planCustomValue);
      if (isNaN(valor) || valor <= 0) {
         errores.planCustomValue = 'Valor personalizado inválido';
      }
   }

   if (
      datos.perfilEspecial &&
      !Object.values(PerfilEspecial).includes(datos.perfilEspecial)
   ) {
      errores.perfilEspecial = 'Selecciona un perfil válido';
   }

   if (!datos.slugUrl || datos.slugUrl.trim() === '') {
      errores.slugUrl = 'Este campo es obligatorio';
   } else if (!/^[a-zA-Z0-9-]+$/.test(datos.slugUrl)) {
      errores.slugUrl = 'Solo se permiten letras, números y guiones';
   }

   return errores;
}

export default validateNuevaEmpresa;
