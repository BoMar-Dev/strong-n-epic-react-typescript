export interface IWorkout {
    id: number;
    name: string;
    time: string;
    weekDay: string[];
  }
  


export type TWorkoutActivity = "Zumba" | "Spinning" | "Kettlebell" | "Body Pump";
export type TWeekdays = "Måndag" | "Tisdag" | "Onsdag" | "Torsdag" | "Fredag" | "Lördag" | "Söndag";
export type TTime = 12.00 | 13.00 | 14.00 | 15.00 | 16.00 | 17.00 | 18.00 | 19.00 | 20.00;


// export interface IWorkoutSchedule {
//   id: number;
//   name: TWorkoutActivity;
//   time: TTime;
//   weekday: TWeekdays;
// }