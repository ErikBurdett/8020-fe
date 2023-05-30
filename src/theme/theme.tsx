import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E36905', // Orange
    },
    text: {
      primary: '#000000',
    },
    background: {
      default: '#ffffff', // White background
      paper: '#ffffff',
    },
  },
  // other theme properties...
});

export const theme = createTheme({
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
    mode: 'dark',
    primary: {
      main: '#E36905', // Orange
    },
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#121212', // Black background
      paper: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#E36905', // use the primary.main color for all buttons
          '&:hover': {
            backgroundColor: '#B15604', // Darken on hover
          },
          color: '#ffffff', // White text
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000', // Black AppBar
          color: '#ffffff', // White text
        },
      },
    },
  },
});

export default theme;
