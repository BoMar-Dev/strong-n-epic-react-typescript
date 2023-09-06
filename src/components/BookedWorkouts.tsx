import { useState } from "react";

const BookedWorkouts = () => {
  const [countBookedWorkouts, setCountBookedWorkouts] = useState(0);

  const addCount = () => {
    setCountBookedWorkouts(countBookedWorkouts + 1);
  };

  return (
    <div>
      <p>Du har {countBookedWorkouts} bokade pass </p>
      <span>v</span>
    </div>
  );
};
export default BookedWorkouts;
