import React, { useState } from "react";
import "./ListItemLarge.css";
import BtnDel from "../../utilities/BtnDel/BtnDel";
import ListItemSecondary from "../ListItemSecondary/ListItemSecondary";
import Modal from "../Modal/Modal";
const ListItemLarge = ({ content, deleteEntry, delID }) => {
  const [id, setID] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [listItems, setListItems] = useState([
    { idk: -2, content: "Black " },
    { idk: -1, content: "Hispanic " },
  ]);

  const addItem = () => {
    setModalVisible(!modalVisible);
  };

  const removeItem = (id) => {
    const newList = listItems.filter((item) => item.idk !== id);
    setListItems(newList);
  };

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
            {listItems.map((item) => {
              return (
                <React.Fragment key={item.idk}>
                  <ListItemSecondary
                    delID={item.idk}
                    content={item.content}
                    deleteEntry={removeItem}
                  />
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="horizontalLine"></div>
      <div className="ListItemContainer__andText">And</div>
      <div className="largeContainer__buttonSection">
        <div onClick={() => addItem()} className="largeContainer__addButton">
          <BtnDel isMinus={false} isSmall={true} deleteEntry={() => {}} />
        </div>
      </div>
      {modalVisible && (
        <Modal
          setListItems={setListItems}
          isVisible={setModalVisible}
          setID={setID}
          id={id}
          isSmall={true}
          limit={12}
        />
      )}
    </li>
  );
};

export default ListItemLarge;
