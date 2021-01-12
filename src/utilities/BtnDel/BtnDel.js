import React from "react";
import "./BtnDel.css";
const BtnDel = ({ id }) => {
  return (
    <button className="buttonSecContainer__button minusContainer">
      <div className="buttonSec__iconContainer minus">
        <svg
          className="minus__sign"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M0 10h24v4h-24z" />
        </svg>
      </div>
    </button>
  );
};

export default BtnDel;
