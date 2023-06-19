/* eslint-disable @typescript-eslint/no-unused-vars */

export function LoginButton() {
    const handleClick = () => {
      const clientId = 'YOUR_CLIENT_ID';
      const redirectUri = 'YOUR_REDIRECT_URI';
      const scope = 'https://www.googleapis.com/auth/userinfo.profile';
  
      const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  
      // Redirect the user to the OAuth provider's authorization endpoint
      window.location.href = authorizationUrl;
    };
  
    return <button onClick={handleClick}>Log in with Google</button>;
  }
  