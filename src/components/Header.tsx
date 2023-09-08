import React from "react";
import { useState, useEffect } from "react";
import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";
import "../styles/header.css";

// type HeaderProps = {
//   user: IUser;
// };

const Header = (): JSX.Element => {
  return (
    <div className="header-buttons">
      {/* <button>
        Inloggad som : {props.user.role} {props.user.username}
      </button> */}
      <div>
        Inloggad som : {localStorage.getItem("username")} - Med roll :{" "}
        {localStorage.getItem("role")}
      </div>
      <button> Logga ut </button>
    </div>
  );
};

export { Header };
