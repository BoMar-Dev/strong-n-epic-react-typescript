// interface HeaderProps {
//     h1: HTMLHeadingElement
// }
import "../styles/landingpage.css";

import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import UserPage from "./UserPage";
import { ILogin } from '../types/UserType';
import { Users } from '../db/UsersDB';


const LandingPage: React.FC = () => {
  const [formName, setformName] = useState<string>("");
  const [formPass, setformPass] = useState<string>("");

  // const navigate = useNavigate();

  // const goToUserPage = (): void => {
  //   navigate("/user");
  // };

  // const goToAdminPage = (): void => {
  //   navigate("/admin");
  // };

  const checkUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    Users.forEach(user => {
      if (formName === user.username && formPass === user.password){
        localStorage.setItem('username', user.username)
        localStorage.setItem('role', user.role)
        console.log(user);
      }

    });
  }

  // const ifAdmin = () => {
  //   if (user.role)
  // }


  return (
    <div>
      <h1>Strong n Epic</h1>
      <form className="form-container">
        <label>Logga in som användare/admin</label>
        <input type="text" value={formName} placeholder="användarnamn" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setformName(e.target.value)} />
        <input type="password" value={formPass} placeholder="Lösenord" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setformPass(e.target.value)} />
        <button type='submit' onClick={checkUser}>Logga in</button> 
      </form>
      {/* <button onClick={goToUserPage}>Logga in som USER</button>
      <button onClick={goToAdminPage}>Logga in som ADMIN</button> */}
    </div>
  );
};
export default LandingPage;
