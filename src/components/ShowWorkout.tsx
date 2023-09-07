import React, { useState } from "react";
import Calendar from "react-calendar";

// date-picker
import { endOfWeek, isWithinInterval, startOfWeek, format } from "date-fns";
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

function CurrentWeekRow(props: RowProps) {
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

const WorkoutList: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const handledWorkoutChange = (workoutName: string) => {
    setSelectedWorkout([...selectedWorkout, workoutName]);
  };

  const onChange = (date: any) => {
    setDate(date);
  };

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  // const renderSpecificElement = () => {
  //   // Check if selectedDay includes "FR" for Friday
  //   console.log(selectedDay?.getDay());

  //   if (
  //     selectedDay &&
  //     selectedDay.toLocaleDateString("en-US").includes("FR")
  //   ) {
  //     return <div>This is a Friday!</div>;
  //   } else {
  //     return null;
  //   }
  // };

  const friday: number = 5;
  const renderSpecificElement = () => {
    // Check if selectedDay includes "FR" for Friday
    console.log(selectedDay?.getDay());

    if (selectedDay && selectedDay.getDay()) {
      return <div>This is a Friday!</div>;
    } else {
      return null;
    }
  };

  const renderWorkouts = () => {
    return Workouts.map((workout: IWorkout) => (
      <div className="workout-container" key={workout.id}>
        <h3>{workout.name}</h3>
        <p>Time: {workout.time}</p>
        <p>day: {workout.weekDay}</p>
        <button
          onClick={() => {
            handledWorkoutChange(workout.name);
            increment();
          }}>
          Boka
        </button>
      </div>
    ));
  };

  return (
    <div>
      <div className="booked-workout-container">
        <p>
          Du har <span className="count">{count}</span> bokade pass{" "}
        </p>
        <span>v</span>
      </div>
      <div>
        <ul className="selected-workout">
          {selectedWorkout.map((item) => (
            <li>{item}</li>
          ))}
          {/* <li>{selectedWorkout}</li> */}
        </ul>
      </div>
      <div className="calendar-container">
        <div>
          <DayPicker
            selected={selectedDay}
            onDayClick={handleDayClick}
            components={{ Row: CurrentWeekRow }}
            showOutsideDays
            mode="single"
            onSelect={setSelectedDay}
            footer={footer}
            weekStartsOn={1}
            locale={sv}
          />
        </div>
        {renderSpecificElement()}
        {/* {isFriday(selectedDay) && <div>This is a Friday!</div>} */}
        {/* <Calendar onChange={onChange} value={date} />
        {date.toString()} */}
      </div>
      <h1>Workout List</h1>
      {renderWorkouts()}
    </div>
  );
};

export default WorkoutList;
