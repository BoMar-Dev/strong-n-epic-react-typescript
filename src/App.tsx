import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./styles/app.css";

// Pages
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

// Types
import { IWorkout } from "./types/InterfaceAndType";


const initialWorkoutDB: IWorkout[] = [
  {
    name: "Zumba",
    time: "11:00",
  },
  {
    name: "Body Pump",
    time: "12:00",
  },
  {
    name: "Spinning",
    time: "15:00",
  },
  {
    name: "Kettlebell",
    time: "18:00",
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
