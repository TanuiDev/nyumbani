import { createSlice } from "@reduxjs/toolkit";

export type userSate = {
  accesstoken: string | null;
  user: {
    id: number;
    userName: string;
    emailAddress: string;
    phoneNumber: string;
    profileImage: string | null;   
    role: string;
  } | null;
};

const initialState: userSate = {
  accesstoken: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.accesstoken = action.payload.accesstoken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accesstoken = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;