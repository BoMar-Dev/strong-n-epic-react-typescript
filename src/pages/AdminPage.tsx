/**
 * Admin usage only. 
 * Gets overview about registered users.
 * Gets information about what workouts Users have booked.
 */

import { useState, useEffect, useRef } from "react";

//Components
import { Header } from "../components/Header";
import AddWorkout from "../components/AddWorkout";
import {Users} from '../db/UsersDB';

// Types
import { IWorkout } from "../types/InterfaceAndType";

// Styles
import "../styles/workout.css";

interface UserWorkouts {
  username: string;
  workoutList: [];
}

interface AdminPageProps {
  products: IWorkout[];
  setProducts: (newProducts: IWorkout[]) => void;
}

const AdminPage = ({ setProducts, products }: AdminPageProps) => {
  const [userWorkouts, setUserWorkouts] = useState<UserWorkouts[]>([]);
  const [isBookedBookings, setIsBookedBookings] = useState(false)
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      for (let i = 0; i < localStorage.length; i++) {
        const key: string | null = localStorage.key(i);
        if (key?.includes("workouts")) {
          const user: UserWorkouts = {
            username: key.replace(" workouts", ""),
            workoutList: localStorage.getItem(key)!.split(",") as [],
          };
          setUserWorkouts((oldvalue) => [...oldvalue, user]);
          setIsBookedBookings(true);
        }
      }
    }
  }, [setUserWorkouts]);

  return (
    <div>
      <Header />
      <h1>Översikt</h1>
      <h3>Registrerade användare:</h3>
      <ul>
      {Users.map((user, index) => {
        return (
          <li key={`nameid-${index}`}>
            <p>Användare: {user.username} ({user.role})</p>
          </li>
        )
      })}
      </ul>
      <h3>Bokade pass:</h3>
      {isBookedBookings ? (
      <ul>
        {userWorkouts.map((user, index) => {
        return (
          <li key={`nameid-${index}`}>
            <p>Användare: {user.username}</p>
            <ul>
              {user.workoutList.map((workout, wIndex) => {
                return (
                  <li key={`workout-${index}${wIndex}`}>
                    <p>Bokat pass: {workout}</p>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
      ) : ( <p>Inga pass är bokade...</p> )
      } 
      <div>
        <br></br>
        <br></br>
        <h3>Lägga till ett pass:</h3>
        <AddWorkout products={products} setProducts={setProducts} />
        <div className="workoutlist-container">
          {products.map((product, index) => {
            return (
              <div className="workoutlist-item" key={index}>
                <h4> {product.name}</h4>
                <p> {product.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
