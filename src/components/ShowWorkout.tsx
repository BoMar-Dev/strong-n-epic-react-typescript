import { useState } from "react";
import { showCalendar } from "./Calendar";
import { CiDumbbell } from "react-icons/ci";

// Date-picker
// import { endOfWeek, isWithinInterval, startOfWeek, format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { sv } from "date-fns/locale";

// Styles
import "../styles/workout.css";

//Types
// import { IWorkout } from "../types/WorkoutType";
// // import { TWeekdays } from "../types/CalendarType";

// // DB
// import { Workouts } from "../db/Workouts";

import { getUsername } from "../util/user";

const WorkoutList = ({
  setProducts,
  products,
  selectedDay,
  setSelectedDay,
}: any) => {
  const [localStorageData, setLocalStorageData] = useState<string[]>([]);

  const handleDayClick = (day: Date) => {
    console.log(`just so you now its ${day}`);

    const chosenDay = day;

    setSelectedDay(chosenDay);

    const getDates = localStorage.getItem(`${getUsername()} workouts`);

    if (getDates) {
      const datesResults = getDates?.split(",");
      setLocalStorageData(datesResults);
    }
  };

  // const renderUserBookedWorkouts = () => {
  //   (localStorage.getItem(`${getUsername()} workouts`))
  // }

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
      </div>
      <div className="icon-and-down">
        <div className="dumbell-icon">
          <CiDumbbell />
        </div>
        <h1>Workout List</h1>
        <div className="workouts-render">{renderTodaysWorkouts()}</div>
        <p></p>
      </div>
    </div>
  );
};

export default WorkoutList;
