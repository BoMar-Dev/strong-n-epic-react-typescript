import React from "react";
import { useState, useEffect } from "react";
import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import "../styles/workout.css";

// type HeaderProps = {
//   user: IUser;
// };

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
  };

  return (
    <div className="header-buttons">
      {/* <button>
        Inloggad som : {props.user.role} {props.user.username}
      </button> */}
      <div>
      <p className="userrole-title">Användare: {localStorage.getItem("username")}, Roll:{" "}
        {localStorage.getItem("role")}</p>
      </div>
      <button onClick={handleLogOut} className="logout-btn"> LOGGA UT </button>
    </div>
  );
};

export { Header };
