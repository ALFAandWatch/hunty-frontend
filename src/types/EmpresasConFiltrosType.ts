import { IEmpresa } from '@/interfaces/IEmpresa';

export type EmpresasConFiltrosType = {
   total: number;
   page: number;
   limit: number;
   data: IEmpresa[];
};
