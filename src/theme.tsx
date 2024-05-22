import { createTheme } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import backgroundImage from './assets/background.webp';  // Vérifiez le chemin de l'image

const theme = createTheme({
  typography: {
    fontFamily: "'Texturina', serif",
    allVariants: {
      color: '#f0f0f0',  // Couleur du texte plus visible
    },
    h1: {
      fontFamily: "'Texturina', serif",
      fontWeight: 900,
      color: '#ffffff',  // Couleur du texte pour les titres
    },
    h2: {
      fontFamily: "'Texturina', serif",
      fontWeight: 900,
      color: '#ffffff',  // Couleur du texte pour les titres
    },
    // Ajoutez d'autres styles de typographie si nécessaire
  },
  palette: {
    primary: {
      main: '#ffffff',  // Définir la couleur principale comme blanc
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ffffff',  // Couleur de la bordure par défaut
            },
            '&:hover fieldset': {
              borderColor: '#ffffff',  // Couleur de la bordure au survol
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffff',  // Couleur de la bordure lorsque le champ est focalisé
            },
            color: '#ffffff',
          },
          '& .MuiInputLabel-root': {
            color: '#ffffff',  // Couleur du label
          },
        },
      },
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        fontFamily: "'Texturina', serif",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        margin: 0,
        padding: 0,
        color: '#f0f0f0',  // Couleur du texte global
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '.MuiContainer-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Fond semi-transparent pour les conteneurs
        padding: '20px',
        borderRadius: '8px',
      },
      '.MuiButton-containedPrimary': {
        backgroundColor: '#ff5722',  // Couleur de fond des boutons
        color: '#ffffff',  // Couleur du texte des boutons
      },
      '.MuiButton-containedSecondary': {
        backgroundColor: '#4caf50',  // Couleur de fond des boutons
        color: '#ffffff',  // Couleur du texte des boutons
      },
      input: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Fond des champs de formulaire
        color: '#000000',  // Couleur du texte des champs de formulaire
      },
    }}
  />
);

const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
