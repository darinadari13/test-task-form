import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function UserProfileDisplay() {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div>
      <p>Username: {username}</p>
    </div>
  );
}

export default UserProfileDisplay;
