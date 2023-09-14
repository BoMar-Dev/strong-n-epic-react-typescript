import { useState } from "react";
import { IWorkout } from "../types/InterfaceAndType";

interface AddWorkoutProps {
  products: IWorkout[];
  setProducts: (newProducts: IWorkout[]) => void;
}

const AddWorkout = ({ setProducts, products }: AddWorkoutProps) => {
  const [selectWorkout, setSelectWorkout] = useState("");
  const [selectDay, setSelectDay] = useState("");
  const [selectTime, setSelectTime] = useState("");
 
  const newProduct: AddWorkoutProps | IWorkout = {
    name: selectWorkout,
    time: selectTime,
  };

  const addProduct = () =>  {
    setProducts([...products, newProduct])
    
    localStorage.setItem("updatedWorkouts", JSON.stringify(newProduct))
  }

  return (
    <div>
      <h1>
        {selectWorkout} {selectDay} {selectTime}
      </h1>
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
        <button onClick={addProduct} className="confirm-btn">
          OK
        </button>
      </div>
    </div>
  );
};
export default AddWorkout;
