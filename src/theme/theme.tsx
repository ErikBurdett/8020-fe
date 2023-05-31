import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#EFBE7D', // Pastel Orange
    },
    secondary: {
      main: '#77dd77', // Pastel Green
    },
    background: {
      default: '#FAF8F6', // Pastel White
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAF8F6', // Pastel White
          color: 'black', // Dark text for contrast
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#EFBE7D', // Pastel Orange
          color: 'black', // Dark text for contrast
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#EFBE7D', // Pastel Orange for AppBar
          color: 'black', // Dark text for contrast
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#EFBE7D', // Pastel Orange
    },
    secondary: {
      main: '#8BD3E6', // Pastel Blue
    },
    background: {
      default: '#1D1C1A', // Pastel Black
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1D1C1A', // Pastel Black
          color: 'white', // Light text for contrast
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#EFBE7D', // Pastel Orange
          color: 'black', // Dark text for contrast in dark mode
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#EFBE7D', // Pastel Orange for AppBar
          color: 'black', // Dark text for contrast in dark mode
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
