import React from "react";
import "./ListItem.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
const ListItem = ({ content,deleteEntry,delID }) => {
  return (
    <li className="ListItemContainer">
      <div className="ListItemContainer__text">
        <span className="textContent"> {content}</span>
      </div>
      <div className="ListItemContainer__button">
        <BtnDel delID={delID} deleteEntry={deleteEntry} />
      </div>
      <div className="horizontalLine"></div>
      <div className="ListItemContainer__andText">And</div>
    </li>
  );
};

export default ListItem;
