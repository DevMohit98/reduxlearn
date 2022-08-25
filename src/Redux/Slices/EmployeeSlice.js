import { createSlice } from "@reduxjs/toolkit";
import EmployeeData from "../../Service/EmployeeData";
const initialState = {
  employee: EmployeeData,
};
let EmployeeSlice = createSlice({
  name: "Employee",
  initialState: initialState,
  reducers: {
    updateSelected: (state, action) => {
      state.employee = state.employee.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        } else {
          return item;
        }
      });
    },
  },
});
export const { updateSelected } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
