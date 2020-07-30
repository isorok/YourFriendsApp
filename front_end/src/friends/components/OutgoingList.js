import React from "react";

import FriendItem from "./FriendItem";
import "./FriendsList.css";

const OutgoingList = (props) => {
 
  const result = props.items.filter(user => user.status === 'outgoing')

  if (result.length === 0) {
    return (
      <div className="center">
        <h2>No outgoing found</h2>
      </div>
    );
  }

    return (
      <div>
        <h2 className="title">Outgoing</h2>
        <ul className="friends-list">
          {result.map((user) => (
            <FriendItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              status={user.status}
            />
          ))}
        </ul>
      </div>
    );
};

export default OutgoingList;
