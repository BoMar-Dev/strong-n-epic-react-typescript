import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';


//Pages
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';

// Components
import { Header } from './components/Header';

import { User } from './types/UserType';


const App:React.FC = () => {
  
  return (
    <>
    {/* <Header /> */}
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/user" element={<UserPage />} />
       
        
      </Routes>
    </div>
    </>
  );
}

export default App;
 