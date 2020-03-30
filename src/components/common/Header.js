import React from "react";
import { NavLink } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Sidenav from "./sidebar";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            QRDB
          </a>
          <div className="container">
            <Sidenav />
          </div>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">DataBase</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Header;
