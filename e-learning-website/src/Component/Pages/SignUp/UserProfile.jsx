// UserProfile.js (React component)
import React, { useState, useEffect } from 'react';
import { useAuth } from "../../../context/auth";
import { useNavigate } from 'react-router-dom';
import "./UserProfile.css";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const userId=localStorage.getItem("id");
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:3800/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const userData = await response.json();
        setUser(userData.user);
      } catch (err) {
        setError(err.message || 'Server Error');
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
      id: "",
      role:"",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    navigate("/sign-in");

  };
  

  return (
    <div className="user-profile-card">
      <div className="card-content">
        <h2>User Profile</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <button
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
