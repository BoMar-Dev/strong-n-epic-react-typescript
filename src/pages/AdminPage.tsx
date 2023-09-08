import React from "react";

import { IUser } from "../types/UserType";
import { Header } from "../components/Header";

import WorkoutList from "../components/ShowWorkout";

import "../styles/workout.css";

const AdminPage = () => {
  return (
    <div>
      <Header />
      <WorkoutList />
    </div>
  );
};

export default AdminPage;
