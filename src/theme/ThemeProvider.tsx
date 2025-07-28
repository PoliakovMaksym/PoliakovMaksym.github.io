import React from 'react';
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { styleOverrides } from './styleOverrides';
import { CustomThemeExtension } from './themeExtension';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  // Calculate Mui Theme
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode: 'dark' },
        components: styleOverrides,
        custom: CustomThemeExtension,
      }),
    [],
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};
