import { colors } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Users.css";

export const Users = () => {
  const [responseData, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3800/course/admin/users");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        const responseData=data.user;
        if(Array.isArray(responseData)) {
          setUsers(responseData);
          console.log(responseData);
        } else {
          console.error("Fetched data is not an array:", responseData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);
  const handleDeleteUser = async (userId) => {
    
    try {
      const response = await fetch(`http://localhost:3800/course/admin/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      // Remove the deleted user from the list
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  return (
    <div className="userpage">
      <h2 className="users">Users</h2>
      <ul className="user-list">
        {responseData &&
          responseData.length > 0 &&
          responseData.map((user, index) => (
            <li key={index} className="user-card">
              <div className="user-info">
                <span className="info-label">Name:</span> {user.username}
              </div>
              <div className="user-info">
                <span className="info-label">Email:</span> {user.email}
              </div>
              <button onClick={() => handleDeleteUser(user._id)} className="delete-button">
              Delete
            </button>
              
            </li>
          ))}
      </ul>
    </div>
  );
  
  
};

export default Users;
