import React from "react";

import FriendsList from "../components/FriendsList";
import IncomingList from "../components/IncomingList";
import OutgoingList from "../components/OutgoingList";

const UserFriends = () => {
    const USERS = [
        {
          id: "1",
          name: "Ihor Sorokin",
          image:
            "https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
          status: "friend",
        },
        {
            id: "2",
            name: "Marko Vovchok",
            image:
              "https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
            status: "outgoing",
          },
          {
            id: "3",
            name: "Vova Fedyshyn",
            image:
              "https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
            status: "incoming",
          }
      ];
  return (
    <React.Fragment>
        <h1 className='center'>Pending Requests</h1>
      <IncomingList items={USERS}/>
      <OutgoingList items={USERS}/>
      <FriendsList items={USERS}/>
    </React.Fragment>
  );
};

export default UserFriends;
