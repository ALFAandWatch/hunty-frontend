import { UserRole } from '@/enums/UserRole';

export type UserRegisterType = {
   email: string;
   nombre: string;
   password: string;
   passwordConfirm: string;
   celular: string;
   role: UserRole;
};
