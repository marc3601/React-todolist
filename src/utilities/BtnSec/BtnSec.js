import React from "react";
import "./BtnSec.css";
const BtnSec = () => {
  return (
  
      <button className="buttonSecContainer__button">
        <div className="buttonSec__iconContainer">
          <svg
            className="plus__sign"
            height="20"
            viewBox="0 0 430 450"
            width="20"
            fill="#fff"
          >
            <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
          </svg>
        </div>
      </button>
   
  );
};

export default BtnSec;
