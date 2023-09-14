import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "../styles/workout.css";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineFieldTime } from "react-icons/ai";

// import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";

//Components
import { getUsername } from "../util/user";

// import ShowWorkout from "../components/ShowWorkout"
// import { Workouts } from "../db/Workouts";
import WorkoutList from "../components/ShowWorkout";
import { IWorkout } from "../types/WorkoutType";

const UserPage = ({ setProducts, products }: any) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);
  const [localStorageData, setLocalStorageData] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  const [workoutCount, setWorkoutCount] = useState(0);

  

  // Saving the selected workout by clicking boka
  useEffect(() => {
    // Retrieve saved workouts from localStorage
    const savedWorkouts = localStorage.getItem(`${getUsername()} workouts`);
    
    if (savedWorkouts) {
      // Split the saved data by commas to create an array
      const workoutsArray = savedWorkouts.split(",");
      setLocalStorageData(workoutsArray);
      setWorkoutCount(workoutsArray.length)
      
    }
  }, [selectedWorkout]);

  useEffect(() => {
    if (localStorage.getItem(`${getUsername()} workouts`)) {
      console.log(localStorage.getItem(`${getUsername()} workouts`));
    }
  }, []);

  const handledWorkoutChange = (workoutName: string) => {
    setSelectedWorkout([...selectedWorkout, workoutName]);
    saveToLocalStorage(workoutName);
    
  };

  const saveToLocalStorage = (workout: string) => {
    if (localStorage.getItem(`${getUsername()} workouts`)) {
      localStorage.setItem(
        `${getUsername()} workouts`,
        localStorage.getItem(`${getUsername()} workouts`) + "," + workout
      );
    } else {
      localStorage.setItem(`${getUsername()} workouts`, workout);
    }
  };

  const renderWorkouts = () => {
    return products.map((workout: IWorkout) => (
      <div className="workout-container" key={workout.id}>
        <h3>{workout.name}</h3>
        <p>Time: {workout.time} </p>
        <button
          className="boka-btn"
          onClick={() => {
            handledWorkoutChange(
              `${workout.name} ${selectedDay?.toLocaleDateString()} kl: ${
                workout.time
              }`
            );
           
          }}>
          Boka
        </button>
      </div>
    ));
  };

  const handleToggle = () => {
    setVisible((current) => !current);
  };

  return (
    <>
      <Header />
      <div className="booked-workout-container">
        <p>
          Du har <span className="count">{workoutCount}</span> bokade pass{" "}
        </p>
        <button className="arrow-down" onClick={handleToggle}>
          <IoIosArrowDown />
        </button>
        <div>
          {visible && (
            <ul className="selected-workout">
              {localStorageData.map((item, index) => (
                <li className="selected-list" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        {/* {
          visible && <ul className="selected-workout">
          {localStorageData.map((item, index) => (
            <li className="selected-list" key={index}>
              {item}
            </li>
          ))}
        </ul>
        } */}
      </div>
      <WorkoutList
        products={products}
        setProducts={setProducts}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {renderWorkouts()}
    </>
  );
};

export default UserPage;
