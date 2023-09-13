import { useState } from "react";

const AddWorkout = ({ setProducts, products }: any) => {
  const [selectWorkout, setSelectWorkout] = useState("");
  const [selectDay, setSelectDay] = useState("");
  const [selectTime, setSelectTime] = useState("");

  const newProduct: any = {
    id: 5,
    name: selectWorkout,
    time: selectTime,
    weekDay: selectDay,
  };

  const addProduct = () => {
    setProducts([...products, newProduct]);
  };

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
          <option value="Måndag">Måndag</option>
          <option value="Tisdag">Tisdag</option>
          <option value="Onsdag">Onsdag</option>
          <option value="Torsdag">Torsdag</option>
          <option value="Fredag">Fredag</option>
          <option value="Lördag">Lördag</option>
          <option value="Söndag">Söndag</option>
        </select>
        <select
          onChange={(e) => setSelectTime(e.target.value)}
          className="choose-workout time">
          <option selected disabled>
            Välj tid
          </option>
          <option value="12:00">12:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
        </select>
        <button onClick={addProduct} className="confirm-btn">
          OK
        </button>
      </div>
    </div>
  );
};
export default AddWorkout;
