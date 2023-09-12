import React, { useState } from "react";
import { Header } from "../components/Header";

// import { IUser } from "../types/UserType";
// import { Users } from "../db/UsersDB";

//Components

// import ShowWorkout from "../components/ShowWorkout";
// import { Workouts } from "../db/Workouts";
import WorkoutList from "../components/ShowWorkout";
import { IWorkout } from "../types/WorkoutType";

const UserPage = ({ setProducts, products }: any) => {
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const handledWorkoutChange = (workoutName: string) => {
    setSelectedWorkout([...selectedWorkout, workoutName]);
    saveToLocalStorage(workoutName);
  };

  const saveToLocalStorage = (workout: string) => {
    // Retrieve the existing array from local storage (or create an empty array)
    const existingWorkoutsJSON = localStorage.getItem("workouts");
    const existingWorkouts = existingWorkoutsJSON
      ? JSON.parse(existingWorkoutsJSON)
      : [];

    console.log(existingWorkouts);

    existingWorkouts.push(workout);

    // Save the updated array back to local storage
    localStorage.setItem("workouts", JSON.stringify(existingWorkouts));
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
        </ul>
      </div>
      <WorkoutList products={products} setProducts={setProducts} />
      {renderWorkouts()}
    </>
  );
};

export default UserPage;
