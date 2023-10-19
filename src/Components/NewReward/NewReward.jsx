// NewReward.js

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./NewReward.css";

const NewReward = ({usersData}) => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [selectedUser, setSelectedUser] = useState('');
  const [rewardAmount, setRewardAmount] = useState(0);

  const maxRewardAmount = usersData.find((user) => user._id === id).P5.balance;

  const handleRewardSubmit = () => {
    console.log({amount:rewardAmount,givenTo:selectedUser});
    fetch('http://localhost:5000/api/v1/transecation/'+id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({amount:rewardAmount,givenTo:usersData.filter(el=>el.name===selectedUser)[0]}),
    })
      .then(response => response.json())
      .then(data => {
       console.log("success",data);
      })
      .catch(error => console.error('Error posting data:', error));
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
              .filter((user) => user._id !== id, 10) 
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
