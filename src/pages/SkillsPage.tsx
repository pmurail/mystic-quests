// src/SkillsPage.tsx
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { mockData } from '../mock-data';
import { useGameContext } from '../context/GameContext';

const SkillsPage: React.FC = () => {
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
        Skills
      </Typography>
      <Grid container spacing={3}>
        {mockData.skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ backgroundColor: 'transparent', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" style={{ color: 'white' }}>{skill.name}</Typography>
                <Typography style={{ color: 'white' }}>{skill.classField}</Typography>
                <Typography style={{ color: 'white' }}>{skill.description}</Typography>
                <Typography style={{ color: 'white' }}>{skill.effect}</Typography>
                <Typography style={{ color: 'white' }}>Cooldown: {skill.cooldown} turns</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsPage;
