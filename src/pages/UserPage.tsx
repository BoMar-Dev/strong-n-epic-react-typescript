import React, { useState } from "react";
import { Header } from "../components/Header";

import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";

//Components

import ShowWorkout from "../components/ShowWorkout";
import { Workouts } from "../db/Workouts";
import WorkoutList from "../components/ShowWorkout";
import { IWorkout } from "../types/WorkoutType";
import { log } from "console";

const UserPage = ({setProducts, products}: any) => {
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const handledWorkoutChange = (workoutName: string) => {
    setSelectedWorkout([...selectedWorkout, workoutName]);
  };

  const renderWorkouts = () => {
    return products.map((workout: IWorkout) => (
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
    <>
      <Header />
      <div className="booked-workout-container">
            <p>Du har <span className="count">{count}</span> bokade pass{" "}</p>
            <span>v</span>
      </div>
      <div>
        <ul className="selected-workout">
          {selectedWorkout.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <WorkoutList products={products} setProducts={setProducts}  />
      {renderWorkouts()}
    </>
  );
};



export default UserPage;
