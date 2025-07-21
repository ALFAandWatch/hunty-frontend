export const validateRegister = (values) => {
   const errors = {};

   // Email
   if (!values.email) {
      errors.email = '* El email es obligatorio.';
   } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
   ) {
      errors.email = 'El email es inválido.';
   } else if (values.email.length < 6) {
      errors.email = '* El email debe tener al menos 6 caracteres.';
   }

   // Nombre
   if (!values.nombre || values.nombre.trim() === '') {
      errors.nombre = '* El nombre es obligatorio.';
   }

   // Celular (mínimo 9 caracteres numéricos)
   if (!values.celular) {
      errors.celular = '* El celular es obligatorio.';
   } else if (!/^\d{9,}$/.test(values.celular.toString().replace(/\D/g, ''))) {
      errors.celular = '* El celular debe tener al menos 9 dígitos.';
   }

   // Contraseña
   if (!values.password) {
      errors.password = '* La contraseña es obligatoria.';
   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(values.password)) {
      errors.password =
         'La contraseña debe contener al menos una mayúscula, una minúscula y un número.';
   } else if (values.password.length < 6) {
      errors.password = '* La contraseña debe tener al menos 6 caracteres.';
   }

   // Confirmar contraseña
   if (!values.passwordConfirm) {
      errors.passwordConfirm = '* Debes confirmar la contraseña.';
   } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = '* Las contraseñas no coinciden.';
   }

   if (!values.acepto) {
      errors.acepto = '* Debes aceptar los Términos y Condiciones.';
   }

   return errors;
};
