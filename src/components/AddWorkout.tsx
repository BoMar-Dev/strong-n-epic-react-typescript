import {
  TWorkoutActivity,
  TWeekdays,
  TTime,
  IWorkoutSchedule,
} from "../types/WorkoutType";

const AddWorkout = ({ id, name, time, weekday }: IWorkoutSchedule) => {
  return (
    <div>
      <div className="choose-workout-container">
        <select className="choose-workout activity">
          <option selected disabled>
            Välj aktivitet
          </option>
          <option value="1">{name}</option>
          <option value="2">Kettlebell</option>
          <option value="3">Spinning</option>
        </select>
        <select className="choose-workout day">
          <option selected disabled>
            Välj dag
          </option>
          <option id="1" value="mon">
            Måndag
          </option>

          <option value="tis">Tisdag</option>
          <option value="ons">Onsdag</option>
          <option value="tor">Torsdag</option>
          <option value="fre">Fredag</option>
          <option value="lör">Lördag</option>
          <option value="sön">Söndag</option>
        </select>
        <select className="choose-workout time">
          <option selected disabled>
            Välj tid
          </option>
          <option value="1">12:00</option>
          <option value="2">14:00</option>
          <option value="3">15:00</option>
        </select>
        <button>Lägg till pass</button>
      </div>
    </div>
  );
};
export default AddWorkout;
