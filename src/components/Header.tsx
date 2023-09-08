import React from "react";
import { IUser } from "../types/UserType";
import "../styles/header.css";

type HeaderProps = {
  user: IUser;
};

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div className="header-buttons">
      <button>
        Inloggad som : {props.user.role} {props.user.username}
      </button>
      <button> Logga ut </button>
    </div>
  );
};

export { Header };




// exempel:

// function LoginForm() {
    
//   const [formName, SetformName] = useState<string>("")
//   const [formPass, SetformPass] = useState<string>("")

//   const checkUser = (event:Event) => {
//       event.preventDefault();

//       Users.forEach(user => {
//           if (formName === user.username && formPass === user.password){
//               localStorage.setItem('username', user.username)
//               localStorage.setItem('role', user.role)
//               console.log(user.todos);
              
//               console.log(user);
//           }
//       });
      
//   }

// return (
//   <>    
//   <h2>Login</h2>
//   <form>
//       <input type="text" placeholder='username' value={formName} onChange={(e) => SetformName(e.target.value)} />
//       <input type="text" placeholder='password' value={formPass} onChange={(e) => SetformPass(e.target.value)}/>
//       <button type='submit' onClick={checkUser}>Login</button>
//   </form>
//   </>

// )
// }

// export default LoginForm


// const Users = [
//   {
//     username: "Isac",
//     password: "123",
//     role: "USER",
//     todos: [],
//     settings: [],
//   },
//   {
//     username: "Admin",
//     role: "ADMIN",
//     password: "123",
//     todos: [
//       {
//         Title:"WOOP",
//         desc:"Ät upp daniellas kakor när hon inte ser (för hennes skull)"
//       },
//       {
//         Title:"BAJSLÄDER",
//         desc:"Mmm läder"
//       }
//     ],
//     settings: [],
//   },
// ];