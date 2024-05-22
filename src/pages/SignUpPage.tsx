import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const SignUpPage: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4">Sign Up</Typography>
      <form style={{ marginTop: '20px' }}>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        <TextField label="Confirm Password" type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="secondary" type="submit" style={{ marginTop: '20px' }}>Sign Up</Button>
      </form>
    </Container>
  );
}

export default SignUpPage;
