// import "./style.scss";
import classes from "./IntersectionTest.module.scss";
import { useRef } from "react";
import useIsOnScreen from "./hooks/useIsOnScreen";
import imageOfplate from "./images/plate.jpg";

function IntersectionTest() {
  const targetRef = useRef();

  const isVisible = useIsOnScreen(targetRef);

  isVisible
    ? console.log(targetRef, "You can see div")
    : console.log(targetRef, "You can NOT see div");

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        {isVisible ? "AAAAmmmm.." : "...mmmMMM"}
      </div>
      <div className={classes.section}></div>
      <div ref={targetRef} className={classes.targetElement}>
        <img src={imageOfplate} alt="" />
      </div>
    </div>
  );
}

export default IntersectionTest;
