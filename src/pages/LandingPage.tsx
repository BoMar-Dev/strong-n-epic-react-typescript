// interface HeaderProps {
//     h1: HTMLHeadingElement
// }
import "../styles/landingpage.css";

import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import UserPage from "./UserPage";
import { ILogin } from "../types/UserType";
import { IUser } from "../types/UserType";
import { Users } from "../db/UsersDB";
import { log } from "console";

const LandingPage: React.FC = () => {
  const [formName, setformName] = useState<string>("");
  const [formPass, setformPass] = useState<string>("");

  const navigate = useNavigate();

  const checkUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    Users.forEach((user: IUser) => {
      if (formName === user.username && formPass === user.password) {
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);
        localStorage.setItem("workouts", JSON.stringify(user.workouts));

        console.log(user);

        if (user.role === "USER") {
          navigate("/user");
        } else if (user.role === "ADMIN") {
          navigate("/admin");
        } else {
        }
      } else {
        console.log("neeeeeeej");
      }
    });
  };

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

// const checkUser = (event: React.MouseEvent<HTMLButtonElement>) => {
//   event.preventDefault();

// Retrieve existing user data from localStorage
// const existingUserDataString = localStorage.getItem("userData");
// const existingUserData = existingUserDataString
//   ? JSON.parse(existingUserDataString)
//   : [];

// let foundUser = false;

//   Users.forEach((user: IUser) => {
//     if (formName === user.username && formPass === user.password) {
//       foundUser = true;
//       // Add the current user's data to the existing data
//       existingUserData.push({
//         username: user.username,
//         role: user.role,
//         workouts: user.workouts,
//       });

//       // Save the updated data structure back to localStorage
//       localStorage.setItem("userData", JSON.stringify(existingUserData));

//       console.log(user);

//       if (user.role === "USER") {
//         navigate("/user");
//       } else if (user.role === "ADMIN") {
//         navigate("/admin");
//       } else {
//         // Handle other roles if needed
//       }
//     }
//   });

//   if (!foundUser) {
//     console.log("User not found");
//   }
// };
// With this modification, each time a user logs in, their data is added to the userData array in localStorage, preserving the data for multiple users without overwriting it.
