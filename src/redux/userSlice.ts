import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserState from './types';

const userNameFromLS = localStorage.getItem('username');

const initialState: UserState = {
  username: userNameFromLS || '',
  isEditing: !userNameFromLS,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isEditing = false;
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const { updateUser, setIsEditing } = userSlice.actions;
export default userSlice.reducer;
