import React from 'react'

import { IUser } from '../types/UserType';
import { Header } from '../components/Header';

import '../styles/workout.css';

const AdminPage = () => {
    const user: IUser = { username: "Admina", role: "ADMIN" };
  return (
    <div>
        <Header user={user} />
    </div>
  )
}

export default AdminPage