import { useState } from "react";
import { showCalendar } from "./Calendar";
import { CiDumbbell } from "react-icons/ci";
import { IWorkout } from "../types/InterfaceAndType";

// Date-picker
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { sv } from "date-fns/locale";

// Styles
import "../styles/workout.css";
import { getUsername } from "../util/user";

interface WorkoutListProps {
  products: IWorkout[];
  setProducts: (newProducts: IWorkout[]) => void;
  selectedDay: Date;
  setSelectedDay:React.Dispatch<React.SetStateAction<Date>>
}

const WorkoutList = ({
  setProducts,
  products,
  selectedDay,
  setSelectedDay,
}: WorkoutListProps) => {
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
      </div>
    </div>
  );
};

export default WorkoutList;
