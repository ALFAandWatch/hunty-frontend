import { PerfilEspecial } from '@/enums/PerfilEspecial';

export interface IEmpresa {
   id: number;
   nombreFantasia: string;
   plan: number;
   planCustomValue?: string;
   perfilEspecial: PerfilEspecial;
   slugUrl: string;
   apellido: string;
   cedula: string;
   razonSocial: string;
   rut: string;
   //...lo de front casi seguro todo para borrar
   nombre?: string;
   descripcion?: string;
   direccion?: string;
   telefono?: string;
   imagenUrl?: string;
   departamento?: string;
   abiertoAhora?: boolean;
   puntuacion?: number;
   formasDePago?: string[];
   sitioWeb?: string;
   usuario?: {
      id: string;
      email: string;
   };
}
