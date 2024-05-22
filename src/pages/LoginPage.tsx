import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4">Login</Typography>
      <form style={{ marginTop: '20px' }}>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>Login</Button>
      </form>
    </Container>
  );
};

export default LoginPage;
