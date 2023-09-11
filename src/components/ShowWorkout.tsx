import React, { useState } from "react";
import {showCalendar} from "./Calendar"

// Date-picker
// import { endOfWeek, isWithinInterval, startOfWeek, format } from "date-fns";
import { DayPicker, Row, RowProps } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { sv } from "date-fns/locale";

// Styles
import "../styles/workout.css";

//Types
import { IWorkout } from "../types/WorkoutType";
// import { TWeekdays } from "../types/CalendarType";

// DB
import { Workouts } from "../db/Workouts";
import { log } from "console";


const WorkoutList = ({setProducts, products}: any) => {
  const [selectedDay, setSelectedDay] = useState<Date>();

  
  const handleDayClick = (day: Date) => {
    console.log(day);
    
    setSelectedDay(day);
  };


  const renderTodaysWorkouts = () => {
    console.log(selectedDay?.getDay());

    if (selectedDay && selectedDay.getDay() === 5) {
      console.log(selectedDay.getDay());
      
      return <h1>Its a friday</h1>;
    } else {
      return null;
    }
  };


  return (
    <div>
      <div className="calendar-container">
        <div>
          <DayPicker
            className="DayPicker"
            selected={selectedDay}
            onDayClick={handleDayClick}
            components={{ Row: showCalendar }}
            showOutsideDays
            mode="single"
            onSelect={setSelectedDay}
            // footer={footer}
            weekStartsOn={1}
            locale={sv}
          />
        </div>
        <h1>Workout List</h1>
        <div>{renderTodaysWorkouts()}</div>
      </div>
    </div>
    
  );
};

export default WorkoutList;
