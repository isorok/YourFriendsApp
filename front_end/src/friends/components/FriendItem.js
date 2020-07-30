import React from "react";

import Avatar from "../../shared/components/UIElements/Avatar";
import "./FriendItem.css";

const FriendItem = (props) => {
  if (props.status === "friend") {
    return (
      <li className="friend-item">
        <div className="friend-item__content">
          <div className="friend-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="friend-item__info">
            <h2>{props.name}</h2>
          </div>
          <span> friend </span>
          <button>Remove Friend</button>
        </div>
      </li>
    );
  }
  if (props.status === "incoming") {
    return (
      <li className="friend-item">
        <div className="friend-item__content">
          <div className="friend-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="friend-item__info">
            <h2>{props.name}</h2>
          </div>
          <button>Accept</button>
          <button>Ignore</button>
        </div>
      </li>
    );
  }
  if (props.status === "outgoing") {
    return (
      <li className="friend-item">
        <div className="friend-item__content">
          <div className="friend-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="friend-item__info">
            <h2>{props.name}</h2>
          </div>
          <span>pending request</span>
          <button>Cancel request</button>
        </div>
      </li>
    );
  }
};

export default FriendItem;
