import React from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditing } from '../../redux/userSlice';
import Form from '../Form/Form';
import './UserProfile.scss';

export function UserProfile() {
  const dispatch = useDispatch();
  const { username, isEditing } = useSelector((state: RootState) => state.user);

  function handleEditForm() {
    dispatch(setIsEditing(true));
  }

  return (
    <div className='profile'>
      {isEditing ? (
        <Form />
      ) : (
        <div className='profile-data-container'>
          <p>Username: {username}</p>
          <button className='profile-editBtn' onClick={handleEditForm}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
