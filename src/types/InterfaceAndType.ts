// Interfaces

export interface IWorkout {
    // id: number;
    name: string;
    time: string;
    // weekDay: string[];
  }

  export interface IUser {
    role: UserRole;
    username: string;
    password:string;
  }

  export interface UserWorkouts {
    username: string;
    workoutList: [];
  }

  // Type
 export type UserRole = "USER" | "ADMIN";






    
