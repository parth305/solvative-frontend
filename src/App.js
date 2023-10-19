import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
