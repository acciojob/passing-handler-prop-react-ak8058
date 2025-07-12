import React, { useState } from "react";
const Selection = ({ applyColor }) => {
  const [bgStyle, setBgStyle] = useState({ background: "" });
  const handleClick = () => {
    applyColor(setBgStyle);
  };
  return <div className="fix-box" style={bgStyle} onClick={handleClick}></div>;
};

export default Selection;
