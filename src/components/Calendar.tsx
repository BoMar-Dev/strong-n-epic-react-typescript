/**
 * Rendering the calendar with date that shows 2 weeks.
 * Picked day is also shown in chosen workoutlist
 */

// date-picker
import { endOfWeek, isWithinInterval, startOfWeek, } from "date-fns";
import { Row, RowProps } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useState } from "react";
import { CiDumbbell } from "react-icons/ci";

// Date-picker
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { sv } from "date-fns/locale";

// Styles
import "../styles/workout.css";
import { getUsername } from "../util/user";


function showCalendar(props: RowProps) {
    const isDateInCurrentWeek = (dateToCheck: Date) => {
      const today = new Date();
      const start = startOfWeek(today);
      const end = endOfWeek(today);
      return isWithinInterval(dateToCheck, { start, end });
    };
    const isNotCurrentWeek = props.dates.every(
      (date) => !isDateInCurrentWeek(date)
    );
    if (isNotCurrentWeek) return <></>;
    return <Row {...props} />;
  }

interface WorkoutListProps {
  selectedDay: Date;
  setSelectedDay:React.Dispatch<React.SetStateAction<Date>>
}

const Calendar = ({ selectedDay,setSelectedDay }: WorkoutListProps) => {
  const [localStorageData, setLocalStorageData] = useState<string[]>([]);

  const handleDayClick = (day: Date) => {
    const chosenDay = day;
    setSelectedDay(chosenDay);

    const getDates = localStorage.getItem(`${getUsername()} workouts`);
    if (getDates) {
      const datesResults = getDates?.split(",");
      setLocalStorageData(datesResults);
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
            onSelect={() => setSelectedDay}
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
      </div>
    </div>
  );
};

export default Calendar;

  