import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "loading",
  initialState: "",
  reducers: {
    setAccount: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
