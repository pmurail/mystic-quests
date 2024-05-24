import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import GamePage from './pages/GamePage';

const App: React.FC = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/game" element={<GamePage />} />
        {/* <Route path="/scenario" element={<div>Scenario Page</div>} />  
        <Route path="/pnj" element={<div>PNJ Page</div>} /> 
        <Route path="/equipments" element={<div>Equipments Page</div>} />
        <Route path="/skills" element={<div>Skills Page</div>} />  */}
      </Routes>
    </Router>
  );
}

export default App;
