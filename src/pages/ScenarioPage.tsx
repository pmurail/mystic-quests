import React from 'react';
import { Container, Typography } from '@mui/material';
import { mockData } from '../mock-data';

const ScenarioPage = () => {
  const { scenario } = mockData;

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>{scenario.name}</Typography>
      <Typography variant="body1" paragraph>{scenario.scenario}</Typography>
      <Typography variant="subtitle1">Date: {scenario.date}</Typography>
    </Container>
  );
};

export default ScenarioPage;
