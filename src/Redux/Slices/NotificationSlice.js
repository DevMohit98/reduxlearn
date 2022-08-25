import { createSlice } from "@reduxjs/toolkit";
import NotificationData from "../../Service/NotificationData";
const initialState = {
  notifcation: NotificationData,
};
let NotificationSlice = createSlice({
  name: "Notiication",
  initialState: initialState,
  reducers: {
    markSingleNotification: (state, action) => {
      state.notifcation = state.notifcation.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            has_read: false,
          };
        } else {
          return item;
        }
      });
    },
    markAllNotification: (state, action) => {},
  },
});
export const { markAllNotification, markSingleNotification } =
  NotificationSlice.actions;
export default NotificationSlice.reducer;
