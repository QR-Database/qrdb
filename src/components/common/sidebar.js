import React, { useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";

function Sidenav() {
  useEffect(() => {

    //let instance = M.Sidenav.getInstance(Sidenav);
    //instance.open();
    //console.log(instance.isOpen);
  });

    

  return (

    <div>
      <ul
        ref={Sidenav => {
          M.Sidenav = Sidenav;
        }}
        id="slide-out"
        className="sidenav"
      >
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
      <a href="#!" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
);
}

export default Sidenav;
