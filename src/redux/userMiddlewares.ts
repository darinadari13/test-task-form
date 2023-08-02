import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { USERNAME_KEY_FOR_LS } from '../constants';
import { updateUser } from './userSlice';

export const saveUserToLocalStorageMiddleware = () => (next: Dispatch<AnyAction>) => (action: any) => {
  if (updateUser.match(action)) {
    localStorage.setItem(USERNAME_KEY_FOR_LS, action.payload);
  }

  return next(action);
};
