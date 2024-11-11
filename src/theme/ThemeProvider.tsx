import React from 'react';
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import {
  ColorMode,
  ColorModeContext,
  convertColorModeToMuiPaletteMode,
  getColorModeFromLocalStorage,
  getInitialColorMode,
  setColorModeToLocalStorage,
  ToggleColorMode,
} from './colorMode';
import { styleOverrides } from './styleOverrides';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [colorMode, setColorMode] = React.useState<ColorMode>(getInitialColorMode());

  // Calculate Mui Theme
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode: convertColorModeToMuiPaletteMode(colorMode) },
        components: styleOverrides,
      }),
    [colorMode],
  );

  // Create a "Toggle color mode" callback
  const toggleColorMode = React.useMemo<ToggleColorMode>(
    () => colorMode => {
      setColorMode(colorMode);
      setColorModeToLocalStorage(colorMode);
    },
    [],
  );

  // Listen for local storage changes and update color mode state based on what is stored there.
  // This is done to sync multiple application tabs with each other.
  React.useEffect(() => {
    window.addEventListener('storage', () => setColorMode(getColorModeFromLocalStorage()));
  }, []);

  console.log(theme);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
