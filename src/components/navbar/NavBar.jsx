import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        My Custom Components and Hooks Library
      </h2>
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
      <div>
        <NavLink
          to="/loader"
          // className={(navDate) =>
          //   navDate.isActive ? classes.active : classes.nonActive
          // }
        >
          Loader
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
