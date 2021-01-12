import React, { useState } from "react";
import "./MiddleSection.css";
import ListContainer from "../ListContainer/ListContainer";
import BtnSec from "../../utilities/BtnSec/BtnSec";
const MiddleSection = () => {
  const [listItems, setListItems] = useState([]);
  const [count, setCount] = useState(0);
  const addItem = () => {
    setListItems((prev) => [...prev, count]);
    setCount((prev) => prev + 1);
    console.log("Run nr " + count);
  };
  // const removeItem = (id) => {
  //   const newList = listItems.filter((item) => item.key !== id);
  //   setListItems(newList);
  // };

  return (
    <section className="middle">
      <div className="verticalLine"></div>
      <ListContainer items={listItems}  />
      <div className="middle__button" onClick={() => addItem()}>
        <BtnSec />
      </div>
    </section>
  );
};

export default MiddleSection;
