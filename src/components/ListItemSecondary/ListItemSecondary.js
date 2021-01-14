import React from "react";
import "./ListItemSecondary.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
const ListItemSecondary = ({ delID, content, deleteEntry }) => {
  return (
    <li className="listItemSecondary">
      <div className="listItemSecondary_text">
        <span className="textContent">{content}</span>
      </div>
      <div className="listItemSecondary_button">
        <BtnDel isSmall={true} delID={delID} deleteEntry={deleteEntry} />
      </div>
      <div className="horizontalLine smallLine"></div>
      <div className="ListItemContainer__andText orText">Or</div>
    </li>
  );
};

export default ListItemSecondary;
