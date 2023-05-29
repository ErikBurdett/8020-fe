
import ResponsiveContainer from './components/ResponsiveContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.tsx';
import { CssBaseline } from '@mui/material';
import TopNav from './components/TopNav.tsx';
import BotNav from './components/BotNav.tsx';
import EmblaCarouselComponent from './components/EmblaCarousel.tsx';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveContainer>
        <TopNav />
        <EmblaCarouselComponent/>
        <BotNav />
      </ResponsiveContainer>
    </ThemeProvider>
  );
}

export default App; 
