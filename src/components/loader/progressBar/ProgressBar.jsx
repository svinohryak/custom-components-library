import React, { useState } from "react";
import "./styles.css";

const ProgressBar = ({ loadTime, isUploaded }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `100%`,
      transition: `${loadTime}ms ease`
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progWrapper">
      <div className="progress">
        <div className="progressDone" style={style}>
          {isUploaded && "file was loaded"}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
