import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Nate Ensign",
      image:
        "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fHww",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
