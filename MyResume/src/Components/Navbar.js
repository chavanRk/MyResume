import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar">
        <NavLink to="/">
          {" "}
          <i class="fas fa-home"></i> <span>home</span>{" "}
        </NavLink>
        <NavLink to="/about">
          {" "}
          <i class="fas fa-user"></i> <span>about</span>{" "}
        </NavLink>
        <NavLink to="/portfolio">
          {" "}
          <i class="fas fa-briefcase"></i> <span>portfolio</span>{" "}
        </NavLink>

        <NavLink to="/contact">
          {" "}
          <i class="fas fa-address-book"></i> <span>contact</span>{" "}
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
