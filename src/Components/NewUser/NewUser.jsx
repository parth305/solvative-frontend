import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NewUser.css";

const NewUser = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSaveUser = () => {
    fetch('http://localhost:5000/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
      .then(response => response.json())
      .then(data => {
       console.log(data);
      })
      .catch(error => console.error('Error posting data:', error));
    console.log(`New user saved: ${name}`);

    navigate('/');
  };

  return (
    <div>
      <header className="header">
        <h1>Welcome to Your App</h1>
      </header>

      <div className="centered-box">
        <h2>New User</h2>
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
            <button className="cancel-button" onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
