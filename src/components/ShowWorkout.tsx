import React from 'react'

//Types
import { IWorkout } from '../types/WorkoutType'
import { Workouts } from '../db/Workouts'


const WorkoutList: React.FC = () => {
  const renderWorkouts = () => {
    return Workouts.map((workout: IWorkout) => (
      <div key={workout.id}>
        <h2>{workout.name}</h2>
        <p>Duration: {workout.time}</p>
        <p>day: {workout.weekDay}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>Workout List</h1>
      {renderWorkouts()}
    </div>
  );
};

export default WorkoutList;

// const WorkoutList: React.FC = () => {
//   const renderWorkouts = () => {
//     return workouts.map((workout: Workout) => (
//       <div key={workout.id}>
//         <h2>{workout.name}</h2>
//         <p>{workout.description}</p>
//         <p>Duration: {workout.duration}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h1>Workout List</h1>
//       {renderWorkouts()}
//     </div>
//   );
// };

// export default WorkoutList;

// const ShowWorkout: React.FC = () => {

  // const renderWorkouts = () => {
  //   return Workouts.map((workout: IWorkout) => (
  //     <div key={workout.id}>
  //       <p>{workout.name}</p>
  //       <p>{workout.day}</p>
  //     </div>
  //   ))
  // }
  // return (
    // <div>
        {/* <div>
            <p>Du har <span>0</span> bokade pass</p>
            <p>v</p>
        </div>
        <div>
            <ul>
                <li>{} {} 4 sep kl.11.00</li>
                <button>Avboka</button>
            </ul>
        </div> */}
        {/* {renderWorkouts()}
    </div>
  )
} */}

// export default ShowWorkout