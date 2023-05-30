// App.tsx
import ResponsiveContainer from './components/ResponsiveContainer';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, theme } from './theme/theme.tsx';
import { CssBaseline } from '@mui/material';
import TopNav from './components/TopNav.tsx';
import BotNav from './components/BotNav.tsx';
import EmblaCarouselComponent from './components/EmblaCarousel.tsx';
import CardList from './components/CardList.tsx';
import Spacer from './components/Spacer.tsx';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme : lightTheme}>
      <CssBaseline />
      <ResponsiveContainer>
        <TopNav onThemeToggle={toggleTheme} isDarkMode={isDarkMode}/>
        <EmblaCarouselComponent/>
        <Spacer size={1} />
        <CardList />
        <Spacer size={1} />
        <CardList />
        <Spacer size={1} />
        <BotNav />
      </ResponsiveContainer>
    </ThemeProvider>
  );
}

export default App;
