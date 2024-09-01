import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

export interface CounterState {
  users: User[];
  phoneFilterValue: string;
  emailFilterValue: string;
  nameFilterValue: string;
  usernameFilterValue: string;
}

const initialState: CounterState = {
  users: [],
  phoneFilterValue: '',
  emailFilterValue: '',
  nameFilterValue: '',
  usernameFilterValue: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setPhoneFilterValue: (state, action: PayloadAction<string>) => {
      state.phoneFilterValue = action.payload;
    },
    setEmailFilterValue: (state, action: PayloadAction<string>) => {
      state.emailFilterValue = action.payload;
    },
    setNameFilterValue: (state, action: PayloadAction<string>) => {
      state.nameFilterValue = action.payload;
    },
    setUsernameFilterValue: (state, action: PayloadAction<string>) => {
      state.usernameFilterValue = action.payload;
    },
  },
});

export const selectFilteredUsers = createSelector(
  (state: CounterState) => state.users,
  (state: CounterState) => state.phoneFilterValue.toLowerCase(),
  (state: CounterState) => state.emailFilterValue.toLowerCase(),
  (state: CounterState) => state.nameFilterValue.toLowerCase(),
  (state: CounterState) => state.usernameFilterValue.toLowerCase(),
  (users, phoneFilterValue, emailFilterValue, nameFilterValue, usernameFilterValue) => {
    return users.filter(user =>
      user.phone.toLowerCase().includes(phoneFilterValue) &&
      user.email.toLowerCase().includes(emailFilterValue) &&
      user.name.toLowerCase().includes(nameFilterValue) &&
      user.username.toLowerCase().includes(usernameFilterValue)
    );
  }
);

export const {
  setUsers,
  setPhoneFilterValue,
  setEmailFilterValue,
  setNameFilterValue,
  setUsernameFilterValue,
} = userSlice.actions;

export default userSlice.reducer;
