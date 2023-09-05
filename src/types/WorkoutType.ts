import React from 'react'

const WeekDays: string[] = [
    "Monday", "Thuesday", "Wednesday"
]

export type DaysOfTheWeek = "Monday" | "Thuesday" | "Wednesday"

export interface IWorkout {
    id: number;
    name: string;
    time: string;
    // day: WeekDays[] as <WeekDays>; 
    weekDay: string[];
  }