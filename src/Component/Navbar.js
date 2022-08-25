import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Redux toolkit
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/employee" className="nav-link">
                  Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link">
                  counter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">
                  Employee List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/message" className="nav-link">
                  Message
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
