import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  lastName: null,
  email: null,
  phone: null,
  birthDate: null,
  password: null,
};

const firstRegisterPageSlice = createSlice({
  name: "firstRegisterPage",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPersonalInfo } = firstRegisterPageSlice.actions;
export default firstRegisterPageSlice.reducer;
