import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#40B36A',
      light: '#399564',
      dark: '#368A65',
    },
    secondary: {
      main: '#F5B725',
      light: '#F5B725',
      dark: '#ED9121',
    },
    info: {
      main: '#E67A3C', // previously extraDark
    },
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#368A65',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#E67A3C', // use the info.main color for all buttons
          '&:hover': {
            backgroundColor: '#ED9121', 
          },
          color: '#ffffff', 
        },
      },
    },
  },
});

export default theme;
