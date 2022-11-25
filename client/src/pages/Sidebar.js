import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container text-dark mt-5 justify-content-center">
          <ul className="navbar-nav gap-5 ">
            <li className="nav-item ">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/employee">Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
