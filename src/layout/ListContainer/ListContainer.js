import React from "react";
import "./ListContainer.css";
import ListItem from "../../components/ListItem/ListItem";
import ListItemLarge from "../../components/ListItemLarge/ListItemLarge";
const ListContainer = ({ items, deleteEntry }) => {
  return (
    <section className="listContainer">
      <ul className="listItems">
        {items.map((item) => {
          return (
            <React.Fragment key={item.idk}>
              {item.idk !== 1 ? (
                <ListItem
                  delID={item.idk}
                  content={item.content}
                  deleteEntry={deleteEntry}
                />
              ) : (
                <ListItemLarge
                  delID={item.idk}
                  content={item.content}
                  deleteEntry={deleteEntry}
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default ListContainer;
