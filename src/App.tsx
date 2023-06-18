// App.tsx
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
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ResponsiveContainer>
        <TopNav onThemeToggle={toggleTheme} isDarkMode={darkMode}/>
        <EmblaCarouselComponent/>
        <Spacer size={1} />
        <CardList isDarkMode={darkMode} />
        <Spacer size={1} />
        <CardList isDarkMode={darkMode} />
        <Spacer size={1} />
        <OrdersTable isDarkMode={darkMode} />
        <BotNav isDarkMode={darkMode} />
      </ResponsiveContainer>
    </ThemeProvider>
  );
}

export default App;
