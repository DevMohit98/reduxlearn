import counterRedcer from "./Slices/CounterSlice";
import EmployeeReducer from "./Slices/EmployeeSlice";
import notificationReducer from "./Slices/NotificationSlice";
const rootReducer = {
  counter: counterRedcer,
  Employee: EmployeeReducer,
  notification: notificationReducer,
};
export default rootReducer;
