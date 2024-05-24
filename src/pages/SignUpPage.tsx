import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Simulation de l'inscription avec des données en dur
    setMessage("User registered successfully!");
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4">Signup</Typography>
      <form style={{ marginTop: '20px' }} onSubmit={handleSignup}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Signup
        </Button>
      </form>
      {message && <Typography variant="h6" style={{ marginTop: '20px' }}>{message}</Typography>}
    </Container>
  );
};

export default SignupPage;
