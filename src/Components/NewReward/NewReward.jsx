// NewReward.js

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./NewReward.css";

const NewReward = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const usersData = [
   
  ];

  const [selectedUser, setSelectedUser] = useState('');
  const [rewardAmount, setRewardAmount] = useState(0);

  const maxRewardAmount = usersData.find((user) => user.id === parseInt(id, 10)).p5Balance;

  const handleRewardSubmit = () => {
  
    navigate(`/${id}/p5`);
  };

  return (
    <div>
      <header className="header">
        <h1>Create New Reward for User {id}</h1>
      </header>

      <div className="centered-box">
        <h2>New Reward</h2>

        <form>
          <label>Select User to Reward:</label>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">-- Select User --</option>
            {usersData
              .filter((user) => user.id !== parseInt(id, 10)) 
              .map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
          </select>

          <label>Enter Reward Amount (Max {maxRewardAmount}):</label>
          <input
            type="number"
            value={rewardAmount}
            onChange={(e) => setRewardAmount(e.target.value)}
            max={maxRewardAmount}
          />
          <div>Current P5 Balance: {maxRewardAmount}</div>

          <button
            type="button"
            onClick={handleRewardSubmit}
            disabled={rewardAmount > maxRewardAmount || rewardAmount <= 0}
          >
            Submit Reward
          </button>
          <Link to={`/${id}/p5`} className="cancel-button">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewReward;
