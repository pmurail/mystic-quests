import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import GamePage from './pages/GamePage';
import ScenarioPage from './pages/ScenarioPage';
import PnjPage from './pages/PnjPage';
import EquipmentsPage from './pages/EquipmentsPage';
import SkillsPage from './pages/SkillsPage';
import { GameProvider } from './context/GameContext';
import Navbar from './components/Navbar';
import HistoryPage from './pages/HistoriquePage';

const App: React.FC = () => {
  return (
    <GameProvider>
      <Router basename="/">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/scenario" element={<ScenarioPage />} />
          <Route path="/pnj" element={<PnjPage />} />
          <Route path="/equipments" element={<EquipmentsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="historique" element={<HistoryPage />}/>
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
