import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import { saveUserToLocalStorageMiddleware } from './userMiddlewares';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveUserToLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
