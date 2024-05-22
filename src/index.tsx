import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CustomThemeProvider from './theme';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);  // Assurez-vous que container n'est pas null

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
