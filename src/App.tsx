import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./styles/app.css";

//Pages
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

//Types
import { IWorkout } from "./types/WorkoutType";

const initialWorkoutDB: IWorkout[] = [
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

const App: React.FC = () => {
  const [products, setProducts] = useState<IWorkout[]>(initialWorkoutDB);

  return (
    <>
      <div className="App">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route
            path="/user"
            element={<UserPage products={products} setProducts={setProducts} />}
          />
          <Route
            path="/admin"
            element={
              <AdminPage products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
