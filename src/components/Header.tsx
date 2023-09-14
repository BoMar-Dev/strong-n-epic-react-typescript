import React from "react";
import { useState, useEffect } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import "../styles/workout.css";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
  };

  return (
    <div className="header-buttons">
      <div>
      <p className="userrole-title">Användare: {localStorage.getItem("username")}, Roll:{" "}
        {localStorage.getItem("role")}</p>
      </div>
      <button onClick={handleLogOut} className="logout-btn"> LOGGA UT </button>
    </div>
  );
};

export { Header };
