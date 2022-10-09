import { createSlice } from "@reduxjs/toolkit";

console.log(localStorage.getItem("logged"));
const initialState = {
  status: "checking", // 'checking', 'authenticated', 'not-authenticated'
  uid: JSON.parse(localStorage.getItem("logged"))?.uid,
  email: JSON.parse(localStorage.getItem("logged"))?.email,
  username: JSON.parse(localStorage.getItem("logged"))?.username,
  photoURL: JSON.parse(localStorage.getItem("logged"))?.photoURL,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.username = payload.username;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.username = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
