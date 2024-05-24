// src/PnjPage.tsx
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { mockData } from '../mock-data';
import { useGameContext } from '../context/GameContext';

const PnjPage: React.FC = () => {
  const { generated } = useGameContext();

  if (!generated) {
    return (
      <Container>
        <Typography variant="h5" gutterBottom>
          Please generate the data first.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        PNJs
      </Typography>
      <Grid container spacing={3}>
        {mockData.pnjs.map((pnj, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ backgroundColor: 'transparent', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" style={{ color: 'white' }}>{pnj.name}</Typography>
                <Typography style={{ color: 'white' }}>{pnj.race}</Typography>
                <Typography style={{ color: 'white' }}>{pnj.classField}</Typography>
                <Typography style={{ color: 'white' }}>HP: {pnj.hp}</Typography>
                <Typography style={{ color: 'white' }}>MP: {pnj.mp}</Typography>
                <Typography style={{ color: 'white' }}>Strength: {pnj.strength}</Typography>
                <Typography style={{ color: 'white' }}>Dexterity: {pnj.dexterity}</Typography>
                <Typography style={{ color: 'white' }}>Intelligence: {pnj.intelligence}</Typography>
                <Typography style={{ color: 'white' }}>Wisdom: {pnj.wisdom}</Typography>
                <Typography style={{ color: 'white' }}>Charisma: {pnj.charisma}</Typography>
                <Typography style={{ color: 'white' }}>Constitution: {pnj.constitution}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PnjPage;
