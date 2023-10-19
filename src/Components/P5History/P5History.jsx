// P5History.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './P5History.css';

const P5History = () => {
  const { id } = useParams();
const[p5HistoryData,setp5HistoryData]=useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/transecation/p5/'+id)
      .then(response => response.json())
      .then(data =>{console.log("hey",data); setp5HistoryData(data)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <header className="header">
        <h1>P5 History for User {id}</h1>
      </header>

      <div className="centered-box">
        <h2>P5 History</h2>
        <Link to={`/${id}/rewards/new`} className="new-reward-button">
          Create New Reward
        </Link>

        <table className="p5-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date-Time</th>
              <th>P5 Given</th>
              <th>User Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {p5HistoryData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.createdAt}</td>
                <td>{item.givenBy.P5.balance}</td>
                <td>{item.givenBy.name}</td>
                <td>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default P5History;
