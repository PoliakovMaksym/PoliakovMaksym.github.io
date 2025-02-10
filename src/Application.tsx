import React from 'react';
import { BrowserRouter } from 'react-router';

import { ApplicationRouter } from './router';
import { ThemeProvider } from './theme';

export const Application = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/'>
        <ApplicationRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
