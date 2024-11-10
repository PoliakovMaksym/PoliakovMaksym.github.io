import React from 'react';
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';

import {
  ColorModeContext,
  ColorModeToggle,
  convertColorModeToMuiPaletteMode,
  getInitialMuiPaletteMode,
} from './colorMode';
import { styleOverrides } from './styleOverrides';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [colorMode, setMode] = React.useState<PaletteMode>(getInitialMuiPaletteMode());
  const theme = React.useMemo(
    () => createTheme({ palette: { mode: colorMode }, components: styleOverrides }),
    [],
  );

  const colorModeToggle = React.useMemo<ColorModeToggle>(
    () => colorMode => setMode(convertColorModeToMuiPaletteMode(colorMode)),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorModeToggle}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
