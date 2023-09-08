import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./styles/app.css";

//Pages
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";



const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Routes>
         
          <Route index element={<LandingPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
