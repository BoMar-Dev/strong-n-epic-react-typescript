import React, { useState } from "react";
// Styles
import "../styles/workout.css";

//Types
import { IWorkout } from "../types/WorkoutType";
import { Workouts } from "../db/Workouts";

const WorkoutList: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const renderWorkouts = () => {
    return Workouts.map((workout: IWorkout) => (
      <div className="workout-container" key={workout.id}>
        <h3>{workout.name}</h3>
        <p>Duration: {workout.time}</p>
        <p>day: {workout.weekDay}</p>
        <button onClick={increment}>Boka</button>
      </div>
    ));
  };

  return (
    <div>
      <div>
        <p>
          Du har <span className="count">{count}</span> bokade pass{" "}
        </p>
        <span>v</span>
      </div>
      <h1>Workout List</h1>
      {renderWorkouts()}
    </div>
  );
};

export default WorkoutList;
