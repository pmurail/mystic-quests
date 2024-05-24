// src/EquipmentsPage.tsx
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { mockData } from '../mock-data';
import { useGameContext } from '../context/GameContext';

const EquipmentsPage: React.FC = () => {
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
        Equipments
      </Typography>
      <Grid container spacing={3}>
        {mockData.equipments.map((equipment, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ backgroundColor: 'transparent', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" style={{ color: 'white' }}>{equipment.name}</Typography>
                <Typography style={{ color: 'white' }}>{equipment.classField}</Typography>
                <Typography style={{ color: 'white' }}>{equipment.description}</Typography>
                <Typography style={{ color: 'white' }}>{equipment.effect}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EquipmentsPage;
