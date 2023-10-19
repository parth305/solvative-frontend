import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NewUser from "./Components/NewUser/NewUser";
import ViewUser from "./Components/ViewUser/ViewUser";
import P5History from "./Components/P5History/P5History";
import RewardHistory from "./Components/RewardHistory/RewardHistory";
import NewReward from "./Components/NewReward/NewReward";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/user')
      .then(response => response.json())
      .then(data =>{console.log(data); setUserData(data)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Home users={usersData}/>}  />
        <Route exact path="/new" element={<NewUser />} />
        <Route
            path="/:id"
            element={<ViewUser users={usersData} />}
        />
        <Route path="/:id/p5" element={<P5History />} />
        <Route path="/:id/rewards" element={<RewardHistory />} />
        <Route path="/:id/rewards/new" element={<NewReward usersData={usersData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
