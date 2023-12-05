import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
  userInfo: {
    name: string;
    uuid?: string;
  };
  
  isLoggedIn?: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  userInfo: {
    name: "default",
    uuid: "",
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userInfo.name = action.payload;
      state.isLoggedIn = true;
      state.userInfo.uuid = "123";
    },
    logout: (state) => {
      state.userInfo = { ...initialState.userInfo };
      state.isLoggedIn = initialState.isLoggedIn;
    },
  },
});


export const { login, logout } = userSlice.actions;
export default userSlice.reducer;