import React, { useState } from 'react';
import { Container, Grid, IconButton, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles/GamePage.css';
import scenarioImage from '../assets/scenario.webp';
import pnjImage from '../assets/pnj.webp';
import equipmentsImage from '../assets/equipments.webp';
import skillsImage from '../assets/skills.webp';
import generateIcon from '../assets/button-icon.png'; 

const GamePage: React.FC = () => {
  const [data, setData] = useState(null);

  const handleGenerateClick = async () => {
    try {
      const response = await fetch('https://mystic-quests-api.onrender.com/api/openai/generate?prompt=test');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container className="game-container">
      <IconButton className="generate-button" onClick={handleGenerateClick}>
        <img src={generateIcon} alt="Generate" className="generate-icon" />
      </IconButton>
      {data && (
        <div className="generated-data">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <Grid container spacing={4} className="cards-container">
        <Grid item xs={12} sm={6}>
          <Card className="game-card">
            <CardActionArea className="card-action-area">
              <CardMedia
                component="img"
                className="card-media"
                image={scenarioImage}
                alt="Scenario"
              />
              <div className="card-overlay">
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  Scenario
                </Typography>
                <Link to="/scenario" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">Go to Scenario</Button>
                </Link>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="game-card">
            <CardActionArea className="card-action-area">
              <CardMedia
                component="img"
                className="card-media"
                image={pnjImage}
                alt="PNJ"
              />
              <div className="card-overlay">
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  PNJ
                </Typography>
                <Link to="/pnj" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">Go to PNJ</Button>
                </Link>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="game-card">
            <CardActionArea className="card-action-area">
              <CardMedia
                component="img"
                className="card-media"
                image={equipmentsImage}
                alt="Equipments"
              />
              <div className="card-overlay">
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  Equipments
                </Typography>
                <Link to="/equipments" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">Go to Equipments</Button>
                </Link>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="game-card">
            <CardActionArea className="card-action-area">
              <CardMedia
                component="img"
                className="card-media"
                image={skillsImage}
                alt="Skills"
              />
              <div className="card-overlay">
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  Skills
                </Typography>
                <Link to="/skills" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">Go to Skills</Button>
                </Link>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GamePage;
