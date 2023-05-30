
import ResponsiveContainer from './components/ResponsiveContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.tsx';
import { CssBaseline } from '@mui/material';
import TopNav from './components/TopNav.tsx';
import BotNav from './components/BotNav.tsx';
import EmblaCarouselComponent from './components/EmblaCarousel.tsx';
import CardList from './components/CardList.tsx';
import Spacer from './components/Spacer.tsx';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveContainer>
        <TopNav />
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
