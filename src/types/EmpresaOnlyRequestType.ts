import { PerfilEspecial } from '@/enums/PerfilEspecial';

type empresaOnlyRequestType = {
   nombreFantasia: string;
   plan: number;
   perfilEspecial?: PerfilEspecial;
   slugUrl: string;
   apellido?: string;
   cedula?: string;
   razonSocial?: string;
   rut?: string;
};

export default empresaOnlyRequestType;
