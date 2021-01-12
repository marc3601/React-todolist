import React from "react";
import "./ListItem.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
const ListItem = () => {
  return (
    <li  className="ListItemContainer">
      <div className="ListItemContainer__text">
        <span className="textContent">Age 40+</span>
      </div>
      <div className="ListItemContainer__button">
        <BtnDel />
      </div>
      <div className="horizontalLine"></div>
      <div className="ListItemContainer__andText">And</div>
    </li>
  );
};

export default ListItem;
