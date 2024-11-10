import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RootRouter } from './router';
import { ThemeProvider } from './theme';

export const App = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/' future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
