import React from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, setIsEditing } from '../../redux/userSlice';
import Form from '../Form/Form';

export function UserProfile() {
  const dispatch = useDispatch();
  const { username, isEditing } = useSelector((state: RootState) => state.user);

  function handleEditForm() {
    dispatch(setIsEditing(true));
  }

  return (
    <div>
      {isEditing ? (
        <Form />
      ) : (
        <div>
          <p>Username: {username}</p>
          <button onClick={handleEditForm}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
