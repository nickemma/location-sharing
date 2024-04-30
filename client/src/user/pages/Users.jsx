import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Techie Emma",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
