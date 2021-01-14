import React from "react";
import "./BtnMain.css";
const BtnMain = ({ text, click }) => {
  return (
    <div className="buttonContainer">
      <button onClick={click} className="buttonContainer__button">
        <span className="button__text">{text}</span>
      </button>
    </div>
  );
};

export default BtnMain;
