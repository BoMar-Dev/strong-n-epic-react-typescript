/**
 * Creating mockup for workout activities and time.
 * Router for landingpage, userpage and adminpage
 */

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./styles/app.css";

// Pages
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

// Types
import { IWorkout } from "./types/InterfaceAndType";

// DB
import { initialWorkoutDB } from "./db/workoutsDB";


const App: React.FC = () => {
  const [workoutList, setWorkoutList] = useState<IWorkout[]>(initialWorkoutDB);

  return (
    <>
      <div className="App">
        <Routes>
          <Route index element={<LandingPage />} 
          />
          <Route
            path="/user"
            element={<UserPage workoutList={workoutList} setWorkoutList={setWorkoutList} />}
          />
          <Route
            path="/admin"
            element={
              <AdminPage workoutList={workoutList} setWorkoutList={setWorkoutList} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
