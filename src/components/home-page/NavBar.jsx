import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>My Custom Components and Hooks Library</h1>
      <div>
        <NavLink
          to="/intersection"
          // className={(navDate) =>
          //   navDate.isActive ? classes.active : classes.nonActive
          // }
        >
          IntersectionTest
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
