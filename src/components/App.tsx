import React from 'react';
import './App.css';
import Form from './Form/Form';
import UserProfile from './UserProfile/UserProfile';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function App() {
  const isEditing = useSelector((state: RootState) => state.user.isEditing);
  return (
    <div className='App'>
      <h1>User Profile App</h1>
      {isEditing ? <Form /> : <UserProfile />}
    </div>
  );
}

export default App;
