import React, { useState } from "react";
import "./Modal.css";
import BtnMain from "../../utilities/BtnMain/BtnMain";
const Modal = ({
  setListItems,
  isVisible,
  setID,
  id,
  isSmall = false,
  limit,
}) => {
  const [inputText, setInputText] = useState("");
  const [alert, setAlert] = useState(false);
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const createEntry = (e) => {
    e.preventDefault();
    setID((prev) => prev + 1);
    setListItems((prev) => [...prev, { idk: id, content: inputText }]);
    isVisible(false);
  };
  return (
    <>
      <div
        className={
          !isSmall
            ? `ListItemContainer modalContainer`
            : `ListItemContainer modalContainer modalContainer__small`
        }
      >
        <form action="#" className="modalContainer__inputForm">
          <label className="modalContainer__text" htmlFor="text">
            Enter the text
          </label>
          <input
            onChange={handleInput}
            maxLength={limit}
            className={
              !alert ? "modalContainer__input" : "modalContainer__input alert"
            }
            id="text"
            type="text"
            placeholder={alert ? "Enter text to proceed!" : "Enter text"}
          />
          <BtnMain
            text="Submit"
            click={(e) => {
              if (/^ *$/.test(inputText)) {
                setAlert(true);
              } else {
                setAlert(false);
                createEntry(e);
              }
            }}
          />
        </form>
      </div>
      <div
        onClick={() => isVisible(false)}
        className="modalContainer__background"
      ></div>
    </>
  );
};

export default Modal;
