import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', 
    },
    secondary: {
      main: '#000000', 
    },
  },
  typography: {
    fontFamily: '"IBM Plex Serif", "DM Sans", serif',
    h2: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 700, 
      fontSize: '48px',
      lineHeight: '60px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    h3: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 700, 
      fontSize: '40px',
      lineHeight: '50px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    h4: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 700, 
      fontSize: '32px',
      lineHeight: '38px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    subH1: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 600, 
      fontSize: '26px',
      lineHeight: '30px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    subH2: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 600, 
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    subH3: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    button: {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '20px',
      letterSpacing: '0%',
      textDecoration: 'none',
      textTransform: 'none',
    },
    buttonText2: {
      fontFamily: 'DM Sans',
      fontWeight: 600, 
      fontSize: '18px',
      lineHeight: '20px',
      letterSpacing: '0%',
      textDecoration: 'none',
      textTransform: 'none',
    },
    body1: {
      fontFamily: 'DM Sans',
      fontWeight: 400, 
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    body2: {
      fontFamily: 'DM Sans',
      fontWeight: 400, 
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0%',
      textDecoration: 'none',
    },
    caption: {
      fontFamily: 'DM Sans',
      fontWeight: 700, 
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '13%',
      textTransform: 'uppercase', 
      textDecoration: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          margin: '0 8px',
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none',
    //     },
    //   },
    // },
  },
});

export default theme;
