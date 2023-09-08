export type UserRole = "USER" | "ADMIN";

export interface IUser {
  role: UserRole;
  username: string;
}


export interface ILogin {
  userName: string;
  password: string;
}