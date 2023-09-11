import {
  TWorkoutActivity,
  TWeekdays,
  TTime,
  IWorkoutSchedule,
} from "../types/WorkoutType";


import { useState } from "react";


// handleChange(event){
//   this.setState({selectedOption: event.target.value }

const AddWorkout = ({ id, name, time, weekday }: IWorkoutSchedule) => {
  const [selectWorkout, setSelectWorkout] = useState("");
  const [selectDay, setSelectDay] = useState("");
  const [selectTime, setSelectTime] = useState("");

  // const workoutOptions = [
  //   { value: "Zumba", }
  // ]

  return (
    <div>
      <h1>{selectWorkout} {selectDay} {selectTime}</h1>
      <div className="choose-workout-container">
        <select value={selectWorkout} 
        onChange={e => setSelectWorkout(e.target.value)} 
        className="choose-workout activity">
          <option selected disabled
          >
            Välj aktivitet
          </option>
          <option value="Zumba">Zumba</option>
          <option value="Kettlebell">Kettlebell</option>
          <option value="Spinning">Spinning</option>
        </select>
        {/* VÄLJ DAG: */}
        <select value={selectDay} 
        className="choose-workout day" 
        onChange={e => setSelectDay(e.target.value)}
        >
          <option selected disabled>
            Välj dag
          </option>
          <option value="Måndag">Måndag</option>
          <option value="Tisdag">Tisdag</option>
          <option value="Onsdag">Onsdag</option>
          <option value="Torsdag">Torsdag</option>
          <option value="Fredag">Fredag</option>
          <option value="Lördag">Lördag</option>
          <option value="Söndag">Söndag</option>
        </select>
        <select value={selectTime} 
        onChange={e => setSelectTime(e.target.value)} 
        className="choose-workout time">
          <option selected disabled
          >
            Välj tid
          </option>
          <option value="12:00">12:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
        </select>
        <button>Lägg till pass</button>
      </div>
    </div>
  );
};
export default AddWorkout;
