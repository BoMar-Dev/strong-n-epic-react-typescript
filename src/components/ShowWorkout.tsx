import React, { useState } from "react";
import Calendar from 'react-calendar';
// Styles
import "../styles/workout.css";

//Types
import { IWorkout } from "../types/WorkoutType";
// import { TWeekdays } from "../types/CalendarType";

// DB
import { Workouts } from "../db/Workouts";


const WorkoutList: React.FC = () => {
  const [calendar, setCalendar] = useState();
  const [count, setCount] = useState(0);
  // const [workoutList, setWorkoutList] = useState<IWorkout[] | null> (null);
  const [date, setDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const handledWorkoutChange = (workoutName: string) => {
    setSelectedWorkout([...selectedWorkout, workoutName]);
  }


  const onChange = (date: any) => {
    setDate(date)
  }

  const renderWorkouts = () => {

    return Workouts.map((workout: IWorkout) => (
      <div className="workout-container" key={workout.id}>
        <h3>{workout.name}</h3>
        <p>Time: {workout.time}</p>
        <p>day: {workout.weekDay}</p>
        <button onClick={() => {handledWorkoutChange(workout.name); increment()}}>
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
          {selectedWorkout.map(item => (
            <li>{item}</li>
          ))}
          {/* <li>{selectedWorkout}</li> */}
        </ul>
      </div>
      <div className="calendar-container">
      <Calendar onChange={onChange} value={date} />
      {date.toString()}
      </div>
      <h1>Workout List</h1>
      {renderWorkouts()}
    </div>
  );
};

export default WorkoutList;
