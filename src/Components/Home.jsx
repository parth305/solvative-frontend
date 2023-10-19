import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className='homeContainer'>
       <table className='homeTbale'>
        <tr>
            <th className='thHome'>#</th>
            <th className='thHome'>Name</th>
            <th className='thHome'>P5 balance</th>
            <th className='thHome'>Reward Balance</th>
            <th className='thHome'>Login</th>
        </tr>
        <tr>
            <td className='tdHome'>Value 1</td>
            <td className='tdHome'>Value 2</td>
            <td className='tdHome'>Value 1</td>
            <td className='tdHome'>Value 2</td>
            <td className='tdHome'>Value 1</td>
        </tr>
        </table>
    </div>
  )
}

export default Home
