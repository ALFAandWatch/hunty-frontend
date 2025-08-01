import { PerfilEspecial } from '@/enums/PerfilEspecial';
import { UserRole } from '@/enums/UserRole';
import { IEmpresa } from '@/interfaces/IEmpresa';

export const empresaDefault: Partial<IEmpresa> = {
   id: 0,
   nombreFantasia: '',
   plan: 0,
   perfilEspecial: PerfilEspecial.PRODUCTOS,
   slugUrl: '',
   apellido: '',
   cedula: '',
   razonSocial: '',
   rut: '',
   usuario: {
      id: '',
      email: '',
      name: '',
      password: '',
      celular: 0,
      role: UserRole.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   subCategoria: '',
   subcategoriaOpcion: [],
   departamento: '',
   ciudad: '',
   direccion: '',
   descripcion: '',
   telefono: '',
   whatsapp: '',
   web: '',
   horarioAtencion: {
      lunes: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
      martes: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
      miercoles: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
      jueves: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
      viernes: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
      sabado: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
      domingo: {
         manana: { inicio: '', fin: '' },
         tarde: { inicio: '', fin: '' },
      },
   },
   mediosPago: '',
   linkInstagram: '',
   linkFacebook: '',
   linkTiktok: '',
   linkYoutube: '',
   linkX: '',
   abiertoAhora: false,
   puntuacion: 0,
};
