// interface HeaderProps {
//     h1: HTMLHeadingElement
// }
import "../styles/landingpage.css";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserPage from "./UserPage";
import { ILogin, IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";
import { setDefaultResultOrder } from "dns";

const LandingPage: React.FC = () => {
  const [formName, setformName] = useState<string>("");
  const [formPass, setformPass] = useState<string>("");

  const navigate = useNavigate();

  // const saveUser = ({ username, password, role }: IUser): void => {
  //   let data = localStorage.getItem("userData");

  //   if (data !== null) {
  //     const dataJSON: IUser[] = JSON.parse(data);
  //     dataJSON.push({ username, password, role });
  //     localStorage.setItem("userData", JSON.stringify(dataJSON));
  //   } else {
  //     throw new Error("users is null");
  //   }
  // };

  // const getUsers = (): IUser[] => {
  //   const data = localStorage.getItem("userData");
  //   if (data !== null) {
  //     return JSON.parse(data);
  //   } else {
  //     throw new Error("users is null");
  //   }
  // };

  const checkUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    Users.forEach((user: IUser) => {
      if (formName === user.username && formPass === user.password) {
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);
        // localStorage.getItem("workout");

        // console.log(user);

        if (user.role === "USER") {
          navigate("/user");
        } else if (user.role === "ADMIN") {
          navigate("/admin");
        }
      }
    });
  };

  // saveUser({ username: formName, password: formPass, role: "USER" });

  // const checkUser = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  //   Users.forEach((user: IUser) => {
  //     if (formName === user.username && formPass === user.password) {
  //       // localStorage.setItem("username", user.username);
  //       // localStorage.setItem("role", user.role);
  //       // localStorage.getItem("workout");

  //       // console.log(user);

  //       if (user.role === "USER") {
  //         navigate("/user");
  //       } else if (user.role === "ADMIN") {
  //         navigate("/admin");
  //       }
  //     }

  //   });
  // };

  // const user: IUser = {
  //   username: "Greta",
  //   role: "USER",
  //   bookedWorkouts: ["Zumba määään"],
  // };

  return (
    <div>
      <h1>Strong n Epic</h1>
      <form className="form-container">
        <label>Logga in som användare/admin</label>
        <input
          type="text"
          value={formName}
          placeholder="användarnamn"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setformName(e.target.value)
          }
        />
        <input
          type="password"
          value={formPass}
          placeholder="Lösenord"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setformPass(e.target.value)
          }
        />
        <button type="submit" onClick={checkUser}>
          Logga in
        </button>
      </form>
    </div>
  );
};
export default LandingPage;
