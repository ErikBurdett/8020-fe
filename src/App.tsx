/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// App.tsx
//@ts-ignore
import ResponsiveContainer from './components/ResponsiveContainer';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme/theme.tsx';
import { CssBaseline } from '@mui/material';
import TopNav from './components/TopNav.tsx';
import BotNav from './components/BotNav.tsx';
import EmblaCarouselComponent from './components/EmblaCarousel.tsx';
import CardList from './components/CardList.tsx';
import Spacer from './components/Spacer.tsx';
import OrdersTable from './components/OrdersTable.tsx';
import SignIn from './components/SignIn.tsx';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Register from './components/Register.tsx';
// import AuthContext, { AuthProvider } from './context/AuthProvider.tsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const authContext = useContext(AuthContext);

  // if (!authContext) {
  //   throw new Error('useAuth must be used within an AuthProvider');
  // }

  // const [authState, setAuthState] = authContext;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      const clientId = 'YOUR_CLIENT_ID';
      const clientSecret = 'YOUR_CLIENT_SECRET';
      const redirectUri = 'YOUR_REDIRECT_URI';

      axios
        .post('https://oauth2.googleapis.com/token', {
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        })
        .then((response) => {
          const accessToken = response.data.access_token;

          // You now have an access token which you can use to make authenticated requests.
          // Depending on your needs, you might store it in memory, in a cookie, in local storage, etc.
          console.log('Access token:', accessToken);
        });
    }
  }, []);

  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* <AuthProvider> */}
      <CssBaseline />
      <ResponsiveContainer>
        <TopNav onThemeToggle={toggleTheme} isDarkMode={darkMode}/>
        <Spacer size={2} />
        <EmblaCarouselComponent/>
        <Spacer size={1} />
        <SignIn />
        <Spacer size={1} />
        <Register />
        <CardList isDarkMode={darkMode} />
        <Spacer size={1} />
        <CardList isDarkMode={darkMode} />
        <Spacer size={1} />
        <OrdersTable/>
        <Spacer size={1} />
        <CardList isDarkMode={darkMode} />
        <Spacer size={2} />
        <BotNav isDarkMode={darkMode} />
      </ResponsiveContainer>
      {/* </AuthProvider> */}
    </ThemeProvider>

  );
}

export default App;
