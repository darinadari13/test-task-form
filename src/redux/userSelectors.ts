import { RootState } from './store';

export const userNameSelector = (state: RootState) => {
  return state.user.username;
};
