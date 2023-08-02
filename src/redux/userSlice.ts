import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserState from './types';

const initialState: UserState = {
  username: localStorage.getItem('username') || '',
  isEditing: !localStorage.getItem('username'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const { updateUser, setIsEditing } = userSlice.actions;
export default userSlice.reducer;
