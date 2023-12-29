import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
  userId: string;
  isLoggedIn?: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  userId: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userId = initialState.userId;
      state.isLoggedIn = initialState.isLoggedIn;
    },
  },
});


export const { login, logout } = userSlice.actions;
export default userSlice.reducer;