import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import UserRow from './UserRow/UserRow'; 

const Home = ({ users }) => {
  console.log(users);
  const hasUsers = users && users.length > 0;

  return (
    <div>
      <header className="header">
        <h1>Welcome to Your App</h1>
        <Link to="/new" className="new-user-button"> {/* Link to the "/new" route */}
          New User
        </Link>
      </header>
      <div className="homeContainer">
       {hasUsers ? ( 
       <table className='homeTbale'>
       <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>P5 Balance</th>
            <th>Reward Balance</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow key={user.id} user={user} index={index} />
          ))}
        </tbody>
        </table>
        ) : (
          <p>Create a new user to proceed.</p>
      )}
      </div>
    </div>
  )
}

export default Home
