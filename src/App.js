import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
//import Counter from "./Component/Counter";
//import Employee from "./Component/Employee";
import UserList from "./Component/UserList";
import Navbar from "./Component/Navbar";
import CounterRedux from "./Component/ReduxComponent/CounterRedux";
import EmployeeRedux from "./Component/ReduxComponent/EmployeeRedux";
import Message from "./Component/Message";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exect element={<Home />} />
          <Route path="/counter" element={<CounterRedux />} />
          <Route path="/employee" element={<EmployeeRedux />} />
          <Route path="/list" element={<UserList />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
