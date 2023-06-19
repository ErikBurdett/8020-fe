import React from 'react';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    
    setAuthState({
      isAuthenticated: true,
      token: data.token,
    });
  };

  const handleLogout = () => {
    setAuthState({
      isAuthenticated: false,
      token: null,
    });
  };
  
  

  const handleOAuthLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google'; // Replace with your Google OAuth URL
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
            Login
          </Button>
        </form>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={handleOAuthLogin}
        >
          Login with Google
        </Button>
      </CardContent>
    </Card>
  );
}
function setAuthState(arg0: { isAuthenticated: boolean; token: any; }) {
    throw new Error('Function not implemented.');
}

