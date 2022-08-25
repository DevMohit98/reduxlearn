import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
let CounterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    By5: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { increment, decrement, By5 } = CounterSlice.actions;
export default CounterSlice.reducer;
