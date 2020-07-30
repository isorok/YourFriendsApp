import React, { useState, useEffect } from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const users = props.items;

  useEffect(() => {
    setFilteredUsers(
      users.filter( users =>
        users.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  if (users.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }

  return (
    <div>
      <input
        className='users-list__search'
        type="text"
        placeholder= '&#128269; Search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="users-list">
        {filteredUsers.map((user) => (
          <UserItem
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

export default UsersList;
