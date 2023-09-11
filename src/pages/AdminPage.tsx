import React from "react";
import { useState } from "react";

// Interfaces / Types
import { IUser } from "../types/UserType";
import { IWorkout } from "../types/WorkoutType";

//Components
import { Header } from "../components/Header";
import WorkoutList from "../components/ShowWorkout";
import AddWorkout from "../components/AddWorkout";

import "../styles/workout.css";
import { TWorkoutActivity } from "../types/WorkoutType";

const initialProducts: IWorkout[] = [
  {
    id: 1,
    name: "Zumba",
    time: "11:00",
    weekDay: [],
  },
  {
    id: 2,
    name: "Body Pump",
    time: "12:00",
    weekDay: [],
  },
  {
    id: 3,
    name: "Spinning",
    time: "15:00",
    weekDay: [],
  },
  {
    id: 4,
    name: "Kettlebell",
    time: "18:00",
    weekDay: [],
  },
];

const AdminPage = () => {
  const [products, setProducts] = useState(initialProducts);

  // const newProduct: IWorkout = {
  //   id: 1,
  //   name: "Crossfit",
  //   time: "11",
  //   weekDay: ["Onsdag"],
  // };

  // const addProduct = () => {
  //   setProducts([...products, newProduct]);
  // };

  return (
    <div>
      <Header />
      <WorkoutList />
      {/* <AddWorkout id={activity.id} /> */}
      <div className="App-container">
        {products.map((product) => {
          return (
            <div className="App-item">
              <div>
                <h3> {product.name}</h3>
              </div>
              <div>
                <p>{product.id}</p>
              </div>
              <div className="Price-item">{product.weekDay}</div>
            </div>
          );
        })}
      </div>
      < AddWorkout id={5} name={"Zumba"} time={18.00} weekday={"Tisdag"}/>
      {/* <button onClick={addProduct}>Adding Product</button> */}
    </div>
  );
};

export default AdminPage;
