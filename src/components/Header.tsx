import React from "react";
import { useState, useEffect } from "react";
import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

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
        Inloggad som : {localStorage.getItem("username")} - Med roll :{" "}
        {localStorage.getItem("role")}
      </div>
      <button onClick={handleLogOut}> Logga ut </button>
    </div>
  );
};

export { Header };
