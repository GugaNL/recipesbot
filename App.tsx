import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import Splash from './src/screens/Splash';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  );
}
