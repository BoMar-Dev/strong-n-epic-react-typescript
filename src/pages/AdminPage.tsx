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
import "../styles/admin.css";

interface UserWorkouts {
  username: string;
  workoutList: [];
}

interface AdminPageProps {
  workoutList: IWorkout[];
  setWorkoutList: (newProducts: IWorkout[]) => void;
}

const AdminPage = ({ setWorkoutList, workoutList }: AdminPageProps) => {
  const [userWorkouts, setUserWorkouts] = useState<UserWorkouts[]>([]);
  const [showIfBooked, setShowIfBooked] = useState(false)
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
          setShowIfBooked(true);
        }
      }
    }
  }, [setUserWorkouts]);

  return (
    <div>
      <Header />
      <h1 className="admin-title">Översikt</h1>
      <div className="overview-container">
      <div className="registered-users-container">
      <h3>Registrerade användare:</h3>
      <ul>
      {Users.map((user, index) => {
        return (
          <li key={`nameid-${index}`}>
            <p>Namn: {user.username} ({user.role})</p>
          </li>
        )
      })}
      </ul>
      </div>
      
    <div className="booked-workout-container2">
      <h3 >Bokade pass:</h3>
      {showIfBooked ? (
      <ul>
        {userWorkouts.map((user, index) => {
        return (
          <li key={`nameid-${index}`}>
            <p>Användare: <span className="span-user">{user.username}</span></p>
            <ul>
              {user.workoutList.map((workout, wIndex) => {
                return (
                  <li key={`workout-${index}${wIndex}`}>
                    <p>{workout}</p>
                  </li> 
                  
                );
              })}
              <br></br>
            </ul>
          </li>
        );
      })}
    </ul>
      ) : ( <p>Inga pass är bokade...</p> )
      } 
    </div>
    </div>
    
      <div className="add-bookings">
        <h3>Lägg till ett pass:</h3>
        <div className="line"></div>
        <AddWorkout workoutList={workoutList} setWorkoutList={setWorkoutList} />
        <div className="workoutlist-container">
          {workoutList.map((list, index) => {
            return (
              <div className="workoutlist-item" key={index}>
                <h4> {list.name}</h4>
                <p> {list.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
