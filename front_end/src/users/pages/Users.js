import React, {useEffect} from "react";

import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Ihor Sorokin",
      image:
        "https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
      status: "outgoing",
    },
    {
        id: "2",
        name: "Marko Vovchok",
        image:
          "https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
        status: "incoming",
      },
      {
        id: "3",
        name: "Vova Fedyshyn",
        image:
          "https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
        status: "friend",
      }
  ];

//   useEffect(() =>{
//     fetch('http://http://localhost:5000/api/users/:id')
//   })
  return <UsersList items={USERS} />;
};

export default Users;
