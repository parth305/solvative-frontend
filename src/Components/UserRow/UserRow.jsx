import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({ user, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.P5.balance}</td>
      <td>{user.reward.balance}</td>
      <td>
        <Link to={`/${user._id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default UserRow;
