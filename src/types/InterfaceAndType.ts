
// Interfaces
export interface IWorkout {
    id: number;
    name: string;
    time: string;
    weekDay: string[];
  }

  export interface IUser {
    role: UserRole;
    username: string;
    password:string;
  }


//   export interface AdminPageProps {
    
//     products: IWorkout[];
//     setProducts: (newProducts: IWorkout[]) => void;
//   }

//   export interface UserPageProps {
//     products: IWorkout[];
//     setProducts: (newProducts: IWorkout[]) => void;
//   }

  export interface UserWorkouts {
    username: string;
    workoutList: [];
  }


  // Type
 export type UserRole = "USER" | "ADMIN";






    
