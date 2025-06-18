export interface IEmpresaPerfil {
   id: number;
   nombre: string;
   descripcion?: string;
   direccion?: string;
   telefono?: string;
   imagenUrl?: string;
   departamento: string;
   esPremium: boolean;
   abiertoAhora: boolean;
   puntuacion: number;
   formasDePago: string[];
   usuario?: {
      id: string;
      email: string;
   };
}
