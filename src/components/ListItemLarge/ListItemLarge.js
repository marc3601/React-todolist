import React from "react";
import "./ListItemLarge.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
const ListItemLarge = () => {
  return (
    <li className="ListItemContainer largeContainer">
      <BtnDel/>
      <div className="horizontalLine"></div>
      <div className="ListItemContainer__andText">
      And
      </div>

    </li>
  );
};

export default ListItemLarge;
