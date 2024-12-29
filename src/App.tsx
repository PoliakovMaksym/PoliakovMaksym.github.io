import React from 'react';
import { BrowserRouter } from 'react-router';

import { RootRouter } from './router';
import { ThemeProvider } from './theme';

export const App = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/'>
        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
