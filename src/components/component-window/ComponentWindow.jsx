import React from "react";
// import HomePage from ''
import IntersectionTest from "../intersection-test/IntersectionTest";
import { Route, Routes, NavLink } from "react-router-dom";
import classes from "./ComponentWindow.module.scss";

const ComponentWindow = () => {
  return (
    <div className={classes.container}>
      <div className={classes.backhomelink}>
        <NavLink
          to="/home"
          className={(navDate) =>
            navDate.isActive ? classes.active : classes.nonActive
          }
        >
          Back to Home Page
        </NavLink>
      </div>
      <main className={classes.wrapper}>
        <Routes>
          <Route path="/intersection" element={<IntersectionTest />} />
        </Routes>
      </main>
    </div>
  );
};

export default ComponentWindow;
