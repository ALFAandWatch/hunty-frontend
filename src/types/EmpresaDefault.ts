import { IUsuario } from '@/interfaces/IUsuario';
import { PerfilEspecial } from '../enums/PerfilEspecial';

export type empresaDefault = {
   id: number;
   nombreFantasia: string;
   plan: number;
   planCustomValue?: string;
   perfilEspecial?: PerfilEspecial;
   slugUrl: string;
   apellido: string;
   cedula: string;
   razonSocial: string;
   rut: string;
   usuario?: IUsuario;
   subCategoria?: string;
   subcategoriaOpcion?: string[];
   departamento?: string;
   ciudad?: string;
   direccion?: string;
   descripcion?: string;
   telefono?: string;
   whatsapp?: string;
   web?: string;
   horarioAtencion?: {
      [dia: string]: {
         manana: { inicio: string; fin: string };
         tarde: { inicio: string; fin: string };
      };
   };
   mediosPago?: string;
   linkInstagram?: string;
   linkFacebook?: string;
   linkTiktok?: string;
   linkYoutube?: string;
   linkX?: string;
   abiertoAhora?: boolean;
   puntuacion?: number;
};
