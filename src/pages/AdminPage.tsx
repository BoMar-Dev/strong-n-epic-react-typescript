import React from "react";
import { useState } from "react";

//Components
import { Header } from "../components/Header";
import WorkoutList from "../components/ShowWorkout";
import AddWorkout from "../components/AddWorkout";

import "../styles/workout.css";
import { TWorkoutActivity } from "../types/WorkoutType";


const AdminPage = ({setProducts, products}: any) => {
  

  return (
    <div>
      <Header />
      <WorkoutList />
      <AddWorkout products={products} setProducts={setProducts}/>
      <div className="App-container">
        {products.map((product:any) => {
          return (
            <div className="App-item">
                <h3> {product.name}</h3>
                <p> {product.time}</p>
                <p>{product.id}</p>
                <p>{product.weekDay}</p>
                
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AdminPage;
