export type UserRole = "USER" | "ADMIN";

export interface User {
  role: UserRole;
  username: string;
}