import React, { useEffect} from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  useEffect(() => {
    let elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 300,
      outDuration: 300
    });
  });

   function CloseNav(){
    let elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left" 
    });
  } 

  

  return (
    <React.Fragment>
      <ul id="slide-out" className="sidenav">
      <li>
              <NavLink to="/" onClick={CloseNav}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses" onClick={CloseNav}>DataBase</NavLink>
            </li>
            <li>
              <NavLink to="/dual" onClick={CloseNav}>Create</NavLink>
            </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </React.Fragment>
  );
}

export default SideBar;