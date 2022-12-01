import React, { useEffect, useState } from "react";
import classes from "./AllUsers.module.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/`);
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsers();
  }, []);

  return (
    <div className={classes.userPage}>
      <h4>All users:</h4>
      {users.map((user) => (
        <div className={classes.user}>
          <div>Id: {user._id}</div>
          <div>Username: {user.username}</div>
          <div>E-mail: {user.email}</div>
          <div>isAdmin: {user.isAdmin ? "True" : "False"}</div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
