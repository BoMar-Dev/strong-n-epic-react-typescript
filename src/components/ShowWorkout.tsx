import React, { useState } from "react";
// Styles
import "../styles/workout.css";

//Types
import { IWorkout } from "../types/WorkoutType";
import { Workouts } from "../db/Workouts";


const WorkoutList: React.FC = () => {
  const [count, setCount] = useState(0);
  const [workoutList, setWorkoutList] = useState<IWorkout[] | null> (null);
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);



  const increment = () => {
    setCount((count) => count + 1);
  };
  
  const handledWorkoutChange = (workoutName: string) => {
    setSelectedWorkout([...selectedWorkout, workoutName]);
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
        {/* <button onClick={increment}>Boka</button> */}
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
        <ul>
          <li>{selectedWorkout}</li>
        </ul>
      </div>
      <h1>Workout List</h1>
      {renderWorkouts()}
    </div>
  );
};

export default WorkoutList;
