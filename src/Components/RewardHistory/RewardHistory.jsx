// RewardHistory.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./RewardHistory.css";

const RewardHistory = () => {
  const { id } = useParams();

  const[rewardHistoryData,setrewardHistoryData]=useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/transecation/reward/'+id)
      .then(response => response.json())
      .then(data =>{ setrewardHistoryData(data)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div>
      <header className="header">
        <h1>Reward History for User {id}</h1>
      </header>

      <div className="centered-box">
        <h2>Reward History</h2>

        <table className="reward-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date-Time</th>
              <th>Rewards Received</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {rewardHistoryData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.createdAt}</td>
                <td>{item.amount}</td>
                <td>{item.givenBy.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RewardHistory;
