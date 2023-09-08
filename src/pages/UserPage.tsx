import React, { useState } from "react";
import { Header } from "../components/Header";

import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";

//Components

import ShowWorkout from "../components/ShowWorkout";
import { Workouts } from "../db/Workouts";
import WorkoutList from "../components/ShowWorkout";

const UserPage = () => {
  return (
    <>
      <Header />

      <WorkoutList />
    </>
  );
};

export default UserPage;
