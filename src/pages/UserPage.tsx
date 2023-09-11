import React, { useState } from "react";
import { Header } from "../components/Header";

import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";

//Components

import ShowWorkout from "../components/ShowWorkout";
import { Workouts } from "../db/Workouts";
import WorkoutList from "../components/ShowWorkout";
import { IWorkout } from "../types/WorkoutType";

const UserPage = ({setProducts, products}: any) => {

  return (
    <>
      <Header />
      <WorkoutList products={products} setProducts={setProducts}  />
      <div className="App-container">
        {products.map((product:any) => {
          return (
            <div className="App-item">
                <h3> {product.name}</h3>
                <p> {product.time}</p>
                <p>{product.weekDay}</p>
                <button>Boka</button>
            </div>
          );
        })}
      </div>
    </>
  );
};




export default UserPage;
