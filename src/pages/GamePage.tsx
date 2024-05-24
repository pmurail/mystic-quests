import React, { useState } from 'react';
import { Container, Grid, IconButton, Card, CardActionArea, CardMedia, Typography, Button, CircularProgress, Snackbar, Backdrop } from '@mui/material';
import { Link, To, useNavigate } from 'react-router-dom';
import './styles/GamePage.css';
import scenarioImage from '../assets/scenario.webp';
import pnjImage from '../assets/pnj.webp';
import equipmentsImage from '../assets/equipments.webp';
import skillsImage from '../assets/skills.webp';
import generateIcon from '../assets/button-icon.png';
import { useGameContext } from '../context/GameContext';

const GamePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { generated, setGenerated } = useGameContext();
  const navigate = useNavigate();

  const handleGenerateClick = async () => {
    if (!generated) {
      setLoading(true);
      setError('');

      setTimeout(() => {
        // Simulate successful data generation
        setGenerated(true);
        setLoading(false);
      }, 4000);
    }
    else{
      setError("You've already generated a game - wait until tomorrow for a new attempt")
    }
  };

  const handleCardClick = (path: To) => {
    if (!generated) {
      setError('Please generate the data first.');
      return;
    }
    navigate(path);
  };

  return (
    <Container className="game-container">
      <IconButton className="generate-button" onClick={handleGenerateClick} disabled={loading}>
        <img src={generateIcon} alt="Generate" className="generate-icon" />
      </IconButton>
      <Grid container spacing={4} className="cards-container">
        <Grid item xs={12} sm={6}>
          <Card className="game-card" onClick={() => handleCardClick('/scenario')}>
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
                <Button variant="contained" color="primary">Go to Scenario</Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="game-card" onClick={() => handleCardClick('/pnj')}>
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
                <Button variant="contained" color="primary">Go to PNJ</Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="game-card" onClick={() => handleCardClick('/equipments')}>
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
                <Button variant="contained" color="primary">Go to Equipments</Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="game-card" onClick={() => handleCardClick('/skills')}>
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
                <Button variant="contained" color="primary">Go to Skills</Button>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
        message={error}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default GamePage;
