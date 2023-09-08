import React, { useState } from "react";
import { Header } from "../components/Header";

import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";

//Components

import ShowWorkout from "../components/ShowWorkout";
import { Workouts } from "../db/Workouts";
import WorkoutList from "../components/ShowWorkout";

const UserPage = () => {
  const user: IUser = { username: "Greta", role: "USER" };
  // const [workouts, setWorkouts] = useState<Workouts>({} as Workouts)

  return (
    <>
      <Header user={user} />

      <WorkoutList />
    </>
  );
};

export default UserPage;
