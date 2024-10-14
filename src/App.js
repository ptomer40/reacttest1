import logo from './logo.svg'; 
import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [sharedData, setSharedData] = useState();

  const handleLogin = (details) => {
    setSharedData(details);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setSharedData={handleLogin} />} />
          <Route
            path="/success"
            element={<Home userDetails={sharedData} />}
          />
          {/* Redirect if userDetails is not set */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
