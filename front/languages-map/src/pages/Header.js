import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <header>
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <NavLink to="/"> Home </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/creating"> Create City </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
