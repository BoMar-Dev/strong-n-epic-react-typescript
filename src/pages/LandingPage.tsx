import "../styles/landingpage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUser } from "../types/InterfaceAndType";
import { Users } from "../db/UsersDB";


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
       
        if (user.role === "USER") {
          navigate("/user");
        } else if (user.role === "ADMIN") {
          navigate("/admin");
        }
      }
    });
  };
  
  return (
    <div className="landingpage-container">
      <h1>Strong n Epic</h1>
      <form className="form-container">
        <label>Logga in som användare/admin</label>
        <input
          type="text"
          value={formName}
          placeholder="Användarnamn"
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
          LOGGA IN
        </button>
      </form>
    </div>
  );
};
export default LandingPage;
