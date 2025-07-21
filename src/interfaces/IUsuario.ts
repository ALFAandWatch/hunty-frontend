import { UserRole } from '@/enums/UserRole';

export interface IUsuario {
   id: string;
   email: string;
   name: string;
   password: string;
   celular: number;
   role: UserRole;
   createdAt: Date;
   UpdatedAt: Date;
}
