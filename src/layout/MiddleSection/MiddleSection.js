import React, { useState } from "react";
import "./MiddleSection.css";
import ListContainer from "../ListContainer/ListContainer";
import BtnSec from "../../utilities/BtnSec/BtnSec";
import Modal from "../../components/Modal/Modal";
const MiddleSection = () => {
  const [id, setID] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);
  const [listItems, setListItems] = useState([
    { idk: 0, content: "Age 40+" },
    { idk: 1, content: "Ethnicity" },
    { idk: 2, content: "Income yearly 45k USD+" },
  ]);
  const addItem = () => {
    setModalVisible(!modalVisible);
  };

  const removeItem = (id) => {
    const newList = listItems.filter((item) => item.idk !== id);
    setListItems(newList);
  };

  return (
    <section className="middle">
      <div className="verticalLine"></div>
      <ListContainer items={listItems} deleteEntry={removeItem} />
      <div className="middle__button" onClick={addItem}>
        <BtnSec />
      </div>
      {modalVisible && (
        <Modal
          setListItems={setListItems}
          isVisible={setModalVisible}
          setID={setID}
          id={id}
          limit={20}
        />
      )}
    </section>
  );
};

export default MiddleSection;
