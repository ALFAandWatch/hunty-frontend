import { PerfilEspecial } from '@/enums/PerfilEspecial';
import { IUsuario } from './IUsuario';

export interface HorarioDia {
   manana: { inicio: string; fin: string };
   tarde: { inicio: string; fin: string };
}

export interface Horarios {
   [dia: string]: HorarioDia;
}

export interface IEmpresa {
   id: number;
   //SECCION PERFIL ===================
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
   //SECCION INFORMACION ===================
   subCategoria?: string;
   subcategoriaOpcion?: string[];

   departamento?: string;
   ciudad?: string;
   direccion?: string;

   descripcion?: string;
   telefono?: string;
   whatsapp?: string;
   web?: string;

   horarioAtencion?: Horarios;

   mediosPago?: string;

   linkInstagram?: string;
   linkFacebook?: string;
   linkTiktok?: string;
   linkYoutube?: string;
   linkX?: string;

   imagenUrl?: string;

   abiertoAhora?: boolean;
   puntuacion?: number;
   //SECCION IMAGENES ===================
   logo?: string;
   banner?: string;
   album?: string[];
}
