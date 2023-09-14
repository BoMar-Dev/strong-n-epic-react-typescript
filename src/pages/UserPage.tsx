
/**
 * Page is rendering dates and workouts for Users to book
 * Chosen workout is rendering under "bokade pass in a list"
 */

import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "../styles/workout.css";
import { IoIosArrowDown } from "react-icons/io";
//Components
import { getUsername } from "../util/user";
import Calendar from "../components/Calendar";

// types
import { IWorkout } from "../types/InterfaceAndType";

interface UserPageProps {
  products: IWorkout[];
  setProducts: (newProducts: IWorkout[]) => void;
}

const UserPage = ({ products }: UserPageProps) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<string[]>([]);
  const [localStorageData, setLocalStorageData] = useState<string[]>([]);
  const [toggle, setToggle] = useState(false);
  const [workoutCount, setWorkoutCount] = useState(0);

 
  useEffect(() => {
    const savedWorkouts = localStorage.getItem(`${getUsername()} workouts`);
    
    if (savedWorkouts) {
  
      const workoutsArray = savedWorkouts.split(",");
      setLocalStorageData(workoutsArray);
      setWorkoutCount(workoutsArray.length) 
    }
  }, [selectedWorkout]);
  

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
    return products.map((workout: IWorkout, index) => (
      <div className="workout-container" key={index}>
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
    setToggle((current) => !current);
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
          {toggle && (
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
      </div>
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
      {renderWorkouts()}
    </>
  );
};

export default UserPage;
