export type UserRole = "USER" | "ADMIN";

export interface IUser {
  role: UserRole;
  username: string;
  password:string;
}

