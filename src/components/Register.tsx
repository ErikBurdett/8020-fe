import React from 'react';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

export default function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token); // Save the token in localStorage
  };

  const handleOAuthRegister = () => {
    window.location.href = 'http://localhost:3000/auth/google'; // Replace with your Google OAuth URL
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button 
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Register
          </Button>
        </form>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={handleOAuthRegister}
        >
          Register with Google
        </Button>
      </CardContent>
    </Card>
  );
}
