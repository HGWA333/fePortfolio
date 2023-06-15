import { createSlice } from "@reduxjs/toolkit";

const btnSlice = createSlice({
  name: "btn",
  initialState: Array(50)
    .fill()
    .map((_, id) => ({ id: `btn-${id}`, isHovering: false })),
  reducers: {
    setBtn: (state, action) => {
      const { id, isHovering } = action.payload;
      const btnIndex = state.findIndex(btn => btn.id === id);

      if (btnIndex !== -1) {
        state[btnIndex].isHovering = isHovering;
      }
    },
  },
});
export const { setBtn } = btnSlice.actions;

export default btnSlice.reducer;
