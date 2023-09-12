export type UserRole = "USER" | "ADMIN";

export interface IUser {
  
  role: string;
  username: string;
  password:string;
  workouts: string[];
}


export interface ILogin {
  userName: string;
  password: string;
}