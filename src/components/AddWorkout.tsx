/**
 * Admin usage only.
 * Adding new workout activity to localstorage.
 * Rendering workout activity below from .
 */

import { useState } from "react";
import { IWorkout } from "../types/InterfaceAndType";
import '../styles/admin.css'

interface AddWorkoutProps {
  workoutList: IWorkout[];
  setWorkoutList: (newWorkout: IWorkout[]) => void;
}

const AddWorkout = ({ setWorkoutList, workoutList }: AddWorkoutProps) => {
  const [selectWorkout, setSelectWorkout] = useState("");
  const [selectDay, setSelectDay] = useState("");
  const [selectTime, setSelectTime] = useState("");
 
  const newWorkout: AddWorkoutProps | IWorkout = {
    name: selectWorkout,
    time: selectTime,
  };

  const addNewWorkout = () =>  {
    setWorkoutList([...workoutList, newWorkout])
    
    localStorage.setItem("updatedWorkouts", JSON.stringify(newWorkout))
  }

  return (
    <div>
      <div className="choose-workout-container">
        <select
          onChange={(e) => setSelectWorkout(e.target.value)}
          className="choose-workout activity">
          <option selected disabled>
            Välj aktivitet
          </option>
          <option value="Yoga">Yoga</option>
          <option value="Zumba">Zumba</option>
          <option value="Kettlebell">Kettlebell</option>
          <option value="Spinning">Spinning</option>
        </select>
        {/* VÄLJ DAG: */}
        <select
          className="choose-workout day"
          onChange={(e) => setSelectDay(e.target.value)}>
          <option selected disabled>
            Välj dag
          </option>
          <option>Måndag</option>
          <option>Tisdag</option>
          <option>Onsdag</option>
          <option>Torsdag</option>
          <option>Fredag</option>
          <option>Lördag</option>
          <option>Söndag</option>
        </select>
        <select
          onChange={(e) => setSelectTime(e.target.value)}
          className="choose-workout time">
          <option selected disabled>
            Välj tid
          </option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
        </select>
        <button onClick={addNewWorkout} className="confirm-btn">
          Lägg till
        </button>
      </div>
    </div>
  );
};
export default AddWorkout;
