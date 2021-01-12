import React from "react";
import "./ListContainer.css";
import ListItem from "../../components/ListItem/ListItem";
import ListItemLarge from "../../components/ListItemLarge/ListItemLarge";
const ListContainer = ({ items }) => {
  return (
    <section className="listContainer">
      <ul className="listItemsDefault">
        <ListItem />
        <ListItemLarge />
        <ListItem />
      </ul>
      <ul className="listItems">
        {items.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <ListItem />
            </React.Fragment>
          );
        })}
      </ul>

      {/* <ul className="listItems">
        <ListItem />
        
      </ul> */}
    </section>
  );
};

export default ListContainer;
