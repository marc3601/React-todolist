import React from "react";
import "./ListItemSecondary.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
const ListItemSecondary = () => {
  return (
    <li className="listItemSecondary">
      <div className="listItemSecondary_text">
        <span className="textContent">Test</span>
      </div>
      <div className="listItemSecondary_button">
        <BtnDel isSmall={true} />
      </div>
    </li>
  );
};

export default ListItemSecondary;
