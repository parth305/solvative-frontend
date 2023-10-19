// ViewUser.js

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ViewUser.css';

const ViewUser = ({ users, setUser }) => {
    console.log("avdf",users);
  const { id } = useParams();
  console.log(id);
  const user = users.find((user) => user._id === id);

  const [name, setName] = useState(user.name);

  const handleSaveUser = () => {
    setUser((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? { ...u, name } : u))
    );
  };

  return (
    <div>
      <header className="header">
        <h1>Welcome to Your App</h1>
      </header>

      <div className="centered-box">
        <h2>View User</h2>
        <div className="new-user-form">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="button-container">
            <button className="save-button" onClick={handleSaveUser}>
              Save
            </button>
            <Link className="save-button" to={`/${id}/p5`}>P5 Balance</Link>
            <Link className="save-button" to={`/${id}/rewards`}>Reward Balance</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
