import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Données de connexion en dur
    const mockEmail = "pierre.murail@gmail.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      setMessage("You are authenticated");
      navigate('/game');
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4">Login</Typography>
      <form style={{ marginTop: '20px' }} onSubmit={handleLogin}>
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
          Login
        </Button>
      </form>
      {message && <Typography variant="h6" style={{ marginTop: '20px' }}>{message}</Typography>}
    </Container>
  );
};

export default LoginPage;
