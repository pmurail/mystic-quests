import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import './styles/HomePage.css';
import logo from '../assets/logo.png';  // Assurez-vous que le chemin et le nom de l'image sont corrects

const HomePage: React.FC = () => {
  console.log('Logo Path:', logo);  // Vérifiez le chemin de l'image dans la console
  return (
    <div className="home">
      <div className="header-container">
        <Typography variant="h2" className="home-title">Mystic Quests</Typography>
        <div className="logo-container">
          <img src={logo} alt="Mystic Quests Logo" className="home-logo" />
        </div>
      </div>
      <Container className="home-container">
        <Typography variant="h6" className="home-subtitle">
          You need to have an account to use the application.
        </Typography>
        <div className="home-buttons">
          <Link to="/login" style={{ textDecoration: "none", marginRight: "10px" }}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
