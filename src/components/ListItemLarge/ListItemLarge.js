import React from "react";
import "./ListItemLarge.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
import ListItemSecondary from "../ListItemSecondary/ListItemSecondary";
const ListItemLarge = ({ content, deleteEntry, delID }) => {
  return (
    <li className="ListItemContainer largeContainer">
      <div className="largeContainer__content">
        <div className="ethnicityContainer">
          <div className="ethnicity">
            <span className="ethnicity_text">{content}</span>
          </div>
          <div className="ethnicityDelete">
            <BtnDel delID={delID} deleteEntry={deleteEntry} />
          </div>
        </div>
        <div className="listContainerSmall">
        <div className="verticalLine smallLine"></div>
          <ul className="listItemsSmall">
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
            <ListItemSecondary />
          </ul>
        </div>
      </div>
      <div className="horizontalLine"></div>
      <div className="ListItemContainer__andText">And</div>
    </li>
  );
};

export default ListItemLarge;
